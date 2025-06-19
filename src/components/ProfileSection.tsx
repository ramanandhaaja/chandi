"use client";

import React, { useEffect, useState } from "react";
import { getImageURL, getItems } from "../lib/api";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

interface ProfileSectionProps {
  title?: string;
  subtitle?: string;
  caption?: string;
  image?: string;
  logo?: string;
  background?: string;
}

interface ProfileSectionTranslation {
  languages_code: string;
  title?: string;
  subtitle?: string;
  caption?: string;
  name?: string;
  position?: string;
  image?: string;
  logo?: string;
  background?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title = '',
  subtitle = '',
  caption = '',
  image = '',
  logo = '',
  background = '',
}) => {
  const [profileData, setProfileData] = useState<{
    title?: string[];
    subtitle?: string;
    caption?: string;
    image?: string;
    logo?: string;
    background?: string;
    translations?: ProfileSectionTranslation[];
    name?: string;
    position?: string;
  } | null>(null);

   // Use global language context
    const { language } = useLanguage();

  useEffect(() => {
    async function fetchProfileData() {
      try {
        const items = await getItems("profile_landingpage", {
          fields: "*,images.*,translations.*",
        });
        if (items && items.length > 0) {
          // Assuming the collection fields match the prop names
          setProfileData({
            image: items[0].image,
            logo: items[0].logo,
            background: items[0].background,
            translations: items[0].translations,
          });
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    }
    fetchProfileData();
  }, []);

  let translation: ProfileSectionTranslation | undefined = undefined;
  if (profileData?.translations && Array.isArray(profileData.translations)) {
    translation = profileData.translations.find(
      (t) => t.languages_code === language
    );
  }

  

  // Use translation if available, otherwise fallback to profileData or props
  const displayTitle = translation?.title || profileData?.title || title;
  const displaySubtitle =
    translation?.subtitle || profileData?.subtitle || subtitle;
  const displayCaption =
    translation?.caption || profileData?.caption || caption;
  const displayImage = profileData?.image || image;
  const displayLogo = profileData?.logo || logo;
  const displayBackground = profileData?.background || background;
  const displayName = translation?.name || profileData?.name || "";
  const displayPosition = translation?.position || profileData?.position || "";

  
  return (
    <section className="relative overflow-hidden bg-[#9D7935] min-h-screen">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={displayBackground ? getImageURL(displayBackground) : "/for-whom-bg.svg"}
          alt="pattern"
          width={800}
          height={1000}
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Profile Image */}
        <div className="relative w-full lg:w-1/2 overflow-hidden flex flex-col justify-end items-start">
          {/* Profile Image */}
          <div className="relative w-full h-[600px] lg:h-screen">
            <Image
              src={displayImage ? getImageURL(displayImage) : "/images/profile-section/profile-img.png"}
              alt="Minister of Culture"
              fill
              priority
              className="object-cover w-full"
            />
            {/* Bottom transparent gold gradient overlay (only left image section) */}
            <div
              className="pointer-events-none absolute left-0 bottom-0 w-full"
              style={{
                height: "400px",
                background:
                  "linear-gradient(180deg, rgba(157,121,53,0) 0%, rgba(157,121,53,0.85) 90%, #9D7935 100%)",
                zIndex: 30,
              }}
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center">
          {/* Logo/Icon */}
          <div className="mb-6">
            <div className="w-12 h-12 relative mx-auto">
              <Image
                src={displayLogo ? getImageURL(displayLogo) : "/chandi-logo.svg"}
                alt="Culture Affairs Logo"
                width={48}
                height={48}
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-white/80 text-sm uppercase tracking-wider mb-6 text-center">
            {displayTitle}
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-center">
            <span dangerouslySetInnerHTML={{ __html: displaySubtitle }} />
          </h2>

          {/* Message */}
          <p className="text-white/80 text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: displayCaption }} />
          </p>

          {/* Signature */}
          <div className="mt-8 text-center">
            <p className="text-white font-medium text-lg">{displayName}</p>
            <p className="text-white/70 text-sm mt-1">{displayPosition}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

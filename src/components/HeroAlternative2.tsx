"use client";

import React, { useEffect, useState } from "react";
import { getImageURL } from "../lib/api";
import Image from "next/image";
import { getItems } from "../lib/api";
import { useLanguage } from "../lib/LanguageContext";

interface HeroSectionTranslation {
  languages_code: string;
  title?: string;
  subtitle?: string;
  caption?: string;
}

interface HeroSectionProps {
  title?: string[];
  subtitle?: string;
  caption?: string;
  background?: string;
  logo?: string;
  scrollText?: string;
  translations?: HeroSectionTranslation[];
}

const HeroAlternative2: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  caption,
  background,
  logo,
  scrollText,
}) => {
  // State for fetched data
  const [heroData, setHeroData] = useState<{
    title?: string[];
    subtitle?: string;
    caption?: string;
    background?: string;
    logo?: string;
    scrollText?: string;
    translations?: HeroSectionTranslation[];
  } | null>(null);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const items = await getItems("hero_landingpage", {
          fields: "*,images.*,translations.*",
        });
        if (items && items.length > 0) {
          // Assuming the collection fields match the prop names
          setHeroData({
            background: items[0].background,
            logo: items[0].logo,
            scrollText: "Scroll to Explore",
            translations: items[0].translations,
          });
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    }
    fetchHeroData();
  }, []);

  // Use global language context
  const { language, setLanguage } = useLanguage();

  // Find translation for current language
  let translation: HeroSectionTranslation | undefined = undefined;
  if (heroData?.translations && Array.isArray(heroData.translations)) {
    translation = heroData.translations.find(
      (t: HeroSectionTranslation) => t.languages_code === language
    );
  }

  // Use translation if available, otherwise fallback to heroData or props
  const displayTitle = translation?.title || heroData?.title || title;
  const displaySubtitle =
    translation?.subtitle || heroData?.subtitle || subtitle;
  const displayCaption = translation?.caption || heroData?.caption || caption;
  const displayBackground = heroData?.background || background;
  const displayLogo = heroData?.logo || logo;
  const displayScrollText = heroData?.scrollText || scrollText;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F3F2E8] font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={
            displayBackground
              ? getImageURL(displayBackground)
              : "/images/hero-section/hero-img.png"
          }
          alt="Pattern"
          fill
          className="object-cover"
          priority
        />
        {/* Decorative overlay pattern if you have one */}
        {/* <div className="absolute inset-0 bg-[url('/images/hero-section/overlay-pattern.png')] bg-repeat opacity-60" /> */}
      </div>

      {/* Language Switch Button */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="flex bg-[#D1D3CF] rounded-full px-4 py-1 shadow-lg border border-[#E5E5E5]">
          <button
            className={`text-xs md:text-sm font-semibold mr-2 transition-all duration-200 ${
              language === "en-US" ? "underline text-black" : "text-[#766C6C]"
            }`}
            onClick={() => setLanguage("en-US")}
          >
            EN
          </button>
          <button
            className={`text-xs md:text-sm font-semibold transition-all duration-200 ${
              language === "id-ID" ? "underline text-black" : "text-[#766C6C]"
            }`}
            onClick={() => setLanguage("id-ID")}
          >
            ID
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-screen">
        <div className="flex flex-1">
          {/* Left: Logo and Texts */}
          <div className="flex flex-col justify-start pl-8 md:pl-20 pt-14 md:mt-20 w-full md:w-3/5 lg:w-1/2">
            <div className=" pb-14 flex flex-col items-center text-center">
              {/* Logo */}
              <div className="w-20 h-20 md:w-28 md:h-28 mb-4">
                <Image
                  src={
                    displayLogo
                      ? getImageURL(displayLogo)
                      : "/chandi_single_logo.png"
                  }
                  alt="logo"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              {/* Caption */}
              <div className="figtree-regular text-lg md:text-[40px] text-white font-light max-w-[290px] break-words">
                {displayCaption}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="kunire-grotesk font-bold text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.1rem] leading-[1.07] text-left mb-4">
              {displayTitle}
            </h1>
          </div>
          {/* Right: Date Pill */}
          <div className="hidden md:flex items-end w-2/5 lg:w-1/2 pr-10 pb-16 justify-end">
            <span className="bg-[#ECE8DA] rounded-full px-8 py-3 text-[#3B2D2C] text-[31.2px] font-semibold shadow-md">
              {displaySubtitle}
            </span>
          </div>
        </div>
        {/* For extra spacing at the bottom if needed */}
        {/* <div className="h-10" /> */}
      </div>
    </div>
  );
};

export default HeroAlternative2;

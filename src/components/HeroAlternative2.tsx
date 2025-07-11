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
  image_right?: string;
  scrollText?: string;
  translations?: HeroSectionTranslation[];
}

const HeroAlternative2: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  caption,
  background,
  image_right,
  logo,
}) => {
  // State for fetched data
  const [heroData, setHeroData] = useState<{
    title?: string[];
    subtitle?: string;
    caption?: string;
    background?: string;
    image_right?: string;
    logo?: string;
    scrollText?: string;
    translations?: HeroSectionTranslation[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroData() {
      setLoading(true);
      try {
        const items = await getItems("hero_landingpage", {
          fields: "*,images.*,translations.*",
        });
        if (items && items.length > 0) {
          setHeroData({
            background: items[0].background,
            logo: items[0].logo,
            image_right: items[0].image_right,
            scrollText: "Scroll to Explore",
            translations: items[0].translations,
          });
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      } finally {
        setLoading(false);
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
  const displayImageRight = heroData?.image_right || image_right;

  return loading ? (
    <div className="relative lg:min-h-screen w-full flex items-center justify-center bg-[#F3F2E8]">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-12 h-12 border-4 border-[#CD9F00] border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-lg text-[#CD9F00] font-semibold animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  ) : (
    <div className="relative w-full h-auto min-h-[600px] lg:h-screen lg:max-h-[800px] overflow-hidden bg-[#F3F2E8] font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#CD9F00] opacity-70 pointer-events-none" />
      <div className="absolute inset-0 z-10 opacity-70">
        <Image
          src={
            displayBackground
              ? getImageURL(displayBackground)
              : "placeholder.svg"
          }
          alt="Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Color Overlay */}

      {/* Right-side Main Visual (between overlay and content) */}
      {displayImageRight && (
        <Image
          src={getImageURL(displayImageRight)}
          alt="Right Side Visual"
          height={800}
          width={800}
          className="hidden md:block absolute right-[-140px] top-0 h-[800px] w-auto z-20"
          style={{ objectFit: "contain" }}
          priority
        />
      )}

      {/* Language Switch Button */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="flex bg-white rounded-full px-4 py-1 shadow-lg border border-[#E5E5E5]">
          <button
            className={`text-xs md:text-sm font-semibold mr-2 transition-all duration-200 ${
              language === "en-US" ? "underline " : "text-[#766C6C]"
            }`}
            onClick={() => setLanguage("en-US")}
          >
            EN
          </button>
          <button
            className={`text-xs md:text-sm font-semibold transition-all duration-200 ${
              language === "id-ID" ? "underline " : "text-[#766C6C]"
            }`}
            onClick={() => setLanguage("id-ID")}
          >
            ID
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col h-full z-40 pt-20 md:pt-10 lg:pt-0 lg:justify-center">
        <div className="flex flex-1">
          {/* Left: Logo and Texts */}
          <div className="flex flex-col justify-start md:pl-20 pt-14 md:mt-20 w-full md:w-3/5 lg:w-1/2">
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
              <div className="kunire-grotesk text-lg md:text-[40px] text-[#4A2F1E] font-light max-w-[390px] leading-[1]">
                CHANDI <br />
                SUMMIT 2025
              </div>
              <div className="h-2"></div>
              <div className="figtree-regular  text-lg md:text-[18px] text-[#4A2F1E] font-light max-w-[300px] leading-[1]">
                Culture, Heritage, Art, Narrative, Diplomacy, and Innovation
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="lg:absolute figtree-regular font-bold text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[110px] leading-[1.2] lg:leading-[0.8] text-left mb-4 mt-0 ml-12 lg:ml-0 lg:mt-72">
              <span className="pl-6 sm:pl-0" style={{ color: "#97311A" }}>
                CULTURE
              </span>{" "}
              <span style={{ color: "#948B48" }}>FOR</span> <br />
              <span
                className="ml-[100px] sm:ml-[200px]"
                style={{ color: "#4A2F1E" }}
              >
                THE
              </span>{" "}
              <span style={{ color: "#CD9F00" }}>FUTURE</span>
            </h1>
            <span className="lg:absolute ml-40 lg:right-[-30px] mb-20 lg:mt-96 w-[480px] lg:text-left bg-[#ECE8DA] rounded-full px-8 py-3 text-[#3B2D2C] text-[18px] sm:text-[31.2px] font-semibold shadow-md">
              {displaySubtitle}
            </span>
          </div>
          {/* Right: Date Pill */}
          <div className="hidden md:flex items-end w-2/5 lg:w-1/2 pr-10 pb-16 justify-end">
            {/* Right image moved to correct stacking order above */}
          </div>
        </div>
        {/* For extra spacing at the bottom if needed */}
        {/* <div className="h-10" /> */}
      </div>
    </div>
  );
};

export default HeroAlternative2;

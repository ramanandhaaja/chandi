"use client"

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

export const HeroSection: React.FC<HeroSectionProps> = ({
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
    translation = heroData.translations.find((t: HeroSectionTranslation) => t.languages_code === language);
  }

  // Use translation if available, otherwise fallback to heroData or props
  const displayTitle = translation?.title || heroData?.title || title;
  const displaySubtitle = translation?.subtitle || heroData?.subtitle || subtitle;
  const displayCaption = translation?.caption || heroData?.caption || caption;
  const displayBackground = heroData?.background || background;
  const displayLogo = heroData?.logo || logo;
  const displayScrollText = heroData?.scrollText || scrollText;
 
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Language Switch Button */}
      <div className="fixed bottom-6 left-6 z-20">
        <div className="flex bg-[#D1D3CF] rounded-full px-6 py-2 shadow-lg">
          <button
            className={`text-lg font-semibold mr-3 transition-all duration-200 ${language === 'en-US' ? 'underline text-black' : 'text-[#766C6C]'}`}
            onClick={() => setLanguage('en-US')}
          >
            EN
          </button>
          <button
            className={`text-lg font-semibold transition-all duration-200 ${language === 'id-ID' ? 'underline text-black' : 'text-[#766C6C]'}`}
            onClick={() => setLanguage('id-ID')}
          >
            ID
          </button>
        </div>
      </div>

      {/* Hero Section with Background */}
      <div className="absolute inset-0 z-0">
        {/* Pattern overlay using Tailwind's built-in utilities */}
        <div className="absolute inset-0 ">
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
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 pt-20 pb-12 text-white text-center">
        <div className="flex-1 flex flex-col items-center justify-center ">
          {/* Logo/Icon */}
          <div className="mb-10 mt-16 ">
            <div className="w-20 h-20 mx-auto">
              <Image
              src={
                displayBackground
                  ? getImageURL(displayLogo)
                  : "/chandi_single_logo.png"
              }
                alt="logo"
                width={82}
                height={106}
              ></Image>
            </div>
            <div className="figtree-regular pt-8 text-2xl md:text-[35px] font-light text-white/90">{displayCaption}</div>
            
          </div>

          {/* Main Heading */}
          <h1 className="kunire-grotesk text-4xl sm:text-5xl md:text-7xl font-bold  mb-8 leading-tight text-white drop-shadow-md">
            {displayTitle}
          </h1>

          {/* Summit Title */}
          <div className=" mb-20">
            <h2 className="figtree-regular text-2xl md:text-[35px] font-medium tracking-tighter text-white/90 drop-shadow-sm">
              {displaySubtitle} 
            </h2>
          </div>
        </div>

        {/* Scroll Indicator - Now relative to the content container */}
        <div className="mt-auto pt-4 flex flex-col items-center">
          <div className="text-[24px] font-light mb-3 text-white/80 transition-all duration-500 hover:text-white">
            {displayScrollText}
          </div>
          <div className="animate-bounce transition-transform">
            <svg
              className="w-6 h-6 text-white/80 hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

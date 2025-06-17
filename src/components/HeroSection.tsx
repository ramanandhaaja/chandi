"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getItems } from "../lib/api";
interface HeroSectionProps {
  title?: string[];
  subtitle?: string;
  date?: string;
  location?: string;
  scrollText?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  date,
  location,
  scrollText,
}) => {
  // State for fetched data
  const [heroData, setHeroData] = useState<{
    title?: string[];
    subtitle?: string;
    date?: string;
    location?: string;
    scrollText?: string;
  } | null>(null);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const items = await getItems("hero_landingpage");
        if (items && items.length > 0) {
          // Assuming the collection fields match the prop names
          setHeroData({
            title: Array.isArray(items[0].title)
              ? items[0].title
              : typeof items[0].title === "string"
              ? items[0].title.split("\n")
              : undefined,
            subtitle: items[0].subtitle,
            date: items[0].left_caption,
            location: items[0].right_caption,
            scrollText: "Scroll to Explore",
          });
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    }
    fetchHeroData();
  }, []);

  // Use fetched data if available, otherwise fallback to defaults
  const displayTitle = heroData?.title || title;
  const displaySubtitle = heroData?.subtitle || subtitle;
  const displayDate = heroData?.date || date;
  const displayLocation = heroData?.location || location;
  const displayScrollText = heroData?.scrollText || scrollText;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section with Background */}
      <div className="absolute inset-0 z-0">
        {/* Pattern overlay using Tailwind's built-in utilities */}
        <div className="absolute inset-0 ">
          <Image
            src="/images/hero-section/hero-img.png"
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
          <div className="mb-16 mt-16 transform transition-all duration-700 hover:scale-110">
            <div className="w-20 h-20 mx-auto">
              <Image
                src={"/chandi-logo.svg"}
                alt="logo"
                width={76}
                height={91}
              ></Image>
            </div>
            {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold  mb-8 leading-tight text-white drop-shadow-md">
            {displayTitle}
          </h1>

          {/* Summit Title */}
          <div className=" mb-20">
            <h2 className="text-2xl md:text-[35px] font-medium tracking-tighter text-white/90 drop-shadow-sm">
              {displaySubtitle}
            </h2>
          </div>

          {/* Date and Location with Line */}
          <div className="w-[70vw] flex items-center justify-between mt-16">
            <div className="text-left text-[24px] font-light text-white/90 transition-all duration-500 hover:text-white hover:translate-x-[-5px]">
              {displayDate}
            </div>
            <div className="flex-1 mx-6 h-px bg-white opacity-70"></div>
            <div className="text-right text-[24px] font-light text-white/90 transition-all duration-500 hover:text-white hover:translate-x-[5px]">
              {displayLocation}
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Now relative to the content container */}
        <div className="mt-auto pt-12 flex flex-col items-center">
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

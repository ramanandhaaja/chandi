"use client";

import React, { useEffect, useState } from "react";
import { getImageURL, getItems } from "../lib/api";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import styles from "./IndependentSection.module.css";

interface IndependenceSectionProps {
  header?: string;
  title?: string;
  subtitle?: string;
  caption?: string;
  image?: string;
  background?: string;
}

interface IndependenceSectionTranslation {
  languages_code: string;
  header?: string;
  title?: string;
  subtitle?: string;
  //caption?: string;
  image?: string;
  background?: string;
}

const IndependentSection: React.FC<IndependenceSectionProps> = ({
  header = "",
  title = "",
  subtitle = "",
  //caption = "",
  image = "",
  //background = "",
}) => {
  const [independenceData, setIndependenceData] = useState<{
    header?: string[];
    title?: string[];
    subtitle?: string;
    caption?: string;
    image?: string;
    background?: string;
    translations?: IndependenceSectionTranslation[];
  } | null>(null);

  // Use global language context
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchIndependenceData() {
      try {
        const items = await getItems("independence_landingpage", {
          fields: "*,images.*,translations.*",
        });
        console.log(items);
        if (items && items.length > 0) {
          // Assuming the collection fields match the prop names
          setIndependenceData({
            image: items[0].image,
            background: items[0].background,
            translations: items[0].translations,
          });
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    }
    fetchIndependenceData();
  }, []);

  let translation: IndependenceSectionTranslation | undefined = undefined;
  if (
    independenceData?.translations &&
    Array.isArray(independenceData.translations)
  ) {
    translation = independenceData.translations.find(
      (t) => t.languages_code === language
    );
  }

  // Use translation if available, otherwise fallback to abstractData or props
  const displayHeader =
    translation?.header || independenceData?.header || header;
  const displayTitle = translation?.title || independenceData?.title || title;
  const displaySubtitle =
    translation?.subtitle || independenceData?.subtitle || subtitle;
  const displayImage = independenceData?.image || image;
  //const displayBackground = abstractData?.background || background;

  return (
    <section className="w-full m-0 p-0 bg-black">
      {/* Top Red Section with Video */}
      <div className="relative w-full  flex items-center justify-center overflow-hidden">
        <video
          className="top-0 left-0 w-full object-cover z-[1]"
          src="/video/independence.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      {/* Bottom Section */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row min-h-screen bg-cover bg-center ${styles["mobile-bg-adjust"]}`}
        style={{
          backgroundImage: `url(${
            displayImage
              ? getImageURL(displayImage)
              : "/images/profile-section/profile-img.png"
          })`,
        }}
      >
        {/* Left side - Abstract Image */}
        <div
          className={
            "relative w-full lg:w-1/2 overflow-hidden flex flex-col justify-end items-start"
          }
          style={{
            minHeight: "38rem", // matches h-86
          }}
        >
          {/* Optionally add overlays/gradients here if needed */}
          {/* You can add overlays/gradients here if needed, or use a pseudo-element in CSS */}
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center z-50">
          {/* Subtitle */}

          <p className="text-xl md:text-2xl font-bold mb-2 mb-8 text-left text-white">
            {displayHeader}
          </p>

          <p className="text-4xl md:text-5xl font-bold mb-2 mb-8 text-left text-white">
            {displayTitle}
          </p>

          {/* Title */}
          <h2 className="text-m font-medium mb-8 text-left text-white">
            <span dangerouslySetInnerHTML={{ __html: displaySubtitle }} />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default IndependentSection;

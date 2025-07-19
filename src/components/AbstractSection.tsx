"use client";

import React, { useEffect, useState } from "react";
import { getImageURL, getItems } from "../lib/api";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

interface AbstractSectionProps {
  title?: string;
  subtitle?: string;
  caption?: string;
  image?: string;
  background?: string;
}

interface AbstractSectionTranslation {
  languages_code: string;
  title?: string;
  subtitle?: string;
  //caption?: string;
  image?: string;
  background?: string;
}

const AbstractSection: React.FC<AbstractSectionProps> = ({
  title = "",
  subtitle = "",
  //caption = "",
  image = "",
  //background = "",
}) => {
  const [abstractData, setAbstractData] = useState<{
    title?: string[];
    subtitle?: string;
    caption?: string;
    image?: string;
    background?: string;
    translations?: AbstractSectionTranslation[];
  } | null>(null);

  // Use global language context
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchAbstractData() {
      try {
        const items = await getItems("abstract_langdingpage", {
          fields: "*,images.*,translations.*",
        });
        console.log(items);
        if (items && items.length > 0) {
          // Assuming the collection fields match the prop names
          setAbstractData({
            image: items[0].image,
            background: items[0].background,
            translations: items[0].translations,
          });
        }
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    }
    fetchAbstractData();
  }, []);

  let translation: AbstractSectionTranslation | undefined = undefined;
  if (abstractData?.translations && Array.isArray(abstractData.translations)) {
    translation = abstractData.translations.find(
      (t) => t.languages_code === language
    );
  }

  // Use translation if available, otherwise fallback to abstractData or props
  const displayTitle = translation?.title || abstractData?.title || title;
  const displaySubtitle =
    translation?.subtitle || abstractData?.subtitle || subtitle;
  const displayImage = abstractData?.image || image;
  //const displayBackground = abstractData?.background || background;

  return (
    <section className="relative overflow-hidden min-h-screen bg-white">
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Abstract Image */}
        <div className="relative w-full lg:w-1/2 overflow-hidden flex flex-col justify-end items-start">
          {/* Abstract Image */}
          <div className="relative w-full h-86 sm:h-64 md:h-80 lg:h-screen bg-white flex items-center justify-center">
            <Image
              src={
                displayImage
                  ? getImageURL(displayImage)
                  : "/images/profile-section/profile-img.png"
              }
              alt="Minister of Culture"
              fill
              priority
              className="object-contain"
              style={{ zIndex: 20 }}
            />
            {/* Bottom transparent gold gradient overlay (only left image section) */}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center z-50">
          {/* Subtitle */}
          <p className="text-4xl md:text-5xl font-bold mb-2 mb-8 text-left">
            {displayTitle}
          </p>

          {/* Title */}
          <h2 className="text-m font-medium mb-8 text-left">
            <span dangerouslySetInnerHTML={{ __html: displaySubtitle }} />
          </h2>

          {/* Learn More Button */}
          <div className="flex mt-4">
            <a href="/abstract" className="no-underline">
              <button
                type="button"
                className="bg-[#FAF9F4] text-[#8B2D20] font-semibold text-xl rounded-full px-16 py-5 focus:outline-none border-none shadow-2xl hover:bg-[#8B2D20] hover:text-[#FAF9F4] transition-all duration-300 ease-in-out hover:shadow-3xl transform hover:scale-105"
                style={{ minWidth: '260px' }}
              >
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;

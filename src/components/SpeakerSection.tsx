"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getItems, getImageURL } from "../lib/api";
import { useLanguage } from "../lib/LanguageContext";

interface SpeakerSectionTranslation {
  languages_code: string;
  breadcrumb?: string;
  title?: string;
}

interface SpeakerSectionData {
  breadcrumb?: string;
  title?: string;
  translations?: {
    languages_code: string;
    breadcrumb?: string;
    title?: string;
  }[];
  speakers?: {
    id: number;
    name: string;
    title: string;
    image: string;
  }[];
}

const SpeakerSection: React.FC = () => {
  const [speakerData, setSpeakerData] = useState<SpeakerSectionData | null>(
    null
  );
  // Use global language context
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchSpeakerData() {
      try {
        const items = await getItems("speaker_landingpage", {
          fields: "*,translations.*,speakers.*",
        });
        if (items && items.length > 0) {
          setSpeakerData({
            translations: items[0].translations,
            speakers: items[0].speakers,
          });
        }
      } catch (error) {
        console.error("Failed to fetch about section data:", error);
      }
    }
    fetchSpeakerData();
  }, []);

  let translation: SpeakerSectionTranslation | undefined = undefined;
  if (speakerData?.translations && Array.isArray(speakerData.translations)) {
    translation = speakerData.translations.find(
      (t) => t.languages_code === language
    );
  }

  const displayBreadcrumb = translation?.breadcrumb || speakerData?.breadcrumb;
  const displayTitle =
    translation?.title || speakerData?.title || "Where the future is Made";

  return (
    <section className="py-20 relative ">
      {/* Gold background */}
      <div className="absolute -inset-1 z-0 ">
        <Image
          src="/images/speakers-section/speaker-bg.png"
          alt="pattern"
          fill
          className="object-fit opacity-80"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7a5e29] to-[#9D7935]/60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-0 md:px-0 lg:px-0">
        {/* Section Header with Line */}
        <div className="flex items-center mb-8 mt-4 sm:mt-8 sm:mb-10">
          <div className="w-10 h-1 bg-white mr-4 rounded-full"></div>
          <h3 className="text-base font-medium tracking-wide text-white">
            {displayBreadcrumb}
          </h3>
        </div>

        <div className="mb-10 sm:mb-16">
          {/* Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-10 text-white whitespace-pre-line">
            <span dangerouslySetInnerHTML={{ __html: displayTitle }} />
          </h2>
        </div>
      </div>

      {/* Speakers Grid */}
      <div>
        <div className="w-full -mx-0">
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x px-6 md:px-12 lg:px-24 items-center no-scrollbar">
            {/* Add CSS for hiding scrollbar */}
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            {speakerData?.speakers?.map((speaker, index) => (
              <div
                key={speaker.id}
                className={`flex-shrink-0 w-44 h-64 sm:w-60 sm:h-80 md:w-72 md:h-96${
                  index === 2 ? " md:w-80 md:h-[28rem]" : ""
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={
                      speaker.image
                        ? getImageURL(speaker.image)
                        : "/images/placeholder.svg"
                    }
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-medium text-lg">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{speaker.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <p className="text-white font-medium">20+ Speakers</p>
          <div className="flex-grow h-px bg-white opacity-50 mx-6"></div>
          <button className="flex items-center text-white hover:text-gray-200 transition-colors">
            See All
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;

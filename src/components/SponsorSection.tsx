"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getItems, getImageURL } from "../lib/api";
import { useLanguage } from "../lib/LanguageContext";

interface SponsorSectionTranslation {
  languages_code: string;
  breadcrumb?: string;
  title?: string;
}

interface SponsorSectionData {
  breadcrumb?: string;
  title?: string;
  translations?: SponsorSectionTranslation[];
  images?: {
    id: number;
    about_landingpage_id: number;
    directus_files_id: string;
  }[];
}

const SponsorSection: React.FC = () => {
  const [sponsorData, setSponsorData] = useState<SponsorSectionData | null>(
    null
  );
  // Use global language context
  const { language } = useLanguage();
  useEffect(() => {
    async function fetchAboutData() {
      try {
        const items = await getItems("sponsor_landingpage", {
          fields: "*,images.*,translations.*",
        });

        console.log(items);
        if (items && items.length > 0) {
          setSponsorData({
            translations: items[0].translations,
            images: items[0].images,
          });
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    }
    fetchAboutData();
  }, []);

  let translation: SponsorSectionTranslation | undefined = undefined;
  if (sponsorData?.translations && Array.isArray(sponsorData.translations)) {
    translation = sponsorData.translations.find(
      (t) => t.languages_code === language
    );
  }

  const displayBreadcrumb = translation?.breadcrumb || sponsorData?.breadcrumb;
  const displayTitle = translation?.title || sponsorData?.title || "";

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Line */}
        <div className="flex items-center mb-8">
          <div className="w-10 h-1 bg-black mr-4 rounded-full"></div>
          <h3 className="text-sm font-medium ">{displayBreadcrumb}</h3>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 ">
          <span dangerouslySetInnerHTML={{ __html: displayTitle }} />
        </h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sponsorData?.images?.map((img) => (
            <div
              key={img.id}
              className="border border-[#E9D7B6] rounded-lg p-4 md:p-6 flex items-center justify-center hover:shadow-sm transition-shadow"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={getImageURL(img.directus_files_id)}
                  alt="sponsors"
                  width={120}
                  height={40}
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;

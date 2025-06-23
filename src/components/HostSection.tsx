"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getItems, getImageURL } from "../lib/api";
import { useLanguage } from "../lib/LanguageContext";

interface HostSectionTranslation {
  languages_code: string;
  breadcrumb?: string;
  title?: string;
  subtitle?: string;
}

interface HostSectionData {
  breadcrumb?: string;
  title?: string;
  subtitle?: string;
  translations?: HostSectionTranslation[];
  images?: {
    id: number;
    about_landingpage_id: number;
    directus_files_id: string;
  }[];
}

const HostSection: React.FC = () => {
  const [hostData, setHostData] = useState<HostSectionData | null>(null);
  // Use global language context
  const { language } = useLanguage();
  useEffect(() => {
    async function fetchAboutData() {
      try {
        const items = await getItems("host_landingpage", {
          fields: "*,images.*,translations.*",
        });

        if (items && items.length > 0) {
          setHostData({
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

  let translation: HostSectionTranslation | undefined = undefined;
  if (hostData?.translations && Array.isArray(hostData.translations)) {
    translation = hostData.translations.find(
      (t) => t.languages_code === language
    );
  }

  const displayBreadcrumb = translation?.breadcrumb || hostData?.breadcrumb;
  const displayTitle = translation?.title || hostData?.title || "";
  const displaySubtitle = translation?.subtitle || hostData?.subtitle || "";

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white bg-[url('/images/host-section/bg.png')] bg-no-repeat bg-right bg-contain">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0">
            {/* Section Label with Line */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-black mr-4 rounded-full"></div>
              <p className="text-sm font-medium ">{displayBreadcrumb}</p>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 ">
              {displayTitle}
            </h2>

            {/* Description */}
            <p className="text-base  leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: displaySubtitle }} />
            </p>
          </div>

          {/* Right Column - Custom Host Images Grid */}
          <div className="md:w-3/5 w-full">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Right column - contains top-right and bottom-right images with vertical offset */}
              <div className="flex flex-col justify-between space-y-3 md:space-y-4 pt-8 md:pt-12">
                {/* Top right image - Smaller */}
                <div className="relative rounded-2xl overflow-hidden h-[180px] md:h-[200px] w-full">
                  {hostData?.images && hostData.images[0] && (
                    <Image
                      src={
                        getImageURL(hostData.images[0].directus_files_id) ||
                        "/placeholder.svg"
                      }
                      alt="Host 1"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  )}
                </div>

                {/* Bottom right image - Larger, taller */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] md:h-[350px] w-full">
                  {hostData?.images && hostData.images[1] && (
                    <Image
                      src={
                        getImageURL(hostData.images[1].directus_files_id) ||
                        "/placeholder.svg"
                      }
                      alt="Host 2"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  )}
                </div>
              </div>

              {/* Left column - contains top-left and bottom-left images */}
              <div className="flex flex-col space-y-3 md:space-y-4">
                {/* Top left image - Larger, taller */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] md:h-[350px] w-full">
                  {hostData?.images && hostData.images[2] && (
                    <Image
                      src={
                        getImageURL(hostData.images[2].directus_files_id) ||
                        "/placeholder.svg"
                      }
                      alt="Host 3"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  )}
                </div>

                {/* Bottom left image - Smaller */}
                <div className="relative rounded-2xl overflow-hidden h-[180px] md:h-[200px] w-full">
                  {hostData?.images && hostData.images[3] && (
                    <Image
                      src={
                        getImageURL(hostData.images[3].directus_files_id) ||
                        "/placeholder.svg"
                      }
                      alt="Host 4"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;

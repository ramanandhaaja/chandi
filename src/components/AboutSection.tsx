"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getItems, getImageURL } from "../lib/api";

interface AboutSectionData {
  breadcrumb?: string;
  title?: string;
  subtitle?: string;
  images?: { id: number; about_landingpage_id: number; directus_files_id: string }[];
}

const AboutSection: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutSectionData | null>(null);

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const items = await getItems("about_landingpage", { fields: "*,images.*" });
        console.log(items);
        if (items && items.length > 0) {
          setAboutData({
            breadcrumb: items[0].breadcrumb,
            title: items[0].title,
            subtitle: items[0].subtitle,
            images: items[0].images,
          });
        }
      } catch (error) {
        console.error("Failed to fetch about section data:", error);
      }
    }
    fetchAboutData();
  }, []);

  const displayBreadcrumb = aboutData?.breadcrumb;
  const displayTitle = aboutData?.title || "Where the future is Made";
  const displaySubtitle = aboutData?.subtitle || "About CHANDI";

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Line */}
        <div className="flex items-center mb-10">
          <div className="w-10 h-1 bg-[#0D0D0D] mr-4 rounded-full"></div>
          <h3 className="text-base font-medium tracking-wide text-[#0D0D0D]">
          {displayBreadcrumb}
          </h3>
        </div>

        <div className="flex flex-col justify-between md:flex-row md:mx-4 items-center w-full">
          {/* Left Column - Title */}
          <div className="w-full md:max-w-[400px] mb-10 md:mb-0">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[87px] leading-[1.2] mb-6 text-black">
              {displayTitle}
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="w-full sm:max-w-md md:max-w-2xl space-y-6">
              <p className="text-[#1F1F1F] break-words whitespace-normal" dangerouslySetInnerHTML={{ __html: displaySubtitle || '' }} />
            
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-7 gap-6 items-center w-full overflow-x-hidden">
          {aboutData?.images?.map((img, idx) => (
            <div key={img.id} className={
              idx === 0
                ? "relative w-full h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden sm:col-span-3"
                : "relative w-full h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden sm:col-span-1"
            }>
              <Image
                src={img.directus_files_id ? getImageURL(img.directus_files_id) : "/images/placeholder.svg"}
                alt={`About Gallery Image ${idx + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-500 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

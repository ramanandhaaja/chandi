"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getItems, getImageURL } from "../lib/api";
import { useLanguage } from "../lib/LanguageContext";

interface GallerySectionTranslation {
  languages_code: string;
  title?: string;
  subtitle?: string;
}

export type GalleryItem = {
  id: number;
  image: string;
  translations: GallerySectionTranslation[];
};

const GallerySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const items = await getItems("gallery_landingpage", {
          fields: "*,images.*,translations.*",
        });
        console.log(items);
        if (items && items.length > 0) {
          setGalleryData(items); // Now galleryData is an array
        }
      } catch (error) {
        console.error("Failed to fetch about section data:", error);
      }
    }
    fetchAboutData();
  }, []);

  const translations = galleryData.map((item: GalleryItem) => {
    const translation = item.translations.find(
      (t) => t.languages_code === language
    );
    return {
      title: translation?.title || '',
      subtitle: translation?.subtitle || '',
    };
  });

  return (
    <section
      id="gallery"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slides */}
      {galleryData.map((item: GalleryItem, index: number) => (
        <div
          key={item.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={
                item.image
                  ? getImageURL(item.image)
                  : "/images/placeholder.svg"
              }
              alt="Cultural background"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 z-10"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-20 max-w-6xl mx-auto px-4 py-10 sm:py-16 md:py-20 text-left sm:ml-10 md:ml-20 flex items-center h-full">
            <div className="max-w-full sm:max-w-xl md:max-w-2xl sm:ml-10 md:ml-20">
              <h2
                className="text-3xl sm:text-5xl md:text-7xl font-normal text-white mb-4 drop-shadow-lg break-words"
                style={{ fontFamily: "'Bella Queta',serif" }}
              >
                {translations[index]?.title || `Slide ${index + 1}`}
              </h2>
              <p className="text-base sm:text-xl text-gray-200 mb-12 leading-relaxed whitespace-normal break-words">
                <span dangerouslySetInnerHTML={{ __html: translations[index]?.subtitle || "" }} />
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots on the left */}
      <div
        className="
          absolute
          z-30
          flex
          md:flex-col
          flex-row
          md:space-y-6
          space-x-6 md:space-x-0
          left-1/2 md:left-10
          bottom-10 md:bottom-auto
          top-auto md:top-1/2
          transform
          md:-translate-y-1/2
          -translate-x-1/2 md:translate-x-0
          w-auto
          justify-center
          items-center
        "
      >
        {galleryData.map((item: GalleryItem, index: number) => (
          <button
            key={item.id}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full ${
              activeSlide === index ? "bg-white scale-150" : "bg-white/50"
            } transition-all duration-300`}
            aria-label={`View ${translations[index]?.title || `Slide ${index + 1}`}`}
          />
        ))}
      </div>

    </section>
  );
};

export default GallerySection;

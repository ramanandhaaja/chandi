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


const IndependentSection: React.FC<AbstractSectionProps> = ({
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
    <section className="w-full m-0 p-0">
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
      
    </section>
  );
};

export default IndependentSection;

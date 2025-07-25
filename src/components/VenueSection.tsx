"use client";

import React from "react";
import Image from "next/image";

interface VenueSectionProps {
  title?: string;
  subtitle?: string;
}

const VenueSection: React.FC<VenueSectionProps> = ({
  title = "Preserve our Paradise",
  subtitle = "Venue",
}) => {
  return (
    <section className="py-20 relative ">
      {/* Gold background */}
      <div className="absolute -inset-1 z-0 ">
        <Image
          src="/images/venue-section/bg.png"
          alt="pattern"
          fill
          className="object-fit opacity-100"
          quality={100}
          priority
        />
      </div>

      <div
        className="pointer-events-none absolute left-0 top-0 w-full"
        style={{
          height: "400px",
          background:
            "linear-gradient(180deg, #97311A 0%, #97311A 10%, rgba(157,121,53,0) 100%)",
          zIndex: 10,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        {/* Section Header with Line */}
        <div className="flex items-center mb-10">
          <div className="w-10 h-1 bg-white mr-4 rounded-full"></div>
          <h3 className="text-base font-medium tracking-wide text-white">
            {subtitle}
          </h3>
        </div>

        <div className="mb-16">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10 text-white whitespace-pre-line">
            {title}
          </h2>
        </div>

        {/* Summit and Venue Name */}
        <div className="mb-4">
          <p className="text-white text-sm opacity-80 mb-1">Summit</p>
          <p className="text-white text-xl font-semibold">
          Bali Beach Convention by The Meru
          </p>
        </div>

        {/* Main Venue Gallery */}
        <div className="w-full flex flex-col md:flex-row gap-6 mt-8">
          {/* Left: Large image */}
          <div className="relative w-full md:w-3/4 aspect-[4/2.1] overflow-hidden">
            <Image
              src="/images/venue-section/venue1.jpg"
              alt="Bali Beach Convention by The Meru"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Right: 4 stacked images */}
          <div className="hidden md:flex flex-col w-1/4 gap-4">
            {[
              "/images/venue-section/venue2.jpg",
              "/images/venue-section/venue3.jpg",
              "/images/venue-section/venue4.jpg",
              "/images/venue-section/venue5.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative w-full aspect-[4/2.1] overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Venue ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer 
        <div className="mt-8 flex items-center">
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
        */}
      </div>
    </section>
  );
};

export default VenueSection;

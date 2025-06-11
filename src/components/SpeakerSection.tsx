"use client";

import React from "react";
import Image from "next/image";

interface SpeakerSectionProps {
  title?: string;
  subtitle?: string;
}

interface Speaker {
  name: string;
  role: string;
  image: string;
}

const SpeakerSection: React.FC<SpeakerSectionProps> = ({
  title = "Meet our Esteemed Speakers and Thought Leaders",
  subtitle = "Speakers",
}) => {
  const speakers: Speaker[] = [
    {
      name: "John Mitchell",
      role: "CEO, Global Culture Innovations",
      image: "/images/speakers-section/speaker-2.png",
    },
    {
      name: "Sarah Johnson",
      role: "Cultural Heritage Expert",
      image: "/images/speakers-section/speaker-3.png",
    },
    {
      name: "James Andrew",
      role: "Director of Cultural Strategy",
      image: "/images/speakers-section/speaker-1.png",
    },

    {
      name: "James Turner",
      role: "Senior Cultural Strategist",
      image: "/images/speakers-section/speaker-4.png",
    },
  ];

  return (
    <section className="py-20 relative ">
      {/* Gold background */}
      <div className="absolute -inset-1 z-0 blur-xs">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Line */}
        <div className="flex items-center  mb-10">
          <div className="w-10 h-1 bg-white mr-4 rounded-full"></div>
          <h3 className="text-base font-medium tracking-wide text-white">
            {subtitle}
          </h3>
        </div>

        <div className="mb-16">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-10 text-white whitespace-pre-line">
            {title}
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
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  index === 2 ? "w-72 h-96" : "w-60 h-80"
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-medium text-lg">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{speaker.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
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
      </div>
    </section>
  );
};

export default SpeakerSection;

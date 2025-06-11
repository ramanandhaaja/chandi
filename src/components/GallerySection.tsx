"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define the slides data
const slides = [
  {
    id: 1,
    title: "Sanskrutih",
    image: "/images/gallery-section/sanskrutih.png",
  },
  {
    id: 2,
    title: "Sarvatra",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Vidyamanam",
    image: "/placeholder.svg",
  },
];

const GallerySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="gallery"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slides[activeSlide].image}
          alt="Cultural background"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

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
  {slides.map((slide, index) => (
    <button
      key={slide.id}
      onClick={() => setActiveSlide(index)}
      className={`w-3 h-3 rounded-full ${
        activeSlide === index ? "bg-white scale-150" : "bg-white/50"
      } transition-all duration-300`}
      aria-label={`View ${slide.title}`}
    />
  ))}
</div>

      {/* Content overlay */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-10 sm:py-16 md:py-20 text-left sm:ml-10 md:ml-20">
  <div className="max-w-full sm:max-w-xl md:max-w-2xl sm:ml-10 md:ml-20">
    <h2
      className="text-3xl sm:text-5xl md:text-7xl font-normal text-white mb-4 drop-shadow-lg break-words"
      style={{ fontFamily: "'Bella Queta',serif" }}
    >
      {slides[activeSlide].title}
    </h2>
    {activeSlide === 0 && (
      <>
        <h2
          className="text-3xl sm:text-5xl md:text-7xl font-normal text-white mb-4 drop-shadow-lg break-words"
          style={{ fontFamily: "'Bella Queta',serif" }}
        >
          Sarvatra
        </h2>
        <h2
          className="text-3xl sm:text-5xl md:text-7xl font-normal text-white mb-8 drop-shadow-lg break-words"
          style={{ fontFamily: "'Bella Queta',serif" }}
        >
          Vidyamanam
        </h2>
        <p className="text-base sm:text-xl text-gray-200 mb-8 leading-relaxed whitespace-normal break-words">
          The CHANDI 2025 Summit is the premier event for art lovers,
          cultural leaders, and creatives to explore the richness of
          global culture and the future of artistic expression. This
          summit provides a unique chance to hear from renowned artists,
          participate in thought-provoking discussions, and discover
          innovative cultural projects. Whether you&apos;re a gallery
          owner, artist, or enthusiast.
        </p>
        <p className="text-base sm:text-xl text-gray-200 mb-12 leading-relaxed whitespace-normal break-words">
          You&apos;ll have the chance to explore real-world use cases,
          witness cutting-edge demos, and connect with others who are
          driving change in the tech world. Be part of the conversation
          that&apos;s shaping the future.
        </p>
      </>
    )}
    {activeSlide === 1 && (
      <p className="text-base sm:text-xl text-gray-200 mb-12 leading-relaxed whitespace-normal break-words">
        Experience the richness of cultural heritage from around the
        world. Sarvatra represents the omnipresence of art and culture in
        our lives, transcending boundaries and connecting humanity through
        shared expressions.
      </p>
    )}
    {activeSlide === 2 && (
      <p className="text-base sm:text-xl text-gray-200 mb-12 leading-relaxed whitespace-normal break-words">
        Discover the knowledge embedded in traditional art forms and
        contemporary expressions. Vidyamanam celebrates the wisdom and
        learning that comes from cultural exchange and artistic
        exploration.
      </p>
    )}
  </div>
</div>
    </section>
  );
};

export default GallerySection;

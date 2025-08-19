"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  content: ContentItem[];
}

interface ContentItem {
  title: string;
  imageUrl: string;
}

const GalleryMaps: React.FC<Props> = ({ content }) => {
  const [activeDay, setActiveDay] = useState(1);
  const [activeTitle, setActiveTitle] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileStyles = {
    navButton: "p-3 min-w-[44px] min-h-[44px] flex items-center justify-center",
    activeNavItem: "bg-[#8A6A2F] text-white",
    navItem: "text-white hover:bg-[#8A6A2F]/70",
  };

  const NavButton = ({
    direction,
    onClick,
    disabled,
  }: {
    direction: "left" | "right";
    onClick: () => void;
    disabled?: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${mobileStyles.navButton} ${disabled ? "opacity-50" : ""}`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <Image
        src={`/${direction}-arrow.svg`}
        alt={`${direction} arrow`}
        width={24}
        height={24}
      />
    </button>
  );

  const ViewOptionBtn = ({
    showControlsBtn = true,
    isGridView,
  }: {
    showControlsBtn?: boolean;
    isGridView: boolean;
  }) => {
    return (
      showControlsBtn && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsGridView(!isGridView)}
            className=" text-white hover:bg-[#8A6A2F] cursor-pointer p-2"
          >
            {isGridView ? (
              <Image
                src="/grid-view-brown.svg"
                alt="grid-view"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/single-view.svg"
                alt="single-view"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      )
    );
  };

  return (
    <main className={`w-full bg-[#FBF6EF]  `}>
      <div className="mx-auto w-full max-w-[1500px] min-h-[50vh] flex flex-col md:flex-row gap-8 md:gap-18 lg:gap-20 pt-8 px-4 md:px-8 lg:px-12 xl:px-8 py-0 lg:py-0">
        {/* Left Column - Header and Image Navigation */}
        <div className="md:w-1/4 w-full space-y-8 py-8">
          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/70 z-30"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          

          {/* Dropdown Menu - Mobile Only */}
          <div className="md:hidden px-4 mb-4 ">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center bg-[#4A2F1E] text-white py-3 px-4 rounded-lg border border-white/30"
            >
              <span>{content[activeTitle]?.title || "Select Image"}</span>
              <span className="transform transition-transform duration-200">
                {isDropdownOpen ? "▲" : "▼"}
              </span>
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-[calc(100%-2rem)] mt-1 bg-[#4A2F1E] border border-[#8A6A2F] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {content.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTitle(index);
                      setIsDropdownOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full text-left py-3 px-4 text-white transition-all ${
                      activeTitle === index
                        ? "bg-black/30 font-semibold"
                        : "hover:bg-black/30"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation List - Hidden on mobile */}
          <div className="hidden md:block space-y-2">
            {content.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTitle(index)}
                className={`w-full text-left py-3 px-4 text-[#3A2A1E] transition-all ${
                  activeTitle === index
                    ? "bg-[#EADCC5] font-semibold rounded-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Content Area */}
        <div className="md:w-3/4 w-full ">
          {isGridView ? (
            // Grid View
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="group aspect-video bg-black overflow-hidden relative hover:shadow-lg transition-all duration-300"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-between p-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right"></div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-[#3A2A1E] font-medium text-sm md:text-base truncate">
                          {item.title}
                        </h3>
                        <p className="text-[#3A2A1E]/80 text-xs">
                          {index + 1} / {content.length}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <ViewOptionBtn isGridView={isGridView} />
              </div>
            </>
          ) : (
            // Single View
            <div className="relative w-full">
              {/* Mobile - Horizontal Scroll */}
              <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory h-[70vh] no-scrollbar">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 snap-start relative aspect-video"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
                <div className="bg-[#4A2F1E]/30 p-2 absolute bottom-2 right-2">
                  <ViewOptionBtn isGridView={isGridView} />
                </div>
              </div>

              {/* Desktop - Single Image with Navigation */}
              <div className="hidden md:block relative w-full aspect-video overflow-hidden">
                <Image
                  src={content[activeTitle]?.imageUrl || ""}
                  alt={content[activeTitle]?.title || ""}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  sizes="80vw"
                  priority
                />
              </div>

              {/* Desktop Navigation Controls */}
              <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 bg-[#4A2F1E]/80 px-4 py-2 rounded-full">
                  <NavButton
                    direction="left"
                    onClick={() => setActiveTitle(activeTitle - 1)}
                    disabled={activeTitle === 0}
                  />
                  <span className="text-white text-sm">
                    {activeTitle + 1} / {content.length}
                  </span>
                  <NavButton
                    direction="right"
                    onClick={() => setActiveTitle(activeTitle + 1)}
                    disabled={activeTitle === content.length - 1}
                  />
                  <ViewOptionBtn isGridView={isGridView} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default GalleryMaps;

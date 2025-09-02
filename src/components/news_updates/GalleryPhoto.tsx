"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { getImageURL } from "@/lib/api";

interface Props {
  content?: Array<ContentItem | DirectusItem>;
}

interface ContentItem {
  title: string;
  imageUrl: string;
}

// Supports Directus relational field like: { id, directus_files_id }
interface DirectusItem {
  id?: number;
  directus_files_id: string;
}

const GalleryPhoto: React.FC<Props> = ({ content = [] }) => {
  const [activeTitle, setActiveTitle] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileStyles = {
    navButton: "p-3 min-w-[44px] min-h-[44px] flex items-center justify-center",
    activeNavItem: "bg-[#8A6A2F] text-white",
    navItem: "text-white hover:bg-[#8A6A2F]/70",
  };

  // Normalize incoming content: if items are Directus references, convert to { title, imageUrl }
  const normalizedContent: ContentItem[] = content.map((item, idx) => {
    if (item && typeof item === "object" && "directus_files_id" in item) {
      const fileId = (item as DirectusItem).directus_files_id;
      return {
        title: `Image ${idx + 1}`,
        imageUrl: getImageURL(fileId),
      };
    }
    return item as ContentItem;
  });

  // Refs for mobile horizontal scrolling to selected image
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

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
                src="/grid-view.svg"
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
    <main className={`w-full bg-[#4A2F1E] `}>
      <div className="mx-auto w-full max-w-[1500px] flex flex-col md:flex-row gap-8 md:gap-18 lg:gap-20 pt-8 px-4 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        {/* Left Column - Header and Image Navigation */}
        <div className="md:w-1/4 w-full space-y-8">
          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/70 z-30"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          <div className="space-y-4 p-4 md:p-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Gallery
            </h2>

            {/* Removed Day selection tabs */}
            <div className="border-b border-white/30"></div>
          </div>

          {/* Dropdown Menu - Mobile Only */}
          <div className="md:hidden px-4 mb-4 ">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center bg-[#4A2F1E] text-white py-3 px-4 rounded-lg border border-white/30"
            >
              <span>{normalizedContent[activeTitle]?.title || "Select Image"}</span>
              <span className="transform transition-transform duration-200">
                {isDropdownOpen ? "▲" : "▼"}
              </span>
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-[calc(100%-2rem)] mt-1 bg-[#4A2F1E] border border-[#8A6A2F] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {normalizedContent.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTitle(index);
                      setIsDropdownOpen(false);
                      // Scroll the mobile horizontal list to the selected image
                      requestAnimationFrame(() => {
                        itemRefs.current[index]?.scrollIntoView({
                          behavior: "smooth",
                          inline: "start",
                          block: "nearest",
                        });
                      });
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
            {normalizedContent.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTitle(index)}
                className={`w-full text-left py-3 px-4 text-white transition-all ${
                  activeTitle === index
                    ? "bg-black/30 font-semibold rounded-lg"
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
                {normalizedContent.map((item, index) => (
                  <div
                    key={index}
                    className="group aspect-video bg-black rounded-lg overflow-hidden relative hover:shadow-lg transition-all duration-300"
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
                        <h3 className="text-white font-medium text-sm md:text-base truncate">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs mb-2">
                          {index + 1} / {normalizedContent.length}
                        </p>
                        <div className="flex gap-2">
                          <a
                            href={item.imageUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 hover:bg-white/30 text-white text-xs px-2 py-1 rounded transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Download
                          </a>
                        </div>
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
              <div ref={scrollContainerRef} className="md:hidden flex overflow-x-auto snap-x snap-mandatory h-[70vh] no-scrollbar">
                {normalizedContent.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
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

                    {/* Download button for mobile */}
                    <div className="absolute top-2 left-2">
                      <a
                        href={item.imageUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
                <div className="bg-[#4A2F1E]/30 p-2 absolute bottom-2 right-2">
                  <ViewOptionBtn isGridView={isGridView} />
                </div>
              </div>

              {/* Desktop - Single Image with Navigation */}
              <div className="hidden md:block relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={normalizedContent[activeTitle]?.imageUrl || ""}
                  alt={normalizedContent[activeTitle]?.title || ""}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  sizes="80vw"
                  priority
                />

                {/* Download button for desktop single view */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={normalizedContent[activeTitle]?.imageUrl || ""}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/60 hover:bg-black/80 text-white text-sm px-3 py-2 rounded transition-colors shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download
                  </a>
                </div>
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
                    {activeTitle + 1} / {normalizedContent.length}
                  </span>
                  <NavButton
                    direction="right"
                    onClick={() => setActiveTitle(activeTitle + 1)}
                    disabled={activeTitle === normalizedContent.length - 1}
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

export default GalleryPhoto;


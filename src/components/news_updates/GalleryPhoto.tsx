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

const GalleryPhoto: React.FC<Props> = ({ content }) => {
  const [activeDay, setActiveDay] = useState(1);
  const [activeTitle, setActiveTitle] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  const NavLeftBtn = ({
    showControlsBtn = true,
  }: {
    showControlsBtn?: boolean;
  }) => {
    return (
      showControlsBtn && (
        <>
          <button
            className="text-white hover:bg-[#8A6A2F] cursor-pointer p-2"
            onClick={() => {
              if (activeTitle > 0) {
                setActiveTitle(activeTitle - 1);
              }
            }}
          >
            <Image
              src="/left-arrow.svg"
              alt="left-arrow"
              width={24}
              height={24}
            />
          </button>
        </>
      )
    );
  };

  const NavRightBtn = ({
    showControlsBtn = true,
  }: {
    showControlsBtn?: boolean;
  }) => {
    return (
      showControlsBtn && (
        <button
          className="text-white  hover:bg-[#8A6A2F] cursor-pointer p-2 "
          onClick={() => {
            if (activeTitle < content.length - 1) {
              setActiveTitle(activeTitle + 1);
            }
          }}
        >
          <Image
            src="/right-arrow.svg"
            alt="right-arrow"
            width={24}
            height={24}
          />
        </button>
      )
    );
  };

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
    <main
      className={`w-full bg-[#4A2F1E] min-h-screen text-black overflow-auto pt-24 pb-24 md:px-12 lg:px-24`}
    >
      <div className="mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Column - Header and Image Navigation */}
        <div className="md:w-1/4 w-full space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Gallery
            </h2>

            {/* Day selection tabs */}
            <div className="flex gap-4">
              {[1, 2, 3].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`text-lg py-2 text-white transition-all cursor-pointer ${
                    activeDay === day ? "font-bold underline" : "opacity-70"
                  }`}
                >
                  Day {day}
                </button>
              ))}
            </div>
            <div className="border-b border-white py-2"></div>
          </div>

          {/* Image Navigation List */}
          <div className="flex flex-col space-y-2">
            {content.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTitle(index)}
                className={`text-left py-3 hover:bg-black/20 hover:px-6 hover:rounded-lg text-white transition-all cursor-pointer ${
                  activeTitle === index
                    ? "bg-black/20 px-6 font-semibold rounded-lg"
                    : "opacity-70"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.map((item, index) => (
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
                        <p className="text-white/80 text-xs">
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
            <div className="relative h-[calc(100vh-6rem)] w-full rounded-lg overflow-hidden">
              <Image
                src={content[activeTitle]?.imageUrl || ""}
                alt={content[activeTitle]?.title || ""}
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
                priority
              />

              {/* Overlay Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm md:text-base bg-[#4A2F1E] p-2 -pl-4">
                    {activeTitle + 1} / {content.length}
                  </span>

                  <div className="flex items-center gap-2 bg-[#4A2F1E]">
                    <NavLeftBtn />
                    <NavRightBtn />
                    <ViewOptionBtn isGridView={isGridView} />
                  </div>
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

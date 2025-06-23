"use client";

import { useState } from "react";
import Image from "next/image";

const GalleryShowcase = ({
  bgColor = "#9D7935",
  title = "Gallery",
  content = [
    {
      title: "Culture Summit Highlights",
      url: "https://www.youtube.com/embed/BFS9n4B_2xA",
    },
    {
      title: "Heritage Moments",
      url: "https://www.youtube.com/embed/BFS9n4B_2xA",
    },
    {
      title: "Cultural Wonders",
      url: "https://www.youtube.com/embed/BFS9n4B_2xA",
    },
    {
      title: "Cultural Landmarks",
      url: "https://www.youtube.com/embed/BFS9n4B_2xA",
    },
    {
      title: "Heritage Unveiled",
      url: "https://www.youtube.com/embed/BFS9n4B_2xA",
    },
    {
      title: "Traditions in Focus",
      url: "https://www.youtube.com/embed/BFS9n4B_2xA",
    },
    {
      title: "Cultural Legacy",
      url: "https://www.youtube.com/embed/BFS9n4B_2xA",
    },
  ],
}) => {
  const [activeTitle, setActiveTitle] = useState(3);

  return (
    <main
      className={`w-full min-h-screen  overflow-auto pt-24 pb-24 md:px-12 lg:px-24`}
      style={{ backgroundColor: bgColor }}
    >
      <div className=" mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Column - Header and Video Navigation */}
        <div className="md:w-1/4 w-full space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl  text-white ">{title}</h2>

            <div className=" border-b border-white py-2"></div>
          </div>

          {/* Video Navigation List */}
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
        <div className="md:w-3/4 w-full">
          <div className="aspect-video w-full bg-black shadow-2xl rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src={content[activeTitle || 0].url}
              title={content[activeTitle || 0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryShowcase;

"use client";
import { useState, useEffect, useRef } from "react";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";

const streamOptions = [
  {
    id: "main",
    name: "Plenary 3: Youth Panel",
    videoId: "gvJQd39la0M",
    allowsEmbedding: true,
    top_right_image: "",
    description: `Keynote Speaker: Ms. Ni Putu Pradnya Lalita Nara, Student from Green School Bali\n"Culture, Sustainability and the Future" (10 minutes)\n\nPanelists:\n  1) Mr. Angga Dwimas Sasongko — Indonesia Film Director\n  2) Mr. Fauzi Ismail — President of Singapore Heritage Society\n  3) Ms. MINAMIND\n\nModerator: Ms. Putri F. W. Shafiyyah \n\nQ&A`,
  },
  
  {
    id: "room1",
    name: "Batik",
    videoId: "vxbTppwQEzc",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel1.jpeg",
    description: ``,
  },
  {
    id: "room2",
    name: "Mask",
    videoId: "eVXe2l8ug9E",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel4.jpeg",
    description: ``,
  },
  {
    id: "room3",
    name: "Angklung",
    videoId: "aCx2_9eg3bk",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel2.jpeg",
    description: ``,
  },
  {
    id: "room4",
    name: "Dance",
    videoId: "MeZ4vvqNkhI",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel2.jpeg",
    description: ``,
  },
  {
    id: "room5",
    name: "Keris",
    videoId: "Rh0uVBX4BIU",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel2.jpeg",
    description: ``,
  },
  
];

/*
const streamOptions = [
  { id: 'main', name: 'Panel 1', videoId: 'ohE2G5q8ABg', allowsEmbedding: true },
  { id: 'room1', name: 'Panel 2', videoId: 'NSxxjImWYBo', allowsEmbedding: true },
  { id: 'room2', name: 'Panel 3', videoId: 'kSZYRJsE9sA', allowsEmbedding: true },
  { id: 'room3', name: 'Panel 4', videoId: 'Yo8bdBP8LYw', allowsEmbedding: true },
];*/

export default function StreamPage() {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeStream, setActiveStream] = useState("main");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentStream = streamOptions.find(
    (stream) => stream.id === activeStream
  );

  useEffect(() => {
    // Set a timeout to handle cases where iframe doesn't load properly
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log("Stream load timeout - assuming offline");
        setIsLive(false);
        setIsLoading(false);
      }
    }, 3000); // 5 second timeout

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  return (
    <div className="bg-[#5B5630] min-h-screen">
      <HeaderSection />
      <main className="w-full min-h-screen flex flex-col items-center overflow-auto pt-16 md:pt-24 pb-8 md:pb-16 px-2 sm:px-4">
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8 mt-8">
            Live Streaming
          </h1>

          {/* Stream Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {streamOptions.map((stream, index) => (
              <>
                <button
                  key={stream.id}
                  onClick={() => {
                    setActiveStream(stream.id);
                    setIsLoading(true);
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    activeStream === stream.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {stream.name}
                </button>
                {index === 0 && <div className="w-full"></div>}
                
              </>
            ))}
          </div>

          {/* Stream Container */}
          <div className="relative w-full pb-[56.25%] h-0 bg-black rounded-lg overflow-hidden shadow-2xl mb-6 md:mb-8">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-white text-sm sm:text-base">
                  Checking stream status...
                </div>
              </div>
            ) : (
              <>
                {isLive && (
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white py-1 px-2 sm:px-4 flex items-center justify-center text-xs sm:text-sm z-10">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse mr-1 sm:mr-2"></div>
                    <span className="font-semibold">LIVE NOW</span>
                  </div>
                )}
                <div className="absolute inset-0 w-full h-full">
                  {currentStream?.videoId ? (
                    <iframe
                      ref={iframeRef}
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${currentStream?.videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      onLoad={() => {
                        console.log("Iframe loaded");
                        // If we're still loading after 2 seconds, assume the stream is live
                        // This handles cases where YouTube doesn't fire the onError event
                        setTimeout(() => {
                          if (isLoading) {
                            console.log("Assuming stream is live (timeout)");
                            setIsLive(true);
                            setIsLoading(false);
                          }
                        }, 2000);
                      }}
                      onError={() => {
                        console.log("Iframe error - stream likely offline");
                        setIsLive(false);
                        setIsLoading(false);
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-900 h-full">
                      <div className="text-center p-8">
                        <div className="text-white text-xl mb-4">
                          📺 {currentStream?.name}
                        </div>
                        <p className="text-gray-300 text-lg">
                          There are no live session at the moment
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Stream Description */}
          {currentStream?.description && (
            <div className="w-full max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 relative">
              {/* 
              <div className="flex items-center gap-4 top-4 left-4 pb-2">
                <Image
                  src={currentStream.top_right_image}
                  alt={`${currentStream.name} panel image`}
                  width={150}
                  height={67}
                  className="w-[100px] h-auto object-cover shadow-lg p-2 bg-white rounded-lg"
                />
              </div>
              */}
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {currentStream.name}
              </h2>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 text-gray-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {currentStream.description}
                </div>
              </div>
            </div>
          )}
        </div>
        <FooterSection />
      </main>
    </div>
  );
}

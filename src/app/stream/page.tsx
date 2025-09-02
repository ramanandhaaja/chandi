"use client";
import { useState, useEffect, useRef } from "react";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";


export default function StreamPage() {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set a timeout to handle cases where iframe doesn't load properly
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log('Stream load timeout - assuming offline');
        setIsLive(false);
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout

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
          
          {/* Stream Container */}
          <div className="relative w-full pb-[56.25%] h-0 bg-black rounded-lg overflow-hidden shadow-2xl mb-6 md:mb-8">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-white text-sm sm:text-base">Checking stream status...</div>
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
                  <iframe
                    ref={iframeRef}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/ohE2G5q8ABg?autoplay=1&mute=0&rel=0&modestbranding=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => {
                      console.log('Iframe loaded');
                      // If we're still loading after 2 seconds, assume the stream is live
                      // This handles cases where YouTube doesn't fire the onError event
                      setTimeout(() => {
                        if (isLoading) {
                          console.log('Assuming stream is live (timeout)');
                          setIsLive(true);
                          setIsLoading(false);
                        }
                      }, 2000);
                    }}
                    onError={() => {
                      console.log('Iframe error - stream likely offline');
                      setIsLive(false);
                      setIsLoading(false);
                    }}
                  />
                </div>
              </>
            )}
          </div>
          
          {/* Stream Info (for mobile) */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:hidden">
            <h2 className="text-white text-lg font-semibold mb-2">Stream Information</h2>
            <p className="text-gray-300 text-sm">
              {isLive 
                ? "The stream is currently live. Enjoy the broadcast!"
                : "The stream is currently offline. Please check back later."}
            </p>
          </div>
        </div>
        <FooterSection />
      </main>
    </div>
  );
}

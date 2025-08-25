"use client";
import { useState, useEffect, useRef } from "react";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";

const YOUTUBE_CHANNEL_ID = "UC8Py24MpKOp_mekZW0CLx_w";
const CHECK_INTERVAL = 30000; // Check every 30 seconds

export default function StreamPage() {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // This is a fallback check that runs if the iframe method fails
  const checkStreamStatus = async () => {
    try {
      // Try to load the live stream
      const response = await fetch(`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}/live`);
      const html = await response.text();
      // If YouTube returns a 200 and the page contains "LIVE NOW" text, the stream is live
      const isStreamLive = html.includes('"isLive":true') || html.includes('LIVE NOW');
      setIsLive(isStreamLive);
      console.log('Stream status check:', isStreamLive ? 'Live' : 'Offline');
    } catch (error) {
      console.error('Error checking stream status:', error);
      setIsLive(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check immediately
    checkStreamStatus();
    
    // Then check periodically
    const intervalId = setInterval(checkStreamStatus, CHECK_INTERVAL);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#5B5630] min-h-screen">
      <HeaderSection />
      <main className="w-full min-h-screen flex flex-col items-center overflow-auto pt-16 md:pt-24 pb-8 md:pb-16 px-2 sm:px-4">
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8">
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
                    src={`https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&autoplay=1&mute=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => {
                      if (!isLive) {
                        setIsLive(true);
                        setIsLoading(false);
                      }
                    }}
                    onError={() => {
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

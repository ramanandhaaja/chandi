"use client";
import { useState, useEffect, useRef } from "react";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";

const YOUTUBE_CHANNEL_ID = "UC8Py24MpKOp_mekZW0CLx_w";
const CHECK_INTERVAL = 30000; // Check every 30 seconds

export default function StreamPage() {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [streamKey] = useState("qcez-se5d-8w9x-pp4b-0qtc");
  const [streamUrl] = useState("rtmp://a.rtmp.youtube.com/live2");
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
      <main className="w-full min-h-screen flex flex-col items-center overflow-auto pt-24 pb-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Live Streaming
          </h1>
          
          {/* Stream Player */}
          <div className="bg-black w-full aspect-video max-w-6xl mx-auto mb-8 rounded-lg overflow-hidden shadow-2xl">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse text-white">Checking stream status...</div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col">
                {isLive && (
                  <div className="bg-red-600 text-white py-1 px-4 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                    <span className="font-semibold">LIVE NOW</span>
                  </div>
                )}
                <iframe
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&autoplay=1&mute=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full flex-1"
                  onLoad={() => {
                    // Once iframe loads, we'll assume the stream is available
                    // YouTube will show its own "offline" message if needed
                    if (!isLive) {
                      setIsLive(true);
                      setIsLoading(false);
                    }
                  }}
                  onError={() => {
                    setIsLive(false);
                    setIsLoading(false);
                  }}
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <FooterSection />
      </main>
    </div>
  );
}

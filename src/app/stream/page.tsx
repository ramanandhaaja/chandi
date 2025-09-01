"use client";
import { useState, useEffect, useRef } from "react";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";

const YOUTUBE_CHANNEL_ID = "UCDYAEwyQlVaSMUkflfY84Aw";

// Configuration for multiple streams
// Replace these placeholder video IDs with your actual stream video IDs from YouTube
const STREAM_CONFIG = [
  {
    id: "stream1",
    title: "Stream 1",
    // You'll need to replace this with the actual video ID for your first stream
    videoId: "live_stream", // This will use the channel's default live stream
    streamKey: "stream-key-1" // Your vMix stream key 1
  },
  {
    id: "stream2", 
    title: "Stream 2",
    videoId: "live_stream", // You may need individual video IDs if using separate streams
    streamKey: "stream-key-2" // Your vMix stream key 2
  },
  {
    id: "stream3",
    title: "Stream 3", 
    videoId: "live_stream",
    streamKey: "stream-key-3" // Your vMix stream key 3
  },
  {
    id: "stream4",
    title: "Stream 4",
    videoId: "live_stream", 
    streamKey: "stream-key-4" // Your vMix stream key 4
  }
];

interface StreamState {
  isLive: boolean;
  isLoading: boolean;
}

export default function StreamPage() {
  const [streamStates, setStreamStates] = useState<Record<string, StreamState>>(() => {
    const initialStates: Record<string, StreamState> = {};
    STREAM_CONFIG.forEach(stream => {
      initialStates[stream.id] = { isLive: false, isLoading: true };
    });
    return initialStates;
  });
  
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});

  const updateStreamState = (streamId: string, updates: Partial<StreamState>) => {
    setStreamStates(prev => ({
      ...prev,
      [streamId]: { ...prev[streamId], ...updates }
    }));
  };

  useEffect(() => {
    // Set timeouts for each stream individually
    const timeoutIds = STREAM_CONFIG.map(stream => {
      return setTimeout(() => {
        const currentState = streamStates[stream.id];
        if (currentState?.isLoading) {
          console.log(`Stream ${stream.title} load timeout - assuming offline`);
          updateStreamState(stream.id, { isLive: false, isLoading: false });
        }
      }, 5000); // 5 second timeout per stream
    });

    return () => timeoutIds.forEach(id => clearTimeout(id));
  }, [streamStates]);

  const StreamPlayer = ({ stream }: { stream: typeof STREAM_CONFIG[0] }) => {
    const state = streamStates[stream.id];
    
    return (
      <div className="relative w-full pb-[56.25%] h-0 bg-black rounded-lg overflow-hidden shadow-lg">
        {/* Stream Title */}
        <div className="absolute top-0 left-0 right-0 bg-black/70 text-white py-1 px-2 text-xs font-semibold z-20">
          {stream.title}
        </div>
        
        {state?.isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-white text-xs">Checking stream status...</div>
          </div>
        ) : (
          <>
            {state?.isLive && (
              <div className="absolute top-6 left-0 right-0 bg-red-600 text-white py-1 px-2 flex items-center justify-center text-xs z-10">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></div>
                <span className="font-semibold">LIVE NOW</span>
              </div>
            )}
            <div className="absolute inset-0 w-full h-full">
              <iframe
                ref={(el) => { iframeRefs.current[stream.id] = el; }}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&autoplay=1&mute=0&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                onLoad={() => {
                  console.log(`${stream.title} iframe loaded`);
                  setTimeout(() => {
                    const currentState = streamStates[stream.id];
                    if (currentState?.isLoading) {
                      console.log(`Assuming ${stream.title} is live (timeout)`);
                      updateStreamState(stream.id, { isLive: true, isLoading: false });
                    }
                  }, 2000);
                }}
                onError={() => {
                  console.log(`${stream.title} iframe error - stream likely offline`);
                  updateStreamState(stream.id, { isLive: false, isLoading: false });
                }}
              />
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#5B5630] min-h-screen">
      <HeaderSection />
      <main className="w-full min-h-screen flex flex-col items-center overflow-auto pt-16 md:pt-24 pb-8 md:pb-16 px-2 sm:px-4">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8 pt-8">
            Live Streaming
          </h1>
          
          {/* Multi-Stream Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {STREAM_CONFIG.map((stream) => (
              <div key={stream.id} className="w-full">
                <StreamPlayer stream={stream} />
              </div>
            ))}
          </div>
          
          {/* Stream Status Summary 
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <h2 className="text-white text-lg font-semibold mb-2">Stream Status</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {STREAM_CONFIG.map((stream) => {
                const state = streamStates[stream.id];
                return (
                  <div key={stream.id} className="text-center">
                    <div className="text-white text-sm font-medium">{stream.title}</div>
                    <div className={`text-xs ${state?.isLive ? 'text-green-400' : state?.isLoading ? 'text-yellow-400' : 'text-red-400'}`}>
                      {state?.isLoading ? 'Checking...' : state?.isLive ? 'Live' : 'Offline'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>*/}
        </div>
        <FooterSection />
      </main>
    </div>
  );
}

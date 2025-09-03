"use client";
import { useState, useEffect, useRef } from "react";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";

const streamOptions = [
  {
    id: "main",
    name: "Panel Discussion 1",
    videoId: "d1_1r-7_cBw",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel3.jpeg",
    description: `• Topic: "Reclaiming History, Restoring Justice: International Cooperation for Repatriation and the Fight Against Illicit Trafficking of Cultural Objects"

• Co-Host: International Council on Museums (ICOM) Indonesia

• Panelists:
  1) Prof. I Ketut Ardhana, PhD — Professor of Asian History, Udayana University.
  2) Mr. I Gusti Agung Wesaka Puja — Ambassador of the Republic of Indonesia to the Kingdom of Netherlands, 2016 – 2020

• Special Presentation: Prof. Ismunandar, Ph.D — Senior Advisor to the Minister of Culture and Chair of the Expert Panel of Indonesia's Cultural Heritage Repatriation Team

• Moderator: Mr. Budi Trinovari — Chair of International Council of Museums Indonesia

• Call for Paper:
  1) Ms. Noor Fahmi Pramuji — Faculty of Cultural Sciences, Khairun University, Ternate, The Republic of Indonesia
  2) Mr. Muhammad Fahmi Reksa Al Farisi — SOAS University of London

• Q&A Session`,
  },
  {
    id: "room1",
    name: "Panel Discussion 2",
    videoId: "T48DYY9Q9iU",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel1.jpeg",
    description: `• Topic: "Traditional Knowledge and Local Practices in Building Resilient and Inclusive Societies in the Post‑2030 World"

• Co-Host: International Council on Monuments and Sites (ICOMOS) Indonesia

• Panelists:
  1) Prof. Dr. I Wayan Adnyana, S.Sn., M.Sn., — Rector of the Indonesian Institute of the Arts Bali
  2) Ms. Zou Yi Qing — Vice President of ICOMOS China Scientific Committee on Cultural Route

• Moderator: Dra. Nazrina Zuryani, M.A., Ph.D, — Head of Bali Province Branch of Indonesia Sociology Association

• Call for Paper:
  1) Ms. Elvira Rufriani B. Kawaliong — Padjajaran University, Indonesia
  2) Mr. Arif Hukmi — Makassar Islamic University

• Q&A Session`,
  },
  {
    id: "room2",
    name: "Panel Discussion 3",
    videoId: "rn77v5JOQZ4",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel4.jpeg",
    description: `• Topic: "Financing the Future of Culture: Unlocking Investment for Preservation and Innovation"

• Co-Host: Indonesian Heritage Trust (Bumi Pelestarian Pusaka Indonesia)

• Panelists:
  1) Dr. Donovan Rypkema — President of Heritage Strategies International.
  2) Ms. Hasti Tarekat Dipowijoyo — Founder of Heritage Hands-on in Amsterdam and Co‑Chair of Advisory Board of the Asian Network for Industrial Heritage.

• Moderator: Dr. Catrini Pratihari Kubontubuh — Chair of the Indonesian Heritage Trust

• Call for Paper:
  1) Mr. Ahmad Saifudin Mutaqi — Islamic University of Indonesia (Universitas Islam Indonesia/UII)
  2) Mr. Sultan Prasasti — Maastricht University, Netherlands

• Q&A Session`,
  },
  {
    id: "room3",
    name: "Panel Discussion 4",
    videoId: "2Uxx-XVopkg",
    allowsEmbedding: true,
    top_right_image: "/images/event-section/panel2.jpeg",
    description: `• Topic: "Responding the Climate Risks to Heritage and Fostering Culture‑Based Climate Action"

• Co-Host: Indonesian National Research and Innovation Agency (Badan Riset dan Inovasi Nasional)

• Panelists:
  1) Professor R. Michael Feener — Professor of Cross‑Regional Studies at the Centre for Southeast Asian Studies at Kyoto University.
  2) Dr. Wengki Ariando — Postdoctoral researcher at KITLV/the Royal Netherlands Institute of Southeast Asian and Caribbean Studies.

• Moderator: Mr. Marlon Nicolay Ramon Ririmasse S.S., M.A. — Head of the Research Center for Environmental Archaeology, Maritime Archaeology, and Cultural Sustainability of the National Research and Innovation Agency

• Call for Paper:
  1) Ms. Dewa Ayu Prisma Dewi — BALIDOC Film & Documentary Community
  2) Mr. Bima Maulana Putra — Centre for Research in Psychology and Human Well‑being, Faculty of Social Sciences and Humanities, Universiti Kebangsaan Malaysia, Selangor, Malaysia

• Q&A Session`,
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
            {streamOptions.map((stream) => (
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
              <div className="flex items-center gap-4 top-4 left-4 pb-2">
                <Image
                  src={currentStream.top_right_image}
                  alt={`${currentStream.name} panel image`}
                  width={150}
                  height={67}
                  className="w-[100px] h-auto object-cover shadow-lg p-2 bg-white rounded-lg"
                />
              </div>
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

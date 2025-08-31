"use client";
import { useEffect, useState } from "react";
import HeaderSection from "@/components/HeaderSection";
import HeroAlternative2 from "@/components/HeroAlternative2";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import WhoSection from "@/components/WhoSection";
import SpeakerSection from "@/components/SpeakerSection";
import ProfileSection from "@/components/ProfileSection";
import VenueSection from "@/components/VenueSection";
import EventSection from "@/components/EventSection";
import SponsorSection from "@/components/SponsorSection";
import FAQSection from "@/components/FAQSection";
import HostSection from "@/components/HostSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import UnderConstructions from "@/components/UnderConstructions";
import ResourcesSection from "@/components/ResourcesSection";
import AbstractSection from "@/components/AbstractSection";
import IndependentSection from "@/components/IndependentSection";
import VideoHeadline from "@/components/VideoHeadline";
import { FaQ } from "react-icons/fa6";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

export default function Home() {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Open the announcement modal on initial page load
    setShowAnnouncement(true);
  }, []);

  return (
    <>
      {showAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm md:backdrop-blur"
            onClick={() => setShowAnnouncement(false)}
            aria-hidden="true"
          />
          {/* Modal */}
          <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl">
            <div className="relative bg-white rounded-4xl overflow-hidden shadow-xl">
              <button
                type="button"
                aria-label="Close announcement"
                className={`absolute ${
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? "right-2 top-2"
                    : "right-3 top-4"
                } inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white`}
                onClick={() => setShowAnnouncement(false)}
              >
                <span className="text-2xl leading-none">×</span>
              </button>
              <Image
                src={language === "id-ID" ? "/images/announcement-id.png" : "/images/announcement.png"}
                alt="Announcement"
                width={1600}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Under Construction 
      <UnderConstructions/>
      */}
      {/* Header Section */}
      <HeaderSection />

     
      <HeroAlternative2 />

      {/* Video Headline Section 
      <VideoHeadline />
        */}

      {/* Responsive Registration Banner */}
      <div>
        {/* Desktop/Tablet (md and up): horizontal image */}
        <div className="hidden md:block">
          <Image
            src="/images/web_regis_horizontal.png"
            alt="Registration banner"
            width={1920}
            height={1080}
            className="w-full h-auto shadow"
            priority
          />
        </div>
        {/* Mobile (below md): vertical image */}
        <div className="md:hidden">
          <Image
            src="/images/web_regis_vertical.png"
            alt="Registration banner mobile"
            width={1080}
            height={1920}
            className="w-full h-auto shadow"
          />
        </div>
      </div>

      <AboutSection />

      <IndependentSection />

      {/* <GallerySection /> */}

      {/* Under Construction 
      <WhoSection /> */}

      <SpeakerSection />

      <ProfileSection />

      <VenueSection />

      <EventSection />

      <AbstractSection />

      {/* Header Section 
      <SponsorSection />
        
      <HostSection />*/}

      <ResourcesSection page="main" />

      <FAQSection />

      <FooterSection />
    </>
  );
}

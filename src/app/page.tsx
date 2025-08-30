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

export default function Home() {
  return (
    <>

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

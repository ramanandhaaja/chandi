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

export default function Home() {
  return (
    <>

      {/* Under Construction 
      <UnderConstructions/>
      */}
      {/* Header Section */}
      <HeaderSection />

     
      <HeroAlternative2 />

   
      <AboutSection />

      <GallerySection />

      {/* Under Construction 
      <WhoSection /> */}

      <SpeakerSection />

      <ProfileSection />

      <VenueSection />

      <EventSection />

      {/* Header Section 
      <SponsorSection />
        */}
      <HostSection />

      <ResourcesSection />

      <FooterSection />
    </>
  );
}

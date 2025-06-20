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

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />

      {/* Hero Section */}
      <HeroAlternative2 />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Who Section */}
      <WhoSection />

      {/* Speakers Section */}
      <SpeakerSection />

      {/* Profile Section */}
      <ProfileSection />

      {/* Venue Section */}
      <VenueSection />

      {/* Event Section */}
      <EventSection />

      {/* Sponsor Section */}
      <SponsorSection />

      {/* Host Section */}
      <HostSection />

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

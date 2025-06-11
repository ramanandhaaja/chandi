import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import WhoSection from './components/WhoSection';
import SpeakerSection from './components/SpeakerSection';
import ProfileSection from './components/ProfileSection';
import VenueSection from './components/VenueSection';
import EventSection from './components/EventSection';
import SponsorSection from './components/SponsorSection';
import FAQSection from './components/FAQSection';
import HostSection from './components/HostSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
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

      {/* FAQ Section */}
      <FAQSection />

      {/* Host Section */}
      <HostSection />

      
    </>
  );
}

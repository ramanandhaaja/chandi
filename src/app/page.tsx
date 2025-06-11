import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import WhoSection from './components/WhoSection';
import SpeakerSection from './components/SpeakerSection';
import ProfileSection from './components/ProfileSection';
import VenueSection from './components/VenueSection';

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

    </>
  );
}

"use client";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import HeroAlternative from "@/components/HeroAlternative";
import VideoGallerySection from "@/components/news_updates/VideoGallery";
import Gallery from "@/components/showcase/GalleryShowcase";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <HeaderSection />

      <HeroAlternative
        title="CULTURAL SHOWCASE"
        subtitle="Explore the vibrant world of Indonesia through our 'Cultural Showcase' page! Here, you'll find a rich tapestry of local traditions, artistic expressions, and community celebrations. Immerse yourself in the colorful festivals, traditional crafts, and the unique stories that highlight the essence of Indonesian culture."
      />

      <Gallery bgColor="#6B3326" title="Lokasi Budaya Indonesia " />
      {/* Videos section*/}
      <VideoGallerySection title="Pameran Inovasi Budaya" />

      <Gallery title="Virtual Tour Cagar Budaya" />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

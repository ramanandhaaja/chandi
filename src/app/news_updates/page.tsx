import HeroAlternative from "@/components/HeroAlternative";
import FooterSection from "@/components/FooterSection";
import PressReleaseSection from "@/components/news_updates/PressRelease";
import PhotoSection from "@/components/news_updates/Photo";
import VideoGallerySection from "@/components/news_updates/VideoGallery";

export default function NewsAndUpdatesPage() {
  return (
    <>
      <HeroAlternative
        title="News and Updates"
        subtitle="Stay updated with the latest happenings in Indonesia! 
        Our 'News and Update' section brings you the freshest insights into cultural events, art showcases, and community initiatives. 
        Dive into the dynamic blend of tradition and innovation that shapes Indonesia today."
      />
      {/* Press Release  Section*/}
      <PressReleaseSection />
      {/* Photo section*/}
      <PhotoSection />
      {/* Videos section*/}
      <VideoGallerySection />
      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

import HeroAlternative from "@/components/HeroAlternative";
import FooterSection from "@/components/FooterSection";
import PressReleaseSection from "@/components/news_updates/PressRelease";
import VideoGallerySection from "@/components/news_updates/VideoGallery";
import HeaderSection from "@/components/HeaderSection";
import GalleryPhoto from "@/components/news_updates/GalleryPhoto";

// photo gallery mock data
const photos = [
  {
    imageUrl: "/images/photo/photo1.jpg",
    title: "Photo 1",
  },
  {
    imageUrl: "/images/photo/photo3.jpg",
    title: "Photo 3",
  },
  {
    imageUrl: "/images/photo/photo4.jpg",
    title: "Photo 4",
  },
  {
    imageUrl: "/images/photo/photo5.jpg",
    title: "Photo 5",
  },
  {
    imageUrl: "/images/photo/photo6.jpg",
    title: "Photo 6",
  },
  {
    imageUrl: "/images/photo/photo7.jpg",
    title: "Photo 7",
  },
];

export default function NewsAndUpdatesPage() {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      <HeroAlternative
        title="NEWS AND UPDATES"
        subtitle="Stay updated with the latest happenings in Indonesia! 
        Our 'News and Update' section brings you the freshest insights into cultural events, art showcases, and community initiatives. 
        Dive into the dynamic blend of tradition and innovation that shapes Indonesia today."
      />
      {/* Press Release  Section*/}
      <PressReleaseSection />
      {/* Photo section*/}
      <GalleryPhoto content={photos} />
      {/* Videos section*/}
      <VideoGallerySection />
      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

import HeroAlternative from "@/components/HeroAlternative";
import FooterSection from "@/components/FooterSection";
import PressReleaseSection from "@/components/news_updates/PressRelease";
import VideoGallerySection from "@/components/news_updates/VideoGallery";
import HeaderSection from "@/components/HeaderSection";
import GalleryPhotoDrive from "@/components/news_updates/GalleryPhotoDrive";
import GalleryPhoto from "@/components/news_updates/GalleryPhoto";
import VideoGalleryDrive from "@/components/news_updates/VideoGalleryDrive";


// photo gallery mock data
const photos = [
  {
    imageUrl: "/images/photo/photo1.jpeg",
    title: "Photo 1",
  },
  {
    imageUrl: "/images/photo/photo2.jpeg",
    title: "Photo 3",
  },
  {
    imageUrl: "/images/photo/photo3.jpeg",
    title: "Photo 3",
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
      {/* 
      <GalleryPhoto content={photos}/>

      Photo section - Google Drive-backed gallery (Day 1/2/3) 
      <GalleryPhotoDrive parentFolderId="1xC5u5q6rfFZfqYZVQqQUZbrW8sEGjC7v" />*/}
      <GalleryPhotoDrive parentFolderId="1QWmL8wjrp82_hXLpg6kRF0FfvZTd6_wd" />
      {/* Videos section
      <VideoGallerySection />*/}
      <VideoGalleryDrive parentFolderId="1-cDnj9WGPjZ7v-p_yCvzHPqU-q_meWge" />
      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

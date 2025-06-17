"use client";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import HeroAlternative from "@/components/HeroAlternative";
import VideoGallerySection from "@/components/news_updates/VideoGallery";

export default function Home() {
  return (
    <div className="bg-[#9D7935]">
      {/* Header Section */}
      <HeaderSection />

      <HeroAlternative
        title="Cultural Showcase"
        subtitle="Explore the vibrant world of Indonesia through our 'Cultural Showcase' page! Here, you'll find a rich tapestry of local traditions, artistic expressions, and community celebrations. Immerse yourself in the colorful festivals, traditional crafts, and the unique stories that highlight the essence of Indonesian culture."
      />

      <main className="w-full min-h-screen text-black overflow-auto pt-24 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
            {/* Left Column - Virtual Tour Navigation */}
            <div className="md:w-1/3 w-full">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Lokasi Budaya <br/> Indonesia</h2>
              
              <div className="flex flex-col space-y-2">
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Cultural Treasures of Indonesia
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Exploring Indonesia&apos;s Heritage Sites
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  The Wonders of Indonesian Culture
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Journey Through Indonesia&apos;s Cultural Legacy
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Indonesian Cultural Heritage Unveiled
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Indonesian Traditions: A Tapestry of Diversity
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Preserving Indonesia&apos;s Rich Cultural Legacy
                </button>
              </div>
            </div>

            {/* Right Column - Video Embed */}
            <div className="md:w-2/3 w-full">
              <div className="aspect-video w-full bg-black shadow-2xl rounded-lg overflow-hidden">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/BFS9n4B_2xA" 
                  title="CHANDI 2025 – Pembukaan" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Videos section*/}
      <VideoGallerySection title="Pameran Inovasi Budaya" />


      <main className="w-full min-h-screen text-black overflow-auto pt-24 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
            {/* Left Column - Virtual Tour Navigation */}
            <div className="md:w-1/3 w-full">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Virtual Tour <br/> Cagar Budaya</h2>
              
              <div className="flex flex-col space-y-2">
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Cultural Treasures of Indonesia
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Exploring Indonesia&apos;s Heritage Sites
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  The Wonders of Indonesian Culture
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Journey Through Indonesia&apos;s Cultural Legacy
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Indonesian Cultural Heritage Unveiled
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Indonesian Traditions: A Tapestry of Diversity
                </button>
                <button className="text-left py-3 bg-[#9D7935] hover:bg-[#8A6A2F] hover:px-8 hover:rounded-lg text-white transition-all">
                  Preserving Indonesia&apos;s Rich Cultural Legacy
                </button>
              </div>
            </div>

            {/* Right Column - Video Embed */}
            <div className="md:w-2/3 w-full">
              <div className="aspect-video w-full bg-black shadow-2xl rounded-lg overflow-hidden">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/BFS9n4B_2xA" 
                  title="CHANDI 2025 – Pembukaan" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

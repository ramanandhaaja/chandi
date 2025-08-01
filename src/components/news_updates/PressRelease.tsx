import Image from "next/image";
import Link from "next/link";

const PressRelease = () => {
  const images = [
    {
      id: "cultural-summit-2023",
      src: "/images/press-release/press-release-1.jpg",
      alt: "Press Release 1",
      title: "Indonesia dan Prancis Perkuat Kolaborasi Budaya melalui Kerja Sama Strategis di Bidang Perfilman",
    },
  ];
  return (
    <section className="py-10 px-2 sm:py-20 sm:px-6 md:px-12 lg:px-24 bg-[#FCFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
          {/* Left Column - Title and Description */}
          <div className="mb-6 sm:mb-10 md:mb-0">
            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl md:text-[72px] mb-4 sm:mb-8  leading-tight break-words">
              Press
              <br />
              Release
            </h2>
          </div>

          {/* Right Column - Custom Host Images Grid */}
          <div className="md:w-3/5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8">
              {images.map((image, idx) => (
                <Link
                  key={idx}
                  href={`/news_updates/${image.id}`}
                  className="flex flex-col gap-2 sm:gap-4 cursor-pointer group"
                >
                  <div className="relative rounded-2xl overflow-hidden h-36 sm:h-[180px] md:h-[226px] w-full md:w-[372px] group-hover:scale-105 transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <div className="text-base sm:text-xl md:text-2xl group-hover:text-blue-600 transition-colors">
                    {image.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PressRelease;

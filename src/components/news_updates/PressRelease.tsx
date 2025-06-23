import Image from "next/image";

const PressRelease = () => {
  const images = [
    {
      src: "/images/press-release/press-release-1.jpg",
      alt: "Press Release 1",
      title: "Cultural Summit 2023: Uniting Voices for Change",
    },
    {
      src: "/images/press-release/press-release-2.jpg",
      alt: "Press Release 2",
      title: "Culture Summit 2025: A Global Celebration of Creativity",
    },
    {
      src: "/images/press-release/press-release-3.jpg",
      alt: "Press Release 3",
      title:
        "Culture Summit 2025: Inspiring Change Through Artistic Expression",
    },
    {
      src: "/images/press-release/press-release-4.jpg",
      alt: "Press Release 4",
      title: "Culture Summit 2025: Bridging Cultures Through Art and Dialogue",
    },
    {
      src: "/images/press-release/press-release-5.jpg",
      alt: "Press Release 5",
      title: "Join Us at Culture Summit 2025: Where Art Meets Innovation",
    },
    {
      src: "/images/press-release/press-release-6.jpg",
      alt: "Press Release 6",
      title: "Experience the Future of Culture at Summit 2025",
    },
  ];
  return (
    <section className="py-10 px-2 sm:py-20 sm:px-6 md:px-12 lg:px-24 bg-white">
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
                <div
                  key={idx}
                  className="flex flex-col gap-2 sm:gap-4 cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden h-36 sm:h-[180px] md:h-[226px] w-full md:w-[372px] hover:scale-110 transition-all">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <div className="text-base sm:text-xl md:text-2xl ">
                    {image.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PressRelease;

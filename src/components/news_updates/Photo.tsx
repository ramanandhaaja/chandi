import Image from "next/image";

const Photo = () => {
  const images = [
    {
      src: "/images/photo/photo1.jpg",
      alt: "Press Release 1",
    },
    {
      src: "/images/photo/photo2.jpg",
      alt: "Press Release 2",
    },
    {
      src: "/images/photo/photo3.jpg",
      alt: "Press Release 3",
    },
    {
      src: "/images/photo/photo4.jpg",
      alt: "Press Release 4",
    },
    {
      src: "/images/photo/photo5.jpg",
      alt: "Press Release 5",
    },
    {
      src: "/images/photo/photo6.jpg",
      alt: "Press Release 6",
    },
    {
      src: "/images/photo/photo7.jpg",
      alt: "Press Release 7",
    },
    {
      src: "/images/photo/photo8.jpg",
      alt: "Press Release 8",
    },
    {
      src: "/images/photo/photo9.jpg",
      alt: "Press Release 9",
    },
    {
      src: "/images/photo/photo10.jpg",
      alt: "Press Release 10",
    },
  ];

  return (
    <section className="py-10 px-2 sm:py-20 sm:px-6 md:px-12 lg:px-24 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
          {/* Left Column - Title and Description */}
          <div className="mb-6 sm:mb-10 md:mb-0">
            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl md:text-[72px] mb-4 sm:mb-8 text-black leading-tight break-words">
              Photo
            </h2>
          </div>

          {/* Right Column - Custom Host Images Grid */}
          <div className="md:w-3/5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {images.map((image, idx) => (
                <div key={idx} className="cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden h-36  w-full md:w-[248px] hover:scale-110 transition-all">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-2xl"
                    />
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
export default Photo;

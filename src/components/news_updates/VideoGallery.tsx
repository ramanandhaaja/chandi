import Image from "next/image";

const VideoGallery = ({
  title = "Videos",
}) => {
  const images = [
    {
      src: "/images/video/video-1.jpg",
      alt: "Press Release 1",
    },
    {
      src: "/images/video/video-2.jpg",
      alt: "Press Release 2",
    },
    {
      src: "/images/video/video-3.jpg",
      alt: "Press Release 3",
    },
    {
      src: "/images/video/video-4.jpg",
      alt: "Press Release 4",
    },
    {
      src: "/images/video/video-5.jpg",
      alt: "Press Release 5",
    },
    {
      src: "/images/video/video-6.jpg",
      alt: "Press Release 6",
    },
  ];
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-20 ">
          {/* Left Column - Title and Description */}
          <div className="md:w-[30%] w-full">
            {/* Main Title */}
            <h2 className="text-4xl md:text-[72px] mb-8 text-black leading-tight break-words  ">
              {title}
            </h2>
          </div>

          {/* Right Column - Custom Host Images Grid */}
          <div className="md:w-3/5 w-full">
            <div className="grid grid-cols-2 gap-6 ">
              {images.map((image, idx) => (
                <div key={idx} className=" cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden md:h-[226px] md:w-[372px] w-full hover:scale-110 transition-all ">
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
export default VideoGallery;

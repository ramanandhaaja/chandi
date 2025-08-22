"use client";

const VideoGallery = ({ title = "Videos" }) => {
  const videos = [
    {
      id: "dqteOrebYCc",
      title: "CHANDI Video 1",
    },
    {
      id: "vexU_rSSSSM",
      title: "CHANDI Video 2",
    },
    {
      id: "gG78Es9ZPa8",
      title: "CHANDI Video 3",
    },
    {
      id: "iryrcXxogh8",
      title: "CHANDI Video 4",
    },
  ];
  return (
    <section className="py-10 px-2 sm:py-20 sm:px-6 md:px-12 lg:px-24 bg-[#FCFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
          {/* Left Column - Title and Description */}
          <div className="mb-6 sm:mb-10 md:mb-0 md:w-[30%] w-full">
            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl md:text-[72px] mb-4 sm:mb-8  leading-tight break-words">
              {title}
            </h2>
          </div>

          {/* Right Column - YouTube Videos Grid */}
          <div className="md:w-3/5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
              {videos.map((video, idx) => (
                <div key={idx} className="cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden w-full aspect-video hover:shadow-lg transition-all">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-2xl"
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

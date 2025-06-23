import Image from "next/image";

const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="overflow-hidden">
      {/* Background pattern */}
      <div className="relative h-[400px] sm:h-[640px] overflow-hidden pt-20 sm:pt-20">
        {/* Hero Section with Background */}
        <div className="absolute inset-0 z-0">
          {/* Pattern overlay using Tailwind's built-in utilities */}
          <div className="absolute inset-0 z-0 bg-[#CD9F00] opacity-70 pointer-events-none" />
          <div className="absolute inset-0 opacity-70">
            <Image
              src="/bg_cloud.png"
              alt="Pattern"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-start px-3 sm:px-6 pt-10 sm:pt-20 text-center">
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Logo/Icon */}
            <div className="mb-8 sm:mb-16 transform transition-all duration-700 hover:scale-110">
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto">
                <Image
                  src={"/chandi_single_logo_color.png"}
                  alt="logo"
                  width={82}
                  height={106}
                />
              </div>
              {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
            </div>

            {/* Main Heading */}
            <h1 className=" text-2xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-8 leading-tight text-white drop-shadow-md">
              {(() => {
                const words = title.split(" ");
                const colors = ["#97311A", "#948B48", "#4A2F1E", "#CD9F00"];
                return (
                  <>
                    {words.map((word, idx) =>
                      idx < 4 ? (
                        <span
                          key={idx}
                          style={{ color: colors[idx], marginRight: "0.25em" }}
                        >
                          {word}
                        </span>
                      ) : (
                        <span key={idx} style={{ marginRight: "0.25em" }}>
                          {word}
                        </span>
                      )
                    )}
                  </>
                );
              })()}
            </h1>

            {/* Summit Title */}
            <div className="w-full max-w-[572px] mb-10 sm:mb-20">
              <h2 className="text-sm md:text-base  drop-shadow-sm">
                {subtitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

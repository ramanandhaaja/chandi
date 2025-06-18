import Image from "next/image";

const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="  overflow-hidden">
      {/* Background pattern */}
      <div className="relative h-[640px] overflow-hidden pt-20">
        {/* Hero Section with Background */}
        <div className="absolute inset-0 z-0">
          {/* Pattern overlay using Tailwind's built-in utilities */}
          <div className="absolute inset-0 ">
            <Image
              src="/images/hero-section/hero-img.png"
              alt="Pattern"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-start px-6 pt-20 text-white text-center">
          <div className="flex-1 flex flex-col items-center justify-center ">
            {/* Logo/Icon */}
            <div className="mb-16 transform transition-all duration-700 hover:scale-110">
              <div className="w-20 h-20 mx-auto">
                <Image
                  src={"/chandi_single_logo.png"}
                  alt="logo"
                  width={82}
                  height={106}
                ></Image>
              </div>
              {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
            </div>

            {/* Main Heading */}
            <h1 className="kunire-grotesk text-4xl sm:text-5xl md:text-7xl font-bold  mb-8 leading-tight text-white drop-shadow-md">
              {title}
            </h1>

            {/* Summit Title */}
            <div className=" w-[572px] mb-20">
              <h2 className="text-base text-white/90 drop-shadow-sm">
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

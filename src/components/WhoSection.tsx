import React from "react";
import Image from "next/image";

interface WhoSectionProps {
  title?: string;
  subtitle?: string;
}

const WhoSection: React.FC<WhoSectionProps> = ({
  title = "Who Should Attend",
  subtitle = "For Whom?",
}) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 z-0">
        <Image
          src="/for-whom-bg.svg"
          alt="pattern"
          width={800}
          height={1000}
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto z-10 ">
        {/* Section Header with Line */}
        <div className="flex items-center mb-10">
          <div className="w-10 h-1 bg-[#0D0D0D] mr-4 rounded-full"></div>
          <h3 className="text-base font-medium tracking-wide text-[#0D0D0D]">
            {subtitle}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:gap-16 items-start">
          {/* Left Column - Title */}
          <div className="md:w-full mb-10 md:mb-0">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-[#0D0D0D] whitespace-pre-line">
              {title}
            </h2>
          </div>
        </div>

        {/* Attendee Categories */}
        <div className=" mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center w-full">
          {/* Business Man */}
          <div className="bg-white rounded-full border border-solid border-[#D49300] p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image
                src="suitcase.svg"
                alt="Business icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <p className="text-center text-gray-500 font-medium">Business Man</p>
          </div>

          {/* Investors */}
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image
                src="money.svg"
                alt="Investor icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <p className="text-center text-gray-500 font-medium">Investors</p>
          </div>

          {/* Founder */}
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image
                src="mic.svg"
                alt="Founder icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <p className="text-center text-gray-500 font-medium">Founder</p>
          </div>

          {/* Developers */}
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image
                src="developer.svg"
                alt="developer icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <p className="text-center text-gray-500 font-medium">Developers</p>
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-white relative mt-12 border border-gray-200 rounded-lg p-8 text-center">
          <p className="w-2/3 mx-auto text-[#1F1F1F] leading-relaxed">
            Dive deeper into the transformative power of the Culture Summit, a
            pivotal event designed to cultivate collaboration among teams,
            enhance employee engagement, spark innovative ideas, and ensure
            organizations stay ahead in an ever-evolving business landscape.
            This summit serves as a platform for sharing insights, fostering
            connections, and igniting a culture of creativity that empowers
            employees to thrive and contribute to the company&apos;s success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;

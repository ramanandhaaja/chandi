import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Where the future is Made",
  subtitle = "About CHANDI",
  description = [
    "The CHANDI 2025 Summit is the ultimate gathering for culture enthusiasts, community leaders, and innovators to delve into the world of art, heritage, and the future of cultural expressions. This summit offers a unique opportunity to hear from top experts, engage in insightful discussions, and explore groundbreaking cultural innovations. Whether you're a festival organizer, artist, or cultural advocate.",
    "You'll have the chance to explore real-world cultural initiatives, witness inspiring performances, and connect with others who are driving change in the cultural landscape. Be part of the conversation that's shaping the future of our communities.",
  ],
}) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Line */}
        <div className="flex items-center mb-10">
          <div className="w-10 h-1 bg-[#0D0D0D] mr-4 rounded-full"></div>
          <h3 className="text-base font-medium tracking-wide text-[#0D0D0D]">
            {subtitle}
          </h3>
        </div>

        <div className="flex flex-col justify-between md:flex-row md:mx-4 items-center ">
          {/* Left Column - Title */}
          <div className="md:w-[400px] w-full mb-10 md:mb-0">
            <h2 className="text-5xl md:text-6xl lg:text-[87px] leading-[1.2] mb-6 text-black">
              {title}
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="md:w-1/2 w-full space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-[#1F1F1F]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-7 gap-6 items-center w-full">
          <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden sm:col-span-3">
            <Image
              src="/images/about-section/about-img-1.png"
              alt="Cultural Performance"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
          <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden sm:col-span-1">
            <Image
              src="/images/about-section/about-img-2.png"
              alt="Traditional Textile"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
          <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden sm:col-span-1">
            <Image
              src="/images/about-section/about-img-3.png"
              alt="Cultural Food"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
          <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden sm:col-span-1">
            <Image
              src="/images/about-section/about-img-4.png"
              alt="Traditional Dance"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
          <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden sm:col-span-1">
            <Image
              src="/images/about-section/about-img-5.png"
              alt="Placeholder Image"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

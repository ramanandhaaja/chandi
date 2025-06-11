"use client";

import React from "react";
import Image from "next/image";

interface ProfileSectionProps {
  title?: string;
  subtitle?: string;
  message?: string;
  name?: string;
  position?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title = '"Celebrating Heritage is our Legacy"',
  subtitle = "Message from Culture Affairs",
  message = "Celebrating our heritage is more than just a nod to the past; it's a vibrant tapestry woven from the stories, traditions, and values that define us. Each festival, each family recipe, and each song passed down through generations is a thread in this rich legacy. It reminds us of where we came from and inspires us to embrace our identity with pride. As we gather to honor our roots, we not only celebrate the diversity that shapes our communities but also strengthen the bonds that connect us all. Let's cherish our heritage, for it is the foundation upon which we build our future.",
  name = "Fadli Zon",
  position = "Minister of Culture Indonesia",
}) => {
  return (
    <section className="relative overflow-hidden bg-[#9D7935] min-h-screen">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full ">
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

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
  {/* Left side - Profile Image */}
  <div className="relative w-full lg:w-1/2 overflow-hidden flex flex-col justify-end items-start">
    {/* Profile Image */}
    <div className="relative w-full h-[600px] lg:h-screen">
      <Image
        src="/images/profile-section/profile-img.png"
        alt="Minister of Culture"
        fill
        priority
        className="object-cover w-full"
      />
      {/* Bottom transparent gold gradient overlay (only left image section) */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-full"
      style={{
        height: "400px",
        background:
          "linear-gradient(180deg, rgba(157,121,53,0) 0%, rgba(157,121,53,0.85) 90%, #9D7935 100%)",
        zIndex: 30,
      }}
    />
  </div>
</div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center">
          {/* Logo/Icon */}
          <div className="mb-6">
            <div className="w-12 h-12 relative mx-auto">
              <Image
                src="/chandi-logo.svg"
                alt="Culture Affairs Logo"
                width={48}
                height={48}
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-white/80 text-sm uppercase tracking-wider mb-6 text-center">
            {subtitle}
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-center">
            {title}
          </h2>

          {/* Message */}
          <p className="text-white/80 text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            {message}
          </p>

          {/* Signature */}
          <div className="mt-8 text-center">
            <p className="text-white font-medium text-lg">{name}</p>
            <p className="text-white/70 text-sm mt-1">{position}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

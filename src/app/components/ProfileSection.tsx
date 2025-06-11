"use client";

import React from 'react';
import Image from 'next/image';

interface ProfileSectionProps {
  title?: string;
  subtitle?: string;
  message?: string;
  name?: string;
  position?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title = '"Celebrating Heritage is our Legacy"',
  subtitle = 'Message from Culture Affairs',
  message = "Celebrating our heritage is more than just a nod to the past; it's a vibrant tapestry woven from the stories, traditions, and values that define us. Each festival, each family recipe, and each song passed down through generations is a thread in this rich legacy. It reminds us of where we came from and inspires us to embrace our identity with pride. As we gather to honor our roots, we not only celebrate the diversity that shapes our communities but also strengthen the bonds that connect us all. Let's cherish our heritage, for it is the foundation upon which we build our future.",
  name = 'Fadli Zon',
  position = 'Minister of Culture Indonesia'
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Gold background */}
      <div className="absolute inset-0 bg-amber-600 z-0"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
          <Image 
            src="/placeholder.svg" 
            alt="Minister of Culture" 
            fill
            className="object-cover object-center"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center">
  {/* Logo/Icon */}
  <div className="mb-6 flex justify-center">
    <div className="w-12 h-12 relative">
      <Image 
        src="/placeholder.svg" 
        alt="Culture Affairs Logo" 
        width={48}
        height={48}
      />
    </div>
  </div>
  <p className="text-white text-sm mb-8 text-center">{subtitle}</p>
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-center">
    {title}
  </h2>
  <p className="text-white text-base md:text-lg mb-12 leading-relaxed text-center">
    {message}
  </p>
  <div className="mt-auto">
    <p className="text-white font-medium text-center">{name} - {position}</p>
  </div>
</div>
      </div>
    </section>
  );
};

export default ProfileSection;

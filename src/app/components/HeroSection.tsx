import React from 'react';

interface HeroSectionProps {
  title?: string[];
  subtitle?: string;
  date?: string;
  location?: string;
  scrollText?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = ['BRIDGING CULTURES', 'INSPIRING INNOVATION'],
  subtitle = 'CHANDI2025 Summit',
  date = '14th October 2025',
  location = 'Bali, Indonesia',
  scrollText = 'Scroll to Explore'
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section with Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/90 via-amber-400/80 to-teal-700/90 z-0">
        {/* Pattern overlay using Tailwind's built-in utilities */}
        <div className="absolute inset-0 opacity-40 z-0 bg-opacity-20" 
             style={{
               backgroundImage: `radial-gradient(circle, transparent 20%, rgba(0,0,0,0.06) 20%, rgba(0,0,0,0.06) 21%, transparent 21%, transparent 34%, rgba(0,0,0,0.04) 34%, rgba(0,0,0,0.04) 35%, transparent 35%)`,
               backgroundSize: '4px 4px'
             }}>
        </div>
        {/* Darkening overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-white text-center">
        {/* Logo/Icon */}
        <div className="mb-16 transform transition-all duration-700 hover:scale-110">
          <div className="w-20 h-20 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white drop-shadow-lg">
              <path d="M50 5 L65 30 L95 35 L70 55 L75 85 L50 70 L25 85 L30 55 L5 35 L35 30 Z" />
            </svg>
          </div>
        </div>
        
        {/* Main Heading - Split into two lines with increased spacing */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.1em] mb-8 leading-tight text-white drop-shadow-md">
          {title.map((line, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 hover:tracking-[0.15em] ${index < title.length - 1 ? 'mb-3' : ''}`}
            >
              {line}
            </div>
          ))}
        </h1>
        
        {/* Summit Title */}
        <div className="mt-12 mb-20">
          <h2 className="text-2xl md:text-3xl tracking-[0.05em] text-white/90 drop-shadow-sm">
            {subtitle}
          </h2>
        </div>
        
        {/* Date and Location with Line */}
        <div className="w-full max-w-xl flex items-center justify-between mt-16">
          <div className="text-left text-lg font-light text-white/90 transition-all duration-500 hover:text-white hover:translate-x-[-5px]">
            {date}
          </div>
          <div className="flex-1 mx-6 h-px bg-white opacity-70"></div>
          <div className="text-right text-lg font-light text-white/90 transition-all duration-500 hover:text-white hover:translate-x-[5px]">
            {location}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center">
          <div className="text-sm font-light tracking-[0.25em] mb-3 text-white/80 transition-all duration-500 hover:text-white">
            {scrollText}
          </div>
          <div className="animate-bounce transition-transform">
            <svg className="w-6 h-6 text-white/80 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

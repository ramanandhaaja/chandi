import React from 'react';
import Image from 'next/image';

interface SponsorSectionProps {
  title?: string;
  subtitle?: string;
}

const SponsorSection: React.FC<SponsorSectionProps> = ({
  title = 'Meet out sponsors who help to bring our culture alive',
  subtitle = 'Sponsorship',
}) => {
  // Sample sponsor logos - each represents a different sponsor
  // In a real application, these would likely come from a database or CMS
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/images/sponsor-section/sponsor1.png' },
    { id: 2, name: 'Sponsor 2', logo: '/images/sponsor-section/sponsor2.png' },
    { id: 3, name: 'Sponsor 3', logo: '/images/sponsor-section/sponsor3.png' },
    { id: 4, name: 'Sponsor 4', logo: '/images/sponsor-section/sponsor4.png' },
    { id: 5, name: 'Sponsor 5', logo: '/images/sponsor-section/sponsor5.png' },
    { id: 6, name: 'Sponsor 6', logo: '/images/sponsor-section/sponsor6.png' },
    { id: 7, name: 'Sponsor 7', logo: '/images/sponsor-section/sponsor7.png' },
    { id: 8, name: 'Sponsor 8', logo: '/images/sponsor-section/sponsor8.png' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Line */}
        <div className="flex items-center mb-8">
          <div className="w-10 h-0.5 bg-black mr-3"></div>
          <h3 className="text-sm font-medium text-black">{subtitle}</h3>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">
          {title}
        </h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="border border-[#E9D7B6] rounded-lg p-4 md:p-6 flex items-center justify-center hover:shadow-sm transition-shadow"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={40}
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;

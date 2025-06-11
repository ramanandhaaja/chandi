import React from 'react';
import Image from 'next/image';

interface Host {
  name: string;
  role: string;
  image: string;
}

interface HostSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  hosts?: Host[];
}

const HostSection: React.FC<HostSectionProps> = ({
  title = 'Meet Our Hosts:',
  subtitle = 'Our Host',
  description = 'The CHANDI 2025 Summit is organized by a group of enthusiastic cultural pioneers and community leaders. Our hosts are committed to shaping the future of culture by uniting the most creative thinkers in art, heritage, and social innovation.',
  hosts = [
    {
      name: 'Jonathan Reid',
      role: 'Cultural Director',
      image: '/placeholder.svg'
    },
    {
      name: 'Maya Chen',
      role: 'Community Engagement',
      image: '/placeholder.svg'
    },
    {
      name: 'David Okafor',
      role: 'Innovation Lead',
      image: '/placeholder.svg'
    },
    {
      name: 'Sophia Martinez',
      role: 'Heritage Specialist',
      image: '/placeholder.svg'
    }
  ]
}) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0">
            {/* Section Label with Line */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-0.5 bg-black mr-3"></div>
              <p className="text-sm font-medium text-black">{subtitle}</p>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              {title}
            </h2>

            {/* Description */}
            <p className="text-base text-black leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Column - Custom Host Images Grid */}
          <div className="md:w-3/5 w-full">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              
              
              {/* Right column - contains top-right and bottom-right images with vertical offset */}
              <div className="flex flex-col justify-between space-y-3 md:space-y-4 pt-8 md:pt-12">
                {/* Top right image - Smaller */}
                <div className="relative rounded-2xl overflow-hidden h-[180px] md:h-[200px] w-full">
                  <Image
                    src={hosts[1]?.image || '/placeholder.svg'}
                    alt={hosts[1]?.name || 'Host 2'}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                
                {/* Bottom right image - Larger, taller */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] md:h-[350px] w-full">
                  <Image
                    src={hosts[3]?.image || '/placeholder.svg'}
                    alt={hosts[3]?.name || 'Host 4'}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>


              {/* Left column - contains top-left and bottom-left images */}
              <div className="flex flex-col space-y-3 md:space-y-4">
                {/* Top left image - Larger, taller */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] md:h-[350px] w-full">
                  <Image
                    src={hosts[0]?.image || '/placeholder.svg'}
                    alt={hosts[0]?.name || 'Host 1'}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                
                {/* Bottom left image - Smaller */}
                <div className="relative rounded-2xl overflow-hidden h-[180px] md:h-[200px] w-full">
                  <Image
                    src={hosts[2]?.image || '/placeholder.svg'}
                    alt={hosts[2]?.name || 'Host 3'}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;

import React from 'react';

interface WhoSectionProps {
  title?: string;
  subtitle?: string;
}

const WhoSection: React.FC<WhoSectionProps> = ({
  title = 'Who Should Attend',
  subtitle = 'For Whom?',
}) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Header with Line */}
    <div className="flex items-center mb-10">
      <div className="w-10 h-1 bg-[#0D0D0D] mr-4 rounded-full"></div>
      <h3 className="text-base font-medium tracking-wide text-[#0D0D0D]">{subtitle}</h3>
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
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center w-full">
      {/* Business Man */}
      <div className="bg-white rounded-full border border-solid border-[#D49300] p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg">
        <div className="w-16 h-16 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zm-4 11v-6h16v6H4z"/>
          </svg>
        </div>
        <p className="text-center font-medium">Business Man</p>
      </div>
      
      {/* Investors */}
      <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
        <div className="w-16 h-16 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h16v12zM8 8h8v2H8zm0 4h8v2H8z"/>
          </svg>
        </div>
        <p className="text-center text-gray-500 font-medium">Investors</p>
      </div>
      
      {/* Founder */}
      <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
        <div className="w-16 h-16 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M19 8h-1.81c-.45-.78-1.07-1.45-1.82-1.96l.93-.93c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0l-1.47 1.47C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L9.11 3.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.93.93C7.88 6.55 7.26 7.22 6.81 8H5c-.55 0-1 .45-1 1s.45 1 1 1h1.09c-.05.33-.09.66-.09 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .34.04.67.09 1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.09c.05-.33.09-.66.09-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.34-.04-.67-.09-1H19c.55 0 1-.45 1-1s-.45-1-1-1zm-6 8h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm0-4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1z"/>
          </svg>
        </div>
        <p className="text-center text-gray-500 font-medium">Founder</p>
      </div>
      
      {/* Developers */}
      <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
        <div className="w-16 h-16 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
        <p className="text-center text-gray-500 font-medium">Developers</p>
      </div>
    </div>
    
    {/* Description Box */}
    <div className="mt-12 border border-gray-200 rounded-lg p-8 text-center">
      <p className="text-gray-700 leading-relaxed">
        Dive deeper into the transformative power of the Culture Summit, a pivotal event designed to
        cultivate collaboration among teams, enhance employee engagement, spark innovative ideas, and
        ensure organizations stay ahead in an ever-evolving business landscape. This summit serves as a
        platform for sharing insights, fostering connections, and igniting a culture of creativity that
        empowers employees to thrive and contribute to the company&apos;s success.
      </p>
    </div>
  </div>
</section>
  );
};

export default WhoSection;

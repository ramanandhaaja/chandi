import React from "react";

const UnderConstructions: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 bg-yellow-50 rounded-lg shadow-md border border-yellow-200">
      <div className="mb-4 animate-bounce">
        {/* Construction Icon (SVG) */}
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#FDE68A" />
          <path d="M7 17h10M8.5 13l1.5-6h4l1.5 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="19" r="1" fill="#D97706"/>
          <circle cx="15" cy="19" r="1" fill="#D97706"/>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-yellow-800 mb-2">Under Construction</h2>
      <p className="text-yellow-700 text-center max-w-md">
        This section is currently under construction.<br />
        Please check back soon for updates!
      </p>
    </section>
  );
};

export default UnderConstructions;

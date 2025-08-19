import React from "react";

interface HotelCardProps {
  index?: number;
  name: string;
  description: string;
  logoSrc?: string;
  reservationUrl?: string;
  promoCode?: string;
}

export default function HotelCard({
  index = 1,
  name,
  description,
  logoSrc,
  reservationUrl,
  promoCode,
}: HotelCardProps) {
  return (
    <div className="w-full rounded-2xl p-6 md:p-10 ">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
        {/* Logo */}
        {logoSrc ? (
          <div className="flex-shrink-0">
            <img
              src={logoSrc}
              alt={`${name} logo`}
              className="w-24 h-24 md:w-28 md:h-28 object-contain"
            />
          </div>
        ) : null}

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#CD9F00] text-[#3A2A1E] flex items-center justify-center font-semibold">
              {index}
            </div>
            <h3 className="text-2xl md:text-4xl font-semibold text-[#3A2A1E]">{name}</h3>
          </div>

          <p className="text-[#5C5149] leading-relaxed mb-6 max-w-4xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            {reservationUrl ? (
              <a
                href={reservationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#EADCC5] hover:bg-[#e1cfaf] text-[#6B4F29] font-semibold py-3 px-6 rounded-full transition-colors shadow-sm"
              >
                Reservation Link &gt;
              </a>
            ) : null}

            {promoCode ? (
              <div className="text-sm md:text-base text-[#5C5149]">
                <span className="opacity-80 mr-2">Promo Code:</span>
                <span className="font-extrabold tracking-wide text-[#2C241D]">
                  {promoCode}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

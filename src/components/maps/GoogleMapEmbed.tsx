import React from "react";

interface GoogleMapEmbedProps {
  query?: string; // e.g., "Sanur, Bali" or a full address
  zoom?: number; // 1-20
  className?: string; // container classes
  heightClass?: string; // e.g., "h-64"
  embedUrl?: string; // full custom embed url if you have one
  title?: string;
}

export default function GoogleMapEmbed({
  query = "Sanur, Bali",
  zoom = 13,
  className = "",
  heightClass = "h-96 md:h-[500px]",
  embedUrl,
  title = "Google Map",
}: GoogleMapEmbedProps) {
  const src = embedUrl
    ? embedUrl
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className={`w-full ${heightClass}`}>
        <iframe
          title={title}
          src={src}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

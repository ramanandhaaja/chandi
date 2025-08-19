"use client";
import { useState } from "react";
import HeroAlternative from "@/components/HeroAlternative";
import HeaderSection from "@/components/HeaderSection";

import FooterSection from "@/components/FooterSection";
import GalleryMaps from "@/components/maps/GalleryMaps";
import HotelCard from "@/components/maps/HotelCard";
import GoogleMultiMarkerMap from "@/components/maps/GoogleMultiMarkerMap";

// photo gallery mock data
const photos = [
  {
    imageUrl: "/images/photo/photo1.jpeg",
    title: "Photo 1",
  },
  {
    imageUrl: "/images/photo/photo2.jpeg",
    title: "Photo 3",
  },
  {
    imageUrl: "/images/photo/photo3.jpeg",
    title: "Photo 3",
  },
];

const hotels = [
  {
    index: 1,
    name: "Hyatt Regency Bali",
    description:
      "A Luxury Beachfront Resort in Bali Spend your vacation at Hyatt Regency Bali, a beachfront hotel in Sanur built on nine hectares of lush tropical gardens. Relax in the comfort of one of our 373 rooms or swim in one of our three pools. With plenty of things to do in the resort and outside, your stay will be a memorable and restful break. The hotel is conveniently located near Bali’s main tourist attractions, and the International Airport Ngurah Rai is just 14 kilometers away. Hyatt Regency Bali is a CHSE certified and ISO 22000 accredited hotel.  ",
    reservationUrl:
      "https://www.hyatt.com/en-US/hotel/indonesia/hyatt-regency-bali/dpsbl?corp_id=G-RRKC",
    promoCode: "CHANDI2025",
    logoSrc: "/images/hotel/hyatt/logo.png",
  },
  {
    index: 2,
    name: "Segara Village Hotel",
    description:
      "For tourism industry in Sanur, Segara Village Hotel has played a significant role in bringing the vibrant little village to the forefront. it began in the early 1950's when Mr. and Mrs. Kompiang scraped up everything they had and bought a large seaside property in Sanur, which was mostly covered with Pandanus trees and largely inhabited by coconut groves. The Segara Village Hotel, a 35-room hotel was erected there. It was the first of such establishment in that area",
    reservationUrl: "https://linktr.ee/segaravillagehotel?fbclid=PAQ0xDSwLUDXhleHRuA2FlbQIxMQABp3_8PjtNJnjXQiiUN_Pr3xT4cVWp_FP00oZmk1xYSYosCYhW_mJiN5e8jE-Q_aem__DjKqLonaZo5_woUxXS8nQ",
    promoCode: "CHANDI2025",
    logoSrc: "/images/hotel/sagara/logo.png",
  },
  {
    index: 3,
    name: "Prime Plaza Suites Sanur Bali",
    description:
      "Welcome to Prime Plaza Suites Sanur Bali, a distinguished four-star all-suites family resort situated in the heart of Bali's captivating coastal town. Recognized as the recipient of Australia's Holiday with Kids Reader's Choice Best Family Resorts award for an impressive seven consecutive years, our resort offers the best family accommodation near pristine Sanur Beach and bustling shopping and dining districts.",
    reservationUrl: "https://spps.pphotels.com",
    promoCode: "CHANDI2025",
    logoSrc: "/images/hotel/prime/logo.png",
  }
];

export default function MapsPage() {
  // Selected marker/hotel (0-based). Default to 0 => hotel no 1
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      <HeroAlternative
        title="MAPS AND LEGEND"
        subtitle="Explore the interactive maps for the CHANDI SUMMIT 2025, showcasing key venues and nearby accommodations. Our detailed legend highlights various hotels and lodging options to enhance your stay in Bali. Whether you're looking for luxury resorts or budget-friendly stays, find the perfect place to rest after a day of insightful discussions. Navigate easily with our user-friendly interface and plan your summit experience effectively."
      />
      <section className="py-0 px-4 md:pl-0 lg:px-0 bg-white">
        <div className="max-w mx-auto">
          <div className="flex flex-col md:flex-row md:gap-0 items-start md:items-start">
            {/* Left Column - Title and Description */}
            <div className="md:w-1/4 w-full mb-10 md:mb-0">
              <div className="space-y-4">
                <GoogleMultiMarkerMap
                  locations={[
                    {
                      title: "Hyatt Regency Bali",
                      position: { lat: -8.7022119, lng: 115.2632459 },
                      pinColor: "#EA4335",
                    },
                    {
                      title: "Segara Village Hotel",
                      position: { lat: -8.6827939, lng: 115.2628407 },
                      pinColor: "#34A853",
                    },
                    {
                      title: "Prime Plaza Suites Sanur Bali",
                      position: { lat: -8.6938113, lng: 115.2589633 },
                      pinColor: "#4285F4",
                    },
                  ]}
                  zoom={13}
                  heightClass="h-[200px] md:h-[500px]"
                  className="w-full"
                  onMarkerClick={(i) => setSelectedIdx(i)}
                />
              </div>
            </div>
            {/* Right Column - Resource List */}
            <div className="md:w-3/4 w-full">
              <section>
                
                {/* Nearby Hotels */}
                <div className="mt-16 space-y-10">
                  {hotels[selectedIdx] && <HotelCard key={hotels[selectedIdx].index} {...hotels[selectedIdx]} />}
                </div>
              </section>

              {/* GalleryMaps content={photos} */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

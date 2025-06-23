"use client";

import HeroAlternative from "@/components/HeroAlternative";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import SpeakersGrid from "@/components/speakers/SpeakersGrid";

export default function SpeakersPage() {
  return (
    <div>
      <HeaderSection />
      <HeroAlternative
        title="SPEAKERS"
        subtitle="Stay updated with the latest happenings in Indonesia! 
        Our 'Speakers' section brings you the freshest insights into cultural events, art showcases, and community initiatives. 
        Dive into the dynamic blend of tradition and innovation that shapes Indonesia today."
      />
      <SpeakersGrid />
      <FooterSection />
    </div>
  );
}

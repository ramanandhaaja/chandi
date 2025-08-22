"use client";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import HeroAlternative from "@/components/HeroAlternative";
import ResourcesSection from "@/components/ResourcesSection";

export default function Resources() {
  return (
    <div>
      {/* Header Section */}
      <HeaderSection />

      <HeroAlternative
        title="Resources"
        subtitle="Download essential resources and PDFs related to the CHANDI 2025 Summit. Access our comprehensive guide, speaker bios, and event schedules to enhance your experience. Stay informed and engaged with the latest updates and materials that will help you make the most of this cultural gathering."      />

      <ResourcesSection 
        page="resources"/>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

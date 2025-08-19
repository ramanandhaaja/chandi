"use client";

//import { useState } from "react";
import FooterSection from "@/components/FooterSection";
import HeroAlternative from "@/components/HeroAlternative";
import RegistrationForm from "@/components/meeting_request/RegistrationForm";
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";

export default function RegisterPage() {
  //const [country, setCountry] = useState("");
  //const [positionType, setPositionType] = useState("");

  return (
    <div className="relative overflow-hidden ">
      {/* Header Section */}
      <HeaderSection />
      {/* Hero Section */}
      <HeroAlternative
        title="MEETING REQUEST"
        subtitle="Complete the form below to request a meeting time for the Bilateral Summit. Please provide the date, day, and time of your preferred meeting, along with your delegation or country of origin, and specify who you wish to meet with. We look forward to facilitating your discussions!"
      />
      {/* Main content */}
      <div
        className="relative overflow-hidden py-8 md:py-8 px-6 md:px-12 lg:px-24 
      mx-auto "
      >
        {/* Background pattern */}
        <div className="absolute bottom-0 left-0 z-0  ">
          <Image
            src="/images/register/bg-candi.png"
            alt="pattern"
            width={1600}
            height={1100}
            className="h-full w-auto object-contain object-left-bottom"
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10">
          {/* Registration Form */}
          <RegistrationForm />
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

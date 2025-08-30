"use client";

//import { useState } from "react";
import FooterSection from "@/components/FooterSection";
import RegisterOption from "@/components/register/RegisterOption";
import HeroAlternative from "@/components/HeroAlternative";
import RegistrationForm from "@/components/register/RegistrationForm";
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
        title="REGISTER AND ATTEND"
        subtitle="Sign up now to explore Indonesia's fascinating heritage through 
        an engaging virtual tour. Immerse yourself in its colorful cultural displays and breathtaking artistic expressions, 
        blending age-old traditions with contemporary innovation—all from the comfort of your own home."
      />
      {/* Main content */}
      <div
        className="relative overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-24 
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
           {/* <RegisterOption />
         Registration Form 
          <RegistrationForm />*/}
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

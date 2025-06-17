"use client";

//import { useState } from "react";
import FooterSection from "@/components/FooterSection";
import RegisterOption from "@/components/register/RegisterOption";
import HeroAlternative from "@/components/HeroAlternative";
import RegistrationForm from "@/components/register/RegistrationForm";
import HeaderSection from "@/components/HeaderSection";

export default function RegisterPage() {
  //const [country, setCountry] = useState("");
  //const [positionType, setPositionType] = useState("");

  return (
    <div className="relative overflow-hidden ">
    {/* Header Section */}
    <HeaderSection />
      {/* Hero Section */}
      <HeroAlternative
        title="Register And Attend"
        subtitle="Sign up now to explore Indonesia's fascinating heritage through 
        an engaging virtual tour. Immerse yourself in its colorful cultural displays and breathtaking artistic expressions, 
        blending age-old traditions with contemporary innovation—all from the comfort of your own home."
      />
      {/* Main content */}
      <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Registration Option Section */}

        <RegisterOption />
        {/* Registration Form */}
        <RegistrationForm />
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import HeroAlternative from "@/components/HeroAlternative";
import ContactsOption from "@/components/contact_us/ContactsOption";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      <HeroAlternative
        title="CONTACT US"
        subtitle="Have questions or need assistance? Reach out to us! Our friendly team is here to help you with 
        any inquiries you may have. Whether you need support or just want to say hello, 
        we’d love to hear from you. Contact us today!"
      />
      {/* Wrapper div for the background pattern */}
      <div className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 bottom-0 z-0 ">
          <Image
            src="/pattern-bg.svg"
            alt="pattern"
            width={600}
            height={600}
            className="object-contain"
            quality={100}
            priority
          />
        </div>

        <div className="relative z-10">
          {/* Contacts Option Section */}
          <ContactsOption />
          <FAQSection />
        </div>
      </div>
      <FooterSection />
    </>
  );
}

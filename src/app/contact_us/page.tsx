import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import HeroAlternative from "@/components/HeroAlternative";
import ContactsOption from "@/components/contact_us/ContactsOption";

export default function ContactUsPage() {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      <HeroAlternative
        title="Contact Us"
        subtitle="Have questions or need assistance? Reach out to us! Our friendly team is here to help you with 
        any inquiries you may have. Whether you need support or just want to say hello, 
        we’d love to hear from you. Contact us today!"
      />
      {/* Contacts Option Section */}
      <ContactsOption />
      <FAQSection/>
      <FooterSection />
    </>
  );
}

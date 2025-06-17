import FooterSection from "@/components/FooterSection";
import HeroAlternative from "@/components/HeroAlternative";
import ContactsOption from "@/components/contact-us/ContactsOption";
import Faq from "@/components/contact-us/Faq";

export default function ContactUsPage() {
  return (
    <>
      <HeroAlternative
        title="Contact Us"
        subtitle="Have questions or need assistance? Reach out to us! Our friendly team is here to help you with 
        any inquiries you may have. Whether you need support or just want to say hello, 
        we’d love to hear from you. Contact us today!"
      />
      {/* Contacts Option Section */}
      <ContactsOption />
      <Faq />
      <FooterSection />
    </>
  );
}

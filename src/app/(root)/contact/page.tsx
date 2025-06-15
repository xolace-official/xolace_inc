import BackToTopButton from "@/components/Button/Page";
import ContactCTA from "@/components/Contact/contact-cta";
import ContactFAQ from "@/components/Contact/contact-faq";
import ContactForm from "@/components/Contact/contact-form";
import ContactHero from "@/components/Contact/contact-hero";
import ContactInfo from "@/components/Contact/contact-info";
import OfficeLocations from "@/components/Contact/office-location";

export default function contactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <OfficeLocations />
      <ContactCTA />
      <ContactFAQ />
      <BackToTopButton/>
    </>
  );
}

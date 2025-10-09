import BackToTopButton from "@/components/Button/Page";
import AccessibilityPrivacy from "@/components/Company/accessabilty-privacy";
import BrandShowcase from "@/components/Company/brand-showcase";
import CompanyHero from "@/components/Company/hero";
import ServicesSupport from "@/components/Company/services-support";

export const metadata = {
  title: "Company",
  description:
    "Learn about Xolace Inc — the company behind the social platform empowering people to share experiences, find emotional support, and connect with mental health professionals. Discover our brand vision, accessibility commitment, and dedication to creating a safe, inclusive, and privacy-focused online community.",
};

export default function CompanyPage () {
  return (
    <>
    <CompanyHero/>
      <BrandShowcase/>
      <ServicesSupport/>
      {/* <SupportFinder/> */}
      {/* <SuccessStories/> */}
      {/* <CommunityShowcase/> */}
      <AccessibilityPrivacy/>
      <BackToTopButton/>
    </>
  );
}

import BackToTopButton from "@/components/Button/Page";
import AccessibilityPrivacy from "@/components/Company/accessabilty-privacy";
import BrandShowcase from "@/components/Company/brand-showcase";
import CompanyHero from "@/components/Company/hero";
import ServicesSupport from "@/components/Company/services-support";

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

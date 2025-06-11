import CompanyHero from "@/components/Company/hero"
import BrandShowcase from "@/components/Company/Brand"
import ServicesSupport from "@/components/Company/services-support"
import SuccessStories from "@/components/Company/succes-stories"
import CommunityShowcase from "@/components/Company/community-showcase"
import ExpertTeam from "@/components/Company/expert-team"
import SupportFinder from "@/components/Company/support-finder"
import AccessibilityPrivacy from "@/components/Company/accessabilty-privacy"
import BackToTopButton from "@/components/Button/Page"
export default function Page() {
  return (
    <main>
      <CompanyHero />
      <BrandShowcase />
      <ServicesSupport />
      <SuccessStories />
      <CommunityShowcase />
      <ExpertTeam />
      <SupportFinder />
      <AccessibilityPrivacy />
      <BackToTopButton/>
    </main>
  )
}
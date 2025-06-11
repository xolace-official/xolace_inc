import Hero from "@/components/About/Hero";
import MissionVision from "@/components/About/MissionVission";
import OurStory from "@/components/About/OurStory";
import Team from "@/components/About/Team";
import CTA from "@/components/About/CTA";
import CommunityImpact from "@/components/About/CommunityImpact";
import Value from "@/components/About/Value";
import BackToTopButton from "@/components/Button/Page";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <OurStory />
      <Value />
      <CommunityImpact/>
      <Team />
      <CTA />
      <BackToTopButton/>
    </>
  );
}

import CommunityImpact from "@/components/About/CommunityImpact";
import CTA from "@/components/About/CTA";
import MissionVision from "@/components/About/MissionVission";
import OurStory from "@/components/About/OurStory";
import Team from "@/components/About/Team";
import TheFutureWeEnvision from "@/components/About/the-future-we-envision";
import Values from "@/components/About/Value";
import BackToTopButton from "@/components/Button/Page";
import ExpertTeam from "@/components/About/epxert-team";
import Hero from "@/components/About/Hero";
export default function AboutPage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <TheFutureWeEnvision />
      <OurStory />
      <Values />
      <Team />
      {/* <ExpertTeam /> */}
      <CommunityImpact />
      <CTA />
      <BackToTopButton />
    </>
  );
}

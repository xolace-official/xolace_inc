import CommunityImpact from "@/components/About/CommunityImpact";
import CTA from "@/components/About/CTA";
import MissionVision from "@/components/About/MissionVission";
import OurStory from "@/components/About/OurStory";
import Team from "@/components/About/Team";
import TheFutureWeEnvision from "@/components/About/the-future-we-envision";
import Values from "@/components/About/Value";
import BackToTopButton from "@/components/Button/Page";
import Hero from "@/components/About/Hero";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn about Xolace — a hybrid platform designed to help people share their thoughts, connect with supportive peers, and access professional mental health support. Discover our story, mission, and the vision driving our commitment to create a safe space for healing and authentic connection.",
};


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

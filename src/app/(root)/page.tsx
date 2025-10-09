import WhyXolaceSection from "@/components/Landing/WhyXolace";
import HeroSection from "../../components/Landing/HeroSection";
import HowXolaceWorks from "@/components/Landing/HowItWorks";
import WhatMakesXolaceDifferent from "@/components/About/WhatMakesXolaceDifferent";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyXolaceSection />
      <HowXolaceWorks />
      <WhatMakesXolaceDifferent/>
    </main>
  );
}

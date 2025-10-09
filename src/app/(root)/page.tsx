import WhyXolaceSection from "@/components/Landing/WhyXolace";
import HeroSection from "../../components/Landing/HeroSection";
import HowXolaceWorks from "@/components/Landing/HowItWorks";
import XolaceComparisonSection from "@/components/About/XolaceComparisonSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyXolaceSection />
      <HowXolaceWorks />
      <XolaceComparisonSection/>
    </main>
  );
}

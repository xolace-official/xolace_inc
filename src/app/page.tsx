import WhyXolaceSection from "@/components/Landing/WhyXolace";
import HeroSection from "../components/Landing/HeroSection";
import HowXolaceWorks from "@/components/Landing/HowItWorks";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <WhyXolaceSection />
        <HowXolaceWorks />
      </div>
    </>
  );
}

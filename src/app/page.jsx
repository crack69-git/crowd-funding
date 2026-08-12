import HeroSection from "@/components/mainpage/HeroSection";
import ImpactSection from "@/components/mainpage/ImpactSection";
import Testimonials from "@/components/mainpage/Testimonials";
import TopCampaigns from "@/components/mainpage/TopCampaigns";
import HowItWorks from "@/components/mainpage/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopCampaigns />
      <HowItWorks />
      <ImpactSection />
      <Testimonials />
    </div>
  );
}

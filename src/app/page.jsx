import HeroSection from "@/components/mainpage/HeroSection";
import TopCampaigns from "@/components/mainpage/TopCampaigns";
import HowItWorks from "@/components/mainpage/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopCampaigns />
      <HowItWorks />
    </div>
  );
}

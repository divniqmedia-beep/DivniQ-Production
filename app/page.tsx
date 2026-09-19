import HeroSection from "@/components/home/HeroSection";
import ProofStats from "@/components/home/ProofStats";
import IntroSection from "@/components/home/IntroSection";
import PositioningSection from "@/components/home/PositioningSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import PoliticalFlagship from "@/components/home/PoliticalFlagship";
import BusinessModels from "@/components/home/BusinessModels";
import BigIdeaParallax from "@/components/home/BigIdeaParallax";
import PhilosophySection from "@/components/home/PhilosophySection";
import AgencyPartnership from "@/components/home/AgencyPartnership";
import FaqSection from "@/components/home/FaqSection";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/*
        No overflow-x-clip here — it breaks position:sticky for
        CapabilitiesGrid + BigIdeaParallax. html already clips x-overflow.
      */}
      <div className="relative z-10 -mt-px rounded-t-[2.5rem] bg-white shadow-[0_-24px_80px_rgba(0,0,0,0.18)] md:rounded-t-[3rem]">
        <ProofStats />
        <IntroSection />
        <PositioningSection />
        <PortfolioSection />
        <CapabilitiesGrid />
        <PoliticalFlagship />
        <BusinessModels />
        <BigIdeaParallax />
        <PhilosophySection />
        <AgencyPartnership />
        <FaqSection />
        <ClosingCta />
      </div>
    </>
  );
}

import { Hero } from "@/components/hero/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { ServicesShowcase } from "@/components/services/ServicesShowcase";
import { BuildGrowManage } from "@/components/sections/BuildGrowManage";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { WhyAdvanta } from "@/components/sections/WhyAdvanta";
import { Process } from "@/components/sections/Process";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ServicesShowcase />
      <BuildGrowManage />
      <WorkPreview />
      <WhyAdvanta />
      <Process />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}

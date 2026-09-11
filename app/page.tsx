import { Hero } from "@/components/hero/Hero";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { ServicesShowcase } from "@/components/services/ServicesShowcase";
import { WhyAdvanta } from "@/components/sections/WhyAdvanta";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkPreview />
      <ServicesShowcase />
      <WhyAdvanta />
      <Process />
      <FinalCTA
        headline="Have a project in mind?"
        description="Let's build something that moves your business forward."
      />
    </>
  );
}

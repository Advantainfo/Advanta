import { WHY_PILLARS } from "@/lib/content/why-advanta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InView } from "@/components/animations/InView";

export function WhyAdvanta() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Advanta"
          title="A digital partner built around outcomes, not deliverables."
        />

        <div className="mt-16 border-t border-hairline">
          {WHY_PILLARS.map((pillar, i) => (
            <InView key={pillar.index} y={20} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-4 border-b border-hairline py-10 transition-colors md:grid-cols-[auto_1fr] md:items-center md:gap-12">
                <span className="font-mono text-6xl leading-none font-medium text-fg-faint transition-colors duration-500 group-hover:text-gradient md:text-7xl">
                  {pillar.index}
                </span>
                <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-12">
                  <h3 className="text-2xl font-semibold tracking-tight text-fg md:w-72 md:shrink-0">
                    {pillar.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}

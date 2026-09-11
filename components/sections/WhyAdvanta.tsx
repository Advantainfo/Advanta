import { WHY_PILLARS } from "@/lib/content/why-advanta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InView } from "@/components/animations/InView";

export function WhyAdvanta() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Advanta"
          title="A digital partner built around outcomes, not deliverables."
          className="mx-auto"
        />

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-14 md:grid-cols-3 md:gap-0">
          {WHY_PILLARS.map((pillar, i) => (
            <InView key={pillar.index} y={20} delay={i * 0.08}>
              <div
                className={
                  i > 0
                    ? "flex flex-col gap-4 text-center md:border-l md:border-hairline md:px-10"
                    : "flex flex-col gap-4 text-center md:px-10"
                }
              >
                <span className="mx-auto font-mono text-sm tabular-nums text-fg-faint">
                  {pillar.index}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-fg">{pillar.title}</h3>
                <p className="text-base leading-relaxed text-fg-muted">{pillar.description}</p>
              </div>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}

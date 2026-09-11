import { Container } from "@/components/ui/Container";
import { InView } from "@/components/animations/InView";

const INPUTS = ["The business", "Target customer", "Competitors", "Positioning", "Goals"];

export function MarketingStrategy() {
  return (
    <section className="border-t border-hairline bg-bg py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <InView>
          <h2 className="max-w-xl text-4xl leading-[1.1] font-semibold tracking-tight text-fg sm:text-5xl">
            Marketing without strategy is just <span className="text-gradient">noise.</span>
          </h2>
        </InView>
        <InView delay={0.1} className="flex flex-col gap-6">
          <p className="max-w-md text-lg leading-relaxed text-fg-muted">
            Before we plan a single post or campaign, we start with the business itself — what it
            sells, who it&apos;s for, who it&apos;s up against, and what growth actually needs to
            look like. The strategy comes first. Execution follows.
          </p>
          <ul className="flex flex-wrap gap-2">
            {INPUTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-hairline bg-bg-panel/40 px-3.5 py-1.5 text-xs font-medium tracking-wide text-fg-muted uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </InView>
      </Container>
    </section>
  );
}

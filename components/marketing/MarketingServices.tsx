import { MARKETING_SERVICES } from "@/lib/content/marketing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InView } from "@/components/animations/InView";

const ACCENTS = ["var(--mkt-yellow)", "var(--mkt-orange)", "var(--mkt-coral)", "var(--mkt-pink)"];

export function MarketingServices() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-hairline bg-bg py-20 md:py-28">
      <Container>
        <SectionHeading title="Everything you need to grow online." />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {MARKETING_SERVICES.map((service, i) => (
            <InView key={service.index} delay={(i % 3) * 0.06} y={16} className="h-full">
              <div
                className="group flex h-full flex-col gap-5 bg-bg-panel/50 p-7 transition-colors duration-300 hover:bg-bg-panel md:p-8"
                style={{ "--accent": ACCENTS[i % ACCENTS.length] } as React.CSSProperties}
              >
                <span className="font-mono text-sm tabular-nums text-fg-faint transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {service.index}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-hairline px-2.5 py-1 text-xs text-fg-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}

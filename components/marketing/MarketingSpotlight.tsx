import { MARKETING_SPOTLIGHTS } from "@/lib/content/marketing";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { InView } from "@/components/animations/InView";
import { cn } from "@/lib/cn";

export function MarketingSpotlight() {
  return (
    <section className="border-t border-hairline bg-bg py-20 md:py-28">
      <Container>
        <h2 className="sr-only">Where we specialize</h2>
        <Eyebrow>Where we specialize</Eyebrow>

        <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-0">
          {MARKETING_SPOTLIGHTS.map((item, i) => (
            <InView key={item.index} delay={i * 0.08}>
              <div
                className={cn(
                  "flex flex-col gap-4 md:px-10",
                  i > 0 && "md:border-l md:border-hairline",
                )}
              >
                <span className="font-mono text-sm text-fg-faint">{item.index}</span>
                <h3 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">
                  {item.headline}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted">{item.description}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
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

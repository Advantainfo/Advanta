import type { Service } from "@/lib/content/services";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/animations/InView";

const ACCENTS = ["var(--blue)", "var(--cyan)", "var(--violet)", "var(--magenta)"];

export function ServiceDetail({ service, position }: { service: Service; position: number }) {
  const accent = ACCENTS[position % ACCENTS.length];
  const reversed = position % 2 === 1;

  return (
    <section id={service.id} className="scroll-mt-28 border-b border-hairline py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
          <div className={reversed ? "lg:order-2" : "lg:order-1"}>
            <InView>
              <span className="font-mono text-7xl leading-none font-medium md:text-8xl" style={{ color: accent }}>
                {service.index}
              </span>
              <p className="mt-4 text-xs font-medium tracking-[0.25em] text-fg-faint uppercase">
                {service.code}
              </p>
            </InView>
          </div>

          <div className={reversed ? "lg:order-1" : "lg:order-2"}>
            <InView>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">
                {service.description}
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
                    {cap}
                  </li>
                ))}
              </ul>
            </InView>
          </div>
        </div>
      </Container>
    </section>
  );
}

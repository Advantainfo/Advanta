import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InView } from "@/components/animations/InView";

const HOME_SERVICES = [
  {
    index: "01",
    accent: "var(--blue)",
    title: "Web Development",
    description: "Websites, web apps, e-commerce and custom digital solutions.",
  },
  {
    index: "02",
    accent: "var(--cyan)",
    title: "Digital Marketing",
    description: "SEO, advertising and strategies designed to generate growth.",
  },
  {
    index: "03",
    accent: "var(--violet)",
    title: "Design & Branding",
    description: "Brands and digital experiences people remember.",
  },
  {
    index: "04",
    accent: "var(--magenta)",
    title: "Ongoing Growth",
    description: "Maintenance, optimization and continuous support.",
  },
] as const;

export function ServicesShowcase() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading title="Everything your business needs digitally." />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.map((service, i) => (
            <InView key={service.index} as="div" delay={i * 0.06} y={16} className="h-full">
              <div
                className="group relative flex h-full flex-col gap-6 bg-bg-panel/50 p-8 transition-colors duration-300 hover:bg-bg-panel"
                style={{ "--accent": service.accent } as React.CSSProperties}
              >
                <span className="font-mono text-sm tabular-nums text-fg-faint transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {service.index}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {service.description}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="mt-auto h-px w-8 origin-left scale-x-100 transition-all duration-300 group-hover:w-12"
                  style={{ background: service.accent }}
                />
              </div>
            </InView>
          ))}
        </div>

        <InView delay={0.2} className="mt-10 flex justify-end">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            Explore all services
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </InView>
      </Container>
    </section>
  );
}

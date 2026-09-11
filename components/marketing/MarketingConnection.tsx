import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/animations/InView";

export function MarketingConnection() {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-bg py-20 md:py-28">
      <Container className="relative flex flex-col items-center text-center">
        <InView>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-hairline bg-bg-panel/60 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-fg uppercase">
              Web Development
            </span>
            <span aria-hidden className="text-lg text-fg-faint">
              +
            </span>
            <span className="rounded-full border border-hairline bg-bg-panel/60 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-fg uppercase">
              Marketing
            </span>
          </div>
        </InView>

        <InView delay={0.08}>
          <h2 className="mt-8 max-w-2xl text-3xl leading-[1.15] font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl">
            Built and grown under <span className="text-gradient">one roof.</span>
          </h2>
        </InView>

        <InView delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            Instead of one agency to build your website and another to market it, Advanta does
            both. We don&apos;t stop when your website goes live — we help bring the right people
            to it.
          </p>
        </InView>

        <InView delay={0.24}>
          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-fg/80"
          >
            Explore Web Development
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </InView>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { InView } from "@/components/animations/InView";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Advanta is a digital studio in Antwerp, Belgium. Here's who we are, what we do, and how we work.",
  path: "/about",
});

const BELIEFS = [
  "Clarity beats cleverness.",
  "A website is a product, not a brochure — it should be maintained like one.",
  "Performance and SEO aren't add-ons. They're part of the build.",
  "Good design earns trust. It doesn't need to shout to do it.",
];

const BELIEF_ACCENTS = ["var(--blue)", "var(--cyan)", "var(--violet)", "var(--magenta)"];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Technology should make business simpler." />

      <section className="relative overflow-hidden py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(55% 65% at 0% 30%, color-mix(in srgb, var(--blue) 14%, transparent), transparent 70%)",
          }}
        />
        <Container className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.4fr_1fr] lg:items-start lg:gap-16">
          <InView>
            <span className="block font-mono text-5xl leading-none font-medium text-fg-faint md:text-6xl">
              01
            </span>
            <Eyebrow as="h2" className="mt-5">
              Who we are
            </Eyebrow>
          </InView>
          <InView delay={0.08}>
            <p className="max-w-2xl text-2xl leading-snug font-medium tracking-tight text-fg md:text-3xl">
              Advanta is a digital studio based in Antwerp. We build websites, digital products
              and marketing systems for businesses that want their digital presence to actually
              do something — not just exist.
            </p>
          </InView>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-hairline py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(55% 65% at 0% 30%, color-mix(in srgb, var(--violet) 14%, transparent), transparent 70%)",
          }}
        />
        <Container className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.4fr_1fr] lg:items-start lg:gap-16">
          <InView>
            <span className="block font-mono text-5xl leading-none font-medium text-fg-faint md:text-6xl">
              02
            </span>
            <Eyebrow as="h2" className="mt-5">
              What we do
            </Eyebrow>
          </InView>
          <InView delay={0.08}>
            <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">
              We work across four disciplines — development, marketing, design and ongoing
              management — because a website that looks good but doesn&apos;t rank, or one that
              ranks but doesn&apos;t convert, isn&apos;t finished. We treat all of it as one
              connected system, not four separate vendors handing off work to each other.
            </p>
          </InView>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-hairline py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(55% 65% at 100% 30%, color-mix(in srgb, var(--magenta) 14%, transparent), transparent 70%)",
          }}
        />
        <Container className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-start lg:gap-16">
          <InView delay={0.08} className="lg:order-1">
            <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">
              Every project starts with a real conversation about the business behind it — what
              it sells, who it&apos;s for, and what &ldquo;working&rdquo; actually looks like for
              that business. Design and code come after that, not before it. We&apos;d rather
              spend an extra hour understanding the problem than build the wrong solution
              quickly.
            </p>
          </InView>
          <InView className="lg:order-2 lg:text-right">
            <span className="block font-mono text-5xl leading-none font-medium text-fg-faint md:text-6xl">
              03
            </span>
            <Eyebrow as="h2" className="mt-5 lg:justify-end">
              How we work
            </Eyebrow>
          </InView>
        </Container>
      </section>

      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <InView>
            <Eyebrow as="h2">What we believe</Eyebrow>
          </InView>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {BELIEFS.map((belief, i) => (
              <InView key={belief} delay={i * 0.06} className="h-full">
                <div
                  className="group flex h-full flex-col gap-8 bg-bg-panel/50 p-8 transition-colors duration-300 hover:bg-bg-panel md:p-10"
                  style={{ "--accent": BELIEF_ACCENTS[i % BELIEF_ACCENTS.length] } as React.CSSProperties}
                >
                  <span className="font-mono text-sm tabular-nums text-fg-faint transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-2xl leading-snug font-medium tracking-tight text-fg md:text-3xl">
                    {belief}
                  </p>
                  <span
                    aria-hidden
                    className="mt-auto h-px w-8 origin-left transition-all duration-300 group-hover:w-12"
                    style={{ background: "var(--accent)" }}
                  />
                </div>
              </InView>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

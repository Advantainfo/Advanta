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

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Technology should make business simpler." />

      <section className="py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.4fr_1fr]">
          <InView>
            <Eyebrow as="h2">Who we are</Eyebrow>
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

      <section className="border-t border-hairline py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.4fr_1fr]">
          <InView>
            <Eyebrow as="h2">What we do</Eyebrow>
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

      <section className="border-t border-hairline py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.4fr_1fr]">
          <InView>
            <Eyebrow as="h2">How we work</Eyebrow>
          </InView>
          <InView delay={0.08}>
            <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">
              Every project starts with a real conversation about the business behind it — what
              it sells, who it&apos;s for, and what &ldquo;working&rdquo; actually looks like for
              that business. Design and code come after that, not before it. We&apos;d rather
              spend an extra hour understanding the problem than build the wrong solution
              quickly.
            </p>
          </InView>
        </Container>
      </section>

      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <InView>
            <Eyebrow as="h2">What we believe</Eyebrow>
          </InView>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {BELIEFS.map((belief, i) => (
              <InView key={belief} delay={i * 0.06}>
                <p className="text-2xl leading-snug font-medium tracking-tight text-fg md:text-3xl">
                  {belief}
                </p>
              </InView>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

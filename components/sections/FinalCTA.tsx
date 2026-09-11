"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { InView } from "@/components/animations/InView";
import { SITE } from "@/lib/constants";

const HeroParticles = dynamic(() => import("@/components/hero/HeroParticles").then((m) => m.HeroParticles), {
  ssr: false,
});

type FinalCTAProps = {
  eyebrow?: string;
  headline?: React.ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showEmail?: boolean;
};

export function FinalCTA({
  eyebrow = "Ready when you are",
  headline = (
    <>
      Have a project in mind? <span className="text-gradient">Let&apos;s talk.</span>
    </>
  ),
  description = "Tell us what you're working on — we'll get back to you and explore how Advanta can help.",
  ctaLabel = "Start a project",
  ctaHref = "/contact",
  showEmail = true,
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0" aria-hidden>
        <GlowOrb color="blue" size={520} opacity={0.24} className="left-[10%] top-[-15%]" />
        <GlowOrb color="magenta" size={560} opacity={0.22} className="right-[5%] bottom-[-20%]" />
        <HeroParticles className="absolute inset-0 h-full w-full opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, transparent 30%, var(--bg) 100%)",
          }}
        />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <InView>
          <p className="text-xs font-medium tracking-[0.3em] text-fg-muted uppercase">
            {eyebrow}
          </p>
        </InView>
        <InView delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
            {headline}
          </h2>
        </InView>
        <InView delay={0.16}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
            {description}
          </p>
        </InView>
        <InView delay={0.24} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={ctaHref} size="lg">
            {ctaLabel}
          </Button>
          {showEmail ? (
            <a href={`mailto:${SITE.email}`} className="text-sm text-fg-muted hover:text-fg">
              or email {SITE.email}
            </a>
          ) : null}
        </InView>
      </Container>
    </section>
  );
}

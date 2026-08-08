import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { InView } from "@/components/animations/InView";
import { SITE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0" aria-hidden>
        <GlowOrb color="blue" size={520} opacity={0.3} className="left-[10%] top-[-15%]" />
        <GlowOrb color="magenta" size={560} opacity={0.28} className="right-[5%] bottom-[-20%]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--fg) 1px, transparent 1px), linear-gradient(to bottom, var(--fg) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <InView>
          <p className="text-xs font-medium tracking-[0.3em] text-fg-muted uppercase">
            Ready when you are
          </p>
        </InView>
        <InView delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
            Have a project in mind?{" "}
            <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
        </InView>
        <InView delay={0.16}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
            Tell us what you&apos;re working on — we&apos;ll get back to you and explore how
            Advanta can help.
          </p>
        </InView>
        <InView delay={0.24} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Start a project
          </Button>
          <a href={`mailto:${SITE.email}`} className="text-sm text-fg-muted hover:text-fg">
            or email {SITE.email}
          </a>
        </InView>
      </Container>
    </section>
  );
}

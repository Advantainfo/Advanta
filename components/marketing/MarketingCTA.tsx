import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { InView } from "@/components/animations/InView";
import { SITE } from "@/lib/constants";

export function MarketingCTA() {
  return (
    <section className="relative overflow-hidden bg-bg py-28 md:py-40">
      <div className="absolute inset-0" aria-hidden>
        <GlowOrb color="yellow" size={460} opacity={0.3} className="left-[8%] top-[-18%]" />
        <GlowOrb color="pink" size={520} opacity={0.26} className="right-[5%] bottom-[-22%]" />
        <GlowOrb
          color="orange"
          size={340}
          opacity={0.16}
          className="top-1/3 left-1/2 -translate-x-1/2"
        />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <InView>
          <h2 className="max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
            Ready to <span className="text-gradient">grow?</span>
          </h2>
        </InView>
        <InView delay={0.08}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
            Let&apos;s build a marketing strategy around where your business wants to go.
          </p>
        </InView>
        <InView delay={0.16} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Let&apos;s talk
          </Button>
          <a href={`mailto:${SITE.email}`} className="text-sm text-fg-muted hover:text-fg">
            or email {SITE.email}
          </a>
        </InView>
      </Container>
    </section>
  );
}

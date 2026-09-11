"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MARKETING_PROCESS } from "@/lib/content/marketing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InView } from "@/components/animations/InView";

const DOT_COLORS = ["var(--mkt-yellow)", "var(--mkt-orange)", "var(--mkt-coral)", "var(--mkt-pink)"];

export function MarketingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.5"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section className="border-t border-hairline bg-bg py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="How we grow businesses" title="A clear process, built for momentum." />

        <div ref={ref} className="relative mt-16">
          <div aria-hidden className="absolute top-[5px] right-0 left-0 hidden h-px lg:block">
            <div className="h-full w-full bg-bg-panel-border" />
            <motion.div
              style={{ scaleX: lineScale }}
              className="absolute inset-0 h-px origin-left [background:var(--advanta-gradient)]"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {MARKETING_PROCESS.map((step, i) => (
              <InView key={step.index} delay={i * 0.06} y={16} className="flex flex-col gap-3">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }}
                />
                <p className="font-mono text-xs text-fg-faint">{step.index}</p>
                <h3 className="text-base font-semibold tracking-tight text-fg">{step.title}</h3>
                <p className="text-sm leading-relaxed text-fg-muted">{step.description}</p>
              </InView>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/content/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="How we work" title="A process built for clarity, not bureaucracy." />

        <div ref={ref} className="relative mt-16 pl-8 md:pl-10">
          <div className="absolute top-2 bottom-2 left-[3px] w-px bg-bg-panel-border md:left-[5px]" aria-hidden />
          <motion.div
            className="absolute top-2 left-[3px] w-px origin-top [background:var(--advanta-gradient)] md:left-[5px]"
            style={{ scaleY: scrollYProgress, height: "calc(100% - 1rem)" }}
            aria-hidden
          />

          <ol className="flex flex-col gap-14 md:gap-16">
            {PROCESS_STEPS.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-bg [background:var(--advanta-gradient)] md:-left-10"
                />
                <p className="font-mono text-sm text-fg-faint">{step.index}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

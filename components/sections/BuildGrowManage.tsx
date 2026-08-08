"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

const STAGES = [
  {
    word: "Build",
    color: "var(--blue)",
    copy: "We create the digital foundation.",
  },
  {
    word: "Grow",
    color: "var(--violet)",
    copy: "We help businesses reach more people and convert more customers.",
  },
  {
    word: "Manage",
    color: "var(--magenta)",
    copy: "We continuously improve and maintain the digital experience.",
  },
];

export function BuildGrowManage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.5"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <Container>
        <h2 className="sr-only">Our approach: build, grow, manage</h2>
        <div className="relative grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden
            className="absolute top-8 right-[16.6%] left-[16.6%] hidden h-px md:block"
          >
            <div className="h-full w-full bg-bg-panel-border" />
            <motion.div
              style={{ scaleX: lineScale }}
              className="absolute inset-0 h-px origin-left [background:var(--advanta-gradient)]"
            />
          </div>

          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.word}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-4"
            >
              <span
                aria-hidden
                className="h-3.5 w-3.5 rounded-full"
                style={{ background: stage.color, boxShadow: `0 0 24px ${stage.color}` }}
              />
              <h3 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                {stage.word}
              </h3>
              <p className="max-w-xs text-base leading-relaxed text-fg-muted">{stage.copy}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

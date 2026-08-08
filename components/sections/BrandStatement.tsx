"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";

const LINE_ONE = "Your digital presence should do more than exist.";
const LINE_TWO = "It should perform.";

function Word({
  word,
  index,
  total,
  progress,
  emphasis,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  emphasis?: boolean;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const blur = useTransform(progress, [start, end], [4, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, filter }}
      className={emphasis ? "text-gradient" : "text-fg"}
    >
      {word}{" "}
    </motion.span>
  );
}

export function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const words = [
    ...LINE_ONE.split(" ").map((w) => ({ w, emphasis: false })),
    ...LINE_TWO.split(" ").map((w) => ({ w, emphasis: true })),
  ];

  return (
    <section ref={ref} className="relative py-32 md:py-44">
      <Container>
        <p className="max-w-5xl text-3xl leading-[1.35] font-medium tracking-tight sm:text-4xl md:text-5xl">
          {words.map((item, i) => (
            <Word
              key={i}
              word={item.w}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              emphasis={item.emphasis}
            />
          ))}
        </p>
      </Container>
    </section>
  );
}

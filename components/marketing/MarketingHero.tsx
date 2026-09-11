"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RevealText } from "@/components/animations/RevealText";
import { GlowOrb } from "@/components/animations/GlowOrb";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MarketingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const shapeX = useTransform(sx, (v) => v * 20);
  const shapeY = useTransform(sy, (v) => v * 20);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-bg pt-32"
    >
      <div className="absolute inset-0" aria-hidden>
        <GlowOrb color="yellow" size={420} opacity={0.16} className="-left-32 top-[-10%]" />
        <GlowOrb color="pink" size={460} opacity={0.14} className="right-[-12%] top-[10%]" />
      </div>

      <motion.div
        aria-hidden
        style={{ x: shapeX, y: shapeY }}
        className="pointer-events-none absolute top-1/2 right-[6%] hidden h-72 w-72 -translate-y-1/2 rounded-[40%] opacity-[0.14] blur-[2px] lg:block"
      >
        <div className="h-full w-full rounded-[40%] [background:var(--advanta-gradient)]" />
      </motion.div>

      <Container className="relative py-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
          <Eyebrow>Advanta Marketing</Eyebrow>
        </motion.div>

        <h1 className="mt-7 max-w-3xl text-5xl leading-[1.05] font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl">
          <RevealText text="Turn attention into" delay={0.25} />{" "}
          <RevealText text="growth." delay={0.55} className="text-gradient" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted"
        >
          Strategy, content and performance marketing designed to put your business in front of
          the right people — and turn attention into measurable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <MagneticButton>
            <Button href="/contact" size="lg">
              Grow your business
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button href="#services" variant="secondary" size="lg">
              Explore our services
            </Button>
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  );
}

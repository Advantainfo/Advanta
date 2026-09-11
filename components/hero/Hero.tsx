"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RevealText } from "@/components/animations/RevealText";
import { GlowOrb } from "@/components/animations/GlowOrb";

const HeroParticles = dynamic(() => import("@/components/hero/HeroParticles").then((m) => m.HeroParticles), {
  ssr: false,
});

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const orbX = useTransform(sx, (v) => v * 24);
  const orbY = useTransform(sy, (v) => v * 24);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

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
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-bg pt-24"
    >
      {/* Atmosphere — dark, tech-forward field of light rather than a flat glow */}
      <motion.div className="absolute inset-0" style={{ x: orbX, y: orbY }} aria-hidden>
        <GlowOrb color="blue" size={520} opacity={0.2} className="-left-40 top-[-10%]" />
        <GlowOrb color="violet" size={580} opacity={0.18} className="right-[-15%] top-[5%]" />
        <GlowOrb color="magenta" size={420} opacity={0.12} className="left-[30%] bottom-[-25%]" />
      </motion.div>

      <HeroParticles className="absolute inset-0 h-full w-full opacity-80" />

      {/* Vignette — darkens the edges so the wordmark/particles stay the focal point */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 30%, color-mix(in srgb, var(--bg) 80%, transparent) 100%)",
        }}
      />

      <motion.div style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}>
        <Container className="relative flex flex-col items-center pt-10 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative mb-8 h-20 w-20"
          >
            <div className="absolute inset-0 rounded-full bg-violet/40 blur-2xl" />
            <Image
              src="/brand/advanta-mark-512.png"
              alt=""
              width={512}
              height={512}
              priority
              className="relative h-full w-full"
            />
          </motion.div>

          <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl">
            <RevealText text="Digital experiences that" delay={0.3} />{" "}
            <RevealText text="move businesses forward." delay={0.7} className="text-gradient" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted"
          >
            We design and build high-performance websites and digital solutions that help
            businesses grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5, ease: EASE }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button href="/contact" size="lg">
                Start a project
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/work" variant="secondary" size="lg">
                View our work
              </Button>
            </MagneticButton>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}

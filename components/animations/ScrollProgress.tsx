"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin top progress bar tied directly to the user's own scroll position —
 * not an autoplaying animation, so it stays on even under
 * prefers-reduced-motion (the spring is just gently damped, not disabled).
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-100 h-[2px] origin-left [background:var(--advanta-gradient)]"
      style={{ scaleX }}
    />
  );
}

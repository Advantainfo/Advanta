"use client";

import { motion, type Variants } from "framer-motion";

type InViewProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "span" | "li";
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
};

const MotionTag = { div: motion.div, span: motion.span, li: motion.li };

/**
 * Scroll-triggered reveal. GPU-cheap: animates only transform + opacity.
 * Respects prefers-reduced-motion via a near-zero, still-perceptible duration
 * (see globals.css) rather than disabling state changes altogether.
 */
export function InView({
  children,
  className,
  as = "div",
  delay = 0,
  y = 24,
  once = true,
  amount = 0.3,
}: InViewProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const Comp = MotionTag[as];

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}

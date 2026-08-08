"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2";
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word = {
    hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className="inline"
      initial="hidden"
      animate="visible"
      variants={container}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <motion.span variants={word} className={cn("inline-block will-change-transform", className)}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

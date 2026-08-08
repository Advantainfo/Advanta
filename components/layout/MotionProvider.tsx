"use client";

import { MotionConfig } from "framer-motion";

/**
 * Applies prefers-reduced-motion to every Framer Motion animation in the
 * app (transform-based motion is skipped; opacity fades still play), on
 * top of the CSS-level handling in globals.css which only covers plain
 * CSS transitions/animations.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

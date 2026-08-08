"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: "blue" | "violet" | "magenta" | "cyan";
  alpha: number;
};

const HUES: Record<Particle["hue"], string> = {
  blue: "47, 111, 255",
  violet: "139, 61, 240",
  magenta: "233, 52, 197",
  cyan: "34, 211, 238",
};

/**
 * A small, capped ambient particle field. Canvas 2D (no WebGL/3D library),
 * paused off-screen and on tab-hide, skipped entirely under
 * prefers-reduced-motion.
 */
export function HeroParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let frame: number;
    let visible = true;

    function resize() {
      if (!canvas) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(46, Math.round((width * height) / 26000));
      const hues: Particle["hue"][] = ["blue", "violet", "magenta", "cyan"];
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        hue: hues[Math.floor(Math.random() * hues.length)],
        alpha: Math.random() * 0.5 + 0.25,
      }));
    }

    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${HUES[p.hue]}, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (visible) frame = requestAnimationFrame(tick);
    }

    resize();
    frame = requestAnimationFrame(tick);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function handleVisibility() {
      visible = !document.hidden;
      if (visible) frame = requestAnimationFrame(tick);
      else cancelAnimationFrame(frame);
    }
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}

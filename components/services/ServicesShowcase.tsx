"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "@/lib/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const ACCENTS = ["var(--blue)", "var(--cyan)", "var(--violet)", "var(--magenta)"];

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];
  const accent = ACCENTS[active];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 transition-[background] duration-700 ease-out"
        style={{
          background: `radial-gradient(60% 50% at 15% 20%, color-mix(in srgb, ${accent} 22%, transparent), transparent 70%)`,
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="What we do"
          title="Four disciplines. One digital partner."
          description="Each service stands on its own — together, they cover the full lifecycle of a digital presence."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ul className="flex flex-col overflow-hidden rounded-2xl border border-hairline bg-bg-panel/20">
            {SERVICES.map((item, i) => (
              <li
                key={item.id}
                className={cn(i !== SERVICES.length - 1 && "border-b border-hairline")}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full items-baseline gap-5 px-6 py-6 text-left transition-colors"
                >
                  <span
                    className={cn(
                      "font-mono text-sm tabular-nums transition-colors duration-300",
                      active === i ? "text-fg" : "text-fg-faint",
                    )}
                    style={active === i ? { color: accent } : undefined}
                  >
                    {item.index}
                  </span>
                  <span
                    className={cn(
                      "text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl md:text-4xl",
                      active === i ? "text-fg" : "text-fg-faint group-hover:text-fg-muted",
                    )}
                  >
                    {item.code}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="animated-border relative min-h-[280px] rounded-2xl bg-bg-panel/40 p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: accent }}>
                  {service.title}
                </p>
                <p className="mt-4 text-xl leading-snug font-medium text-fg md:text-2xl">
                  {service.summary}
                </p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted">
                  {service.description}
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-fg-muted">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ background: accent }}
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

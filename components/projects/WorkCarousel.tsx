"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, type PanInfo } from "framer-motion";
import type { WorkEntry } from "@/lib/content/work";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { PlaceholderBadge } from "@/components/projects/PlaceholderBadge";
import { cn } from "@/lib/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

const CARD_WIDTH =
  "w-[82vw] max-w-[340px] sm:w-[62vw] sm:max-w-[440px] md:w-[46vw] md:max-w-[520px] lg:w-[38vw] lg:max-w-[600px]";
// Tall enough for the widest (active) card's 16:9 media box plus its title block below.
const VIEWPORT_HEIGHT = "h-[320px] sm:h-[380px] md:h-[430px] lg:h-[480px]";

function circularOffset(index: number, current: number, total: number) {
  let diff = index - current;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function ArrowIcon({ flipped, size = 14 }: { flipped?: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={cn(flipped && "scale-x-[-1]")}
    >
      <path
        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarouselCard({
  entry,
  index,
  active,
  interactive,
}: {
  entry: WorkEntry;
  index: number;
  active: boolean;
  interactive: boolean;
}) {
  return (
    <Link
      href={`/work/${entry.slug}`}
      tabIndex={interactive ? 0 : -1}
      aria-hidden={!interactive}
      className="group flex w-full flex-col gap-4"
    >
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-3xl border border-hairline bg-bg-panel transition-shadow duration-500",
          active ? "shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)]" : "shadow-none",
        )}
      >
        <ProjectMedia
          entry={entry}
          index={index}
          active={active}
          objectFit="contain"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute top-4 left-4">
          <PlaceholderBadge label={entry.badgeLabel} />
        </div>
      </div>
      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">{entry.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg md:text-2xl">{entry.title}</h3>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
          View project
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export function WorkCarousel({ entries }: { entries: WorkEntry[] }) {
  const total = entries.length;
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setCardWidth(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const step = cardWidth * (isDesktop ? 0.8 : 0.9);

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  function handleDragEnd(_event: unknown, info: PanInfo) {
    const threshold = Math.max(cardWidth * 0.15, 40);
    if (info.offset.x < -threshold || info.velocity.x < -500) {
      goNext();
    } else if (info.offset.x > threshold || info.velocity.x > 500) {
      goPrev();
    }
  }

  return (
    <div className="relative">
      <div className={cn("relative mx-auto max-w-[var(--container-advanta)] overflow-hidden", VIEWPORT_HEIGHT)}>
        <motion.div
          className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {entries.map((entry, i) => {
            const offset = circularOffset(i, current, total);
            const abs = Math.abs(offset);
            const active = offset === 0;
            const visible = abs <= 1;

            return (
              <div key={entry.slug} className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.div
                  ref={active ? cardRef : undefined}
                  initial={false}
                  className={cn(CARD_WIDTH, visible ? "pointer-events-auto" : "pointer-events-none")}
                  style={{ zIndex: 10 - abs }}
                  animate={{
                    x: offset * step,
                    opacity: active ? 1 : abs === 1 ? 0.55 : 0,
                    scale: active ? 1 : abs === 1 ? 0.88 : 0.8,
                  }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <CarouselCard entry={entry} index={i} active={active} interactive={visible} />
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-bg to-transparent sm:w-24 md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg to-transparent sm:w-24 md:w-40" />
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous project"
        className="absolute top-1/2 left-2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-bg-panel/80 text-fg backdrop-blur-sm transition-colors hover:border-fg-faint hover:bg-bg-panel focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4 sm:left-4 md:left-8 lg:left-12"
      >
        <ArrowIcon flipped size={16} />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next project"
        className="absolute top-1/2 right-2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-bg-panel/80 text-fg backdrop-blur-sm transition-colors hover:border-fg-faint hover:bg-bg-panel focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4 sm:right-4 md:right-8 lg:right-12"
      >
        <ArrowIcon size={16} />
      </button>
    </div>
  );
}

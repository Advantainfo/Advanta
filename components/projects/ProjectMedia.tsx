"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import type { WorkEntry } from "@/lib/content/work";

export function ProjectMedia({
  entry,
  index = 0,
  className,
  active = true,
  /** Start fetching (a light "metadata" hint) before this becomes active, e.g. the
   * carousel's likely-next card once the page is idle. Ignored once `active` is true. */
  warm = false,
  objectFit = "cover",
}: {
  entry: WorkEntry;
  index?: number;
  className?: string;
  /** Controls playback and load priority — false pauses the clip (its poster stays
   * visible), it never gates whether the poster itself is shown. */
  active?: boolean;
  warm?: boolean;
  objectFit?: "cover" | "contain";
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const hasVideo = Boolean(entry.videoSrc);
  // Only fetch video bytes once this is the active clip or pre-warmed as "likely
  // next" — and never before the media itself has scrolled near the viewport.
  const shouldLoad = hasVideo && inView && (active || warm);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || !hasVideo) return;
    const observer = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
      rootMargin: "200px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !inView) return;
    if (active) video.play().catch(() => {});
    else video.pause();
  }, [inView, active]);

  if (!hasVideo) {
    return (
      <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
        {entry.poster ? (
          // Plain <img>, not next/image: a fixed-size decorative frame inside an
          // absolutely-positioned box, not a layout-critical asset.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={entry.poster}
            alt=""
            aria-hidden
            className={cn(
              "absolute inset-0 h-full w-full",
              objectFit === "contain" ? "object-contain" : "object-cover",
            )}
            decoding="async"
          />
        ) : (
          <ProjectVisual index={index} className="absolute inset-0 h-full w-full" />
        )}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
      {/* The video's own `poster` attribute renders instantly and stays visible
          until real frame data is available — no separate <img> needed, and no
          bytes are fetched while `src` is withheld (preload="none" equivalent). */}
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 h-full w-full",
          objectFit === "contain" ? "object-contain" : "object-cover",
        )}
        src={shouldLoad ? entry.videoSrc : undefined}
        poster={entry.poster}
        muted
        loop
        playsInline
        preload={active ? "auto" : "metadata"}
        aria-hidden
      />
    </div>
  );
}

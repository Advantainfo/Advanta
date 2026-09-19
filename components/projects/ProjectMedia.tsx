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
  objectFit = "cover",
}: {
  entry: WorkEntry;
  index?: number;
  className?: string;
  /** Controls playback, not mounting: true autoplays, false pauses but still
   * shows a real frame (used by the homepage carousel for the side cards). */
  active?: boolean;
  objectFit?: "cover" | "contain";
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const hasVideo = Boolean(entry.videoSrc);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || !hasVideo) return;
    const observer = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !inView) return;

    if (active) {
      video.play().catch(() => {});
      return;
    }

    video.pause();
    // Paint a real frame instead of leaving a paused clip blank.
    if (video.currentTime > 0) return;
    if (video.readyState >= 1) {
      video.currentTime = 0.1;
      return;
    }
    const showFrame = () => {
      video.currentTime = 0.1;
    };
    video.addEventListener("loadedmetadata", showFrame, { once: true });
    return () => video.removeEventListener("loadedmetadata", showFrame);
  }, [inView, active]);

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
      <ProjectVisual index={index} className="absolute inset-0 h-full w-full" />
      {hasVideo ? (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full",
            objectFit === "contain" ? "object-contain" : "object-cover",
          )}
          src={inView ? entry.videoSrc : undefined}
          muted
          loop
          playsInline
          preload={active ? "auto" : "metadata"}
          aria-hidden
        />
      ) : null}
    </div>
  );
}

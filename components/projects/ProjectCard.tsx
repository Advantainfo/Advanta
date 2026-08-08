import Link from "next/link";
import type { WorkEntry } from "@/lib/content/work";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { PlaceholderBadge } from "@/components/projects/PlaceholderBadge";
import { ImageReveal } from "@/components/animations/ImageReveal";

export function ProjectCard({ entry, index = 0 }: { entry: WorkEntry; index?: number }) {
  return (
    <Link href={`/work/${entry.slug}`} className="group flex flex-col gap-5">
      <ImageReveal className="relative aspect-[4/3] rounded-2xl">
        <ProjectVisual index={index} className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        <div className="absolute top-4 left-4">
          <PlaceholderBadge />
        </div>
      </ImageReveal>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
            {entry.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-fg/80">
            {entry.title}
          </h3>
        </div>
        <span
          aria-hidden
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-fg-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-fg-faint group-hover:text-fg"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-fg-muted">{entry.summary}</p>
    </Link>
  );
}

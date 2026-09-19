import Link from "next/link";
import type { WorkEntry } from "@/lib/content/work";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { PlaceholderBadge } from "@/components/projects/PlaceholderBadge";
import { ImageReveal } from "@/components/animations/ImageReveal";

export function ProjectCard({ entry, index = 0 }: { entry: WorkEntry; index?: number }) {
  return (
    <Link href={`/work/${entry.slug}`} className="group flex flex-col gap-5">
      <ImageReveal className="relative aspect-[4/3] rounded-2xl">
        <ProjectMedia entry={entry} index={index} className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        <div className="absolute top-4 left-4">
          <PlaceholderBadge label={entry.badgeLabel} />
        </div>
      </ImageReveal>
      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
          {entry.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-fg/80">
          {entry.title}
        </h3>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-fg-muted">{entry.summary}</p>
      <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
        View project
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

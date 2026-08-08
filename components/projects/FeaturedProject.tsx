import Link from "next/link";
import type { WorkEntry } from "@/lib/content/work";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { PlaceholderBadge } from "@/components/projects/PlaceholderBadge";
import { ImageReveal } from "@/components/animations/ImageReveal";

export function FeaturedProject({ entry }: { entry: WorkEntry }) {
  return (
    <Link
      href={`/work/${entry.slug}`}
      className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <ImageReveal className="relative aspect-[16/11] rounded-3xl">
        <ProjectVisual index={0} className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
        <div className="absolute top-5 left-5">
          <PlaceholderBadge />
        </div>
      </ImageReveal>

      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
          Featured — {entry.category}
        </p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          {entry.title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted">{entry.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {entry.services.map((s) => (
            <li
              key={s}
              className="rounded-full border border-hairline px-3 py-1 text-xs text-fg-muted"
            >
              {s}
            </li>
          ))}
        </ul>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors group-hover:text-fg/80">
          View case study
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

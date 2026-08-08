import type { WorkEntry } from "@/lib/content/work";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function WorkGrid({ entries }: { entries: WorkEntry[] }) {
  const [featured, ...rest] = entries;
  if (!featured) return null;

  return (
    <div className="flex flex-col gap-20">
      <FeaturedProject entry={featured} />
      {rest.length ? (
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2">
          {rest.map((entry, i) => (
            <ProjectCard key={entry.slug} entry={entry} index={i + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

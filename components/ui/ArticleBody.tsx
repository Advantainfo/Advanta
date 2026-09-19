import type { ContentBlock } from "@/lib/content/insights";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-6 flex items-center gap-3 text-2xl font-semibold tracking-tight text-fg md:text-3xl"
            >
              <span className="h-px w-6 shrink-0 [background:var(--advanta-gradient)]" aria-hidden />
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="flex flex-col gap-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-lg leading-relaxed text-fg-muted">
                  <span aria-hidden className="mt-3 h-1 w-1 shrink-0 rounded-full bg-fg-faint" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-lg leading-relaxed text-fg-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

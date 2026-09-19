import { cn } from "@/lib/cn";
import { getTopicAccent } from "@/lib/content/topics";
import type { InsightArticle } from "@/lib/content/insights";

/**
 * Article header visual. With a real photo, it's darkened and tinted with the
 * topic's brand gradient via mix-blend-color — a consistent duotone treatment
 * so any source photo reads as part of this dark, on-brand system. Without a
 * photo, falls back to the same generative gradient panel used for Work.
 */
export function InsightVisual({ article, className }: { article: InsightArticle; className?: string }) {
  const { from, to } = getTopicAccent(article.topic);

  if (article.image) {
    return (
      <div
        className={cn("relative overflow-hidden rounded-2xl border border-hairline bg-bg-panel", className)}
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover brightness-50 contrast-125 saturate-50"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 mix-blend-color opacity-90"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        />
        {/* Edge vignette — keeps any bright corner or edge in the source photo from
            breaking the dark, unified look. Two linear fades (not one radial) so it
            holds up at any aspect ratio, from square cards to the wide article hero. */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(to right, var(--bg) 0%, transparent 14%, transparent 86%, var(--bg) 100%), linear-gradient(to bottom, var(--bg) 0%, transparent 14%, transparent 86%, var(--bg) 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl border border-hairline bg-bg-panel", className)}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(120% 100% at 15% 0%, ${from}, transparent 55%)` }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(120% 100% at 90% 100%, ${to}, transparent 55%)` }}
      />
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--fg) 1px, transparent 1px), linear-gradient(to bottom, var(--fg) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
    </div>
  );
}

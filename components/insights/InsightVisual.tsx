import { cn } from "@/lib/cn";
import { getTopicAccent } from "@/lib/content/topics";

/**
 * Abstract, on-brand placeholder visual for an article — the editorial
 * equivalent of ProjectVisual, colored by topic instead of cycled by index.
 */
export function InsightVisual({ topic, className }: { topic: string; className?: string }) {
  const { from, to } = getTopicAccent(topic);

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

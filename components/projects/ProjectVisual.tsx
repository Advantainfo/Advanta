import { cn } from "@/lib/cn";

const PALETTES = [
  ["var(--blue)", "var(--violet)"],
  ["var(--violet)", "var(--magenta)"],
  ["var(--cyan)", "var(--blue)"],
] as const;

/**
 * Abstract, on-brand placeholder visual for a work entry — deliberately not
 * a fabricated product screenshot or stock photo. Purely generative from
 * the brand gradient system.
 */
export function ProjectVisual({
  index = 0,
  className,
}: {
  index?: number;
  className?: string;
}) {
  const [from, to] = PALETTES[index % PALETTES.length];

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl border border-hairline bg-bg-panel", className)}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(120% 100% at 20% 0%, ${from}, transparent 55%)` }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(120% 100% at 90% 100%, ${to}, transparent 55%)` }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--fg) 1px, transparent 1px), linear-gradient(to bottom, var(--fg) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
    </div>
  );
}

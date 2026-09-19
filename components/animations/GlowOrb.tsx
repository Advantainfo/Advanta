import { cn } from "@/lib/cn";

const COLORS = {
  blue: "var(--blue)",
  violet: "var(--violet)",
  magenta: "var(--magenta)",
  cyan: "var(--cyan)",
};

export function GlowOrb({
  color = "violet",
  size = 480,
  opacity = 0.28,
  className,
  animate = true,
  style,
}: {
  color?: keyof typeof COLORS;
  size?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-[100px]", animate && "animate-orb-drift", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(closest-side, color-mix(in srgb, ${COLORS[color]} ${Math.round(opacity * 100)}%, transparent), transparent 70%)`,
        ...style,
      }}
    />
  );
}

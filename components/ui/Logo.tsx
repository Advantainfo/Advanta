import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "mark" | "full";
  /** "marketing" swaps in the Advanta Marketing lockup — see /public/brand/advanta-marketing-logo.png */
  theme?: "default" | "marketing";
  className?: string;
  markClassName?: string;
  priority?: boolean;
  href?: string | null;
  size?: number;
};

/**
 * Renders the official Advanta mark. The source PNG is never redrawn or
 * distorted — only cropped (mark-only variant) or used as-is (full lockup).
 * The Marketing lockup already bakes in its own "MARKETING" wordmark, so it
 * renders as a single self-contained image rather than mark + HTML text.
 */
export function Logo({
  variant = "mark",
  theme = "default",
  className,
  markClassName,
  priority = false,
  href = "/",
  size = 36,
}: LogoProps) {
  const isMarketing = theme === "marketing";

  const content =
    variant === "full" ? (
      <Image
        src={isMarketing ? "/brand/advanta-marketing-logo.png" : "/brand/advanta-logo.png"}
        alt={isMarketing ? "Advanta Marketing" : "Advanta"}
        width={1254}
        height={1254}
        priority={priority}
        className={cn("h-auto w-full", markClassName)}
      />
    ) : isMarketing ? (
      <Image
        src="/brand/advanta-marketing-logo.png"
        alt="Advanta Marketing"
        width={512}
        height={512}
        priority={priority}
        className={cn("shrink-0", className, markClassName)}
        style={{ width: size, height: size }}
      />
    ) : (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        <Image
          src="/brand/advanta-mark-512.png"
          alt=""
          width={size}
          height={size}
          priority={priority}
          className={cn("shrink-0", markClassName)}
          style={{ width: size, height: size }}
        />
        <span className="font-sans text-lg font-bold tracking-[0.12em] text-fg uppercase">
          Advanta
        </span>
      </span>
    );

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-sm outline-offset-4"
      aria-label={isMarketing ? "Advanta Marketing — home" : "Advanta — home"}
    >
      {content}
    </Link>
  );
}

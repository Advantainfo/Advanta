import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "mark" | "full";
  className?: string;
  markClassName?: string;
  priority?: boolean;
  href?: string | null;
  size?: number;
};

/**
 * Renders the official Advanta mark. The source PNG is never redrawn or
 * distorted — only cropped (mark-only variant) or used as-is (full lockup).
 */
export function Logo({
  variant = "mark",
  className,
  markClassName,
  priority = false,
  href = "/",
  size = 36,
}: LogoProps) {
  const content =
    variant === "full" ? (
      <Image
        src="/brand/advanta-logo.png"
        alt="Advanta"
        width={1254}
        height={1254}
        priority={priority}
        className={cn("h-auto w-full", markClassName)}
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
      aria-label="Advanta — home"
    >
      {content}
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative py-2 text-sm font-medium text-fg-muted transition-colors duration-300 hover:text-fg",
        isActive && "text-fg",
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 [background:var(--advanta-gradient)] transition-transform duration-300 ease-out group-hover:scale-x-100",
          isActive && "scale-x-100",
        )}
      />
    </Link>
  );
}

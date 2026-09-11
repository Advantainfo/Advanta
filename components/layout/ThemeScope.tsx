"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

/**
 * Applies the Advanta Marketing theme scope (see .theme-marketing in
 * globals.css) to everything rendered on /marketing — nav, page content and
 * footer alike — by re-defining the shared color tokens those components
 * already read. `display: contents` keeps this div out of the flex layout
 * that body/Navbar/main/Footer rely on, so it only carries the CSS scope.
 */
export function ThemeScope({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMarketing = pathname?.startsWith("/marketing") ?? false;

  return <div className={cn("contents", isMarketing && "theme-marketing")}>{children}</div>;
}

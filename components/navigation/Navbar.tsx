"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/navigation/NavLink";

const MobileMenu = dynamic(() => import("@/components/navigation/MobileMenu").then((m) => m.MobileMenu), {
  ssr: false,
});

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={
          "border-b transition-colors duration-500 " +
          (scrolled
            ? "border-bg-panel-border bg-bg/80 backdrop-blur-xl"
            : "border-transparent bg-transparent")
        }
      >
        <div className="mx-auto flex h-18 max-w-(--container-advanta) items-center justify-between px-6 md:px-10 lg:px-14">
          <Logo priority size={32} />

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact">Start a project</Button>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-fg md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-4">
              <motion.span
                className="absolute left-0 top-0 h-px w-4 bg-fg"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-px w-4 bg-fg"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

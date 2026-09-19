"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const CONSENT_KEY = "advanta-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) setVisible(true);
  }, []);

  function choose(value: CookieConsentValue) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie notice"
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-hairline bg-bg-panel/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-6">
            <p className="text-sm text-fg-muted">
              We use only essential cookies to run this site. We don&rsquo;t use analytics or
              advertising cookies.{" "}
              <Link href="/privacy-policy" className="text-fg underline underline-offset-4 hover:text-cyan">
                Learn more
              </Link>
              .
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => choose("declined")}
                className="h-11 rounded-full px-5 text-sm font-medium text-fg-muted transition-colors duration-300 hover:text-fg focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4"
              >
                Decline
              </button>
              <Button size="md" onClick={() => choose("accepted")}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

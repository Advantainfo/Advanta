export type WorkEntry = {
  slug: string;
  title: string;
  category: string;
  services: string[];
  summary: string;
  isPlaceholder: true;
  challenge?: string;
  strategy?: string;
  /** Overrides the default "Case study coming soon" badge shown on cards and the case page. */
  badgeLabel?: string;
  /** Looping preview clip shown behind the project card/hero visual, in public/work. */
  videoSrc?: string;
};

// Advanta is a web-focused studio — these entries represent three different levels
// of web capability we build for. None are completed client work yet: each is
// clearly marked as a placeholder, and no client names, metrics or results are
// implied until a real case study replaces it.
export const WORK_ENTRIES: WorkEntry[] = [
  {
    slug: "interactive-product-experience",
    title: "Interactive Product Experience",
    category: "Interactive Web / Concept Project",
    services: ["Interactive Web", "3D / Motion", "Frontend Development", "UX/UI"],
    summary:
      "A cinematic, scroll-driven product experience where motion, 3D and interaction turn browsing into storytelling.",
    isPlaceholder: true,
    badgeLabel: "Concept Project — not client work",
    videoSrc: "/work/interactive-product-experience.mp4",
    challenge:
      "Most product websites default to static images and scroll-triggered fades. We wanted to explore what happens when scrolling doesn't just reveal content, but directly drives a cinematic product animation — the way a film timeline responds to a scrubber.",
    strategy:
      "This is a self-directed concept project, not client work, built to test that idea end-to-end around a luxury watch. As the visitor scrolls, the camera moves in, the casing separates, internal components pull apart into an exploded view, features surface at each stage, and the watch reassembles into a final cinematic shot with a closing CTA. It exists to demonstrate Advanta's ability to build scroll-driven experiences, 3D product storytelling and immersive, motion-first frontend engineering.",
  },
  {
    slug: "business-management-platform",
    title: "Business Management Platform",
    category: "Business Software",
    services: [
      "Web Application",
      "Dashboard Design",
      "Frontend Development",
      "Data Visualization",
    ],
    summary:
      "A custom web platform that brings scheduling, operations and business data into one clean, unified dashboard.",
    isPlaceholder: true,
    videoSrc: "/work/business-management-platform.mp4",
    challenge:
      "This slot is reserved for a full write-up: the business problem, the constraints, and what a good outcome needed to look like.",
    strategy:
      "Once live, this section will walk through the approach — information architecture, technical stack decisions, and the reasoning behind them.",
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    category: "Hospitality",
    services: ["Web Development", "Design & Branding", "Local SEO"],
    summary:
      "A warm, fast-loading restaurant website built to showcase the menu and atmosphere, and make booking a table effortless.",
    isPlaceholder: true,
    videoSrc: "/work/restaurant-website.mp4",
    challenge:
      "This slot is reserved for a full write-up: the business problem, the constraints, and what a good outcome needed to look like.",
    strategy:
      "Once live, this section will walk through the approach — information architecture, technical stack decisions, and the reasoning behind them.",
  },
];

export function getWorkEntry(slug: string) {
  return WORK_ENTRIES.find((entry) => entry.slug === slug);
}

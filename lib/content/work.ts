export type WorkEntry = {
  slug: string;
  title: string;
  category: string;
  services: string[];
  summary: string;
  isPlaceholder: true;
  challenge?: string;
  strategy?: string;
};

// Advanta is a new studio — these are representative project types we take on,
// not completed work. Each is clearly marked as a placeholder. No client names,
// metrics or results are implied until a real case study replaces it.
export const WORK_ENTRIES: WorkEntry[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Retail",
    services: ["Web Development", "Design & Branding"],
    summary:
      "A fast, conversion-focused storefront built for a growing retail brand — from product architecture to checkout.",
    isPlaceholder: true,
    challenge:
      "This slot is reserved for a full write-up: the business problem, the constraints, and what a good outcome needed to look like.",
    strategy:
      "Once live, this section will walk through the approach — information architecture, technical stack decisions, and the reasoning behind them.",
  },
  {
    slug: "corporate-website-rebuild",
    title: "Corporate Website Rebuild",
    category: "Professional Services",
    summary:
      "A full rebuild of a legacy corporate site — modern stack, clearer structure, and a design system built to last.",
    services: ["Web Development", "Design & Branding", "Website Management"],
    isPlaceholder: true,
    challenge:
      "This slot is reserved for a full write-up: the business problem, the constraints, and what a good outcome needed to look like.",
    strategy:
      "Once live, this section will walk through the approach — information architecture, technical stack decisions, and the reasoning behind them.",
  },
  {
    slug: "local-seo-campaign",
    title: "Local Search Campaign",
    category: "Local Business",
    services: ["Digital Marketing"],
    summary:
      "A structured local SEO campaign built to improve visibility for a Belgian business in its own market.",
    isPlaceholder: true,
    challenge:
      "This slot is reserved for a full write-up: the business problem, the constraints, and what a good outcome needed to look like.",
    strategy:
      "Once live, this section will walk through the approach — information architecture, technical stack decisions, and the reasoning behind them.",
  },
];

export function getWorkEntry(slug: string) {
  return WORK_ENTRIES.find((entry) => entry.slug === slug);
}

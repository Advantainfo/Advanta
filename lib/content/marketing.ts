export type MarketingService = {
  index: string;
  title: string;
  description: string;
  tags: string[];
};

export const MARKETING_SERVICES: MarketingService[] = [
  {
    index: "01",
    title: "Social Media Marketing",
    description:
      "Strategy, content and community management that build an audience worth having.",
    tags: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
  },
  {
    index: "02",
    title: "Paid Advertising",
    description: "Campaigns built, targeted and optimized to turn ad spend into customers.",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
  },
  {
    index: "03",
    title: "Search & SEO",
    description:
      "Technical, on-page and local SEO that puts your business in front of people already searching.",
    tags: ["Technical SEO", "Local SEO", "Keyword Strategy"],
  },
  {
    index: "04",
    title: "Content & Creative",
    description: "Campaign concepts, ad creative and copy that make people stop scrolling.",
    tags: ["Ad Creative", "Short-Form Video", "Copywriting"],
  },
  {
    index: "05",
    title: "Strategy & Growth",
    description: "Research and planning that turns a market opportunity into a growth plan.",
    tags: ["Competitor Research", "Funnel Strategy", "Campaign Planning"],
  },
  {
    index: "06",
    title: "Analytics & Optimization",
    description: "Tracking and reporting that turns campaign data into better decisions.",
    tags: ["Conversion Tracking", "Reporting", "Optimization"],
  },
];

export type MarketingProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const MARKETING_PROCESS: MarketingProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "We learn the business, audience and competitive landscape.",
  },
  {
    index: "02",
    title: "Strategize",
    description: "We turn that insight into a clear marketing plan.",
  },
  {
    index: "03",
    title: "Create",
    description: "We produce the content, campaigns and creative to bring it to life.",
  },
  {
    index: "04",
    title: "Launch",
    description: "We put the strategy into motion across the right channels.",
  },
  {
    index: "05",
    title: "Optimize",
    description: "We refine targeting, creative and spend based on real performance.",
  },
  {
    index: "06",
    title: "Scale",
    description: "We grow what's working into bigger, sustained results.",
  },
];

export type MarketingSpotlight = {
  index: string;
  title: string;
  headline: string;
  description: string;
  tags: string[];
};

export const MARKETING_SPOTLIGHTS: MarketingSpotlight[] = [
  {
    index: "01",
    title: "Performance Marketing",
    headline: "Reach the right people. At the right moment.",
    description:
      "We build and manage paid campaigns that put your business in front of people actively looking for what you offer.",
    tags: ["Google", "Instagram", "Facebook", "TikTok", "LinkedIn"],
  },
  {
    index: "02",
    title: "Social Media",
    headline: "Build a brand people remember.",
    description:
      "Consistent, creative content backed by a real strategy — so your social presence looks intentional, not improvised.",
    tags: ["Strategy", "Content", "Community", "Creative Campaigns"],
  },
  {
    index: "03",
    title: "SEO & Search",
    headline: "Be there when customers are searching.",
    description:
      "Technical SEO, content and local search working together so people already looking for your business can find it.",
    tags: ["Technical SEO", "Local Search", "Keyword Strategy", "Site Structure"],
  },
];

export type Service = {
  index: string;
  id: string;
  code: string;
  title: string;
  summary: string;
  description: string;
  capabilities: string[];
};

export const SERVICES: Service[] = [
  {
    index: "01",
    id: "build",
    code: "BUILD",
    title: "Web Development",
    summary: "Websites, web applications, e-commerce and digital products.",
    description:
      "We design and build the digital foundation your business runs on — fast, well-structured, and made to be extended rather than rebuilt in two years.",
    capabilities: [
      "Marketing & corporate websites",
      "Web applications & internal tools",
      "E-commerce",
      "Headless & API-driven builds",
    ],
  },
  {
    index: "02",
    id: "grow",
    code: "GROW",
    title: "Digital Marketing",
    summary: "SEO, local SEO, conversion optimization and digital marketing.",
    description:
      "A well-built site is a starting point, not a result. We help the right people find it, and help more of them become customers once they do.",
    capabilities: [
      "SEO & technical SEO",
      "Local SEO for Belgian businesses",
      "Conversion rate optimization",
      "Analytics & measurement",
    ],
  },
  {
    index: "03",
    id: "design",
    code: "DESIGN",
    title: "Design & Branding",
    summary: "UI/UX, branding and digital experiences.",
    description:
      "Design is how your business is judged in the first three seconds. We build visual systems and interfaces that hold up under real use, not just in a mockup.",
    capabilities: [
      "Brand identity & visual systems",
      "UI/UX design",
      "Design systems & component libraries",
      "Art direction for digital",
    ],
  },
  {
    index: "04",
    id: "manage",
    code: "MANAGE",
    title: "Website Management",
    summary: "Maintenance, optimization, hosting and continuous improvements.",
    description:
      "Launch day is the beginning. We keep sites fast, secure and current, and keep improving them as your business and its goals change.",
    capabilities: [
      "Hosting & infrastructure",
      "Maintenance & security updates",
      "Performance monitoring",
      "Ongoing iteration & support",
    ],
  },
];

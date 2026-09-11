export const SITE_URL = "https://advanta-group.com";

export const SITE = {
  name: "Advanta",
  legalName: "Advanta",
  tagline: "Digital experiences that move businesses forward.",
  description:
    "Advanta is a digital studio in Antwerp, Belgium building websites, e-commerce and digital marketing for businesses ready to move further.",
  email: "info@advanta-group.com",
  phone: "+32 483 35 58 36",
  phoneHref: "tel:+32483355836",
  city: "Antwerp",
  country: "Belgium",
  addressLine: "Antwerp, Belgium",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Marketing", href: "/marketing" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const FOOTER_LINKS = {
  navigate: NAV_LINKS,
  services: [
    { label: "Web Development", href: "/services#build" },
    { label: "Digital Marketing", href: "/services#grow" },
    { label: "Design & Branding", href: "/services#design" },
    { label: "Management & Growth", href: "/services#manage" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/advantagroup",
    ariaLabel: "Advanta on LinkedIn",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/advantabv/",
    ariaLabel: "Advanta on Instagram",
  },
] as const;

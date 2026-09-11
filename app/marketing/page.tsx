import type { Metadata } from "next";
import { MarketingHero } from "@/components/marketing/MarketingHero";
import { MarketingServices } from "@/components/marketing/MarketingServices";
import { MarketingStrategy } from "@/components/marketing/MarketingStrategy";
import { MarketingProcess } from "@/components/marketing/MarketingProcess";
import { MarketingSpotlight } from "@/components/marketing/MarketingSpotlight";
import { MarketingConnection } from "@/components/marketing/MarketingConnection";
import { MarketingCTA } from "@/components/marketing/MarketingCTA";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Services",
  description:
    "Strategy, content, paid advertising and SEO from Advanta Marketing — built to turn attention into measurable business growth.",
  path: "/marketing",
});

export default function MarketingPage() {
  return (
    <>
      <MarketingHero />
      <MarketingServices />
      <MarketingStrategy />
      <MarketingProcess />
      <MarketingSpotlight />
      <MarketingConnection />
      <MarketingCTA />
    </>
  );
}

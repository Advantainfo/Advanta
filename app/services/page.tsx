import type { Metadata } from "next";
import { SERVICES } from "@/lib/content/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Web Development, SEO, Design & Management Services",
  description:
    "Web development, digital marketing, design & branding, and website management — four disciplines, one digital partner based in Antwerp, Belgium.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything a digital presence needs, under one roof."
        description="From the first line of code to the SEO strategy that follows it, we cover the full lifecycle of a digital product."
      />
      <div>
        {SERVICES.map((service, i) => (
          <ServiceDetail key={service.id} service={service} position={i} />
        ))}
      </div>
      <FinalCTA />
    </>
  );
}

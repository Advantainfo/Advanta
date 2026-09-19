import type { Metadata } from "next";
import { INSIGHTS } from "@/lib/content/insights";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/animations/InView";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { InsightCard } from "@/components/insights/InsightCard";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical writing on web development, SEO and digital marketing for businesses in Belgium — no fluff, no fabricated statistics.",
  path: "/insights",
});

export default function InsightsPage() {
  const [featured, ...rest] = [...INSIGHTS].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes on building things that work."
        description="Practical, specific writing on web development, SEO and digital marketing. No filler, no fabricated statistics."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          {featured ? (
            <InView className="border-t border-hairline pt-14">
              <FeaturedInsight article={featured} />
            </InView>
          ) : null}

          {rest.length ? (
            <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 border-t border-hairline pt-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article, i) => (
                <InView key={article.slug} delay={(i % 3) * 0.06}>
                  <InsightCard article={article} />
                </InView>
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS } from "@/lib/content/insights";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/animations/InView";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical writing on web development, SEO and digital marketing for businesses in Belgium — no fluff, no fabricated statistics.",
  path: "/insights",
});

export default function InsightsPage() {
  const articles = [...INSIGHTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes on building things that work."
        description="Practical, specific writing on web development, SEO and digital marketing. No filler, no fabricated statistics."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-x-12 gap-y-14 border-t border-hairline pt-14 md:grid-cols-2">
            {articles.map((article, i) => (
              <InView key={article.slug} delay={(i % 2) * 0.06}>
                <Link href={`/insights/${article.slug}`} className="group flex flex-col gap-4">
                  <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
                    {article.topic} · {formatDate(article.publishedAt)} · {article.readingTime}
                  </p>
                  <h2 className="text-2xl leading-snug font-semibold tracking-tight text-fg transition-colors group-hover:text-fg/80">
                    {article.title}
                  </h2>
                  <p className="max-w-lg text-base leading-relaxed text-fg-muted">
                    {article.description}
                  </p>
                  <span className="text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
                    Read article →
                  </span>
                </Link>
              </InView>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

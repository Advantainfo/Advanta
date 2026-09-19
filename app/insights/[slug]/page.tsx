import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INSIGHTS, getInsightArticle, getRelatedInsights } from "@/lib/content/insights";
import { Container } from "@/components/ui/Container";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { InView } from "@/components/animations/InView";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { InsightVisual } from "@/components/insights/InsightVisual";
import { TopicBadge } from "@/components/insights/TopicBadge";
import { InsightCard } from "@/components/insights/InsightCard";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE, SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return INSIGHTS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) notFound();

  const related = getRelatedInsights(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="pt-40 pb-16 md:pt-48 md:pb-20">
          <Container>
            <Link href="/insights" className="text-sm text-fg-muted transition-colors hover:text-fg">
              ← All insights
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <TopicBadge topic={article.topic} />
              <p className="text-xs font-medium tracking-[0.25em] text-fg-faint uppercase">
                {formatDate(article.publishedAt)} · {article.readingTime}
              </p>
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-fg sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
              {article.description}
            </p>
          </Container>
        </section>

        <section className="pb-16">
          <Container>
            <ImageReveal className="aspect-[21/9] rounded-3xl">
              <InsightVisual article={article} className="h-full w-full" />
            </ImageReveal>
          </Container>
        </section>

        <section className="pb-24 md:pb-32">
          <Container>
            <InView className="max-w-2xl">
              <ArticleBody blocks={article.body} />
            </InView>
          </Container>
        </section>
      </article>

      {related.length ? (
        <section className="border-t border-hairline py-20 md:py-28">
          <Container>
            <Eyebrow>More insights</Eyebrow>
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <InView key={item.slug} delay={i * 0.06}>
                  <InsightCard article={item} />
                </InView>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}

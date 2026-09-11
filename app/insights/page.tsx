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
            <InView>
              <Link
                href={`/insights/${featured.slug}`}
                className="group flex flex-col gap-5 border-t border-hairline pt-14"
              >
                <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
                  {featured.topic} · {formatDate(featured.publishedAt)} · {featured.readingTime}
                </p>
                <h2 className="max-w-3xl text-3xl leading-snug font-semibold tracking-tight text-fg transition-colors group-hover:text-fg/80 sm:text-4xl md:text-5xl">
                  {featured.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
                  {featured.description}
                </p>
                <span className="text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
                  Read article →
                </span>
              </Link>
            </InView>
          ) : null}

          {rest.length ? (
            <div className="mt-16 grid grid-cols-1 gap-8 border-t border-hairline pt-14 md:grid-cols-2">
              {rest.map((article, i) => (
                <InView key={article.slug} delay={(i % 2) * 0.06}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-hairline bg-bg-panel/30 p-6 transition-colors duration-300 hover:border-fg-faint hover:bg-bg-panel/60 md:p-8"
                  >
                    <p className="text-xs font-medium tracking-[0.2em] text-fg-faint uppercase">
                      {article.topic} · {formatDate(article.publishedAt)} · {article.readingTime}
                    </p>
                    <h2 className="text-xl leading-snug font-semibold tracking-tight text-fg transition-colors group-hover:text-fg/80">
                      {article.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-fg-muted">{article.description}</p>
                    <span className="mt-auto pt-1 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
                      Read article →
                    </span>
                  </Link>
                </InView>
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}

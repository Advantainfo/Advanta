export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  publishedAt: string; // ISO date
  readingTime: string;
  body: ContentBlock[];
  /** Header photo, in public/insights. Falls back to the abstract topic visual when unset. */
  image?: string;
};

export const INSIGHTS: InsightArticle[] = [
  {
    slug: "how-much-does-a-business-website-cost-in-belgium",
    image: "/insights/how-much-does-a-business-website-cost-in-belgium.jpg",
    title: "How much does a business website cost in Belgium?",
    description:
      "A realistic breakdown of what shapes web development pricing in Belgium — and why the cheapest quote is rarely the cheapest outcome.",
    topic: "Web Development",
    publishedAt: "2026-02-10",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "It's a fair question, and one we get asked directly. The honest answer is: it depends on what the website has to do, not just how it looks. A five-page brochure site and a web application with a booking system, a CMS and multilingual content are not the same category of project, even if both get called \"a website.\"",
      },
      { type: "h2", text: "What actually drives the price" },
      {
        type: "list",
        items: [
          "Scope — number of templates, not just pages. A blog, a product catalogue, and a contact form are three different builds.",
          "Content model — a site editable by your team needs a CMS and structured content, which takes real setup time.",
          "Design — a custom visual identity takes longer than working within an existing brand system.",
          "Integrations — payments, booking tools, CRMs and marketing platforms each add scope.",
          "Languages — Belgium usually means at least Dutch and French, sometimes English on top. Multilingual structure isn't an afterthought; it affects the build from day one.",
        ],
      },
      {
        type: "p",
        text: "Agencies and freelancers in Belgium price this work differently — some quote a flat project fee, others price by phase (design, then development, then launch). Neither is wrong, but you should always know what's included: is hosting setup covered? Is there a revision limit? Who owns the code and content afterward?",
      },
      { type: "h2", text: "Why the cheapest quote often costs more" },
      {
        type: "p",
        text: "A low quote usually means one of three things: a template with limited customization, a narrower scope than you think you're getting, or a team pricing to win the job rather than to deliver it properly. None of those are automatically dishonest — but they tend to show up later, as scope disputes, slow page speeds, or a site that's hard to hand off to someone else.",
      },
      {
        type: "p",
        text: "The more useful question isn't \"what does a website cost\" but \"what does this specific project need to do, and what does that require.\" That's a conversation, not a price list — which is exactly how we approach the first call with anyone who reaches out.",
      },
    ],
  },
  {
    slug: "why-isnt-my-business-appearing-on-google",
    image: "/insights/why-isnt-my-business-appearing-on-google.jpg",
    title: "Why isn't my business appearing on Google?",
    description:
      "The most common, unglamorous reasons a website doesn't show up in search — and what to check before assuming it's an algorithm problem.",
    topic: "SEO",
    publishedAt: "2026-03-04",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "This is usually less mysterious than it feels. Before anything else, search your exact business name in an incognito window. If you don't appear even for your own name, the problem is technical, not competitive — and technical problems are fixable.",
      },
      { type: "h2", text: "Start with the basics" },
      {
        type: "list",
        items: [
          "Is the site actually indexed? Search \"site:yourdomain.com\" — if nothing comes back, Google hasn't indexed it yet.",
          "Is there a robots.txt or meta tag accidentally blocking search engines? This happens more often than people expect, especially after a redesign.",
          "Is there a Google Business Profile, and is it verified and complete? For local searches, this often matters more than the website itself.",
          "Does the site have a sitemap submitted through Search Console? It won't guarantee indexing, but it helps Google find your pages faster.",
        ],
      },
      { type: "h2", text: "Then look at relevance" },
      {
        type: "p",
        text: "If the site is indexed but not ranking for the terms that matter, the likely cause is that the page doesn't clearly answer the question someone is searching. Search engines are trying to match intent — a homepage that only says who you are, without describing what you do and where you do it, gives them very little to match against.",
      },
      {
        type: "p",
        text: "This is where a lot of small business sites fall short: strong branding, thin content. A page needs enough specific, relevant text for a search engine — and a potential customer — to understand exactly what's being offered.",
      },
      { type: "h2", text: "What to do next" },
      {
        type: "p",
        text: "Fix the technical basics first, since nothing else matters if the site isn't indexable. Then look at whether each key page actually targets a real search query with real, specific content. That combination — technically sound, genuinely relevant — is what search visibility is built on.",
      },
    ],
  },
  {
    slug: "what-makes-a-high-converting-website",
    image: "/insights/what-makes-a-high-converting-website.jpg",
    title: "What makes a high-converting website?",
    description:
      "Conversion isn't a trick or a color of button. It's clarity, trust and reduced friction, applied consistently.",
    topic: "Conversion",
    publishedAt: "2026-04-08",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Conversion rate optimization has a reputation for being about button colors and psychological tricks. In practice, the sites that convert well are usually just clearer than their competitors — about what they do, who it's for, and what happens if you take the next step.",
      },
      { type: "h2", text: "Clarity beats cleverness" },
      {
        type: "p",
        text: "Visitors decide whether they're in the right place within seconds. If the headline is abstract or the value proposition is buried under a slogan, people leave before they even understand the offer. A high-converting page usually front-loads the answer to \"what is this, and is it for me\" instead of making the visitor work for it.",
      },
      { type: "h2", text: "Friction is the real enemy" },
      {
        type: "list",
        items: [
          "Every unnecessary form field is a reason to abandon it.",
          "A slow page is a conversion loss before anyone reads a word of copy.",
          "An unclear call to action — three competing buttons, or none at all — leaves visitors to decide nothing.",
          "A confusing navigation makes people question whether they're dealing with a serious business.",
        ],
      },
      { type: "h2", text: "Trust is built, not claimed" },
      {
        type: "p",
        text: "Trust signals matter, but only the honest kind: real contact information, a professional design that matches the quality of the business, clear pricing or process information where possible, and consistency between what's promised and what's delivered on the next page. Fabricated reviews or invented numbers tend to do the opposite of what people intend — they're easy to spot, and they cost credibility instead of building it.",
      },
      {
        type: "p",
        text: "In our experience, most conversion gains don't come from a redesign — they come from removing the small obstacles between someone's intent and the action you want them to take.",
      },
    ],
  },
  {
    slug: "why-website-performance-matters",
    image: "/insights/why-website-performance-matters.jpg",
    title: "Why website performance matters",
    description:
      "Speed isn't a technical detail — it shapes how visitors judge your business before they read a single word.",
    topic: "Performance",
    publishedAt: "2026-05-12",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "Performance gets treated as an engineering concern, but it's really a business one. A slow site doesn't just frustrate visitors — it actively signals that the business behind it might be equally slow, outdated, or careless. That impression forms before anyone reads a single sentence of copy.",
      },
      { type: "h2", text: "It's also a ranking factor" },
      {
        type: "p",
        text: "Google has been explicit that Core Web Vitals — measures of loading speed, interactivity and visual stability — factor into search ranking. A technically fast site won't outrank genuinely more relevant content on its own, but a slow site can actively hold back content that would otherwise rank well.",
      },
      { type: "h2", text: "Where performance is usually lost" },
      {
        type: "list",
        items: [
          "Unoptimized images — the single most common cause of slow load times on marketing sites.",
          "Heavy, unnecessary JavaScript — often from tools and widgets added over time, rarely removed.",
          "Web fonts loaded without care, causing visible layout shift as text re-renders.",
          "No caching or CDN strategy, so every visitor pays the full cost of a cold request.",
        ],
      },
      { type: "h2", text: "How we approach it" },
      {
        type: "p",
        text: "Performance is easiest to protect when it's a constraint from the start — image formats, font loading strategy, and how much client-side JavaScript a page actually needs — rather than a cleanup exercise after launch. It's also never \"finished\": new content and features tend to erode performance quietly unless something is actually monitoring it.",
      },
    ],
  },
  {
    slug: "how-local-seo-helps-belgian-businesses",
    image: "/insights/how-local-seo-helps-belgian-businesses.jpg",
    title: "How local SEO helps Belgian businesses",
    description:
      "For most local and regional businesses in Belgium, showing up in local search matters more than ranking nationally.",
    topic: "SEO",
    publishedAt: "2026-06-09",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "A lot of SEO advice is written for large, national or international sites competing on broad keywords. Most Belgian businesses — a dentist in Antwerp, a contractor in Ghent, a boutique in Leuven — aren't actually competing on that scale. Local search is a different, more winnable game.",
      },
      { type: "h2", text: "What local SEO actually covers" },
      {
        type: "list",
        items: [
          "A complete, verified Google Business Profile, with accurate categories, hours and service areas.",
          "Consistent business name, address and phone number across every listing and directory.",
          "Location-specific content — pages that clearly mention the cities or regions actually served.",
          "Reviews that are genuinely earned and genuinely responded to.",
        ],
      },
      { type: "h2", text: "Why it matters more here, not less" },
      {
        type: "p",
        text: "Belgium's multilingual reality (Dutch, French, sometimes German and English) means local search behavior varies by region — a site that only exists in one language may be invisible to a meaningful part of its own local market. Local SEO in Belgium isn't just about proximity; it's about language and regional relevance too.",
      },
      {
        type: "p",
        text: "Done properly, local SEO is one of the highest-leverage investments a regional business can make in its website — it targets people who are already looking for exactly what's being offered, in the place they're looking for it.",
      },
    ],
  },
  {
    slug: "website-maintenance-what-businesses-actually-need",
    image: "/insights/website-maintenance-what-businesses-actually-need.jpg",
    title: "Website maintenance: what businesses actually need",
    description:
      "Maintenance isn't just \"keeping the lights on.\" Here's what ongoing care for a business website should really include.",
    topic: "Management",
    publishedAt: "2026-07-14",
    readingTime: "4 min read",
    body: [
      {
        type: "p",
        text: "\"Maintenance\" is often sold as a vague monthly line item. In practice, it should be a specific set of responsibilities — and it's worth knowing what's actually included before you pay for it.",
      },
      { type: "h2", text: "The essentials" },
      {
        type: "list",
        items: [
          "Security updates — for the CMS, plugins and underlying framework, applied before they become a vulnerability rather than after.",
          "Uptime and error monitoring, so problems are caught before a customer reports them.",
          "Regular backups that are actually tested, not just scheduled.",
          "Performance checks as content and traffic grow.",
        ],
      },
      { type: "h2", text: "The part that's often missing" },
      {
        type: "p",
        text: "The most valuable form of maintenance isn't defensive — it's the ongoing, small improvements: updating copy as the business evolves, fixing friction points identified through analytics, adjusting for new devices and browsers. A site that never changes after launch tends to quietly fall behind, even if nothing is technically \"broken.\"",
      },
      {
        type: "p",
        text: "A website is closer to a product than a brochure. It benefits from the same thing any product benefits from: someone paying continued attention to it.",
      },
    ],
  },
];

export function getInsightArticle(slug: string) {
  return INSIGHTS.find((a) => a.slug === slug);
}

/** Same-topic articles first, then the most recent others, excluding the current one. */
export function getRelatedInsights(slug: string, limit = 3) {
  const current = getInsightArticle(slug);
  const others = INSIGHTS.filter((a) => a.slug !== slug);
  if (!current) return others.slice(0, limit);

  const sameTopic = others.filter((a) => a.topic === current.topic);
  const rest = others
    .filter((a) => a.topic !== current.topic)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return [...sameTopic, ...rest].slice(0, limit);
}

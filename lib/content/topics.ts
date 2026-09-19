const TOPIC_ACCENTS: Record<string, { from: string; to: string; solid: string }> = {
  "Web Development": { from: "var(--blue)", to: "var(--indigo)", solid: "var(--blue)" },
  SEO: { from: "var(--cyan)", to: "var(--blue)", solid: "var(--cyan)" },
  Conversion: { from: "var(--magenta)", to: "var(--violet)", solid: "var(--magenta)" },
  Performance: { from: "var(--violet)", to: "var(--magenta)", solid: "var(--violet)" },
  Management: { from: "var(--indigo)", to: "var(--violet)", solid: "var(--indigo)" },
};

const DEFAULT_ACCENT = { from: "var(--blue)", to: "var(--indigo)", solid: "var(--blue)" };

export function getTopicAccent(topic: string) {
  return TOPIC_ACCENTS[topic] ?? DEFAULT_ACCENT;
}

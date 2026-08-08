import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/ui/LegalContent";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Advanta collects, uses and protects personal data.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "8 August 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description={`Last updated: ${LAST_UPDATED}`} />
      <section className="pb-24 md:pb-32">
        <Container>
          <LegalSection title="Who we are" className="border-t-0">
            <p>
              This website is operated by {SITE.legalName}, based in {SITE.addressLine}. For any
              question about this policy or your personal data, contact us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </LegalSection>

          <LegalSection title="What data we collect">
            <p>
              We only collect personal data that you actively provide to us, principally through
              the contact form on this website. This may include your name, company name, email
              address, phone number, selected service, budget range and the project details you
              share with us.
            </p>
            <p>
              We do not currently use analytics or advertising cookies on this site. If that
              changes, this policy will be updated accordingly and, where required, we will ask
              for your consent first.
            </p>
          </LegalSection>

          <LegalSection title="Why we collect it">
            <ul>
              <li>To respond to your project inquiry and follow up with you.</li>
              <li>To understand the scope of a potential project before we quote or scope it.</li>
              <li>To keep a record of our communication with you, where relevant.</li>
            </ul>
            <p>
              The legal basis for this processing is our legitimate interest in responding to
              business inquiries, and, where a contract results, the performance of that
              contract.
            </p>
          </LegalSection>

          <LegalSection title="Who we share it with">
            <p>
              Contact form submissions are sent via Resend, our transactional email provider,
              solely to deliver your inquiry to our inbox. We do not sell or rent personal data
              to third parties, and we do not share it for marketing purposes without your
              explicit consent.
            </p>
          </LegalSection>

          <LegalSection title="How long we keep it">
            <p>
              We retain inquiry data for as long as reasonably necessary to respond to your
              request and, where a business relationship follows, for the duration of that
              relationship plus any period required by Belgian tax or accounting law.
            </p>
          </LegalSection>

          <LegalSection title="Your rights">
            <p>
              Under the EU General Data Protection Regulation (GDPR), you have the right to
              access, correct, or request deletion of your personal data, to object to or
              restrict certain processing, and to data portability. To exercise any of these
              rights, contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. You also
              have the right to lodge a complaint with the Belgian Data Protection Authority
              (Gegevensbeschermingsautoriteit / Autorité de protection des données).
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}

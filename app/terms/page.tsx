import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/ui/LegalContent";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms that govern use of the Advanta website.",
  path: "/terms",
});

const LAST_UPDATED = "8 August 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" description={`Last updated: ${LAST_UPDATED}`} />
      <section className="pb-24 md:pb-32">
        <Container>
          <LegalSection title="Use of this website" className="border-t-0">
            <p>
              This website is provided by {SITE.legalName} ({SITE.addressLine}) for the purpose
              of presenting our services and allowing prospective clients to get in touch. By
              using this website, you agree to use it only for lawful purposes and in a way that
              does not infringe the rights of, or restrict or inhibit the use of, this site by
              anyone else.
            </p>
          </LegalSection>

          <LegalSection title="Intellectual property">
            <p>
              The content of this website — including text, design, layout, graphics and the
              Advanta name and logo — is the property of {SITE.legalName} unless otherwise
              stated, and is protected by copyright and trademark law. You may not reproduce,
              distribute or otherwise use any part of this site without our prior written
              consent.
            </p>
          </LegalSection>

          <LegalSection title="No warranty">
            <p>
              This website and its content are provided &ldquo;as is&rdquo;. While we take
              reasonable care to keep information accurate and up to date, we make no
              representation or warranty of any kind, express or implied, regarding its
              completeness or accuracy.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, {SITE.legalName} shall not be liable for
              any indirect, incidental or consequential loss or damage arising from the use of,
              or inability to use, this website.
            </p>
          </LegalSection>

          <LegalSection title="Project engagements">
            <p>
              Any actual project or service engagement with {SITE.legalName} is governed by a
              separate written agreement or quote agreed between the parties, which takes
              precedence over these general website terms.
            </p>
          </LegalSection>

          <LegalSection title="Governing law">
            <p>
              These terms are governed by Belgian law. Any dispute arising from the use of this
              website will be subject to the exclusive jurisdiction of the courts of Antwerp,
              Belgium.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}

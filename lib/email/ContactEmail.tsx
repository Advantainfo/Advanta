import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ContactFormValues } from "@/lib/validation/contact";

type ContactEmailProps = Pick<
  ContactFormValues,
  "name" | "company" | "email" | "phone" | "service" | "budget" | "message"
> & {
  submittedAt: string;
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Section style={{ marginBottom: 14 }}>
      <Text style={fieldLabel}>{label}</Text>
      <Text style={fieldValue}>{value}</Text>
    </Section>
  );
}

export function ContactEmail({
  name,
  company,
  email,
  phone,
  service,
  budget,
  message,
  submittedAt,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New project inquiry from {name}</Preview>
      <Body style={body}>
        <Container style={container}>
          <div style={brandBar} />
          <Section style={{ padding: "32px 40px 8px" }}>
            <Heading style={heading}>New Advanta project inquiry</Heading>
            <Text style={subheading}>Submitted {submittedAt}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={{ padding: "8px 40px" }}>
            <Field label="Name" value={name} />
            <Field label="Company" value={company || "—"} />
            <Field label="Email" value={email} />
            <Field label="Phone" value={phone || "—"} />
            <Field label="Service" value={service} />
            <Field label="Budget" value={budget} />
            <Section style={{ marginBottom: 4 }}>
              <Text style={fieldLabel}>Project details</Text>
              <Text style={{ ...fieldValue, whiteSpace: "pre-wrap" }}>{message}</Text>
            </Section>
          </Section>

          <Hr style={hr} />

          <Section style={{ padding: "0 40px 32px" }}>
            <Text style={footer}>
              This inquiry was sent from the contact form at advanta-group.com. Reply directly to
              this email to respond to {name}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactEmail;

const body: React.CSSProperties = {
  backgroundColor: "#f4f5f9",
  fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif",
  padding: "32px 12px",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: 16,
  overflow: "hidden",
  maxWidth: 560,
  margin: "0 auto",
  border: "1px solid #e6e8f0",
};

const brandBar: React.CSSProperties = {
  height: 6,
  width: "100%",
  background: "linear-gradient(90deg, #2f6fff 0%, #7c3aed 55%, #e934c5 100%)",
};

const heading: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  color: "#0b0d17",
  margin: 0,
};

const subheading: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7086",
  margin: "6px 0 0",
};

const hr: React.CSSProperties = {
  borderColor: "#e6e8f0",
  margin: 0,
};

const fieldLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#8b3df0",
  margin: "0 0 4px",
};

const fieldValue: React.CSSProperties = {
  fontSize: 15,
  color: "#1a1c2b",
  margin: 0,
  lineHeight: 1.5,
};

const footer: React.CSSProperties = {
  fontSize: 12,
  color: "#8a8fa3",
  lineHeight: 1.6,
  margin: 0,
};

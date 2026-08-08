import { Resend } from "resend";
import { ContactEmail } from "@/lib/email/ContactEmail";
import { SITE } from "@/lib/constants";
import type { ContactFormValues } from "@/lib/validation/contact";

export type ContactEmailInput = Pick<
  ContactFormValues,
  "name" | "company" | "email" | "phone" | "service" | "budget" | "message"
>;

/**
 * Sends the contact form inquiry to the studio inbox via Resend.
 * Throws if RESEND_API_KEY is missing/invalid or the send otherwise fails —
 * the API route is responsible for turning that into an honest error
 * response rather than a fake success.
 */
export async function sendContactEmail(input: ContactEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured. Add it to your environment to enable the contact form.",
    );
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL ?? "Advanta Website <onboarding@resend.dev>";

  const submittedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Brussels",
  });

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: SITE.email,
    replyTo: input.email,
    subject: `New Advanta project inquiry — ${input.name}`,
    react: ContactEmail({ ...input, submittedAt }),
  });

  if (error) {
    throw new Error(error.message ?? "Resend failed to send the email.");
  }
}

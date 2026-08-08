import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Web Development",
  "Website Redesign",
  "E-commerce",
  "SEO",
  "Digital Marketing",
  "Design & Branding",
  "Website Management",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "€500 – €1,000",
  "€1,000 – €2,500",
  "€2,500 – €5,000",
  "€5,000+",
  "Not sure yet",
] as const;

// Shared by client (react-hook-form) and server (API route) so validation
// can never drift between the two.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS, { message: "Please select a service." }),
  budget: z.enum(BUDGET_OPTIONS, { message: "Please select a budget range." }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a few more details about the project (at least 20 characters).")
    .max(4000),
  // Honeypot — must remain empty. Real visitors never see or fill this
  // field, so no length cap here: a filled value should reach the API
  // route's honeypot check (which fails silently) rather than surface as a
  // validation error that tips off bots.
  website: z.string().optional().or(z.literal("")),
  // Client-side timestamp (ms) of when the form was rendered, used server-side
  // to reject submissions that complete implausibly fast (bots).
  startedAt: z.number(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

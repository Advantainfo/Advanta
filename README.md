# Advanta

Marketing website for Advanta — a digital studio in Antwerp, Belgium. Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Resend.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form / email

The form at `/contact` sends via [Resend](https://resend.com). Copy `.env.local.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from your Resend account.
- `RESEND_FROM_EMAIL` — must be on a domain verified in Resend (e.g. `Advanta <hello@advanta-group.com>`). Defaults to the Resend sandbox sender, which only delivers to the account owner's own inbox.

Until `RESEND_API_KEY` is set, the form correctly reports a failure rather than a fake success — see `app/api/contact/route.ts` and `lib/email/send.ts`.

## Project structure

- `app/` — routes (App Router). `app/api/contact/route.ts` is the contact form's server endpoint.
- `components/` — organized by domain: `layout/`, `navigation/`, `hero/`, `sections/`, `services/`, `projects/`, `animations/`, `contact/`, `ui/`.
- `lib/content/` — typed site copy (services, process, work, insights, why-advanta) — edit here to change on-site content.
- `lib/constants.ts` — company info, nav links, footer links.
- `lib/validation/contact.ts` — the contact form's zod schema, shared by client and server.

## Content notes

- `/work` currently ships with clearly-labeled placeholder case studies (no fabricated clients or results) — replace entries in `lib/content/work.ts` as real projects launch.
- `/insights` articles are original writing in `lib/content/insights.ts`.

## Scripts

- `npm run dev` / `npm run build` / `npm run start` / `npm run lint`
- `node scripts/generate-og.mjs` — regenerates `public/og.png` from the brand mark if the tagline or colors change.

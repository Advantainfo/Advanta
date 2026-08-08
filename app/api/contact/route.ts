import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/email/send";

export const runtime = "nodejs";

const MIN_FILL_TIME_MS = 2500;
const GENERIC_ERROR =
  "Something went wrong. Please try again or contact us directly.";

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const { allowed, retryAfterSeconds } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429, headers: retryAfterSeconds ? { "Retry-After": String(retryAfterSeconds) } : undefined },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: GENERIC_ERROR }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { success: false, message: firstIssue?.message ?? "Please check the form and try again." },
      { status: 400 },
    );
  }

  const { website, startedAt, ...data } = parsed.data;

  // Honeypot: a real visitor never fills this hidden field.
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Reject implausibly fast submissions (bots filling the form instantly).
  if (Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ success: true });
  }

  try {
    await sendContactEmail(data);
  } catch (error) {
    console.error("[contact] failed to send inquiry email", error);
    return NextResponse.json({ success: false, message: GENERIC_ERROR }, { status: 502 });
  }

  return NextResponse.json({
    success: true,
    message: "Thank you. Your project inquiry has been sent. We'll be in touch shortly.",
  });
}

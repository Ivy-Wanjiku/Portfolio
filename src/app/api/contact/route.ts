import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RESEND_API_URL = "https://api.resend.com/emails";
const DEFAULT_FROM_EMAIL = "Ivy Wanjiku Portfolio <onboarding@resend.dev>";
const DUPLICATE_WINDOW_MS = 60_000;
const recentSubmissions = new Map<string, number>();

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSubmissionKey(email: string, message: string) {
  return createHash("sha256").update(`${email.toLowerCase()}\n${message}`).digest("hex");
}

function removeExpiredSubmissions(now: number) {
  for (const [key, submittedAt] of recentSubmissions) {
    if (now - submittedAt > DUPLICATE_WINDOW_MS) recentSubmissions.delete(key);
  }
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request." }, { status: 415 });
  }

  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";

  // Bots commonly fill hidden fields. Return a neutral response without sending.
  if (company) return NextResponse.json({ ok: true });

  if (
    !name ||
    name.length > 100 ||
    !email ||
    email.length > 254 ||
    !isValidEmail(email) ||
    !message ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error("Contact form email configuration is incomplete.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  const now = Date.now();
  removeExpiredSubmissions(now);
  const submissionKey = getSubmissionKey(email, message);

  if (recentSubmissions.has(submissionKey)) {
    return NextResponse.json({ error: "This message was already submitted." }, { status: 429 });
  }

  recentSubmissions.set(submissionKey, now);

  const subjectName = name.replace(/[\r\n]+/g, " ");
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: email,
        subject: `Portfolio Contact — ${subjectName}`,
        text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong><br />${safeName}</p><p><strong>Email:</strong><br />${safeEmail}</p><p><strong>Message:</strong><br />${safeMessage}</p>`,
      }),
    });

    if (!resendResponse.ok) {
      recentSubmissions.delete(submissionKey);
      console.error(`Resend rejected the contact email with status ${resendResponse.status}.`);
      return NextResponse.json({ error: "Unable to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    recentSubmissions.delete(submissionKey);
    console.error("Unable to reach the email service.", error);
    return NextResponse.json({ error: "Unable to send message." }, { status: 502 });
  }
}

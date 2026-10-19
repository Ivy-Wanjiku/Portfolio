"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

type FormState = "idle" | "submitting" | "success" | "error";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company: string;
};

async function submitContactForm(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Contact form submission failed");
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const submissionInProgress = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionInProgress.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactPayload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState("error");
      return;
    }

    submissionInProgress.current = true;
    setState("submitting");

    try {
      await submitContactForm(payload);
      form.reset();
      setState("success");
    } catch {
      setState("error");
    } finally {
      submissionInProgress.current = false;
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2 size={30} aria-hidden="true" />
        <h3>Message sent successfully.</h3>
        <p>I&apos;ll get back to you soon.</p>
        <button className="text-link" type="button" onClick={() => setState("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="honeypot-field" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="field-row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
        </label>
      </div>

      <label>
        Message
        <textarea name="message" rows={6} required maxLength={5000} placeholder="Tell me a little about the project or opportunity." />
      </label>

      <button className="button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? (
          <>
            <LoaderCircle className="spin" size={18} aria-hidden="true" /> Sending...
          </>
        ) : (
          <>
            Send Message <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="form-note">
        Prefer email? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>

      {state === "error" ? (
        <p className="form-error" role="alert">
          Something went wrong. Please try again or email me directly.
        </p>
      ) : null}
    </form>
  );
}

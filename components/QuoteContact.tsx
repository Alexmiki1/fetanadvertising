"use client";

import { type FormEvent, useState } from "react";
import { quoteFormContent, siteMeta } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const requirements = [
  "Your full name and email address",
  "Phone number for quick follow-up",
  "Company or brand name (if applicable)",
  "Which service you're interested in",
  "A brief description of your project goals",
  "Any timeline or budget considerations",
];

export function QuoteContact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const headingLines = quoteFormContent.heading.split("\n");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(data.error || quoteFormContent.errorMessage);
        return;
      }

      setSubmitted(true);
      setForm(initialState);
    } catch {
      setError(quoteFormContent.errorMessage);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="quote-contact" id="contact">
      <div className="wrap">
        <div className="quote-two-col">
          {/* ─── LEFT: Info panel ─── */}
          <Reveal className="quote-info-col">
            <div className="quote-info-sticky">
              <span className="eyebrow">{quoteFormContent.eyebrow}</span>
              <h2 className="display quote-info-heading">
                {headingLines[0]}
                <br />
                {headingLines[1]}
              </h2>
              <p className="quote-info-subcopy">{quoteFormContent.subcopy}</p>

              <div className="quote-checklist">
                <h3 className="mono quote-checklist-title">Before you begin</h3>
                <ul className="quote-checklist-list">
                  {requirements.map((item) => (
                    <li key={item}>
                      <span className="quote-check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map + contact info */}
              <div className="quote-map-block">
                <div className="quote-map-frame">
                  <iframe
                    title="Fetan Advertising on Google Maps"
                    src={siteMeta.mapsEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="quote-map-meta">
                  <p className="mono quote-map-label">{quoteFormContent.mapHeading}</p>
                  <p className="quote-map-address">{quoteFormContent.mapAddress}</p>
                  <a
                    className="quote-map-link mono"
                    href={siteMeta.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps →
                  </a>
                  <ul className="quote-map-contacts">
                    <li>
                      <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
                    </li>
                    <li>
                      <a href={siteMeta.phoneHref}>{siteMeta.phone}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="quote-info-note">
                We typically respond within one business day. For urgent inquiries, call us directly or message on WhatsApp.
              </p>
            </div>
          </Reveal>

          {/* ─── RIGHT: Form panel ─── */}
          <Reveal className="quote-form-panel">
            <div className="mono quote-form-eyebrow">Subscription requirements</div>
            <h2 className="display quote-form-title">Tell us about your campaign.</h2>
            <p className="quote-form-subtitle">
              Required fields are marked with an asterisk. Our team will review and respond within one business day.
            </p>

            {submitted ? (
              <p className="quote-success">{quoteFormContent.successMessage}</p>
            ) : null}
            {error ? <p className="quote-error">{error}</p> : null}

            <form className="quote-form" onSubmit={onSubmit}>
              <div className="quote-row">
                <label className="quote-field">
                  <span className="mono">Name *</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </label>
                <label className="quote-field">
                  <span className="mono">Email *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </label>
              </div>

              <div className="quote-row">
                <label className="quote-field">
                  <span className="mono">Phone *</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </label>
                <label className="quote-field">
                  <span className="mono">Company</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                  />
                </label>
              </div>

              <div className="quote-row">
                <label className="quote-field">
                  <span className="mono">Service *</span>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {quoteFormContent.services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="quote-field">
                <span className="mono">Project details *</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Goals, timeline, locations, deliverables…"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </label>

              <button
                type="submit"
                className="btn btn-primary quote-submit"
                disabled={sending}
              >
                {sending ? "Sending…" : quoteFormContent.submitLabel}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

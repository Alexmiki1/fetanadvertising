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
        <Reveal className="section-head quote-head">
          <div>
            <p className="eyebrow">{quoteFormContent.eyebrow}</p>
            <h2 className="display">
              {headingLines[0]}
              <br />
              {headingLines[1]}
            </h2>
          </div>
          <p>{quoteFormContent.subcopy}</p>
        </Reveal>

        <div className="quote-grid">
          <Reveal className="quote-map-panel">
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
          </Reveal>

          <Reveal className="quote-form-panel">
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

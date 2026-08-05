"use client";

import { Reveal } from "@/components/Reveal";

const companies = [
  {
    id: "fetan-led",
    name: "Fetan LED",
    tag: "PREMIUM HARDWARE SUPPLY",
    description:
      "The leading supplier of high-quality LED screens and digital signage hardware in Ethiopia. Building the foundation of DOOH.",
    href: "https://www.fetanled.com/",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "fetan-dooh",
    name: "Fetan DOOH",
    tag: "OUT-OF-HOME SCREEN ADVERTISING",
    description:
      "Ethiopia's premier outdoor digital screen advertising network. Connecting brands with millions of viewers across prime urban locations.",
    href: "https://dooh.et/",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function SisterCompanies() {
  return (
    <section className="sister-companies" id="network">
      <div className="wrap">
        <Reveal className="sister-head">
          <p className="eyebrow">Our Network</p>
          <h2 className="display sister-title">EXPLORE OUR SISTER COMPANIES.</h2>
          <p className="sister-subtitle">
            Fetan Advertising is part of a larger network dedicated to transforming
            the advertising and technology landscape in Ethiopia.
          </p>
        </Reveal>

        <div className="sister-grid">
          {companies.map((co) => (
            <a
              key={co.id}
              href={co.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sister-card"
              id={`sister-${co.id}`}
            >
              <div className="sister-icon">{co.icon}</div>
              <div className="sister-body">
                <h3 className="sister-name">{co.name}</h3>
                <span className="sister-tag mono">{co.tag}</span>
                <p className="sister-desc">{co.description}</p>
              </div>
              <div className="sister-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

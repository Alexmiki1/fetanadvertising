"use client";

import { useState } from "react";
import { faqContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingLines = faqContent.heading.split("\n");

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <Reveal className="faq-header">
          <span className="faq-eyebrow mono">{faqContent.eyebrow}</span>
          <h2 className="faq-heading display">
            {headingLines[0]}
            <br />
            {headingLines[1]}
          </h2>
          <p className="faq-subcopy">{faqContent.subcopy}</p>
        </Reveal>

        <Reveal className="faq-list">
          {faqContent.faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-item-open" : ""}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

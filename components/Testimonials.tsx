"use client";

import { useState } from "react";
import { testimonials, testimonialsSection } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [current, setCurrent] = useState(testimonials[0]);
  const headingLines = testimonialsSection.heading.split("\n");

  function goTo(next: number) {
    setFading(true);
    window.setTimeout(() => {
      setIndex(next);
      setCurrent(testimonials[next]);
      setFading(false);
    }, 200);
  }

  function prev() {
    goTo((index - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    goTo((index + 1) % testimonials.length);
  }

  return (
    <section className="testimonials" id="stories">
      <div className="wrap">
        <Reveal className="test-shell">
          <div className="test-left">
            <div className="test-hex" />
            <span className="test-mark-bg" aria-hidden="true">
              &quot;
            </span>
            <p className="test-eyebrow">{testimonialsSection.eyebrow}</p>
            <h2 className="test-heading display">
              {headingLines[0]}
              <br />
              {headingLines[1]}
            </h2>
          </div>
          <div className="test-card">
            <div className="test-nav">
              <button
                type="button"
                className="test-arrow"
                aria-label="Previous testimonial"
                onClick={prev}
              >
                ←
              </button>
              <button
                type="button"
                className="test-arrow"
                aria-label="Next testimonial"
                onClick={next}
              >
                →
              </button>
            </div>
            <span className="test-quote-icon" aria-hidden="true">
              &quot;
            </span>
            <h3 className="test-name">{current.name}</h3>
            <p className="test-role">{current.role}</p>
            <p
              className="test-text"
              style={{ opacity: fading ? 0 : 1, transition: "opacity .2s" }}
            >
              {current.quote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

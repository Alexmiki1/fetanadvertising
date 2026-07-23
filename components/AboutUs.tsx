"use client";

import { aboutContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export function AboutUs() {
  return (
    <section className="about-us" id="about" style={{ backgroundColor: 'var(--black-card)', padding: '120px 0', borderTop: '1px solid var(--line-lt)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'flex-start' }}>
        
        {/* Left Column */}
        <Reveal className="about-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div 
            className="mono" 
            style={{ 
              color: 'var(--yellow)', 
              fontSize: '14px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontWeight: 600
            }}
          >
            {aboutContent.eyebrow}
          </div>
          <h2 
            className="display" 
            style={{ 
              color: 'var(--white)', 
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
              lineHeight: 0.9, 
              whiteSpace: 'pre-line',
              marginBottom: '40px'
            }}
          >
            {aboutContent.heading}
          </h2>
          <Link 
            href={aboutContent.button.href} 
            className="btn btn-primary"
            style={{ padding: '18px 40px', fontSize: '13px' }}
          >
            {aboutContent.button.label}
          </Link>
        </Reveal>

        {/* Right Column */}
        <Reveal className="about-right" style={{ paddingTop: '10px' }}>
          {aboutContent.paragraphs.map((p, i) => (
            <p 
              key={i} 
              className="mono"
              style={{ 
                color: 'var(--white-soft)', 
                fontSize: '15px', 
                lineHeight: 1.8, 
                marginBottom: i !== aboutContent.paragraphs.length - 1 ? '32px' : 0,
                textTransform: 'none',
                letterSpacing: '0.02em',
                maxWidth: '600px'
              }}
            >
              {p}
            </p>
          ))}
        </Reveal>

      </div>
    </section>
  );
}

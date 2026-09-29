import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { faqContent, siteMeta } from "@/lib/content";

export const metadata = {
  title: "FAQ | Fetan Advertising - Frequently Asked Questions",
  description: "Find answers to common questions about our advertising services, pricing, outdoor advertising, digital marketing, branding, and more in Ethiopia.",
};

export default function FAQPage() {
  const headingLines = faqContent.heading.split("\n");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqContent.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <section className="faq-hero" style={{ padding: '80px 0', borderBottom: '1px solid var(--line-lt)' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '20px' }}>{faqContent.eyebrow}</p>
            <h1 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px', lineHeight: 0.9 }}>
              {headingLines[0]}
              <br />
              {headingLines[1]}
            </h1>
            <p className="mono" style={{ fontSize: '1.2rem', maxWidth: '800px', color: 'var(--gray-dim)', marginBottom: '40px', textTransform: 'none', letterSpacing: 'normal' }}>
              {faqContent.subcopy}
            </p>
          </div>
        </section>
        <FAQ />
      </main>
      <CTABand />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

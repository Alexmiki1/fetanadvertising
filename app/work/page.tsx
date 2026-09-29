import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkGrid } from "@/components/WorkGrid";
import { CTABand } from "@/components/CTABand";
import { workSection } from "@/lib/content";

export const metadata = {
  title: "Our Work | Fetan Advertising - Portfolio & Case Studies",
  description: "Explore our portfolio of successful advertising campaigns, branding projects, and creative work across outdoor media, digital marketing, and live events in Ethiopia.",
};

export default function WorkPage() {
  const headingLines = workSection.heading.split("\n");

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <section className="work-hero" style={{ padding: '80px 0', borderBottom: '1px solid var(--line-lt)' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Portfolio</p>
            <h1 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px', lineHeight: 0.9 }}>
              {headingLines[0]}
              <br />
              {headingLines[1]}
            </h1>
            <p className="mono" style={{ fontSize: '1.2rem', maxWidth: '800px', color: 'var(--gray-dim)', marginBottom: '40px', textTransform: 'none', letterSpacing: 'normal' }}>
              {workSection.subcopy}
            </p>
          </div>
        </section>
        <WorkGrid />
      </main>
      <CTABand />
      <Footer />
    </>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CTABand } from "@/components/CTABand";
import { servicesSection } from "@/lib/content";

export const metadata = {
  title: "Services | Fetan Advertising - Full-Service Creative Agency",
  description: "Discover our comprehensive advertising services including outdoor advertising, digital marketing, branding, printing, exhibition booths, event branding, and strategy. Full-service creative agency in Ethiopia.",
};

export default function ServicesPage() {
  const headingLines = servicesSection.heading.split("\n");

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <section className="services-hero" style={{ padding: '80px 0', borderBottom: '1px solid var(--line-lt)' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '20px' }}>What We Produce</p>
            <h1 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px', lineHeight: 0.9 }}>
              {headingLines[0]}
              <br />
              {headingLines[1]}
            </h1>
            <p className="mono" style={{ fontSize: '1.2rem', maxWidth: '800px', color: 'var(--gray-dim)', marginBottom: '40px', textTransform: 'none', letterSpacing: 'normal' }}>
              {servicesSection.subcopy}
            </p>
          </div>
        </section>
        <ServiceGrid />
      </main>
      <CTABand />
      <Footer />
    </>
  );
}

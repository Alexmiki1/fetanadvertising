import { notFound } from "next/navigation";
import { services, workItems } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABand } from "@/components/CTABand";
import { WorkCard } from "@/components/WorkGrid";

export function generateStaticParams() {
  return services
    .filter((s) => s.id)
    .map((s) => ({
      id: s.id,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const service = services.find((s) => s.id === decodedId);
  
  if (!service) {
    notFound();
  }

  const titleParts = service.name.split("\n");

  const categoryMap: Record<string, "branding" | "outdoor"> = {
    "outdoor-advertising": "outdoor",
    "advertising": "outdoor",
    "exhibition-booth": "outdoor",
    "printing": "branding",
    "strategy": "branding",
    "design": "branding",
    "event": "branding",
    "marketing": "branding",
  };
  const targetCategory = categoryMap[decodedId] || "branding";
  const relatedWorks = workItems.filter(item => item.category === targetCategory);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <section className="service-hero" style={{ padding: '80px 0', borderBottom: '1px solid var(--line-lt)' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '20px' }}>What We Produce</p>
            <h1 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px', lineHeight: 0.9 }}>
              {titleParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < titleParts.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p className="mono" style={{ fontSize: '1.2rem', maxWidth: '800px', color: 'var(--gray-dim)', marginBottom: '40px', textTransform: 'none', letterSpacing: 'normal' }}>
              {service.desc}
            </p>
          </div>
        </section>

        {relatedWorks.length > 0 && (
          <section className="work" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="wrap">
              <h2 className="display" style={{ marginBottom: '40px' }}>Related Work</h2>
            </div>
            <div className="work-grid">
              {relatedWorks.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </main>
      <CTABand />
      <Footer />
    </>
  );
}

import { notFound } from "next/navigation";
import { workItems } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABand } from "@/components/CTABand";

export default async function CampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = workItems.find((w) => w.id === id);
  
  if (!item) {
    notFound();
  }

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <section className="work-hero" style={{ padding: '40px 0', borderBottom: '1px solid var(--line-lt)' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '20px' }}>{item.tag}</p>
            <h1 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px', lineHeight: 0.9 }}>
              {item.title}
            </h1>
            <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '700px', color: 'var(--gray-dim)', marginBottom: '80px', textTransform: 'none', letterSpacing: 'normal' }}>
              {item.description}
            </p>
          </div>
          
          <div className="wrap">
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', backgroundColor: 'var(--black-card)', minHeight: '60vh' }}>
              {item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div 
                  className={`wi-visual ${item.visual}`} 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
              )}
            </div>
          </div>
        </section>
        
        {/* Detail sections could go here in the future */}
        <section style={{ padding: '80px 0' }}>
          <div className="wrap">
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '40px' }}>The Details</h2>
            <p style={{ maxWidth: '800px', fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--gray-dim)' }}>
              This is where the extended case study content will reside. A deep dive into the strategy, production, and final results for the {item.title} campaign. 
              Currently, we showcase the core visuals and video assets above.
            </p>
          </div>
        </section>
        
        <CTABand />
      </main>
      <Footer />
    </>
  );
}

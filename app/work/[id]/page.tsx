import { notFound } from "next/navigation";
import { workItems } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABand } from "@/components/CTABand";

export function generateStaticParams() {
  return workItems.map((item) => ({
    id: item.id,
  }));
}

export default async function CampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const item = workItems.find((w) => w.id === decodedId);
  
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
              {item.category === "branding" ? (
                <div 
                  className={`wi-visual ${item.visual}`} 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                >
                  <div 
                    className="display"
                    style={{ 
                      fontSize: "clamp(4rem, 10vw, 8rem)",
                      color: "rgba(255, 255, 255, 0.04)",
                      whiteSpace: "nowrap",
                      position: "absolute",
                      pointerEvents: "none",
                      userSelect: "none",
                      transform: "rotate(-2deg) scale(1.1)",
                      fontWeight: 900,
                    }}
                  >
                    {item.title} {item.title}
                  </div>
                  <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px" }}>
                    <div 
                      className="display" 
                      style={{ 
                        fontSize: "clamp(2rem, 5vw, 4rem)", 
                        color: "var(--white)", 
                        margin: 0, 
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        lineHeight: 1.1,
                      }}
                    >
                      {item.title}
                    </div>
                    <div 
                      className="mono" 
                      style={{ 
                        color: "var(--yellow)", 
                        fontSize: "1rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "3px", 
                        display: "block", 
                        marginTop: "1rem" 
                      }}
                    >
                      Brand Identity
                    </div>
                  </div>
                </div>
              ) : item.heroYoutubeId ? (
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ position: 'absolute', inset: 0, border: 'none' }}
                  src={`https://www.youtube.com/embed/${item.heroYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${item.heroYoutubeId}`} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              ) : item.heroImage ? (
                <img 
                  src={item.heroImage} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              ) : item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : null}
            </div>
          </div>
        </section>
        
        {item.details && item.details.gallery ? (
          <div style={{ backgroundColor: 'var(--white)', paddingBottom: '120px' }}>
            {item.details.intro && (
              <section className="work-intro" style={{ padding: '80px 0 40px' }}>
                <div className="wrap">
                  <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--gray-dim)', textAlign: 'center' }}>
                    {item.details.intro}
                  </p>
                </div>
              </section>
            )}
            <section style={{ padding: '40px 0' }}>
              <div className="wrap">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '20px'
                }}>
                  {item.details.gallery.map((imgSrc, i) => (
                    <div key={i} style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <img 
                        src={imgSrc} 
                        alt={`${item.title} gallery image ${i + 1}`} 
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : item.details && item.details.sections ? (
          <div style={{ backgroundColor: 'var(--white)', color: 'var(--black)', paddingBottom: '120px' }}>
            {item.details.intro && (
              <section className="work-intro" style={{ padding: '80px 0 40px' }}>
                <div className="wrap">
                  <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--gray-dim)', textAlign: 'center' }}>
                    {item.details.intro}
                  </p>
                </div>
              </section>
            )}

            {item.details.sections.map((section, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <section key={section.number} style={{ padding: '80px 0' }}>
                  <div className="wrap" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '60px',
                    alignItems: 'center' 
                  }}>
                    {/* Content Block */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div className="display" style={{ 
                        fontSize: 'clamp(5rem, 10vw, 8rem)', 
                        color: 'var(--yellow)', 
                        lineHeight: 0.8,
                        marginBottom: '10px' 
                      }}>
                        {section.number}
                      </div>
                      <h2 className="display" style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                        color: 'var(--black)',
                        marginBottom: '30px',
                        lineHeight: 1
                      }}>
                        {section.title}
                      </h2>
                      <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: 1.7, 
                        color: 'var(--gray-dim)', 
                        whiteSpace: 'pre-line',
                        maxWidth: '500px'
                      }}>
                        {section.content}
                      </p>
                    </div>

                    {/* Image Block */}
                    <div style={{ order: isEven ? 2 : 1 }}>
                      {(section.image || section.youtubeId) && (
                        <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                          {section.youtubeId ? (
                            <iframe 
                              width="100%" 
                              style={{ aspectRatio: '16/9', display: 'block' }}
                              src={`https://www.youtube.com/embed/${section.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${section.youtubeId}`} 
                              title="YouTube video player" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            />
                          ) : (
                            <img 
                              src={section.image} 
                              alt={section.title} 
                              style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block' 
                              }} 
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        ) : item.details ? (
          <section className="work-details" style={{ padding: '80px 0', backgroundColor: 'var(--white)' }}>
            <div className="wrap">
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--gray-dim)' }}>
                  {item.details.intro}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section style={{ padding: '80px 0' }}>
            <div className="wrap">
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '40px' }}>The Details</h2>
              <p style={{ maxWidth: '800px', fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--gray-dim)' }}>
                This is where the extended case study content will reside. A deep dive into the strategy, production, and final results for the {item.title} campaign. 
                Currently, we showcase the core visuals and video assets above.
              </p>
            </div>
          </section>
        )}
        
        <CTABand />
      </main>
      <Footer />
    </>
  );
}

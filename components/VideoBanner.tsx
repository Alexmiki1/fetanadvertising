import { videoBannerContent } from "@/lib/content";

export function VideoBanner() {
  return (
    <section className="video-banner">
      <div className="video-banner-media">
        <video autoPlay muted loop playsInline poster="">
          <source src={videoBannerContent.videoSrc} type="video/mp4" />
        </video>
        <div className="video-banner-overlay" />
      </div>
      <div className="video-banner-actions">
        <a
          href={videoBannerContent.primaryCta.href}
          className="vb-btn vb-btn-solid"
        >
          {videoBannerContent.primaryCta.label}
        </a>
        <a
          href={videoBannerContent.secondaryCta.href}
          className="vb-btn vb-btn-outline"
        >
          {videoBannerContent.secondaryCta.label}
        </a>
      </div>
      <div className="video-banner-text">
        <p className="vb-text left">
          {videoBannerContent.leftText[0]}
          <br />
          {videoBannerContent.leftText[1]}
        </p>
        <p className="vb-text right">
          {videoBannerContent.rightText[0]}
          <br />
          {videoBannerContent.rightText[1]}
        </p>
      </div>
    </section>
  );
}

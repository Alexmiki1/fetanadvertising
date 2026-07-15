import { ctaBandContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function CTABand() {
  const headingLines = ctaBandContent.heading.split("\n");

  return (
    <section className="cta-band" id="contact">
      <div className="wrap cta-inner">
        <Reveal>
          <h2 className="display">
            {headingLines[0]}
            <br />
            {headingLines[1]}
          </h2>
        </Reveal>
        <Reveal>
          <a href={ctaBandContent.ctaHref} className="btn btn-primary">
            {ctaBandContent.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

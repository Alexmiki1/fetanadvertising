"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { whyFetanSlides } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function WhyFetan() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [staticMode, setStaticMode] = useState(true);

  useEffect(() => {
    const updateMode = () => {
      setStaticMode(reducedMotion || window.innerWidth <= 900);
    };
    updateMode();
    window.addEventListener("resize", updateMode);
    return () => window.removeEventListener("resize", updateMode);
  }, [reducedMotion]);

  const progress = useScrollProgress(sectionRef, !staticMode);
  const slideCount = whyFetanSlides.length;
  const maxTranslate = ((slideCount - 1) / slideCount) * 100;
  const trackTransform = staticMode
    ? undefined
    : `translateX(-${progress * maxTranslate}%)`;

  return (
    <section
      ref={sectionRef}
      className={`why-fetan${staticMode ? " wf-static" : ""}`}
      id="about"
    >
      <div className="wf-sticky">
        <div className="wf-track" style={{ transform: trackTransform }}>
          {whyFetanSlides.map((slide) => {
            if (slide.kind === "intro") {
              return (
                <div key="intro" className={`wf-slide ${slide.bg}`}>
                  <div className="wf-media">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      sizes="100vw"
                      priority
                      className="wf-media-img"
                    />
                  </div>
                  <div className="wf-hex" />
                  <div className="wf-intro-inner">
                    <h2 className="wf-title display">
                      {slide.title.split("\n").map((part, i, arr) => (
                        <span key={part}>
                          {part}
                          {i < arr.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </h2>
                    <div className="wf-pills">
                      {slide.pills.map((pill) => (
                        <span key={pill} className="wf-pill">
                          {pill}
                        </span>
                      ))}
                    </div>
                    <p className="wf-tagline mono">
                      {slide.tagline.split("\n").map((line, i, arr) => (
                        <span key={line}>
                          {line}
                          {i < arr.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div key={slide.num} className={`wf-slide ${slide.bg}`}>
                <div className="wf-media">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    sizes="100vw"
                    className="wf-media-img"
                  />
                </div>
                <div className="wf-hex" />
                <span className="wf-num">{slide.num}</span>
                <h3 className="wf-word display">{slide.word}</h3>
                <div className="wf-copy">
                  <p className="wf-line">{slide.line}</p>
                  <p className="wf-desc">{slide.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

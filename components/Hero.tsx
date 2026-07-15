"use client";

import { useEffect, useRef } from "react";
import { heroContent } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const onScroll = () => {
      const shift = Math.min(window.scrollY * 0.15, 120);
      const scale = 1.05 + Math.min(window.scrollY * 0.0002, 0.08);
      video.style.transform = `translate(-50%, calc(-50% + ${shift}px)) scale(${scale})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return (
    <section className="hero">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src={heroContent.videoSrc} type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>
      <div className="hero-beam" />
      <div className="halftone" />
      <div className="wrap hero-inner">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1 className="display">
          {heroContent.lines.map((line) => (
            <span className="line" key={line}>
              <span>
                {line.includes(heroContent.accentWord) ? (
                  <>
                    STOP <em>{heroContent.accentWord}</em>
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>
        <p className="hero-tagline mono">{heroContent.tagline}</p>
        <div className="hero-sub">
          <p>{heroContent.subcopy}</p>
          <div className="hero-actions">
            <a href={heroContent.primaryCta.href} className="btn btn-primary">
              {heroContent.primaryCta.label}
            </a>
            <a href={heroContent.secondaryCta.href} className="btn btn-ghost">
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

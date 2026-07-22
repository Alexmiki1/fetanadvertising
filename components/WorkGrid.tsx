"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  workFilters,
  workItems,
  workSection,
  type WorkCategory,
  type WorkItem,
} from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function WorkCard({ item }: { item: WorkItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function onEnter() {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }

  function onLeave() {
    videoRef.current?.pause();
  }

  return (
    <Link
      href={`/work/${item.id}`}
      className="work-item"
      data-cat={item.category}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className={`wi-visual ${item.visual}`} style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {item.category === "branding" ? (
          <>
            <div
              className="display"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
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
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)", 
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
                  fontSize: "0.75rem", 
                  textTransform: "uppercase", 
                  letterSpacing: "3px", 
                  display: "block", 
                  marginTop: "0.75rem" 
                }}
              >
                Brand Identity
              </div>
            </div>
          </>
        ) : item.heroImage ? (
          <img
            src={item.heroImage}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              mixBlendMode: "overlay",
              opacity: 0.8,
            }}
          />
        ) : null}
      </div>
      {item.videoSrc ? (
        <video
          ref={videoRef}
          className="wi-video"
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={item.videoSrc} type="video/mp4" />
        </video>
      ) : null}
      <div className="wi-overlay" />
      <span className="wi-tag mono">{item.tag}</span>
      {item.videoSrc ? <span className="wi-play mono">▶ Video</span> : null}
      <div className="wi-body">
        <h3 className="display">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </Link>
  );
}

export function WorkGrid() {
  const [filter, setFilter] = useState<WorkCategory>("all");
  const headingLines = workSection.heading.split("\n");
  const visible = workItems.filter(
    (item) => filter === "all" || item.category === filter,
  );

  return (
    <section className="work" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="display">
            {headingLines[0]}
            <br />
            {headingLines[1]}
          </h2>
          <p>{workSection.subcopy}</p>
        </Reveal>
        <Reveal className="filters">
          {workFilters.map((btn) => (
            <button
              key={btn.id}
              type="button"
              className={`filter-btn${filter === btn.id ? " active" : ""}`}
              onClick={() => setFilter(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </Reveal>
        <Reveal className="work-grid">
          {visible.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

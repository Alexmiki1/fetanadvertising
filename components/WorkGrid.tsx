"use client";

import { useRef, useState } from "react";
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
    <div
      className="work-item"
      data-cat={item.category}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className={`wi-visual ${item.visual}`} />
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
    </div>
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

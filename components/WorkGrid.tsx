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

export function WorkCard({ item }: { item: WorkItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function onEnter() {
    // Only used to reset time if needed, but for constant play we can just let it loop.
  }

  function onLeave() {
    // Intentionally empty so video keeps playing
  }

  return (
    <Link
      href={`/work/${item.id}`}
      className="work-item"
      data-cat={item.category}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className={`wi-visual ${item.visual}`}>
        {item.heroImage ? (
          <img
            src={item.heroImage}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "40px",
            }}
          />
        ) : null}
      </div>
      {item.heroYoutubeId ? (
        <iframe
          className="wi-video"
          src={`https://www.youtube.com/embed/${item.heroYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${item.heroYoutubeId}&controls=0`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: "none", pointerEvents: "none", width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : item.videoSrc ? (
        <video
          ref={videoRef}
          className="wi-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={item.videoSrc} type="video/mp4" />
        </video>
      ) : null}
      <div className="wi-overlay" />
      <span className="wi-tag mono">{item.tag}</span>
      {item.videoSrc || item.heroYoutubeId ? <span className="wi-play mono">▶ Video</span> : null}
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
    (item) => !item.hideFromHome && (filter === "all" || item.category === filter),
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

"use client";

import { useRef, useState } from "react";
import { showreelContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/useInView";

function formatTime(t: number): string {
  const m = Math.floor(t / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(t % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export function ShowreelPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: frameRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
  });
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function onTimeUpdate() {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
    setCurrentTime(video.currentTime);
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  const headingLines = showreelContent.heading.split("\n");

  return (
    <section className="showreel" id="showreel">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="display">
            {headingLines[0]}
            <br />
            {headingLines[1]}
          </h2>
          <p>{showreelContent.subcopy}</p>
        </Reveal>
        <div
          ref={frameRef}
          className={`reel-frame reveal${inView ? " in" : ""}`}
          id="reelFrame"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest(".reel-mute")) return;
            togglePlay();
          }}
        >
          <video
            ref={videoRef}
            className="reel-video"
            muted={muted}
            loop
            playsInline
            preload="metadata"
            poster=""
            onTimeUpdate={onTimeUpdate}
          >
            <source src={showreelContent.videoSrc} type="video/mp4" />
          </video>
          <div className="reel-scan" />
          <button
            type="button"
            className={`reel-play${playing ? " is-playing" : ""}`}
            aria-label={playing ? "Pause showreel" : "Play showreel"}
          >
            <span className="reel-ring" />
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </button>
          <div className="reel-bar">
            <span className="reel-time mono">{formatTime(currentTime)}</span>
            <div className="reel-progress">
              <div
                className="reel-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              type="button"
              className="reel-mute mono"
              onClick={toggleMute}
            >
              {muted ? "MUTE" : "UNMUTE"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

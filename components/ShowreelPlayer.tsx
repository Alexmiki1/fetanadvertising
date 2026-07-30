"use client";

import { showreelContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/useInView";

export function ShowreelPlayer() {
  const { ref: frameRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
  });

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
        >
          <iframe
            className="reel-video"
            src={`https://www.youtube.com/embed/${showreelContent.youtubeId}?autoplay=1&mute=1&rel=0&showinfo=0`}
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

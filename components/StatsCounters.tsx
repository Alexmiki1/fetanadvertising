"use client";

import { useEffect, useState } from "react";
import { stats, statsSection } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/useInView";

function StatNumber({ count, suffix }: { count: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.floor(eased * count);
      setDisplay(String(current));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(count + suffix);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, count, suffix]);

  return (
    <div ref={ref} className="stat-num">
      {display}
    </div>
  );
}

export function StatsCounters() {
  return (
    <section className="stats" id="impact">
      <div className="wrap">
        <Reveal className="stats-head">
          <p className="eyebrow">{statsSection.eyebrow}</p>
          <h2>{statsSection.heading}</h2>
        </Reveal>
        <Reveal className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <StatNumber count={stat.count} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

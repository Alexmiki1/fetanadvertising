"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const COUNTS = ["3", "2", "1"] as const;

export function IntroOverlay() {
  const reducedMotion = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [number, setNumber] = useState<string>(COUNTS[0]);
  const [tickKey, setTickKey] = useState(0);
  const timerRef = useRef<number | null>(null);

  function hideIntro() {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setHidden(true);
    document.documentElement.style.overflow = "";
    window.setTimeout(() => setRemoved(true), 700);
  }

  useEffect(() => {
    if (reducedMotion) {
      setRemoved(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";

    let i = 0;
    timerRef.current = window.setInterval(() => {
      i += 1;
      if (i < COUNTS.length) {
        setNumber(COUNTS[i]);
        setTickKey((k) => k + 1);
      } else {
        hideIntro();
      }
    }, 550);

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      document.documentElement.style.overflow = "";
    };
    // hideIntro is stable enough for mount-only intro lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  if (removed) return null;

  return (
    <div className={`intro-overlay${hidden ? " is-hidden" : ""}`}>
      <button type="button" className="intro-skip mono" onClick={hideIntro}>
        Skip Intro
      </button>
      <div className="intro-circle">
        <span key={tickKey} className="intro-number display">
          {number}
        </span>
      </div>
      <p className="intro-label mono">Fetan Advertising</p>
    </div>
  );
}

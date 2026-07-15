"use client";

import { useEffect, useState } from "react";

/**
 * Tracks scroll progress (0–1) for a section whose height exceeds the viewport,
 * the same way the original Why Fetan hijack computes progress.
 */
export function useScrollProgress(
  sectionRef: React.RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setProgress(0);
      return;
    }

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const rect = section.getBoundingClientRect();
      const next = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionRef, enabled]);

  return progress;
}

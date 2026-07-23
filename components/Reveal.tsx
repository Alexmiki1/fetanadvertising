"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  style?: React.CSSProperties;
};

export function Reveal({ children, className = "", as = "div", style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const Tag = as;
  const classes = ["reveal", inView ? "in" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}

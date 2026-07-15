"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : undefined}>
      <div className="wrap">
        <a href="#top" className="logo">
          FET<span>A</span>N
        </a>
        <nav>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className={[
                      link.href === "#top" ? "active" : "",
                      link.cta ? "cta-nav" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    {link.chevron ? (
                      <span className="nav-chevron">▾</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

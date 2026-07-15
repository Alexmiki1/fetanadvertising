"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenByWhyFetan, setHiddenByWhyFetan] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const whyFetan = document.querySelector<HTMLElement>(".why-fetan");
      if (!whyFetan) {
        setHiddenByWhyFetan(false);
        return;
      }

      const rect = whyFetan.getBoundingClientRect();
      // Hide while Why Fetan covers the header band at the top of the viewport
      const coveringHeader = rect.top <= 8 && rect.bottom > 96;
      setHiddenByWhyFetan(coveringHeader);

      if (coveringHeader) setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      id="siteHeader"
      className={[
        scrolled ? "scrolled" : "",
        hiddenByWhyFetan ? "is-hidden" : "",
      ]
        .filter(Boolean)
        .join(" ") || undefined}
    >
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

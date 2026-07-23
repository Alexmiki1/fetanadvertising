"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
        <Link href="/" className="logo">
          FET<span>A</span>N
        </Link>
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
              {navLinks.map((link) => {
                const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                return (
                  <li key={link.href + link.label}>
                    <Link
                      href={href}
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
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

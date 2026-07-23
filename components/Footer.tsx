import Link from "next/link";
import { footerContent, siteMeta } from "@/lib/content";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="logo">
                FET<span>A</span>N
              </div>
            </Link>
            <p>{footerContent.brandCopy}</p>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              {footerContent.services.map((link) => {
                const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                return (
                  <li key={link.label}>
                    <Link href={href}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="foot-col">
            <h5>Agency</h5>
            <ul>
              {footerContent.agency.map((link) => {
                const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                return (
                  <li key={link.label}>
                    <Link href={href}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
              </li>
              <li>
                <a href={siteMeta.phoneHref}>{siteMeta.phone}</a>
              </li>
              <li>
                <a
                  href={siteMeta.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteMeta.location}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footerContent.copyright}</span>
          <div className="socials">
            {footerContent.socials.map((social) => (
              <a key={social.label} href={social.href}>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

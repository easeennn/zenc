import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { BackToTop } from "./BackToTop";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { email, phone, location } = siteConfig.contact;
  const hasDirect = Boolean(email || phone || location);

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__kicker">{siteConfig.descriptor}</p>
            <p className="footer__line">
              Digital experiences, creative technology and growth systems for brands ready to move forward.
            </p>
            <Link href={siteConfig.cta.href} className="footer__cta">
              {siteConfig.cta.label} <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <h2 className="footer__h">Navigate</h2>
            <ul>
              {[...siteConfig.nav, siteConfig.cta].map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Services">
            <h2 className="footer__h">Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__h">Contact</h2>
            <ul>
              {email && (
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              )}
              {phone && (
                <li>
                  <a href={`tel:${phone}`}>{phone}</a>
                </li>
              )}
              {location && <li>{location}</li>}
              {!hasDirect && (
                <li>
                  <Link href="/contact">Send us a brief through the project form</Link>
                </li>
              )}
              {siteConfig.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} rel="noopener noreferrer" target="_blank">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__mark" aria-hidden="true">
          ZEN-C
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="footer__note">Portfolio projects shown are concept and demonstration work unless stated otherwise.</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

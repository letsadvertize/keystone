"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo & Description */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-box">
                <span className="footer-logo-letter">K</span>
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">Keystone</span>
                <span className="footer-logo-tagline">Public Relations</span>
              </div>
            </Link>
            <p className="footer-description">
              High-stakes PR and reputation management for individuals and organizations facing public scrutiny.
            </p>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <nav className="footer-nav">
                <Link href="/" className="footer-link">Home</Link>
                <Link href="/services" className="footer-link">Services</Link>
                <Link href="/contact" className="footer-link">Contact</Link>
              </nav>
            </div>

            {/* Legal */}
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <nav className="footer-nav">
                <Link href="/terms" className="footer-link">Terms of Use</Link>
                <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                <Link href="/attorney-disclaimer" className="footer-link">Attorney Disclaimer</Link>
                <Link href="/crisis-disclaimer" className="footer-link">Crisis Disclaimer</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Keystone Public Relations. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed by{" "}
            <a
              href="https://www.letsadvertize.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Lets Advertize
            </a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        .footer {
          background-color: #47636F;
          padding: 48px 0 24px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-brand {
          max-width: 320px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-logo-box {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border: 2px solid #FFFEF8;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-letter {
          color: #FFFEF8;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 22px;
          font-weight: 500;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-name {
          color: #FFFEF8;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.2em;
          font-family: var(--font-playfair), Georgia, serif;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .footer-logo-tagline {
          color: rgba(255, 254, 248, 0.7);
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 0.15em;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .footer-description {
          color: rgba(255, 254, 248, 0.7);
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 14px;
          line-height: 1.7;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .footer-column {
          min-width: 140px;
        }

        .footer-heading {
          color: #F3D3A0;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          color: rgba(255, 254, 248, 0.8);
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #FFFEF8;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 254, 248, 0.15);
          margin: 40px 0 24px;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }

        .footer-copyright {
          color: rgba(255, 254, 248, 0.5);
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 13px;
        }

        .footer-credit {
          color: rgba(255, 254, 248, 0.4);
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 12px;
        }

        .footer-credit-link {
          color: #F3D3A0;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-credit-link:hover {
          color: #FFFEF8;
          text-decoration: underline;
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .footer {
            padding: 56px 0 28px;
          }

          .footer-container {
            padding: 0 48px;
          }

          .footer-top {
            flex-direction: row;
            justify-content: space-between;
            gap: 48px;
          }

          .footer-links {
            gap: 56px;
          }

          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .footer {
            padding: 64px 0 32px;
          }

          .footer-container {
            padding: 0 64px;
          }

          .footer-brand {
            max-width: 360px;
          }

          .footer-logo-box {
            width: 44px;
            height: 44px;
          }

          .footer-logo-letter {
            font-size: 24px;
          }

          .footer-logo-name {
            font-size: 18px;
          }

          .footer-logo-tagline {
            font-size: 9px;
          }

          .footer-description {
            font-size: 15px;
          }

          .footer-links {
            gap: 72px;
          }

          .footer-heading {
            font-size: 13px;
            margin-bottom: 20px;
          }

          .footer-link {
            font-size: 15px;
          }

          .footer-nav {
            gap: 12px;
          }

          .footer-divider {
            margin: 48px 0 28px;
          }

          .footer-copyright {
            font-size: 14px;
          }

          .footer-credit {
            font-size: 13px;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .footer-container {
            padding: 0 80px;
          }

          .footer-links {
            gap: 96px;
          }
        }
      `}</style>
    </footer>
  );
}

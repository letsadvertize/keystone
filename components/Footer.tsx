"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <div className="footer-logo-box">
            <span className="footer-logo-letter">K</span>
          </div>
          <div className="footer-logo-text">
            <span className="footer-logo-name">Keystone</span>
            <span className="footer-logo-tagline">Public Relations</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/services" className="footer-link">
            Services
          </Link>
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <p className="footer-copyright">
          © {new Date().getFullYear()} Keystone Public Relations. All rights
          reserved.
        </p>
      </div>

      <style jsx global>{`
        .footer {
          background-color: #0A2037;
          padding: 48px 0 32px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-logo-box {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border: 2px solid #CFD1C6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-letter {
          color: #CFD1C6;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 20px;
          font-weight: 500;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-name {
          color: #CFD1C6;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2em;
          font-family: var(--font-playfair), Georgia, serif;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .footer-logo-tagline {
          color: #CFD1C6;
          font-size: 7px;
          font-weight: 500;
          letter-spacing: 0.15em;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
        }

        .footer-link {
          color: #CFD1C6;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #FFFEF8;
        }

        .footer-copyright {
          color: #7A8A94;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 12px;
          text-align: center;
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .footer {
            padding: 56px 0 40px;
          }

          .footer-container {
            padding: 0 64px;
            gap: 40px;
          }

          .footer-nav {
            gap: 32px;
          }

          .footer-link {
            font-size: 15px;
          }

          .footer-copyright {
            font-size: 13px;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .footer {
            padding: 64px 0 48px;
          }

          .footer-container {
            padding: 0 80px;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .footer-nav {
            gap: 40px;
          }

          .footer-copyright {
            font-size: 14px;
          }
        }
      `}</style>
    </footer>
  );
}

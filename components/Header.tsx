"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="logo-icon">
            <span className="logo-letter">K</span>
          </div>
          <div className="logo-text">
            <p className="logo-title">Keystone</p>
            <p className="logo-subtitle">Public Relations</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
        </nav>
      </div>

      <style jsx>{`
        /* Mobile-first base styles */
        .header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 12px 16px;
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          flex-wrap: nowrap;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          border: 1.5px solid #CFD1C6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-text {
          flex-shrink: 0;
          white-space: nowrap;
        }

        .logo-letter {
          color: #CFD1C6;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 18px;
          font-weight: 500;
        }

        .logo-title {
          color: #CFD1C6;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2em;
          font-family: var(--font-playfair), Georgia, serif;
          margin: 0;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .logo-subtitle {
          color: #CFD1C6;
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 0.15em;
          font-family: var(--font-opensans), system-ui, sans-serif;
          margin: 0;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-link {
          color: #CFD1C6;
          font-size: 12px;
          font-weight: 500;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        /* Small mobile (375px and up) */
        @media (min-width: 375px) {
          .header {
            padding: 14px 20px;
          }

          .logo {
            gap: 8px;
          }

          .logo-icon {
            width: 36px;
            height: 36px;
          }

          .logo-letter {
            font-size: 20px;
          }

          .logo-title {
            font-size: 15px;
            letter-spacing: 0.22em;
          }

          .logo-subtitle {
            font-size: 9px;
          }

          .nav {
            gap: 16px;
          }

          .nav-link {
            font-size: 13px;
          }
        }

        /* Larger mobile / small tablets (480px and up) */
        @media (min-width: 480px) {
          .header {
            padding: 16px 24px;
          }

          .logo-icon {
            width: 40px;
            height: 40px;
            border-width: 2px;
          }

          .logo-letter {
            font-size: 22px;
          }

          .logo-title {
            font-size: 16px;
          }

          .logo-subtitle {
            font-size: 9px;
            letter-spacing: 0.18em;
          }

          .nav {
            gap: 20px;
          }
        }

        /* Tablet breakpoint (640px and up) */
        @media (min-width: 640px) {
          .header {
            padding: 20px 32px;
          }

          .logo {
            gap: 10px;
          }

          .logo-icon {
            width: 44px;
            height: 44px;
          }

          .logo-letter {
            font-size: 24px;
          }

          .logo-title {
            font-size: 17px;
            letter-spacing: 0.24em;
          }

          .logo-subtitle {
            font-size: 10px;
            letter-spacing: 0.2em;
          }

          .nav {
            gap: 24px;
          }

          .nav-link {
            font-size: 14px;
          }
        }

        /* Desktop breakpoint (768px and up) */
        @media (min-width: 768px) {
          .header {
            padding: 24px 48px;
          }

          .logo {
            gap: 12px;
          }

          .logo-icon {
            width: 48px;
            height: 48px;
          }

          .logo-letter {
            font-size: 26px;
          }

          .logo-title {
            font-size: 18px;
            letter-spacing: 0.25em;
          }

          .nav {
            gap: 32px;
          }

          .nav-link {
            font-size: 15px;
          }
        }
      `}</style>
    </header>
  );
}

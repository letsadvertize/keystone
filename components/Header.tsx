"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "2px solid #CFD1C6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#CFD1C6",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "24px",
                fontWeight: 500,
              }}
            >
              K
            </span>
          </div>
          <div>
            <p
              style={{
                color: "#CFD1C6",
                fontSize: "18px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                fontFamily: "var(--font-playfair), Georgia, serif",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Keystone
            </p>
            <p
              style={{
                color: "#CFD1C6",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                fontFamily: "var(--font-opensans), system-ui, sans-serif",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Public Relations
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link
            href="/"
            style={{
              color: "#CFD1C6",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "var(--font-opensans), system-ui, sans-serif",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            href="/services"
            style={{
              color: "#CFD1C6",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "var(--font-opensans), system-ui, sans-serif",
              textDecoration: "none",
            }}
          >
            Services
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 16px 16px;
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
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          border: 2px solid rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-icon span {
          color: #ffffff;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 18px;
          font-weight: 500;
        }

        .logo-text {
          display: block;
        }

        .logo-title {
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.25em;
          font-family: var(--font-playfair), Georgia, serif;
          margin: 0;
          text-transform: uppercase;
        }

        .logo-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 0.2em;
          font-family: var(--font-opensans), system-ui, sans-serif;
          margin: 0;
          text-transform: uppercase;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          font-weight: 500;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        @media (min-width: 640px) {
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

          .logo-icon span {
            font-size: 26px;
          }

          .logo-title {
            font-size: 18px;
          }

          .logo-subtitle {
            font-size: 10px;
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

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              minWidth: "36px",
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
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              K
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#CFD1C6",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                fontFamily: "var(--font-playfair), Georgia, serif",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              Keystone
            </span>
            <span
              style={{
                color: "#CFD1C6",
                fontSize: "7px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                fontFamily: "var(--font-opensans), system-ui, sans-serif",
                textTransform: "uppercase",
                lineHeight: 1.3,
              }}
            >
              Public Relations
            </span>
          </div>
        </Link>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <Link
            href="/"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
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
          padding: 16px 20px;
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Hamburger Button */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 28px;
          height: 28px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 60;
        }

        .hamburger-line {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #CFD1C6;
          transition: all 0.3s ease;
        }

        .hamburger-line.open:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Desktop Navigation - Hidden on mobile */
        .nav-desktop {
          display: none;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          color: #CFD1C6;
          font-size: 14px;
          font-weight: 500;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        /* Mobile Menu Overlay */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(54, 76, 87, 0.98);
          z-index: 55;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .mobile-nav-link {
          color: #CFD1C6;
          font-size: 24px;
          font-weight: 500;
          font-family: var(--font-playfair), Georgia, serif;
          text-decoration: none;
          letter-spacing: 0.1em;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #ffffff;
        }

        /* Tablet and up (768px) - Show desktop nav, hide hamburger */
        @media (min-width: 768px) {
          .header {
            padding: 24px 48px;
          }

          .hamburger {
            display: none;
          }

          .nav-desktop {
            display: flex;
            gap: 32px;
          }

          .nav-link {
            font-size: 15px;
          }

          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

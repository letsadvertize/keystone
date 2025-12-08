"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="logo-icon">
            <span className="logo-letter">K</span>
          </div>
          <div className="logo-text">
            <span className="logo-title">Keystone</span>
            <span className="logo-subtitle">Public Relations</span>
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

        /* Logo Styles */
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border: 2px solid #CFD1C6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-letter {
          color: #CFD1C6;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 20px;
          font-weight: 500;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          color: #CFD1C6;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2em;
          font-family: var(--font-playfair), Georgia, serif;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .logo-subtitle {
          color: #CFD1C6;
          font-size: 7px;
          font-weight: 500;
          letter-spacing: 0.15em;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-transform: uppercase;
          line-height: 1.3;
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

          .logo {
            gap: 12px;
          }

          .logo-icon {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }

          .logo-letter {
            font-size: 24px;
          }

          .logo-title {
            font-size: 18px;
            letter-spacing: 0.25em;
          }

          .logo-subtitle {
            font-size: 9px;
            letter-spacing: 0.18em;
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

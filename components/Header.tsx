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
              border: "2px solid #F9F2E2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#F9F2E2",
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
                color: "#F9F2E2",
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
                color: "#F9F2E2",
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
          <Link href="/contact" className="nav-link">
            Contact Us
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
          <Link
            href="/contact"
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: isMobile ? "16px 16px" : "24px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo - Always visible */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "8px" : "12px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: isMobile ? "32px" : "48px",
              height: isMobile ? "32px" : "48px",
              border: "2px solid rgba(255, 255, 255, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: isMobile ? "18px" : "26px",
                fontWeight: 500,
              }}
            >
              K
            </span>
          </div>
          {/* Always show title */}
          <div>
            <p
              style={{
                color: "#ffffff",
                fontSize: isMobile ? "14px" : "18px",
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
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: isMobile ? "8px" : "10px",
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

        {/* Navigation - Always visible */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "16px" : "32px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: isMobile ? "13px" : "15px",
              fontWeight: 500,
              fontFamily: "var(--font-opensans), system-ui, sans-serif",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
            }}
          >
            Home
          </Link>
          <Link
            href="/services"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: isMobile ? "13px" : "15px",
              fontWeight: 500,
              fontFamily: "var(--font-opensans), system-ui, sans-serif",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
            }}
          >
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
}

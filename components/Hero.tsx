"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100dvh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background Image */}
      <Image
        src="/hero-arch.jpg"
        alt="Architectural arch"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(45, 55, 65, 0.88) 0%, rgba(35, 45, 55, 0.92) 50%, rgba(25, 35, 42, 0.95) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "100px 40px 40px" : "120px 48px 60px",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: isMobile ? "2.625rem" : "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: isMobile ? "20px" : "clamp(28px, 4vh, 40px)",
            }}
          >
            When Everything
            <br />
            Is on the Line,
            <br />
            Your Story Needs
            <br />
            Protection
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-opensans), system-ui, sans-serif",
              fontSize: isMobile ? "0.9rem" : "clamp(1rem, 1.8vw, 1.125rem)",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: 1.6,
              marginBottom: isMobile ? "24px" : "clamp(32px, 5vh, 48px)",
              maxWidth: "540px",
            }}
          >
            Keystone Public Relations is a high-stakes PR and reputation management firm
            for individuals facing public scrutiny, investigations, and crises. We project your
            name, manage your narrative, and help you move forward.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: isMobile ? "10px 14px" : "12px 18px",
                backgroundColor: "#0A2037",
                border: "1px solid #0A2037",
                color: "#ffffff",
                fontFamily: "var(--font-opensans), system-ui, sans-serif",
                fontSize: isMobile ? "0.7rem" : "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#143050";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0A2037";
              }}
            >
              Request a Confidential Consultation
            </Link>
            <Link
              href="/attorneys"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: isMobile ? "10px 14px" : "12px 18px",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                color: "#ffffff",
                fontFamily: "var(--font-opensans), system-ui, sans-serif",
                fontSize: isMobile ? "0.7rem" : "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              For Attorneys &amp; Advisors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
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
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">
          {/* Headline */}
          <h1 className="hero-title">
            When Everything
            <br />
            Is on the Line,
            <br />
            Your Story Needs
            <br />
            Protection
          </h1>

          {/* Description */}
          <p className="hero-description">
            Keystone Public Relations is a high-stakes PR and reputation management firm
            for individuals facing public scrutiny, investigations, and crises. We project your
            name, manage your narrative, and help you move forward.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary">
              Request a Confidential Consultation
            </Link>
            <Link href="/attorneys" className="btn-secondary">
              For Attorneys &amp; Advisors
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-section {
          position: relative;
          min-height: 100dvh;
          min-height: 100vh; /* Fallback for browsers without dvh support */
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(54, 76, 87, 0.85);
        }

        /* Mobile-first: base styles for small screens */
        .hero-content {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 32px;
        }

        .hero-inner {
          max-width: 100%;
        }

        .hero-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: #FFFEF8;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #FFFEF8;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 100%;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 100%;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 14px 20px;
          background-color: #0A2037;
          border: 1px solid #0A2037;
          color: #ffffff;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-primary:hover {
          background-color: #143050;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 14px 20px;
          background-color: transparent;
          border: 1px solid #CFD1C6;
          color: #CFD1C6;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Small mobile devices (375px and up) */
        @media (min-width: 375px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 0.9375rem;
          }
        }

        /* Larger mobile / small tablets (480px and up) */
        @media (min-width: 480px) {
          .hero-content {
            padding: 0 40px;
          }

          .hero-title {
            font-size: 2.25rem;
            margin-bottom: 20px;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 28px;
          }

          .hero-buttons {
            max-width: 320px;
          }

          .btn-secondary {
            width: 80%;
          }
        }

        /* Tablet breakpoint (640px and up) */
        @media (min-width: 640px) {
          .hero-content {
            padding: 0 48px;
          }

          .hero-inner {
            max-width: 540px;
          }

          .hero-title {
            font-size: 2.75rem;
            margin-bottom: 24px;
          }

          .hero-description {
            font-size: 1rem;
            line-height: 1.7;
            margin-bottom: 32px;
            max-width: 480px;
          }

          .hero-buttons {
            gap: 12px;
            max-width: 360px;
          }

          .btn-primary {
            padding: 16px 32px;
            font-size: 0.9375rem;
          }

          .btn-secondary {
            padding: 16px 32px;
            font-size: 0.9375rem;
            width: 70%;
          }
        }

        /* Desktop breakpoint (768px and up) */
        @media (min-width: 768px) {
          .hero-content {
            padding: 0 64px;
          }

          .hero-inner {
            max-width: 580px;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-description {
            max-width: 520px;
          }

          .hero-buttons {
            max-width: 380px;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .hero-content {
            padding: 0 80px;
          }

          .hero-inner {
            max-width: 640px;
          }

          .hero-title {
            font-size: 3.3rem;
            line-height: 1.15;
            margin-bottom: 28px;
          }

          .hero-description {
            font-size: 1.0625rem;
            margin-bottom: 36px;
            max-width: 540px;
          }

          .hero-buttons {
            max-width: 400px;
          }

          .btn-primary {
            padding: 18px 40px;
            font-size: 1rem;
          }

          .btn-secondary {
            padding: 18px 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

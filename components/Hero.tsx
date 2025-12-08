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
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(54, 76, 87, 0.85);
        }

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
          padding: 0 48px;
        }

        .hero-inner {
          max-width: 640px;
        }

        .hero-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 3.3rem;
          font-weight: 400;
          color: #FFFEF8;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .hero-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #FFFEF8;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 540px;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 400px;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 18px 36px;
          background-color: #0A2037;
          border: 1px solid #0A2037;
          color: #ffffff;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #143050;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70%;
          padding: 18px 36px;
          background-color: transparent;
          border: 1px solid #CFD1C6;
          color: #CFD1C6;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 640px) {
          .hero-content {
            padding: 0 80px;
          }

          .hero-title {
            font-size: clamp(3.3rem, 4.5vw, 4rem);
            margin-bottom: clamp(28px, 4vh, 40px);
          }

          .hero-description {
            font-size: clamp(1rem, 1.8vw, 1.125rem);
            margin-bottom: clamp(32px, 5vh, 48px);
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

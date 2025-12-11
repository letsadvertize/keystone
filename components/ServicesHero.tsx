"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      {/* Background Image */}
      <Image
        src="/hero-arch.jpeg"
        alt="Architectural arch"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="services-hero-overlay" />

      {/* Content */}
      <div className="services-hero-content">
        <div className="services-hero-inner">
          <h1 className="services-hero-title">
            Strategic Communications for
            <br />
            High-Stakes Growth & Protection
          </h1>

          <p className="services-hero-description">
            Precision marketing, branding, public relations, and reputation management
            for companies, leaders, and startups navigating scrutiny, growth, or transition.
          </p>

          <div className="services-hero-buttons">
            <Link href="/contact" className="services-btn-primary">
              Request a Confidential Consultation
            </Link>
            <Link href="/attorneys" className="services-btn-secondary">
              For Attorneys & Advisors
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services-hero {
          position: relative;
          min-height: 70vh;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .services-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(54, 76, 87, 0.75);
        }

        .services-hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 120px 48px 80px;
        }

        .services-hero-inner {
          max-width: 700px;
        }

        .services-hero-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: #FFFEF8;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .services-hero-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 400;
          color: #FFFEF8;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .services-hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 320px;
        }

        .services-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
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

        .services-btn-primary:hover {
          background-color: #143050;
        }

        .services-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
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

        .services-btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .services-hero-content {
            padding: 140px 64px 100px;
          }

          .services-hero-title {
            font-size: 2.25rem;
            margin-bottom: 24px;
          }

          .services-hero-description {
            font-size: 1rem;
            margin-bottom: 40px;
          }

          .services-hero-buttons {
            flex-direction: row;
            max-width: none;
            gap: 16px;
          }

          .services-btn-primary,
          .services-btn-secondary {
            padding: 16px 28px;
            font-size: 0.9375rem;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .services-hero {
            min-height: 65vh;
          }

          .services-hero-content {
            padding: 160px 80px 120px;
          }

          .services-hero-title {
            font-size: 2.75rem;
            margin-bottom: 28px;
          }

          .services-hero-description {
            font-size: 1.0625rem;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .services-hero-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}

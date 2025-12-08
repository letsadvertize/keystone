"use client";

import Link from "next/link";

export default function Attorneys() {
  return (
    <section className="attorneys-section">
      <div className="attorneys-container">
        {/* Label */}
        <span className="attorneys-label">FOR ATTORNEYS</span>

        {/* Title */}
        <h2 className="attorneys-title">
          Partnering with
          <br />
          Legal Advocates
        </h2>

        {/* Description */}
        <p className="attorneys-description">
          We collaborate with legal professionals to ensure that each client's
          public relations strategy complements and supports their overall legal
          defense efforts.
        </p>

        {/* CTA Button */}
        <Link href="/services" className="attorneys-btn">
          Learn More About Our Services
        </Link>
      </div>

      <style jsx global>{`
        .attorneys-section {
          background-color: #F9F2E2;
          padding: 64px 0;
        }

        .attorneys-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .attorneys-label {
          display: block;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0A2037;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 24px;
          text-align: left;
        }

        .attorneys-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .attorneys-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .attorneys-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          background-color: #2B4753;
          color: #FFFEF8;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .attorneys-btn:hover {
          background-color: #1e353f;
        }

        /* Small mobile (375px and up) */
        @media (min-width: 375px) {
          .attorneys-title {
            font-size: 2.5rem;
          }

          .attorneys-description {
            font-size: 1.0625rem;
          }
        }

        /* Larger mobile (480px and up) */
        @media (min-width: 480px) {
          .attorneys-section {
            padding: 80px 0;
          }

          .attorneys-container {
            padding: 0 56px;
          }

          .attorneys-title {
            font-size: 2.75rem;
            margin-bottom: 28px;
          }
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .attorneys-container {
            padding: 0 64px;
          }

          .attorneys-title {
            font-size: 3rem;
            margin-bottom: 32px;
          }

          .attorneys-description {
            font-size: 1.125rem;
            margin-bottom: 40px;
          }

          .attorneys-btn {
            padding: 18px 40px;
            font-size: 1rem;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .attorneys-section {
            padding: 100px 0;
          }

          .attorneys-container {
            padding: 0 80px;
          }

          .attorneys-title {
            font-size: 3.25rem;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .attorneys-section {
            padding: 120px 0;
          }

          .attorneys-title {
            font-size: 3.5rem;
          }

          .attorneys-description {
            max-width: 640px;
          }
        }
      `}</style>
    </section>
  );
}

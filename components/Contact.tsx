"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Title */}
        <h2 className="contact-title">Get in Touch</h2>

        {/* Description */}
        <p className="contact-description">
          Contact us today to discuss your unique challenges and how we can
          assist you.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <p className="contact-item">(123) 456-7890</p>
          <p className="contact-item">info@keystonepr.com</p>
          <p className="contact-item">1234 Main St., Suite 567</p>
          <p className="contact-item">Anytown, USA</p>
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="contact-btn">
          Send a Message
        </Link>
      </div>

      <style jsx global>{`
        .contact-section {
          background-color: #F9F2E2;
          padding: 64px 0;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          text-align: center;
        }

        .contact-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .contact-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-info {
          margin-bottom: 32px;
        }

        .contact-item {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.8;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 40px;
          background-color: #223440;
          color: #FFFEF8;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .contact-btn:hover {
          background-color: #1a2830;
        }

        /* Small mobile (375px and up) */
        @media (min-width: 375px) {
          .contact-title {
            font-size: 2.5rem;
          }

          .contact-description {
            font-size: 1.0625rem;
          }
        }

        /* Larger mobile (480px and up) */
        @media (min-width: 480px) {
          .contact-section {
            padding: 80px 0;
          }

          .contact-container {
            padding: 0 56px;
          }

          .contact-title {
            font-size: 2.75rem;
            margin-bottom: 28px;
          }

          .contact-item {
            font-size: 1.0625rem;
          }
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .contact-container {
            padding: 0 64px;
          }

          .contact-title {
            font-size: 3rem;
            margin-bottom: 32px;
          }

          .contact-description {
            font-size: 1.125rem;
            margin-bottom: 40px;
          }

          .contact-info {
            margin-bottom: 40px;
          }

          .contact-item {
            font-size: 1.125rem;
          }

          .contact-btn {
            padding: 18px 48px;
            font-size: 1rem;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .contact-section {
            padding: 100px 0;
          }

          .contact-container {
            padding: 0 80px;
          }

          .contact-title {
            font-size: 3.25rem;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .contact-section {
            padding: 120px 0;
          }

          .contact-title {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}

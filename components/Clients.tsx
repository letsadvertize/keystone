"use client";

import Link from "next/link";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">
        {/* Title */}
        <h2 className="clients-title">
          Protecting What
          <br />
          You've Built
        </h2>

        {/* Description */}
        <p className="clients-description">
          Our commitment is to your legacy. We provide guidance and support to
          shield all you've achieved, allowing you to focus on what matters
          most.
        </p>

        {/* CTA Button */}
        <Link href="/resources" className="clients-btn">
          Current Client Resources
        </Link>

        {/* Image */}
        <div className="clients-image-wrapper">
          <Image
            src="/clients-bg.jpg"
            alt="Laptop and notebook on desk"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        .clients-section {
          background-color: #223440;
          padding: 64px 0;
        }

        .clients-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .clients-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #F9F2E2;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .clients-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #CFD1C6;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .clients-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          background-color: transparent;
          border: 1px solid #F9F2E2;
          color: #F9F2E2;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
          margin-bottom: 40px;
        }

        .clients-btn:hover {
          background-color: rgba(249, 242, 226, 0.1);
        }

        .clients-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Small mobile (375px and up) */
        @media (min-width: 375px) {
          .clients-title {
            font-size: 2.5rem;
          }

          .clients-description {
            font-size: 1.0625rem;
          }
        }

        /* Larger mobile (480px and up) */
        @media (min-width: 480px) {
          .clients-section {
            padding: 80px 0;
          }

          .clients-container {
            padding: 0 56px;
          }

          .clients-title {
            font-size: 2.75rem;
            margin-bottom: 28px;
          }

          .clients-image-wrapper {
            height: 320px;
          }
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .clients-container {
            padding: 0 64px;
          }

          .clients-title {
            font-size: 3rem;
            margin-bottom: 32px;
          }

          .clients-description {
            font-size: 1.125rem;
            margin-bottom: 40px;
          }

          .clients-btn {
            padding: 18px 40px;
            font-size: 1rem;
            margin-bottom: 48px;
          }

          .clients-image-wrapper {
            height: 380px;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .clients-section {
            padding: 100px 0;
          }

          .clients-container {
            padding: 0 80px;
          }

          .clients-title {
            font-size: 3.25rem;
          }

          .clients-image-wrapper {
            height: 420px;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .clients-section {
            padding: 120px 0;
          }

          .clients-title {
            font-size: 3.5rem;
          }

          .clients-description {
            max-width: 640px;
          }

          .clients-image-wrapper {
            height: 480px;
          }
        }
      `}</style>
    </section>
  );
}

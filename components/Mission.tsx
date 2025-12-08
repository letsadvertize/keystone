"use client";

import Image from "next/image";

export default function Mission() {
  return (
    <section className="mission-section">
      {/* Background Image - Desktop only */}
      <div className="mission-bg">
        <Image
          src="/mission-bg.jpg"
          alt="Notebook and pen on desk"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Overlay - Desktop only */}
      <div className="mission-overlay" />

      {/* Content */}
      <div className="mission-container">
        {/* Title */}
        <h2 className="mission-title">
          Solid Ground
          <br />
          in Unsteady Times
        </h2>

        {/* First paragraph */}
        <p className="mission-text">
          Keystone Public Relations was created for a single purpose: to give
          people in crisis a clear path forward that honors both truth and
          future possibility.
        </p>

        {/* Image - Mobile only */}
        <div className="mission-image-mobile">
          <Image
            src="/mission-bg.jpg"
            alt="Notebook and pen on desk"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* Second paragraph */}
        <p className="mission-text mission-text-last">
          We believe no one should be reduced to a single event, headline or
          accusation. Our mission is to protect your story while you navigate
          legal, professional, and personal challenges.
        </p>
      </div>

      <style jsx global>{`
        .mission-section {
          position: relative;
          padding: 64px 0;
          overflow: hidden;
          background-color: #F9F2E2;
        }

        .mission-bg {
          display: none;
        }

        .mission-overlay {
          display: none;
        }

        .mission-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .mission-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .mission-text {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .mission-text-last {
          margin-bottom: 0;
        }

        .mission-image-mobile {
          position: relative;
          width: 100%;
          height: 280px;
          margin-bottom: 32px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        /* Small mobile (375px and up) */
        @media (min-width: 375px) {
          .mission-title {
            font-size: 2.5rem;
          }

          .mission-text {
            font-size: 1.0625rem;
          }
        }

        /* Larger mobile (480px and up) */
        @media (min-width: 480px) {
          .mission-section {
            padding: 80px 0;
          }

          .mission-container {
            padding: 0 56px;
          }

          .mission-title {
            font-size: 2.75rem;
            margin-bottom: 28px;
          }

          .mission-image-mobile {
            height: 320px;
          }
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .mission-container {
            padding: 0 64px;
          }

          .mission-title {
            font-size: 3rem;
            margin-bottom: 32px;
          }

          .mission-text {
            font-size: 1.125rem;
            margin-bottom: 40px;
          }

          .mission-image-mobile {
            height: 380px;
            margin-bottom: 40px;
          }
        }

        /* Desktop (768px and up) - Switch to background image */
        @media (min-width: 768px) {
          .mission-section {
            padding: 100px 0;
            background-color: transparent;
          }

          .mission-bg {
            display: block;
            position: absolute;
            inset: 0;
          }

          .mission-overlay {
            display: block;
            position: absolute;
            inset: 0;
            background: rgba(249, 242, 226, 0.85);
            z-index: 5;
          }

          .mission-container {
            padding: 0 80px;
          }

          .mission-title {
            font-size: 3.25rem;
          }

          .mission-image-mobile {
            display: none;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .mission-section {
            padding: 120px 0;
          }

          .mission-title {
            font-size: 3.5rem;
          }

          .mission-text {
            max-width: 640px;
          }
        }
      `}</style>
    </section>
  );
}

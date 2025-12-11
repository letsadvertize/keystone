"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Footer from "./Footer";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="legal-page">
      {/* Header */}
      <header className="legal-header">
        <div className="legal-header-inner">
          <Link href="/" className="legal-logo">
            <div className="legal-logo-box">
              <span className="legal-logo-letter">K</span>
            </div>
            <div className="legal-logo-text">
              <span className="legal-logo-name">Keystone</span>
              <span className="legal-logo-tagline">Public Relations</span>
            </div>
          </Link>
          <nav className="legal-nav">
            <Link href="/" className="legal-nav-link">
              Home
            </Link>
            <Link href="/services" className="legal-nav-link">
              Services
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="legal-hero">
        <h1 className="legal-title">{title}</h1>
      </section>

      {/* Content */}
      <main className="legal-content">{children}</main>

      {/* Footer */}
      <Footer />

      <style jsx global>{`
        .legal-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .legal-header {
          background-color: #47636F;
          padding: 16px 20px;
        }

        .legal-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .legal-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .legal-logo-box {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border: 2px solid #FFFEF8;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .legal-logo-letter {
          color: #FFFEF8;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 20px;
          font-weight: 500;
        }

        .legal-logo-text {
          display: flex;
          flex-direction: column;
        }

        .legal-logo-name {
          color: #FFFEF8;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2em;
          font-family: var(--font-playfair), Georgia, serif;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .legal-logo-tagline {
          color: rgba(255, 254, 248, 0.7);
          font-size: 7px;
          font-weight: 500;
          letter-spacing: 0.15em;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .legal-nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .legal-nav-link {
          color: rgba(255, 254, 248, 0.9);
          font-size: 14px;
          font-weight: 500;
          font-family: var(--font-opensans), system-ui, sans-serif;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-nav-link:hover {
          color: #FFFEF8;
        }

        /* Hero */
        .legal-hero {
          background-color: #47636F;
          padding: 48px 20px 56px;
        }

        .legal-title {
          max-width: 1200px;
          margin: 0 auto;
          color: #FFFEF8;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.2;
        }

        /* Content */
        .legal-content {
          flex: 1;
          background-color: #F8F9FA;
          padding: 40px 20px 60px;
        }

        .legal-content > * {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Tablet and up */
        @media (min-width: 640px) {
          .legal-header {
            padding: 20px 48px;
          }

          .legal-hero {
            padding: 56px 48px 64px;
          }

          .legal-title {
            font-size: 2.25rem;
          }

          .legal-content {
            padding: 56px 48px 80px;
          }
        }

        /* Desktop */
        @media (min-width: 768px) {
          .legal-header {
            padding: 24px 64px;
          }

          .legal-nav {
            gap: 32px;
          }

          .legal-nav-link {
            font-size: 15px;
          }

          .legal-hero {
            padding: 64px 64px 72px;
          }

          .legal-title {
            font-size: 2.5rem;
          }

          .legal-content {
            padding: 64px 64px 96px;
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import { ReactNode } from "react";

interface LegalSectionProps {
  title?: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div className="legal-section">
      {title && <h2 className="legal-section-title">{title}</h2>}
      {children}

      <style jsx>{`
        .legal-section {
          margin-bottom: 32px;
        }

        .legal-section-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #47636F;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #E5E7EB;
        }

        @media (min-width: 640px) {
          .legal-section-title {
            font-size: 1.375rem;
          }
        }
      `}</style>
    </div>
  );
}

interface LegalParagraphProps {
  children: ReactNode;
}

export function LegalParagraph({ children }: LegalParagraphProps) {
  return (
    <p className="legal-paragraph">
      {children}

      <style jsx>{`
        .legal-paragraph {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          color: #4B5563;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        @media (min-width: 640px) {
          .legal-paragraph {
            font-size: 1rem;
          }
        }
      `}</style>
    </p>
  );
}

interface LegalListProps {
  items: string[];
}

export function LegalList({ items }: LegalListProps) {
  return (
    <ul className="legal-list">
      {items.map((item, index) => (
        <li key={index} className="legal-list-item">
          {item}
        </li>
      ))}

      <style jsx>{`
        .legal-list {
          list-style: none;
          margin: 16px 0;
          padding: 0;
        }

        .legal-list-item {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          color: #4B5563;
          line-height: 1.8;
          padding-left: 24px;
          margin-bottom: 8px;
          position: relative;
        }

        .legal-list-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          background-color: #47636F;
          border-radius: 50%;
        }

        @media (min-width: 640px) {
          .legal-list-item {
            font-size: 1rem;
          }
        }
      `}</style>
    </ul>
  );
}

"use client";

import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  includes: string[];
  isNew?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: "Marketing Strategy & Execution",
    description:
      "Data-driven marketing built to support credibility, visibility, and controlled growth — never noise.",
    includes: [
      "Strategic marketing audits",
      "Campaigning & execution",
      "Digital & media-aligned content",
      "Executive & founder visibility strategy",
    ],
  },
  {
    id: 2,
    title: "Brand Development & Brand Repair",
    description:
      "We define — or redefine — how you are understood by the public.",
    includes: [
      "Brand narrative & positioning",
      "Messaging frameworks",
      "Brand repair after disruption",
      "Thought leadership platforms",
    ],
  },
  {
    id: 3,
    title: "Reputation Management",
    description:
      "Proactive and reactive reputation management where accuracy, timing, and restraint matter.",
    includes: [
      "Online reputation assessments",
      "Narrative correction strategies",
      "Search result positioning",
      "Reputation recovery planning",
    ],
  },
  {
    id: 4,
    title: "Public Relations & Media Strategy",
    description:
      "Selective, disciplined engagement with media — never exposure for exposure's sake.",
    includes: [
      "Media relations strategy",
      "Press materials & messaging",
      "Interview preparation",
      "Crisis communications",
    ],
  },
  {
    id: 5,
    title: "Startups & High-Growth Companies",
    description:
      "Communications strategy for startups preparing for funding, launch, scale, or scrutiny.",
    includes: [
      "Founder & leadership positioning",
      "Investor-facing messaging",
      "Launch & growth communications",
      "Risk-aware brand building",
      "Pre-crisis planning",
    ],
  },
  {
    id: 6,
    title: "Crisis & Sensitive Situation Communications",
    description:
      "Support when discretion, clarity, and legal awareness are critical.",
    includes: [
      "Crisis response strategy",
      "Holding statements",
      "Long-term narrative stabilization",
      "Coordination with legal counsel",
    ],
  },
];

export default function ServiceCards() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="service-cards-section">
      <div className="service-cards-container">
        {/* Section Header */}
        <div className="service-cards-header">
          <h2 className="service-cards-title">Our Services</h2>
          <p className="service-cards-subtitle">
            Click on any service to learn more about what we offer.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="service-cards-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card-item ${expandedId === service.id ? "expanded" : ""}`}
              onClick={() => handleToggle(service.id)}
            >
              {/* NEW Badge */}
              {service.isNew && <span className="service-card-badge">NEW</span>}

              {/* Title */}
              <h3 className="service-card-item-title">{service.title}</h3>

              {/* Description */}
              <p className="service-card-item-description">{service.description}</p>

              {/* Expandable Content */}
              <div
                className="service-card-expandable"
                style={{
                  maxHeight: expandedId === service.id ? "500px" : "0",
                  opacity: expandedId === service.id ? 1 : 0,
                }}
              >
                <div className="service-card-divider" />
                <p className="service-card-includes-label">Includes</p>
                <ul className="service-card-includes-list">
                  {service.includes.map((item, index) => (
                    <li key={index} className="service-card-includes-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expand/Collapse Indicator */}
              <div className="service-card-indicator">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: expandedId === service.id ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .service-cards-section {
          background-color: #F8F9FA;
          padding: 60px 0;
        }

        .service-cards-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .service-cards-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .service-cards-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: #0A2037;
          margin-bottom: 12px;
        }

        .service-cards-subtitle {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          color: #6B7280;
          line-height: 1.7;
        }

        .service-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .service-card-item {
          background-color: #ffffff;
          border: 1px solid #E5E7EB;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card-item:hover {
          box-shadow: 0 6px 20px rgba(10, 32, 55, 0.08);
          transform: translateY(-2px);
        }

        .service-card-item.expanded {
          box-shadow: 0 10px 40px rgba(10, 32, 55, 0.12);
          transform: translateY(-4px);
        }

        .service-card-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background-color: #C9A962;
          color: #0A2037;
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 4px 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .service-card-item-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #0A2037;
          margin-bottom: 12px;
          padding-right: 60px;
          line-height: 1.3;
        }

        .service-card-item-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9rem;
          color: #4B5563;
          line-height: 1.6;
        }

        .service-card-expandable {
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .service-card-divider {
          height: 1px;
          background: linear-gradient(90deg, #C9A962, #E5E7EB);
          margin: 20px 0;
        }

        .service-card-includes-label {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .service-card-includes-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .service-card-includes-item {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.875rem;
          color: #374151;
          padding-left: 20px;
          position: relative;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .service-card-includes-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          background-color: #C9A962;
          border-radius: 50%;
        }

        .service-card-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 16px;
          color: #9CA3AF;
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .service-cards-section {
            padding: 80px 0;
          }

          .service-cards-container {
            padding: 0 48px;
          }

          .service-cards-header {
            margin-bottom: 50px;
          }

          .service-cards-title {
            font-size: 2rem;
          }

          .service-cards-subtitle {
            font-size: 1rem;
          }

          .service-card-item {
            padding: 28px;
          }

          .service-card-item-title {
            font-size: 1.375rem;
          }

          .service-card-item-description {
            font-size: 0.95rem;
          }

          .service-card-includes-item {
            font-size: 0.9rem;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .service-cards-container {
            padding: 0 64px;
          }

          .service-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            align-items: start;
          }

          .service-cards-title {
            font-size: 2.25rem;
          }

          .service-card-item {
            padding: 32px;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

export default function Services() {
  const services = [
    {
      title: "Reputation Management",
      description:
        "We defend your name against false allegations and undue damage, ensuring your side of the story is heard",
    },
    {
      title: "Crisis Communication",
      description:
        "We devise clear, effective strategies to respond to media scrutiny and protect your public image in times of crisis",
    },
    {
      title: "Restorative Content",
      description:
        "We craft compelling narratives that reflect your true character and support your long-term recovery",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Title */}
        <h2 className="services-title">
          Strategic Guidance
          <br />
          When the Stakes
          <br />
          Are High
        </h2>

        {/* Description */}
        <p className="services-description">
          We offer personalized PR strategies tailored to protect your
          reputation and position you for the best possible outcome.
        </p>

        {/* Service Cards */}
        <div className="services-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .services-section {
          background-color: #47636F;
          padding: 64px 0;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .services-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #FFFEF8;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .services-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #CFD1C6;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 600px;
        }

        .services-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .service-card {
          background-color: #2B4753;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .service-card-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.25rem;
          font-weight: 400;
          color: #F3D3A0;
          margin-bottom: 12px;
        }

        .service-card-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 400;
          color: #CFD1C6;
          line-height: 1.6;
        }

        /* Small mobile (375px and up) */
        @media (min-width: 375px) {
          .services-title {
            font-size: 2.5rem;
          }

          .services-description {
            font-size: 1.0625rem;
          }
        }

        /* Larger mobile (480px and up) */
        @media (min-width: 480px) {
          .services-section {
            padding: 80px 0;
          }

          .services-container {
            padding: 0 56px;
          }

          .services-title {
            font-size: 2.75rem;
            margin-bottom: 28px;
          }

          .service-card {
            padding: 28px;
          }

          .service-card-title {
            font-size: 1.375rem;
          }

          .service-card-description {
            font-size: 1rem;
          }
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .services-container {
            padding: 0 64px;
          }

          .services-title {
            font-size: 3rem;
            margin-bottom: 32px;
          }

          .services-description {
            font-size: 1.125rem;
            margin-bottom: 48px;
          }

          .services-cards {
            gap: 20px;
          }

          .service-card {
            padding: 32px;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .services-section {
            padding: 100px 0;
          }

          .services-container {
            padding: 0 80px;
          }

          .services-title {
            font-size: 3.25rem;
          }

          .services-cards {
            flex-direction: row;
            gap: 24px;
          }

          .service-card {
            flex: 1;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .services-section {
            padding: 120px 0;
          }

          .services-title {
            font-size: 3.5rem;
          }

          .services-description {
            max-width: 640px;
          }

          .service-card {
            padding: 36px;
          }

          .service-card-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

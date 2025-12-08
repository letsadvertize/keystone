"use client";

export default function Process() {
  const steps = [
    {
      title: "Assess",
      description:
        "We listen to your story, analyze the details, and evaluate the reputational risks you face.",
    },
    {
      title: "Strategize",
      description:
        "We develop a strategic plan of action that meets the specifics of your case and goals.",
    },
    {
      title: "Execute",
      description:
        "We act swiftly to manage the narrative and implement your plan with the utmost care.",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        {/* Title */}
        <h2 className="process-title">
          A Proven Path to
          <br />
          Protecting Your
          <br />
          Reputation
        </h2>

        {/* Description */}
        <p className="process-description">
          Our comprehensive, step-by-step approach is designed to address your
          unique situation with skill and discretion.
        </p>

        {/* Step Cards */}
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .process-section {
          background-color: #F9F2E2;
          padding: 64px 0;
        }

        .process-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .process-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .process-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #0A2037;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 600px;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .process-step {
          background-color: #F5EDE2;
          border: 1px solid #E5DFD3;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .process-step-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.25rem;
          font-weight: 400;
          color: #0A2037;
          margin-bottom: 12px;
        }

        .process-step-description {
          font-family: var(--font-opensans), system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 400;
          color: #4A5568;
          line-height: 1.6;
        }

        /* Small mobile (375px and up) */
        @media (min-width: 375px) {
          .process-title {
            font-size: 2.5rem;
          }

          .process-description {
            font-size: 1.0625rem;
          }
        }

        /* Larger mobile (480px and up) */
        @media (min-width: 480px) {
          .process-section {
            padding: 80px 0;
          }

          .process-container {
            padding: 0 56px;
          }

          .process-title {
            font-size: 2.75rem;
            margin-bottom: 28px;
          }

          .process-step {
            padding: 28px;
          }

          .process-step-title {
            font-size: 1.375rem;
          }

          .process-step-description {
            font-size: 1rem;
          }
        }

        /* Tablet (640px and up) */
        @media (min-width: 640px) {
          .process-container {
            padding: 0 64px;
          }

          .process-title {
            font-size: 3rem;
            margin-bottom: 32px;
          }

          .process-description {
            font-size: 1.125rem;
            margin-bottom: 48px;
          }

          .process-steps {
            gap: 20px;
          }

          .process-step {
            padding: 32px;
          }
        }

        /* Desktop (768px and up) */
        @media (min-width: 768px) {
          .process-section {
            padding: 100px 0;
          }

          .process-container {
            padding: 0 80px;
          }

          .process-title {
            font-size: 3.25rem;
          }

          .process-steps {
            flex-direction: row;
            gap: 24px;
          }

          .process-step {
            flex: 1;
          }
        }

        /* Large desktop (1024px and up) */
        @media (min-width: 1024px) {
          .process-section {
            padding: 120px 0;
          }

          .process-title {
            font-size: 3.5rem;
          }

          .process-description {
            max-width: 640px;
          }

          .process-step {
            padding: 36px;
          }

          .process-step-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

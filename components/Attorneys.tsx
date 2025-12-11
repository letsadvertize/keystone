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
    </section>
  );
}

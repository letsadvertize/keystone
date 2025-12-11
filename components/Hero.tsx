import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <Image
        src="/hero-arch.jpeg"
        alt="Architectural arch"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">
          {/* Headline */}
          <h1 className="hero-title">
            When Everything
            <br />
            Is on the Line,
            <br />
            Your Story Needs
            <br />
            Protection
          </h1>

          {/* Description */}
          <p className="hero-description">
            Keystone Public Relations is a high-stakes PR and reputation management firm
            for individuals facing public scrutiny, investigations, and crises. We protect your
            name, manage your narrative, and help you move forward.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary">
              Request a Confidential Consultation
            </Link>
            <Link href="/attorneys" className="btn-secondary">
              For Attorneys &amp; Advisors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

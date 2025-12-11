import Link from "next/link";

export default function Contact() {
  return (
    <section className="home-contact-section">
      <div className="home-contact-container">
        {/* Title */}
        <h2 className="home-contact-title">Get in Touch</h2>

        {/* Description */}
        <p className="home-contact-description">
          Contact us today to discuss your unique challenges and how we can
          assist you.
        </p>

        {/* Contact Info */}
        <div className="home-contact-info">
          <p className="home-contact-item">
            <a href="mailto:info@keystonepublicrelations.com">info@keystonepublicrelations.com</a>
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="home-contact-btn">
          Send a Message
        </Link>
      </div>
    </section>
  );
}

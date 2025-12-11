import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Keystone Public Relations",
  description:
    "Get in touch with Keystone Public Relations for confidential consultation on PR, reputation management, and crisis communications.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Ready to protect your reputation? Schedule a confidential consultation with our team.
            </p>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

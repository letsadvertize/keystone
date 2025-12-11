import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Services | Keystone Public Relations",
  description:
    "Strategic communications, marketing, branding, PR, and reputation management for companies, leaders, and startups.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServiceCards />
      <Footer />
    </>
  );
}

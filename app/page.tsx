import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Attorneys from "@/components/Attorneys";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Mission />
      <Services />
      <Process />
      <Clients />
      <Attorneys />
      <Contact />
      <Footer />
    </>
  );
}

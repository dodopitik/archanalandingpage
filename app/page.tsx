import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Services />
        <Portfolio />
        <WhyUs />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

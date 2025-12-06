import About from "@/components/About";
import ArchanaPage from "@/components/ArchanaPage";
import Flow from "@/components/Flow";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PricingCarousel from "@/components/PricingCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Flow />
      <ArchanaPage />
      <PricingCarousel />
    </>
  );
}

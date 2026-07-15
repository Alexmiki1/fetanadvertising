import { IntroOverlay } from "@/components/IntroOverlay";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoBanner } from "@/components/VideoBanner";
import { WhyFetan } from "@/components/WhyFetan";
import { ServicesTicker } from "@/components/ServicesTicker";
import { ShowreelPlayer } from "@/components/ShowreelPlayer";
import { ServiceGrid } from "@/components/ServiceGrid";
import { WorkGrid } from "@/components/WorkGrid";
import { StatsCounters } from "@/components/StatsCounters";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { CTABand } from "@/components/CTABand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <IntroOverlay />
      <Header />
      <main id="top">
        <Hero />
        <VideoBanner />
        <WhyFetan />
        <ServicesTicker />
        <ShowreelPlayer />
        <ServiceGrid />
        <WorkGrid />
        <StatsCounters />
        <Clients />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}

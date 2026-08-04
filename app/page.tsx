import { IntroOverlay } from "@/components/IntroOverlay";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoBanner } from "@/components/VideoBanner";
import { AboutUs } from "@/components/AboutUs";
import { WhyFetan } from "@/components/WhyFetan";
import { ServicesTicker } from "@/components/ServicesTicker";
import { ShowreelPlayer } from "@/components/ShowreelPlayer";
import { ServiceGrid } from "@/components/ServiceGrid";
import { WorkGrid } from "@/components/WorkGrid";
import { StatsCounters } from "@/components/StatsCounters";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { CTABand } from "@/components/CTABand";
import { QuoteContact } from "@/components/QuoteContact";
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
        <AboutUs />
        <WhyFetan />
        <ServicesTicker />
        <ShowreelPlayer />
        <ServiceGrid />
        <WorkGrid />
        <StatsCounters />
        <Clients />
        <Testimonials />
        <CTABand />
        <QuoteContact />
      </main>
      <Footer />
    </>
  );
}

// force reload

// force reload 2

// force reload 3

// force reload 4

// force reload 5

// force reload 6

// force reload 7

// force reload 8

// force reload 9

// force reload 10

// force reload 11

// force reload 12

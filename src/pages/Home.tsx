import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Companies from '../components/Companies';
import InfluencersMarquee from '../components/InfluencersMarquee';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar Metrics */}
      <TrustBar />

      {/* 3. About Collective */}
      <About />

      {/* 4. Specialized Companies & Divisions */}
      <Companies />

      {/* 5. Two-Layer Influencers Marquee (Top scrolling right, Bottom scrolling left) */}
      <InfluencersMarquee />

      {/* 6. Capabilities & Core Services */}
      <Services />

      {/* 7. Featured Case Studies & Client Outcomes */}
      <Projects />

      {/* 8. 5-Phase Client Journey */}
      <Journey />

      {/* 9. Executive Leadership Board */}
      <Team />

      {/* 10. Client Testimonials & Endorsements */}
      <Testimonials />

      {/* 11. Consultation & Contact Desk */}
      <Contact />
    </>
  );
}

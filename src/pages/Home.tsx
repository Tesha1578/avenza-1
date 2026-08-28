import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Influencers from '../components/Influencers';
import Services from '../components/Services';
import Journey from '../components/Journey';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Influencers />
      <Services />
      <Journey />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

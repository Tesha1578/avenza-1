import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Companies from '../components/Companies';
import Influencers from '../components/Influencers';
import Services from '../components/Services';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Companies />
      <Influencers />
      <Services />
      <Journey />
      <Projects />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

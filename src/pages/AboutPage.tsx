import React, { useEffect } from 'react';
import About from '../components/About';
import Journey from '../components/Journey';
import Team from '../components/Team';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-avanza-bg">
      <About />
      <Journey />
      <Team />
    </div>
  );
}

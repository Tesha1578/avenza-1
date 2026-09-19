import React, { useEffect } from 'react';
import About from '../components/About';
import Journey from '../components/Journey';
import Team from '../components/Team';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg">
      <About className="pt-2 sm:pt-4" />
      <Journey />
      <Team />
    </div>
  );
}

import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-avenza-bg">
      <Projects />
      <Testimonials />
    </div>
  );
}

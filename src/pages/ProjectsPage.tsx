import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg">
      <Projects className="pt-2 sm:pt-4" />
      <Testimonials />
    </div>
  );
}

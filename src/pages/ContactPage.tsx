import React, { useEffect } from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-avenza-bg">
      <Contact />
    </div>
  );
}

import React, { useEffect } from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg">
      <Contact className="pt-2 sm:pt-4" />
    </div>
  );
}

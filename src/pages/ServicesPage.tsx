import React, { useEffect } from 'react';
import Services from '../components/Services';
import Process from '../components/Process';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg">
      <Services className="pt-2 sm:pt-4" />
      <Process />
    </div>
  );
}

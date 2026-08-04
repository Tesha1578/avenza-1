import React, { useEffect } from 'react';
import Services from '../components/Services';
import Process from '../components/Process';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-avanza-bg">
      <Services />
      <Process />
    </div>
  );
}

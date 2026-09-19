import React, { useEffect } from 'react';
import Companies from '../components/Companies';

export default function CompaniesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg">
      <Companies className="pt-2 sm:pt-4" />
    </div>
  );
}

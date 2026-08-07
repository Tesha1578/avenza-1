import React, { useEffect } from 'react';
import Companies from '../components/Companies';

export default function CompaniesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-avenza-bg">
      <Companies />
    </div>
  );
}

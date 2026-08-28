import React, { useEffect } from 'react';
import Influencers from '../components/Influencers';

export default function InfluencersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-avenza-bg">
      <Influencers />
    </div>
  );
}

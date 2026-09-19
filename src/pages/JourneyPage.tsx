import React, { useEffect } from 'react';
import Journey from '../components/Journey';
import Process from '../components/Process';
import { motion } from 'motion/react';
import { Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JourneyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg text-avenza-gray-light">
      
      {/* Header Banner */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-avenza-surface/40 to-transparent border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-avenza-green mb-3 block">
            Integrated Delivery Framework
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-display mb-6 tracking-tight">
            The Journey from Vision to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
              Market Domination.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-avenza-gray-light/75 leading-relaxed">
            Discover how five specialized divisions synchronize under one unified roadmap to design your brand, deploy high-speed software, activate viral creators, and ensure statutory compliance.
          </p>
        </div>
      </section>

      {/* Main 5-Stage Journey */}
      <Journey />

      {/* Deep 6-Stage Process Methodology */}
      <Process />

      {/* Journey CTA */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-avenza-surface to-avenza-surface-light border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                Begin Your Journey With Avenza
              </h3>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 max-w-xl">
                Book an exploratory workshop with our strategy team to map out your 90-day execution sprint.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm hover:bg-white transition-colors flex items-center gap-2 flex-shrink-0"
            >
              <span>Schedule Strategy Sprint</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

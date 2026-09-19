import React, { useEffect } from 'react';
import Team from '../components/Team';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg text-avenza-gray-light">
      {/* Header Banner */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-avenza-surface/40 to-transparent border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-avenza-green mb-3 block">
            Executive Governance
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-display mb-6 tracking-tight">
            The Minds Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
              AVENZA's Growth.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-avenza-gray-light/75 leading-relaxed">
            A cohesive coalition of industry veterans, media executives, senior software engineers, and chartered tax practitioners steering corporate value creation across India.
          </p>
        </div>
      </section>

      {/* Main Team Directory */}
      <Team />

      {/* Board Culture / Principles */}
      <section className="py-20 bg-avenza-surface/30 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-avenza-surface border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-avenza-green/10 flex items-center justify-center text-avenza-green mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">Institutional Integrity</h3>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 leading-relaxed">
                Operating with absolute fiduciary responsibility, transparent financial reporting, and statutory tax governance.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-avenza-surface border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-avenza-green/10 flex items-center justify-center text-avenza-green mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">Cross-Functional Mastery</h3>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 leading-relaxed">
                Our founders actively lead execution across creative scripting, paid media buying, AI software development, and events.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-avenza-surface border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-avenza-green/10 flex items-center justify-center text-avenza-green mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">Audience-First Execution</h3>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 leading-relaxed">
                We manage an exclusive roster of 22+ verified creators, ensuring genuine consumer trust and cultural relevance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory CTA */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-avenza-surface to-avenza-surface-light border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                Consult with Our Leadership
              </h3>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 max-w-xl">
                Discuss corporate strategy, media buying budgets, brand roadshows, or legal compliance directly with our managing partners.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm hover:bg-white transition-colors flex items-center gap-2 flex-shrink-0"
            >
              <span>Schedule Partner Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

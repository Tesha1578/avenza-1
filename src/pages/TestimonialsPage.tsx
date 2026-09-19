import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';
import { Star, ShieldCheck, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '98.5%', label: 'Client Retention Rate' },
  { value: '4.8x', label: 'Average ROAS on Ad Spend' },
  { value: '150+', label: 'Delivered Brand Campaigns' },
  { value: '50M+', label: 'Audience Footfall Touched' },
];

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg text-avenza-gray-light">
      
      {/* Header Banner */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-avenza-surface/40 to-transparent border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-avenza-green mb-3 block">
            Proven Industry Impact
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-display mb-6 tracking-tight">
            Trusted by Market Leaders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
              Across India.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-avenza-gray-light/75 leading-relaxed">
            Read first-hand accounts from founders, marketing directors, and corporate leaders who scale their brand visibility, digital conversions, and financial health with AVENZA.
          </p>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 border-b border-white/5 bg-avenza-surface/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-avenza-surface border border-white/5">
                <p className="text-2xl sm:text-4xl font-bold text-avenza-green font-display mb-1">{s.value}</p>
                <p className="text-xs text-avenza-gray-light/60 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials Grid */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-avenza-surface to-avenza-surface-light border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                Ready to Become Our Next Success Story?
              </h3>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 max-w-xl">
                Let's discuss how our branding, creator management, paid media, and engineering teams can accelerate your commercial growth.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm hover:bg-white transition-colors flex items-center gap-2 flex-shrink-0"
            >
              <span>Start Collaboration</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

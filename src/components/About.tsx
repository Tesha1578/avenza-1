import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Target, Compass, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About({ className }: { className?: string } = {}) {
  return (
    <section id="about" className={cn("py-12 sm:py-16 md:py-20 bg-avenza-bg text-avenza-gray-light relative z-20 overflow-hidden", className)}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-4 sm:mb-5">
              <Sparkles size={15} />
              <span>The AVENZA Collective</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 font-display text-white tracking-tight">
              One Unified Ecosystem for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green to-white">
                Exponential Business Scale.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-avenza-gray-light/80 leading-relaxed mb-8">
              AVENZA solves the fragmentation crisis modern enterprises face. Instead of juggling detached agencies for branding, performance ads, web development, influencer management, and legal compliance, AVENZA integrates five elite specialist teams into a single, cohesive growth machine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="p-5 rounded-2xl bg-avenza-surface border border-white/5">
                <div className="flex items-center gap-2 text-avenza-green font-bold text-sm mb-2">
                  <Compass size={18} />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-avenza-gray-light/70 leading-relaxed">
                  To be India's premier multi-disciplinary corporate growth partner, turning ambitious concepts into market-dominating brands.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-avenza-surface border border-white/5">
                <div className="flex items-center gap-2 text-avenza-green font-bold text-sm mb-2">
                  <Target size={18} />
                  <span>Our Approach</span>
                </div>
                <p className="text-xs text-avenza-gray-light/70 leading-relaxed">
                  Deep specialist mastery across every discipline, executed with synchronized timing and institutional compliance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual / Pillars Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <div className="p-8 rounded-[32px] bg-avenza-surface/90 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-avenza-green/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-avenza-green/10 flex items-center justify-center text-avenza-green">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">Why Enterprises Choose Avenza</h3>
                  <p className="text-xs text-avenza-gray-light/60">Cross-disciplinary synergy without vendor handoff friction</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-avenza-gray-light/80">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-avenza-bg/60 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-avenza-green/20 text-avenza-green flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Single Point of Strategic Accountability</h4>
                    <p className="text-xs text-avenza-gray-light/60">No finger-pointing between your ad agency, software dev shop, and event organizers. One consolidated roadmap.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-avenza-bg/60 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-avenza-green/20 text-avenza-green flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Exclusive Creator Roster of 22+ Talents</h4>
                    <p className="text-xs text-avenza-gray-light/60">Direct roster access eliminates high middleman talent markup and guarantees strict ASCI and FTC ad compliance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-avenza-bg/60 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-avenza-green/20 text-avenza-green flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Full Statutory Tax & Legal Shield</h4>
                    <p className="text-xs text-avenza-gray-light/60">Every campaign, contract, and digital platform is backed by our in-house financial and legal audit team.</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

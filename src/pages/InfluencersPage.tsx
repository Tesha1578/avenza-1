import React, { useEffect } from 'react';
import Influencers from '../components/Influencers';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const workflowSteps = [
  {
    step: '01',
    title: 'Audience Match & Talent Scouting',
    desc: 'We match your brand archetype and target demographic with top-performing vetted creators in our exclusive roster.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Creative Scripting & Legal Rights',
    desc: 'Our writers craft viral hooks and authentic storylines with strict ASCI & FTC compliance and guaranteed IP usage rights.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    title: 'Studio Production & Multi-Platform Release',
    desc: 'Full cinematic production support, color grading, audio synchronization, and coordinated high-velocity release.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Attribution & Sales Impact Tracking',
    desc: 'Granular tracking of impressions, saves, click-through rates, and UTM conversion links to measure tangible campaign ROI.',
    icon: BarChart3,
  },
];

export default function InfluencersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-22 min-h-screen bg-avenza-bg text-avenza-gray-light">
      
      {/* Main Roster & Controls */}
      <Influencers className="pt-2 sm:pt-4" />

      {/* Influencer Marketing Process Section */}
      <section className="py-12 sm:py-16 bg-avenza-surface/40 border-t border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-avenza-green mb-3 block">
              Strategic Creator Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display mb-6">
              How Avenza Powers High-Conversion Creator Campaigns
            </h2>
            <p className="text-sm sm:text-base text-avenza-gray-light/70 leading-relaxed">
              We eliminate the chaos of influencer management with institutional discipline, verified talent contracts, and data-backed performance marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-avenza-surface border border-white/5 hover:border-avenza-green/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-display font-bold text-avenza-green">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-avenza-green">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{item.title}</h3>
                  <p className="text-xs text-avenza-gray-light/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Partnership CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-transparent to-avenza-surface/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="p-8 sm:p-12 md:p-16 rounded-[36px] bg-gradient-to-br from-avenza-surface via-avenza-surface to-avenza-surface-light border border-avenza-green/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-avenza-green/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-avenza-green mb-2 block">
                Brand Partnership Desk
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white font-display mb-4">
                Ready to Launch a Coordinated Creator Campaign?
              </h3>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 leading-relaxed">
                Connect with our influencer strategists to assemble custom talent cohorts, secure preferred rates, and hit your target impressions.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="w-full md:w-auto px-8 py-4 rounded-full bg-avenza-green text-avenza-bg font-bold text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-avenza-green/20"
              >
                <span>Request Custom Talent Roster</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

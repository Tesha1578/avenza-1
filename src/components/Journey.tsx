import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Palette, Code2, Rocket, ShieldCheck } from 'lucide-react';

const steps = [
  { 
    id: '01', 
    title: 'Discovery & Vision', 
    division: 'Strategic Incubation',
    desc: 'Deep market intelligence, audience segmentation, and cross-division roadmap formulation.',
    icon: Lightbulb,
  },
  { 
    id: '02', 
    title: 'Brand & Experience', 
    division: 'Upgrade by Avenza',
    desc: 'Visual identities, corporate summits, experiential roadshows, and curved LED activations.',
    icon: Palette,
  },
  { 
    id: '03', 
    title: 'Software & Web Apps', 
    division: 'Axoweb by Avenza',
    desc: 'High-speed Next.js platforms, bespoke AI automation, and conversion-centered UI/UX.',
    icon: Code2,
  },
  { 
    id: '04', 
    title: 'Creators & Paid Ads', 
    division: 'Thomas Astle & Acton',
    desc: '22+ exclusive influencer campaigns, viral reel distribution, and high-ROAS Meta/Google ads.',
    icon: Rocket,
  },
  { 
    id: '05', 
    title: 'Tax & Compliance', 
    division: 'TSP & CO. by Avenza',
    desc: 'Corporate tax governance, GST filings, entity incorporation, and trademark IP defense.',
    icon: ShieldCheck,
  },
];

export default function Journey() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-avenza-surface/30 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-avenza-green mb-2 block">
            End-To-End Execution
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 font-display tracking-tight"
          >
            The Client Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-avenza-gray-light/70"
          >
            How ambitious businesses scale seamlessly from initial concept to market dominance within the AVENZA ecosystem.
          </motion.p>
        </div>

        {/* Desktop Step Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          {/* Connecting Line behind milestones */}
          <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-avenza-green/20 via-avenza-green to-avenza-green/20 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-avenza-surface border-2 border-white/10 group-hover:border-avenza-green group-hover:bg-avenza-green group-hover:text-avenza-bg flex flex-col items-center justify-center text-white mb-6 transition-all duration-300 shadow-xl group-hover:scale-105">
                  <Icon size={24} className="mb-1" />
                  <span className="text-[10px] font-mono font-bold tracking-wider">{step.id}</span>
                </div>

                <span className="text-[11px] font-bold text-avenza-green uppercase tracking-wider mb-1">
                  {step.division}
                </span>

                <h4 className="text-lg font-bold text-white mb-2 font-display">
                  {step.title}
                </h4>

                <p className="text-xs text-avenza-gray-light/65 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet Stepped Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-6 relative">
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-white/10 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative z-10 flex items-start gap-4 p-5 rounded-2xl bg-avenza-surface border border-white/5 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-avenza-bg border border-avenza-green/30 flex items-center justify-center text-avenza-green flex-shrink-0">
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-avenza-green bg-avenza-green/10 px-2 py-0.5 rounded-full border border-avenza-green/20">
                      Phase {step.id}
                    </span>
                    <span className="text-[11px] text-avenza-gray-light/60 font-medium">
                      {step.division}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 font-display">
                    {step.title}
                  </h4>

                  <p className="text-xs text-avenza-gray-light/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

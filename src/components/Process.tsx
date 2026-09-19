import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Palette, Code2, Rocket, TrendingUp } from 'lucide-react';

const processes = [
  {
    step: '01',
    name: 'Discovery & Market Intelligence',
    desc: 'Auditing brand positioning, audience demographics, competitor saturation, and whitespace opportunities.',
    icon: Search,
  },
  {
    step: '02',
    name: 'Omnichannel Strategy & Roadmap',
    desc: 'Formulating cross-disciplinary execution roadmaps spanning media buying, creator cohorts, and software specs.',
    icon: Compass,
  },
  {
    step: '03',
    name: 'Creative Direction & Design Systems',
    desc: 'Designing high-converting visual assets, editorial reel scripts, brand guidelines, and UI/UX prototypes.',
    icon: Palette,
  },
  {
    step: '04',
    name: 'Engineering & Production Deployment',
    desc: 'Deploying ultra-fast web platforms, filming cinematic commercial assets, and configuring tracking attribution.',
    icon: Code2,
  },
  {
    step: '05',
    name: 'Synchronized Campaign Launch',
    desc: 'Coordinating simultaneous PR releases, influencer reel drops, experiential activations, and paid ad live-flights.',
    icon: Rocket,
  },
  {
    step: '06',
    name: 'Attribution, Scaling & Compliance',
    desc: 'Daily ROAS optimization, conversion funnel iterations, statutory tax governance, and compounding revenue scale.',
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-avenza-bg text-avenza-gray-light border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-avenza-green mb-2 block">
              Methodology
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-display text-white tracking-tight"
            >
              The 6-Stage <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green to-white">
                Growth Engine.
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-avenza-gray-light/70 leading-relaxed mb-8"
            >
              A proven, institutional methodology uniting brand creativity with algorithmic media buying and enterprise engineering to deliver predictable, compounding business growth.
            </motion.p>
            
            <div className="p-6 rounded-3xl bg-avenza-surface border border-white/5 hidden sm:block">
              <p className="text-xs text-avenza-green font-mono uppercase tracking-wider mb-2">Our Operating Guarantee</p>
              <p className="text-xs text-white/80 leading-relaxed">
                Every project is assigned dedicated division leads across tech, creative, paid media, and compliance, ensuring zero vendor fragmentation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {processes.map((proc, index) => {
              const Icon = proc.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-3xl bg-avenza-surface/80 border border-white/5 hover:border-avenza-green/30 hover:bg-avenza-surface-light transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center justify-between sm:justify-start gap-4">
                    <span className="text-xl font-display font-bold text-avenza-green bg-avenza-green/10 px-3 py-1.5 rounded-xl border border-avenza-green/20">
                      {proc.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-avenza-green group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-avenza-green transition-colors mb-1 font-display">
                      {proc.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-avenza-gray-light/70 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

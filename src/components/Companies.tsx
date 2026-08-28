import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Code2, Megaphone, Target, Landmark, ArrowUpRight, ChevronLeft, ChevronRight, Compass } from 'lucide-react';

const divisions = [
  {
    slug: 'tech-team',
    name: 'Tech & Website Engineering Team',
    category: 'Technology & AI',
    description: 'Websites, Full-Stack Software, AI Solutions, Apps, UI/UX, Cloud & Automation.',
    icon: Code2,
    color: 'from-blue-500/20 via-avenza-surface to-avenza-surface-light',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    slug: 'branding-team',
    name: 'Branding & Events Team',
    category: 'Branding & Experiential',
    description: 'Brand Activations, Corporate Events, MICE, Roadshows, Mall Campaigns, LED Displays.',
    icon: Sparkles,
    color: 'from-amber-500/20 via-avenza-surface to-avenza-surface-light',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    slug: 'digital-marketing-team',
    name: 'Digital Marketing Team',
    category: 'Digital Marketing & Content',
    description: 'Content Strategy, Social Media Management, Creator Campaigns, Video Production.',
    icon: Megaphone,
    color: 'from-emerald-500/20 via-avenza-surface to-avenza-surface-light',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    slug: 'performance-ads-team',
    name: 'Performance & Ads Team',
    category: 'Advertising & Performance',
    description: 'Performance Ads (Meta/Google), SEO, Conversion Funnels, ROI Scaling.',
    icon: Target,
    color: 'from-purple-500/20 via-avenza-surface to-avenza-surface-light',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    slug: 'tax-compliance-team',
    name: 'Tax & Compliance Advisory Team',
    category: 'Tax & Financial Advisory',
    description: 'GST Filings, Income Tax Strategy, Business Registration, Financial Audit.',
    icon: Landmark,
    color: 'from-yellow-500/20 via-avenza-surface to-avenza-surface-light',
    badgeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  },
];

// Duplicate divisions to create a seamless infinite revolving loop
const revolvingItems = [...divisions, ...divisions, ...divisions];

export default function Companies() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="companies" className="py-32 bg-avenza-bg relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-avenza-green/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-sm font-medium mb-6"
            >
              <Compass size={16} />
              <span>Avenza Group Divisions</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] md:text-[64px] font-bold text-white leading-tight"
            >
              Specialized Divisions & Teams
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-avenza-gray-light/60 max-w-xl"
          >
            Five dedicated specialist teams operating under Avenza Collective to deliver end-to-end digital, marketing, event, and compliance solutions.
          </motion.p>
        </div>
      </div>

      {/* Slowly Revolving Cards Carousel */}
      <div 
        className="relative w-full overflow-hidden py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-avenza-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-avenza-bg to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: isPaused ? undefined : [0, -2200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
          className="flex gap-8 w-max px-6"
        >
          {revolvingItems.map((divItem, index) => {
            const Icon = divItem.icon;
            return (
              <div
                key={`${divItem.slug}-${index}`}
                className="w-[360px] sm:w-[420px] flex-shrink-0"
              >
                <Link
                  to={`/companies/${divItem.slug}`}
                  className={`bg-gradient-to-br ${divItem.color} rounded-[32px] p-8 md:p-10 relative group block overflow-hidden border border-white/10 hover:border-avenza-green/40 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:shadow-avenza-green/10 hover:-translate-y-2`}
                >
                  {/* Internal Glow Effect */}
                  <div className="absolute inset-0 bg-avenza-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />

                  <div className="flex flex-col h-full relative z-10 justify-between min-h-[340px]">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-avenza-green group-hover:scale-110 group-hover:bg-avenza-green group-hover:text-avenza-bg transition-all duration-500">
                          <Icon size={28} />
                        </div>
                        
                        <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-avenza-bg transition-all duration-300">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${divItem.badgeColor}`}>
                        {divItem.category}
                      </span>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-avenza-green transition-colors leading-snug">
                        {divItem.name}
                      </h3>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <p className="text-sm text-avenza-gray-light/70 leading-relaxed line-clamp-3">
                        {divItem.description}
                      </p>
                      
                      <div className="mt-4 flex items-center text-xs font-medium text-avenza-green group-hover:underline">
                        <span>Explore Division</span>
                        <ArrowUpRight size={14} className="ml-1" />
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>

        {/* Hover Hint */}
        <p className="text-center text-xs text-avenza-gray-light/40 mt-8 font-mono">
          Hover over cards to pause rotation • Click any card to view detailed division specs
        </p>
      </div>

    </section>
  );
}

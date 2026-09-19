import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'Pan-India Brand Launch & Roadshow',
    category: 'Branding & Experiential',
    division: 'Upgrade by Avenza',
    divisionSlug: 'branding-team',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    metric: '18M+ Live Impressions',
    highlight: 'Curated 14-city mall activation and custom curved LED outdoor installations.',
  },
  {
    title: 'Enterprise FinTech Platform & Web App',
    category: 'Technology & AI Engineering',
    division: 'Axoweb Technologies by Avenza',
    divisionSlug: 'tech-team',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    metric: '99.99% Uptime & 2.4x Speed',
    highlight: 'Next.js 14 architecture with real-time portfolio analytics and automated compliance APIs.',
  },
  {
    title: 'Viral D2C Creator Blitz & Reel Campaign',
    category: 'Digital Marketing & Content',
    division: 'Thomas Astle by Avenza',
    divisionSlug: 'digital-marketing-team',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    metric: '32M+ Video Views',
    highlight: 'Synchronized campaign across 18 exclusive creators generating 140,000+ saves and shares.',
  },
  {
    title: 'Multi-Channel Paid Ads & SEO Scaling',
    category: 'Performance Marketing & SEO',
    division: 'Acton Creations by Avenza',
    divisionSlug: 'performance-ads-team',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
    metric: '5.2x Verified ROAS',
    highlight: 'Scaled monthly ad spend while slashing customer acquisition cost (CAC) by 38%.',
  },
];

export default function Projects({ className }: { className?: string } = {}) {
  return (
    <section id="projects" className={cn("py-12 sm:py-16 md:py-20 bg-avenza-bg relative overflow-hidden", className)}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-avenza-green/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-6 sm:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
            >
              <Sparkles size={15} />
              <span>Proven Results & Case Studies</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display tracking-tight"
            >
              Featured Case Studies & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green to-white">
                Client Success Stories.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link
              to="/contact"
              className="h-12 sm:h-14 px-7 sm:px-8 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-lg shadow-avenza-green/20"
            >
              <span>Partner With Us</span>
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-[32px] bg-avenza-surface border border-white/5 hover:border-avenza-green/30 p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:bg-avenza-surface-light transition-all duration-500 shadow-xl ${
                index % 2 !== 0 ? 'md:translate-y-8' : ''
              }`}
            >
              <div>
                {/* Image Container */}
                <div className="overflow-hidden rounded-[24px] mb-6 relative aspect-[16/10]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-avenza-bg/90 via-transparent to-transparent" />
                  
                  {/* Division Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-wider flex items-center gap-1.5 border border-white/10">
                    <Building2 size={12} className="text-avenza-green" />
                    <span>{project.division}</span>
                  </div>

                  {/* Highlight Metric */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                    <div className="px-3.5 py-1.5 rounded-full bg-avenza-green text-avenza-bg text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <TrendingUp size={13} />
                      <span>{project.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <p className="text-avenza-green font-mono text-xs uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-avenza-green transition-colors font-display tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-avenza-gray-light/70 leading-relaxed mb-6">
                  {project.highlight}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/companies/${project.divisionSlug}`}
                  className="text-xs font-semibold text-white/80 group-hover:text-avenza-green flex items-center gap-1"
                >
                  <span>View Division Specs</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="text-xs font-semibold text-avenza-green hover:underline"
                >
                  Inquire Similar Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

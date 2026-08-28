import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { influencers, Influencer } from '../data/influencers';

function InstagramIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const categories = [
  'All',
  'Fashion & Lifestyle',
  'Acting & Media',
  'Modeling',
  'Digital Creator',
  'Fitness & Wellness',
] as const;

export default function Influencers() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredInfluencers = influencers.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="influencers" className="py-32 bg-avenza-bg relative overflow-hidden">
      {/* Glow ambient backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-avenza-green/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              <span>Avenza Creator Ecosystem</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] md:text-[64px] font-bold text-white leading-tight"
            >
              Our Influencers & Talent
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-avenza-gray-light/70 max-w-lg"
          >
            Empowering top actors, models, fashion creators, and digital storytellers tied to Avenza Group for high-conversion brand partnerships.
          </motion.p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 bg-avenza-surface/60 backdrop-blur-md p-4 rounded-3xl border border-white/5">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-avenza-gray-light/50" size={18} />
            <input
              type="text"
              placeholder="Search creator name, handle or niche..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-avenza-bg/80 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green/50 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            <Filter size={16} className="text-avenza-green ml-2 hidden sm:block flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-avenza-green text-avenza-bg font-semibold shadow-lg shadow-avenza-green/20'
                    : 'bg-white/5 text-avenza-gray-light/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Influencers Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredInfluencers.map((item, index) => (
              <InfluencerCard key={item.id} influencer={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredInfluencers.length === 0 && (
          <div className="text-center py-20 bg-avenza-surface/30 rounded-3xl border border-white/5">
            <p className="text-avenza-gray-light/60 text-lg">No creators found matching "{searchQuery}".</p>
          </div>
        )}

      </div>
    </section>
  );
}

function InfluencerCard({ influencer, index }: { key?: string; influencer: Influencer; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative rounded-[28px] bg-avenza-surface border border-white/5 hover:border-avenza-green/30 p-6 flex flex-col justify-between overflow-hidden hover:bg-avenza-surface-light transition-all duration-500 hover:shadow-2xl hover:shadow-avenza-green/5"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-avenza-green/5 rounded-full blur-2xl group-hover:bg-avenza-green/15 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header: DP & Category Badge */}
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* Avatar Profile Picture */}
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-avenza-green/30 group-hover:border-avenza-green transition-all duration-500 shadow-md flex-shrink-0 bg-avenza-bg">
            {!imgError ? (
              <img
                src={influencer.image}
                alt={influencer.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-avenza-green/20 to-avenza-surface-light flex items-center justify-center text-avenza-green font-bold text-xl">
                {influencer.name.charAt(0)}
              </div>
            )}
            
            {/* Online/Partner Verified Dot */}
            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-avenza-green border-2 border-avenza-surface" />
          </div>

          <span className="text-[11px] font-semibold text-avenza-green bg-avenza-green/10 border border-avenza-green/20 rounded-full px-3 py-1.5 whitespace-nowrap">
            {influencer.category}
          </span>
        </div>

        {/* Profile Info */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-avenza-green transition-colors">
          {influencer.name}
        </h3>
        
        <p className="text-xs text-avenza-gray-light/60 font-mono mb-3 flex items-center gap-1.5">
          <span>@{influencer.handle}</span>
        </p>

        <p className="text-xs text-avenza-gray-light/80 leading-relaxed mb-6 line-clamp-2">
          {influencer.bio}
        </p>
      </div>

      {/* Footer Instagram Action Button */}
      <a
        href={influencer.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-4 rounded-xl bg-avenza-bg hover:bg-avenza-green text-white hover:text-avenza-bg font-medium text-xs flex items-center justify-center gap-2 border border-white/10 group-hover:border-avenza-green transition-all duration-300"
      >
        <InstagramIcon size={15} />
        <span>Instagram Profile</span>
        <ExternalLink size={13} className="ml-auto opacity-70" />
      </a>
    </motion.div>
  );
}

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Sparkles, Filter, CheckCircle, TrendingUp, Users, ArrowUpDown, UserPlus, Eye } from 'lucide-react';
import { influencers, Influencer, InfluencerCategory } from '../data/influencers';
import InfluencerModal from './InfluencerModal';
import CreatorIntakeModal from './CreatorIntakeModal';
import { cn } from '../lib/utils';

function InstagramIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
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

const categories: ('All' | InfluencerCategory)[] = [
  'All',
  'Fashion & Lifestyle',
  'Acting & Media',
  'Modeling',
  'Digital Creator',
  'Fitness & Wellness',
];

const tiers = ['All Tiers', 'Mega (1M+)', 'Macro (500K-1M)', 'Mid-Tier (100K-500K)', 'Rising Talent'] as const;

export default function Influencers({ className }: { className?: string } = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All Tiers');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'reach' | 'engagement' | 'name'>('reach');
  
  // Modals state
  const [activeInfluencer, setActiveInfluencer] = useState<Influencer | null>(null);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);

  const filteredInfluencers = useMemo(() => {
    return influencers
      .filter((item) => {
        const matchesCategory =
          selectedCategory === 'All' || item.category === selectedCategory;
        const matchesTier =
          selectedTier === 'All Tiers' || item.tier === selectedTier;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          item.name.toLowerCase().includes(query) ||
          item.handle.toLowerCase().includes(query) ||
          item.bio.toLowerCase().includes(query) ||
          item.tags.some((t) => t.toLowerCase().includes(query)) ||
          item.location.toLowerCase().includes(query);

        return matchesCategory && matchesTier && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'reach') return b.followersCount - a.followersCount;
        if (sortBy === 'engagement') return parseFloat(b.engagementRate) - parseFloat(a.engagementRate);
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [selectedCategory, selectedTier, searchQuery, sortBy]);

  return (
    <section id="influencers" className={cn("py-12 sm:py-16 md:py-20 bg-avenza-bg relative overflow-hidden", className)}>
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-avenza-green/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-avenza-surface-light/30 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header & Value Proposition */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6 sm:gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
            >
              <Sparkles size={15} />
              <span>Avenza Creator Network & Talent Management</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display tracking-tight"
            >
              India's Premier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
                Creators & Brand Faces.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-avenza-gray-light/70 mt-6 leading-relaxed"
            >
              Representing prominent film actors, editorial runway models, lifestyle tastemakers, and viral content architects. We design end-to-end influencer campaigns with verified reach, transparent contracts, and guaranteed brand safety.
            </motion.p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
            <button
              onClick={() => setIsIntakeOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-avenza-surface border border-white/10 hover:border-avenza-green/40 text-white hover:text-avenza-green font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300"
            >
              <UserPlus size={16} />
              <span>Join Creator Roster</span>
            </button>
            <a
              href="#influencers-roster"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-avenza-green/20"
            >
              <Sparkles size={16} />
              <span>Explore Talent Roster</span>
            </a>
          </div>
        </div>

        {/* Agency Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-[28px] bg-avenza-surface/80 border border-white/5 backdrop-blur-md mb-16 shadow-xl">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-avenza-green font-bold text-2xl sm:text-3xl font-display mb-1">
              <Users size={20} />
              <span>25M+</span>
            </div>
            <p className="text-xs text-avenza-gray-light/60 font-medium">Combined Audience Reach</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-avenza-green font-bold text-2xl sm:text-3xl font-display mb-1">
              <TrendingUp size={20} />
              <span>5.8%</span>
            </div>
            <p className="text-xs text-avenza-gray-light/60 font-medium">Average Engagement Rate</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-2xl sm:text-3xl font-display mb-1">
              <Sparkles size={20} className="text-avenza-green" />
              <span>350+</span>
            </div>
            <p className="text-xs text-avenza-gray-light/60 font-medium">Brand Campaigns Delivered</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-2xl sm:text-3xl font-display mb-1">
              <CheckCircle size={20} className="text-avenza-green" />
              <span>100%</span>
            </div>
            <p className="text-xs text-avenza-gray-light/60 font-medium">Brand Safe & FTC Compliant</p>
          </div>
        </div>

        {/* Filters, Search & Sorting Controls */}
        <div id="influencers-roster" className="space-y-4 mb-12">
          
          {/* Top Row: Search + Sort Dropdown */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-avenza-surface/60 backdrop-blur-md p-4 rounded-3xl border border-white/5">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-avenza-gray-light/50" size={18} />
              <input
                type="text"
                placeholder="Search talent by name, handle, niche, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-avenza-bg/90 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green/50 transition-colors"
              />
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <div className="flex items-center gap-2 bg-avenza-bg/80 border border-white/10 px-3.5 py-2.5 rounded-2xl">
                <ArrowUpDown size={14} className="text-avenza-green" />
                <span className="text-xs text-avenza-gray-light/60 hidden md:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort creators"
                  className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                >
                  <option value="reach" className="bg-avenza-surface text-white">Highest Reach</option>
                  <option value="engagement" className="bg-avenza-surface text-white">Highest Engagement</option>
                  <option value="name" className="bg-avenza-surface text-white">Name (A-Z)</option>
                </select>
              </div>

              <div className="flex items-center gap-2 bg-avenza-bg/80 border border-white/10 px-3.5 py-2.5 rounded-2xl">
                <Filter size={14} className="text-avenza-green" />
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  aria-label="Filter creators by audience tier"
                  className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                >
                  {tiers.map((t) => (
                    <option key={t} value={t} className="bg-avenza-surface text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-avenza-green text-avenza-bg shadow-md shadow-avenza-green/20'
                    : 'bg-avenza-surface border border-white/5 text-avenza-gray-light/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="text-xs text-avenza-gray-light/50 ml-auto hidden sm:inline whitespace-nowrap px-2">
              Showing {filteredInfluencers.length} Creators
            </span>
          </div>

        </div>

        {/* Influencers Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredInfluencers.map((item, index) => (
              <InfluencerCard
                key={item.id}
                influencer={item}
                index={index}
                onSelect={() => setActiveInfluencer(item)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredInfluencers.length === 0 && (
          <div className="text-center py-20 bg-avenza-surface/30 rounded-3xl border border-white/5 p-8">
            <p className="text-white text-lg font-bold mb-2">No creators found matching your criteria.</p>
            <p className="text-avenza-gray-light/60 text-xs sm:text-sm max-w-md mx-auto mb-6">
              Try adjusting your category filters, search keywords, or audience tiers.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTier('All Tiers');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-avenza-green text-avenza-bg text-xs font-bold hover:bg-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Creator Detail & Collaboration Modal */}
      <InfluencerModal
        influencer={activeInfluencer}
        onClose={() => setActiveInfluencer(null)}
      />

      {/* Creator Representation Application Modal */}
      <CreatorIntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
      />

    </section>
  );
}

function InfluencerCard({
  influencer,
  index,
  onSelect,
}: {
  key?: React.Key;
  influencer: Influencer;
  index: number;
  onSelect: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
      className="group relative rounded-[28px] bg-avenza-surface border border-white/5 hover:border-avenza-green/30 p-5 sm:p-6 flex flex-col justify-between overflow-hidden hover:bg-avenza-surface-light transition-all duration-500 hover:shadow-2xl hover:shadow-avenza-green/5"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-avenza-green/5 rounded-full blur-2xl group-hover:bg-avenza-green/15 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top: Avatar, Badges & Reach */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            onClick={onSelect}
            className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-avenza-green/30 group-hover:border-avenza-green transition-all duration-500 shadow-md flex-shrink-0 bg-avenza-bg cursor-pointer"
          >
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
            
            {influencer.verified && (
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-avenza-green border-2 border-avenza-surface flex items-center justify-center text-avenza-bg">
                <CheckCircle size={10} className="stroke-[3]" />
              </div>
            )}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] font-bold text-avenza-green bg-avenza-green/10 border border-avenza-green/20 rounded-full px-2.5 py-1 whitespace-nowrap">
              {influencer.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-mono text-white/90 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
              <Users size={11} className="text-avenza-green" />
              <span>{influencer.reach}</span>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div onClick={onSelect} className="cursor-pointer">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-avenza-green transition-colors font-display tracking-tight flex items-center gap-1.5">
            <span>{influencer.name}</span>
          </h3>
          
          <p className="text-xs text-avenza-gray-light/60 font-mono mb-2 flex items-center justify-between">
            <span>@{influencer.handle}</span>
            <span className="text-[11px] font-sans text-avenza-green font-semibold">
              {influencer.engagementRate} ER
            </span>
          </p>

          <p className="text-xs text-avenza-gray-light/80 leading-relaxed mb-4 line-clamp-2">
            {influencer.bio}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {influencer.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-avenza-gray-light/70 border border-white/5">
                {tag}
              </span>
            ))}
            {influencer.tags.length > 2 && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-white/5 text-avenza-gray-light/50">
                +{influencer.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
        <button
          onClick={onSelect}
          className="py-2.5 px-3 rounded-xl bg-avenza-green text-avenza-bg hover:bg-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300"
        >
          <Eye size={13} />
          <span>Media Kit</span>
        </button>

        <a
          href={influencer.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-xl bg-avenza-bg hover:bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-white/10 transition-all duration-300"
        >
          <InstagramIcon size={13} />
          <span>Profile</span>
          <ExternalLink size={11} className="opacity-60" />
        </a>
      </div>
    </motion.div>
  );
}

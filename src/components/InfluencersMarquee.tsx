import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { influencers, Influencer } from '../data/influencers';
import InfluencerModal from './InfluencerModal';

export default function InfluencersMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);

  // Split influencers into two distinct groups for the two rows
  const midPoint = Math.ceil(influencers.length / 2);
  const row1Influencers = influencers.slice(0, midPoint);
  const row2Influencers = influencers.slice(midPoint);

  // Duplicate each row to ensure seamless infinite looping
  const loopRow1 = [...row1Influencers, ...row1Influencers, ...row1Influencers];
  const loopRow2 = [...row2Influencers, ...row2Influencers, ...row2Influencers];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-avenza-bg relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-avenza-green/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
            >
              <Sparkles size={15} />
              <span>Avenza Creator Ecosystem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display tracking-tight"
            >
              22+ Exclusive Creators & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
                Digital Brand Faces.
              </span>
            </motion.h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              to="/influencers"
              className="px-6 py-3.5 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-avenza-green/20"
            >
              <span>Explore Full Talent Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Two-layer Marquee Container */}
      <div 
        className="relative w-full overflow-hidden space-y-5 py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Subtle Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-avenza-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-avenza-bg to-transparent z-20 pointer-events-none" />

        {/* TOP LAYER: Scrolling towards the RIGHT */}
        <motion.div
          animate={{ x: isPaused ? undefined : [-2000, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-4 sm:gap-6 w-max px-4"
        >
          {loopRow1.map((influencer, idx) => (
            <InfluencerPillCard
              key={`top-${influencer.id}-${idx}`}
              influencer={influencer}
              onClick={() => setSelectedInfluencer(influencer)}
            />
          ))}
        </motion.div>

        {/* BOTTOM LAYER: Scrolling towards the LEFT */}
        <motion.div
          animate={{ x: isPaused ? undefined : [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-4 sm:gap-6 w-max px-4"
        >
          {loopRow2.map((influencer, idx) => (
            <InfluencerPillCard
              key={`bottom-${influencer.id}-${idx}`}
              influencer={influencer}
              onClick={() => setSelectedInfluencer(influencer)}
            />
          ))}
        </motion.div>

        {/* Interaction Hint */}
        <div className="flex items-center justify-center gap-2 pt-6 text-center text-xs text-avenza-gray-light/40 font-mono">
          <span>Hover to pause • Click any creator to inspect stats & media kit</span>
        </div>
      </div>

      {/* Talent Detail Modal */}
      <InfluencerModal
        influencer={selectedInfluencer}
        onClose={() => setSelectedInfluencer(null)}
      />
    </section>
  );
}

function InfluencerPillCard({
  influencer,
  onClick,
}: {
  key?: React.Key;
  influencer: Influencer;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group flex items-center gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-avenza-surface/90 border border-white/10 hover:border-avenza-green/40 hover:bg-avenza-surface-light transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-avenza-green/10 flex-shrink-0"
    >
      {/* Photo Avatar */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-avenza-green/40 group-hover:border-avenza-green transition-colors flex-shrink-0 bg-avenza-bg">
        {!imgError ? (
          <img
            src={influencer.image}
            alt={influencer.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-avenza-surface-light flex items-center justify-center text-avenza-green font-bold text-sm">
            {influencer.name.charAt(0)}
          </div>
        )}
        {influencer.verified && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-avenza-green rounded-full border border-avenza-surface" />
        )}
      </div>

      {/* Creator Info & ID */}
      <div className="text-left pr-2">
        <div className="flex items-center gap-1.5">
          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-avenza-green transition-colors font-display whitespace-nowrap">
            {influencer.name}
          </h4>
          {influencer.verified && (
            <CheckCircle size={12} className="text-avenza-green flex-shrink-0" />
          )}
        </div>
        <p className="text-[11px] font-mono text-avenza-gray-light/60 flex items-center gap-2 whitespace-nowrap">
          <span>@{influencer.handle}</span>
        </p>
      </div>

      {/* Reach Pill */}
      <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-white/90 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 group-hover:border-avenza-green/20">
        <Users size={11} className="text-avenza-green" />
        <span>{influencer.reach}</span>
      </div>

      {/* Category Tag */}
      <span className="text-[10px] font-semibold text-avenza-green bg-avenza-green/10 px-2.5 py-1 rounded-full border border-avenza-green/20 whitespace-nowrap">
        {influencer.category.split('&')[0]}
      </span>
    </div>
  );
}

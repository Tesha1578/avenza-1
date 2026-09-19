import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ExternalLink, Sparkles, MapPin, TrendingUp, Users, Send, Briefcase } from 'lucide-react';
import { Influencer } from '../data/influencers';

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

interface InfluencerModalProps {
  influencer: Influencer | null;
  onClose: () => void;
}

export default function InfluencerModal({ influencer, onClose }: InfluencerModalProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [campaignGoal, setCampaignGoal] = useState('Brand Awareness & Reach');
  const [budget, setBudget] = useState('₹1,00,000 - ₹5,00,000');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!influencer) return null;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-avenza-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 my-8 text-white max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
          >
            <X size={20} />
          </button>

          <div className="overflow-y-auto custom-scrollbar p-6 sm:p-8 md:p-10 flex-1">
            {/* Creator Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-8 border-b border-white/10">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-avenza-green/40 shadow-xl flex-shrink-0 bg-avenza-bg">
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="w-full h-full object-cover"
                />
                {influencer.verified && (
                  <div className="absolute bottom-1 right-1 p-1 rounded-full bg-avenza-green text-avenza-bg">
                    <CheckCircle size={14} className="fill-avenza-bg text-avenza-green" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-avenza-green/10 text-avenza-green border border-avenza-green/20">
                    {influencer.category}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-avenza-gray-light/80 border border-white/10">
                    {influencer.tier}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight flex items-center gap-2">
                  <span>{influencer.name}</span>
                </h3>

                <p className="text-sm font-mono text-avenza-gray-light/60 flex items-center gap-2 mt-1">
                  <span>@{influencer.handle}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-xs font-sans text-avenza-gray-light/50">
                    <MapPin size={12} className="text-avenza-green" />
                    {influencer.location}
                  </span>
                </p>
              </div>

              <a
                href={influencer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-avenza-bg font-medium text-xs flex items-center justify-center gap-2 transition-all duration-300"
              >
                <InstagramIcon size={14} />
                <span>Instagram Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
              <div className="p-4 rounded-2xl bg-avenza-bg/60 border border-white/5 text-center">
                <div className="flex items-center justify-center gap-1 text-avenza-green mb-1">
                  <Users size={16} />
                  <span className="text-xl sm:text-2xl font-bold font-display">{influencer.reach}</span>
                </div>
                <p className="text-[11px] text-avenza-gray-light/60 uppercase tracking-wider">Audience Reach</p>
              </div>

              <div className="p-4 rounded-2xl bg-avenza-bg/60 border border-white/5 text-center">
                <div className="flex items-center justify-center gap-1 text-avenza-green mb-1">
                  <TrendingUp size={16} />
                  <span className="text-xl sm:text-2xl font-bold font-display">{influencer.engagementRate}</span>
                </div>
                <p className="text-[11px] text-avenza-gray-light/60 uppercase tracking-wider">Avg Engagement</p>
              </div>

              <div className="p-4 rounded-2xl bg-avenza-bg/60 border border-white/5 text-center">
                <div className="flex items-center justify-center gap-1 text-white mb-1">
                  <CheckCircle size={16} className="text-avenza-green" />
                  <span className="text-xl sm:text-2xl font-bold font-display">100%</span>
                </div>
                <p className="text-[11px] text-avenza-gray-light/60 uppercase tracking-wider">Vetted Talent</p>
              </div>

              <div className="p-4 rounded-2xl bg-avenza-bg/60 border border-white/5 text-center">
                <div className="flex items-center justify-center gap-1 text-white mb-1">
                  <Briefcase size={16} className="text-avenza-green" />
                  <span className="text-xl sm:text-2xl font-bold font-display">Exclusive</span>
                </div>
                <p className="text-[11px] text-avenza-gray-light/60 uppercase tracking-wider">Avenza Network</p>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-avenza-green uppercase tracking-wider mb-2">Editorial Bio</h4>
              <p className="text-sm text-avenza-gray-light/80 leading-relaxed bg-avenza-surface-light/40 p-4 rounded-2xl border border-white/5">
                {influencer.bio}
              </p>
            </div>

            {/* Tags & Deliverables */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xs font-semibold text-avenza-green uppercase tracking-wider mb-3">Content Niches & Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {influencer.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-avenza-gray-light/80 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-avenza-green uppercase tracking-wider mb-3">Available Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {influencer.deliverables.map((deliv, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-avenza-green/10 text-white border border-avenza-green/20">
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Brand Collaborations */}
            {influencer.featuredBrands && influencer.featuredBrands.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-avenza-green uppercase tracking-wider mb-3">Notable Brand Collaborations</h4>
                <div className="flex flex-wrap gap-2">
                  {influencer.featuredBrands.map((brand, idx) => (
                    <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-avenza-bg text-white border border-white/10 flex items-center gap-1.5">
                      <Sparkles size={12} className="text-avenza-green" />
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Collaboration Booking Section */}
            {!showBookingForm ? (
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-white">Interested in partnering with {influencer.name}?</p>
                  <p className="text-xs text-avenza-gray-light/60">Our creator team negotiates rates, usage rights, and campaign timelines.</p>
                </div>
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-avenza-green text-avenza-bg font-bold text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-avenza-green/20"
                >
                  <Sparkles size={16} />
                  <span>Book Collaboration</span>
                </button>
              </div>
            ) : (
              <div className="pt-6 border-t border-white/10">
                {!bookingSubmitted ? (
                  <form onSubmit={handleSubmitBooking} className="bg-avenza-bg/80 p-6 rounded-3xl border border-white/10 space-y-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-base font-bold text-white">Campaign Inquiry for {influencer.name}</h4>
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        className="text-xs text-avenza-gray-light/60 hover:text-white underline"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Your Brand / Agency Name *</label>
                        <input
                          type="text"
                          required
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                          placeholder="e.g. Myntra / D2C Brand"
                          className="w-full bg-avenza-surface border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Work Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="marketing@yourbrand.com"
                          className="w-full bg-avenza-surface border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Campaign Objective</label>
                        <select
                          value={campaignGoal}
                          onChange={(e) => setCampaignGoal(e.target.value)}
                          className="w-full bg-avenza-surface border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-avenza-green"
                        >
                          <option>Brand Awareness & Reach</option>
                          <option>Product Launch / Store Launch</option>
                          <option>Festive Campaign (Diwali/Pongal)</option>
                          <option>Long-Term Brand Ambassadorship</option>
                          <option>Performance Conversions / App Installs</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Estimated Budget (INR)</label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-avenza-surface border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-avenza-green"
                        >
                          <option>₹50,000 - ₹1,00,000</option>
                          <option>₹1,00,000 - ₹5,00,000</option>
                          <option>₹5,00,000 - ₹15,00,000</option>
                          <option>₹15,00,000+ (Multi-talent / Annual)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Campaign Details / Deliverable Requirements</label>
                      <textarea
                        rows={2}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your campaign brief, desired dates, and required deliverables (e.g. 2 Reels + 3 Stories)..."
                        className="w-full bg-avenza-surface border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-avenza-green text-avenza-bg font-bold text-xs hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Campaign Request...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Submit Official Inquiry to Avenza Talent Team</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="bg-avenza-green/10 border border-avenza-green/30 p-6 rounded-3xl text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-avenza-green text-avenza-bg flex items-center justify-center mx-auto mb-2">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white">Collaboration Request Received!</h4>
                    <p className="text-xs text-avenza-gray-light/70 max-w-md mx-auto">
                      Thank you, <span className="text-white font-medium">{brandName}</span>. Our creator talent manager for <span className="text-avenza-green font-medium">{influencer.name}</span> will review your brief and send media kits and rate cards to <span className="text-white font-medium">{email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setShowBookingForm(false);
                        setBookingSubmitted(false);
                      }}
                      className="text-xs text-avenza-green underline pt-2 inline-block hover:text-white"
                    >
                      Close & Return to Profile
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

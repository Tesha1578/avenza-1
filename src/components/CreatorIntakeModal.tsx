import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Sparkles, Send } from 'lucide-react';

interface CreatorIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatorIntakeModal({ isOpen, onClose }: CreatorIntakeModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Fashion & Lifestyle');
  const [followers, setFollowers] = useState('50K - 100K');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-avenza-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 my-8 text-white p-6 sm:p-8"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
          >
            <X size={20} />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-avenza-green/10 text-avenza-green text-xs font-semibold w-max mb-4">
                <Sparkles size={14} />
                <span>Creator Representation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                Join the Avenza Creator Roster
              </h3>

              <p className="text-xs sm:text-sm text-avenza-gray-light/70 mb-6 leading-relaxed">
                Unlock premier brand deals, cinematic production support, legal contract protection, and PR management with Avenza.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Full Legal / Creator Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Diya Raman"
                      className="w-full bg-avenza-bg border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Instagram Handle *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-avenza-gray-light/50 font-mono">@</span>
                      <input
                        type="text"
                        required
                        value={handle}
                        onChange={(e) => setHandle(e.target.value.replace('@', ''))}
                        placeholder="yourhandle"
                        className="w-full bg-avenza-bg border border-white/10 rounded-xl pl-7 pr-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full bg-avenza-bg border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 00000"
                      className="w-full bg-avenza-bg border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Primary Niche</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-avenza-bg border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-avenza-green"
                    >
                      <option>Fashion & Lifestyle</option>
                      <option>Acting & Media</option>
                      <option>Modeling</option>
                      <option>Digital Creator</option>
                      <option>Fitness & Wellness</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">Audience Size</label>
                    <select
                      value={followers}
                      onChange={(e) => setFollowers(e.target.value)}
                      className="w-full bg-avenza-bg border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-avenza-green"
                    >
                      <option>25K - 50K (Rising)</option>
                      <option>50K - 100K (Micro)</option>
                      <option>100K - 500K (Mid-Tier)</option>
                      <option>500K - 1M+ (Macro/Mega)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-avenza-gray-light/80 block mb-1">City / Base Location</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Chennai, Bengaluru, Mumbai"
                    className="w-full bg-avenza-bg border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-avenza-gray-light/40 focus:outline-none focus:border-avenza-green"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-3 rounded-xl bg-avenza-green text-avenza-bg font-bold text-xs hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-avenza-green/20"
                >
                  {isSubmitting ? (
                    <span>Submitting Profile...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Submit Application for Roster Review</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-avenza-green text-avenza-bg flex items-center justify-center mx-auto mb-2">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white">Application Submitted!</h4>
              <p className="text-xs sm:text-sm text-avenza-gray-light/70 max-w-md mx-auto">
                Thanks, <span className="text-white font-medium">{name}</span> (@{handle}). Our creator discovery and talent acquisition team will review your profile and engagement metrics. If there is an alignment for upcoming brand campaigns, we will reach out directly to <span className="text-white font-medium">{email}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-avenza-bg text-xs font-semibold transition-colors mt-4"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

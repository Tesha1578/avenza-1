import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Lock, Scale } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

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
          className="relative w-full max-w-3xl bg-avenza-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 my-8 text-white max-h-[85vh] flex flex-col"
        >
          {/* Top Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-avenza-surface-light/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-avenza-green/10 text-avenza-green flex items-center justify-center">
                {isPrivacy ? <Lock size={20} /> : <Scale size={20} />}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {isPrivacy ? 'Privacy & Data Governance Policy' : 'Terms of Corporate Engagement'}
                </h3>
                <p className="text-xs text-avenza-gray-light/60 font-mono">
                  AVENZA GROUP • Effective Date: {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close legal modal"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6 text-xs sm:text-sm text-avenza-gray-light/80 leading-relaxed">
            {isPrivacy ? (
              <>
                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <ShieldCheck size={16} className="text-avenza-green" />
                    1. Commitment to Enterprise Confidentiality
                  </h4>
                  <p>
                    AVENZA GROUP and its specialized subsidiaries (Axoweb Technologies, Upgrade, Thomas Astle, Acton Creations, and TSP & CO.) hold enterprise confidentiality as our highest operating principle. All proprietary marketing briefs, software architectures, financial documentation, and audience data submitted to us are governed by strict Non-Disclosure Agreements (NDAs).
                  </p>
                </section>

                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <Lock size={16} className="text-avenza-green" />
                    2. Data Collection & Usage Protocol
                  </h4>
                  <p>
                    We collect corporate information solely for providing digital marketing, custom engineering, creator campaign coordination, and financial tax advisory. We do not sell, license, or monetize client data under any circumstances. Information is retained on encrypted enterprise cloud infrastructure with restricted multi-factor access controls.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <FileText size={16} className="text-avenza-green" />
                    3. Influencer & Creator Data Protection
                  </h4>
                  <p>
                    Audience metrics, performance benchmarks, and contact details of our exclusive roster of 22+ creators are handled in strict compliance with the Indian Information Technology Act 2000 (and amendments) and global digital advertising privacy standards.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <ShieldCheck size={16} className="text-avenza-green" />
                    4. Inquiries & Data Rights
                  </h4>
                  <p>
                    Corporate partners may request an audit or deletion of their submitted campaign data at any time by contacting our governance desk at <span className="text-avenza-green font-mono">legal@avenzagroup.com</span>.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <Scale size={16} className="text-avenza-green" />
                    1. Scope of Engagement & Collective Mandate
                  </h4>
                  <p>
                    Engagements with AVENZA GROUP are structured either as comprehensive multi-division retainer partnerships or single-division project mandates. Each statement of work (SOW) defines explicit milestones, deliverable specifications, and statutory compliance parameters.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <FileText size={16} className="text-avenza-green" />
                    2. Intellectual Property & Deliverable Assignment
                  </h4>
                  <p>
                    Upon complete settlement of agreed contractual invoices, all custom software source code, bespoke brand guideline manuals, raw video footage, and marketing collateral engineered for the client transfer 100% to the client's ownership, with full commercial exploitation rights.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <ShieldCheck size={16} className="text-avenza-green" />
                    3. Creator Campaign & ASCI Advertising Standards
                  </h4>
                  <p>
                    All creator and influencer promotional content published under Avenza talent management complies with the Advertising Standards Council of India (ASCI) guidelines and FTC disclosure rules, guaranteeing brand safety, commercial accuracy, and statutory clarity.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <Scale size={16} className="text-avenza-green" />
                    4. Jurisdiction & Statutory Dispute Resolution
                  </h4>
                  <p>
                    All commercial agreements entered into with AVENZA GROUP are subject to the exclusive jurisdiction of the competent courts of Chennai, India, governed by the laws of the Republic of India.
                  </p>
                </section>
              </>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-avenza-surface-light/20 flex justify-between items-center">
            <span className="text-xs text-avenza-gray-light/50 font-mono">
              AVENZA Corporate Collective
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs hover:bg-white transition-colors"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

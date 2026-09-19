import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Sparkles, Send, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact({ className }: { className?: string } = {}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [division, setDivision] = useState('full-ecosystem');
  const [budget, setBudget] = useState('₹2,00,000 - ₹5,00,000');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className={cn("py-12 sm:py-16 md:py-20 bg-avenza-surface/80 border-t border-white/5 relative z-20 overflow-hidden", className)}>
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-avenza-green/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-bg border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
              >
                <Sparkles size={15} />
                <span>Executive Consultation</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display text-white tracking-tight leading-tight"
              >
                Let's Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
                  Your Next Leap.
                </span>
              </motion.h2>

              <p className="text-sm sm:text-base text-avenza-gray-light/70 leading-relaxed mb-10">
                Whether you require high-ROAS performance advertising, full-stack software architecture, viral creator campaigns, or corporate compliance, our executive team responds within 24 business hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-avenza-bg/60 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-avenza-green/10 text-avenza-green flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-avenza-green mb-0.5">Corporate Inquiries</h4>
                    <a href="mailto:hello@avenzagroup.com" className="text-sm font-bold text-white hover:text-avenza-green transition-colors">
                      hello@avenzagroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-avenza-bg/60 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-avenza-green/10 text-avenza-green flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-avenza-green mb-0.5">Direct Line & WhatsApp</h4>
                    <a href="tel:+919840012345" className="text-sm font-bold text-white hover:text-avenza-green transition-colors">
                      +91 98400 12345
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-avenza-bg/60 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-avenza-green/10 text-avenza-green flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-avenza-green mb-0.5">Corporate Headquarters</h4>
                    <p className="text-xs sm:text-sm text-avenza-gray-light/80 leading-snug">
                      AVENZA Towers, Anna Salai, Chennai, India<br />
                      <span className="text-xs text-avenza-gray-light/50">Regional Hubs: Bengaluru • Mumbai</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 hidden lg:block">
              <p className="text-xs text-avenza-gray-light/50 font-mono">
                Institutional SLA: Non-Disclosure Agreement (NDA) provided upon request for all enterprise briefs.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-avenza-bg p-6 sm:p-10 md:p-12 rounded-[36px] border border-white/10 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare size={18} className="text-avenza-green" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Send a Strategic Brief
                    </h3>
                  </div>
                  
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-avenza-gray-light/80">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anand Kumar" 
                        className="w-full bg-avenza-surface border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-avenza-gray-light/40 outline-none focus:border-avenza-green transition-colors" 
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-avenza-gray-light/80">Business Email *</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="anand@company.com" 
                        className="w-full bg-avenza-surface border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-avenza-gray-light/40 outline-none focus:border-avenza-green transition-colors" 
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-avenza-gray-light/80">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210" 
                        className="w-full bg-avenza-surface border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-avenza-gray-light/40 outline-none focus:border-avenza-green transition-colors" 
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-avenza-gray-light/80">Company / Brand Name</label>
                      <input 
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Brand or Enterprise Name" 
                        className="w-full bg-avenza-surface border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-avenza-gray-light/40 outline-none focus:border-avenza-green transition-colors" 
                      />
                    </div>
                  </div>

                  {/* Division / Service Requirement */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-avenza-gray-light/80">Division Requirement</label>
                      <select 
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                        className="w-full bg-avenza-surface border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white outline-none focus:border-avenza-green transition-colors cursor-pointer"
                      >
                        <option value="full-ecosystem">Full Ecosystem Solution (Multi-Division)</option>
                        <option value="digital-marketing-team">Digital Marketing & Creators (Thomas Astle)</option>
                        <option value="performance-ads-team">Performance Ads & SEO (Acton Creations)</option>
                        <option value="tech-team">Tech & Web Engineering (Axoweb Technologies)</option>
                        <option value="branding-team">Branding & Experiential Events (Upgrade)</option>
                        <option value="tax-compliance-team">Tax & Corporate Compliance (TSP & CO.)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-avenza-gray-light/80">Estimated Budget Range</label>
                      <select 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-avenza-surface border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white outline-none focus:border-avenza-green transition-colors cursor-pointer"
                      >
                        <option>₹1,00,000 - ₹2,50,000</option>
                        <option>₹2,50,000 - ₹5,00,000</option>
                        <option>₹5,00,000 - ₹15,00,000</option>
                        <option>₹15,00,000+ (Enterprise Retainer)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-avenza-gray-light/80">Project Scope / Specific Requirements</label>
                    <textarea 
                      rows={3} 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your timeline, goals, deliverables, or challenges..." 
                      className="w-full bg-avenza-surface border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-avenza-gray-light/40 outline-none focus:border-avenza-green transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 mt-2 rounded-2xl bg-avenza-green text-avenza-bg font-bold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 shadow-xl shadow-avenza-green/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry to Strategic Desk...</span>
                    ) : (
                      <>
                        <span>Submit Strategic Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-avenza-green text-avenza-bg flex items-center justify-center mx-auto mb-4 shadow-xl shadow-avenza-green/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    Strategic Inquiry Dispatched
                  </h3>
                  <p className="text-xs sm:text-sm text-avenza-gray-light/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{name}</span>. Your brief has been routed to our managing partners. We will review your requirements and follow up at <span className="text-avenza-green font-mono">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setCompany('');
                      setMessage('');
                    }}
                    className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-avenza-bg font-semibold text-xs transition-colors mt-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

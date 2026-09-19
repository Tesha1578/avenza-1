import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegalModal from './LegalModal';

function LinkedInIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-avenza-green text-avenza-bg pt-14 sm:pt-20 pb-10 rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[64px] relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 sm:mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-none mb-6">
                AVENZA<span className="text-white">.</span>
              </h2>
            </Link>
            <p className="text-avenza-bg/85 text-base sm:text-lg max-w-sm mb-8 font-medium leading-relaxed">
              India's premier corporate collective uniting digital marketing, brand engineering, creator management, enterprise software, and corporate compliance.
            </p>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="AVENZA LinkedIn" 
                className="w-11 h-11 rounded-full bg-avenza-bg flex items-center justify-center text-avenza-green hover:bg-white hover:text-avenza-bg transition-colors"
              >
                <LinkedInIcon size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="AVENZA Instagram" 
                className="w-11 h-11 rounded-full bg-avenza-bg flex items-center justify-center text-avenza-green hover:bg-white hover:text-avenza-bg transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="mailto:hello@avenzagroup.com" 
                aria-label="Email AVENZA" 
                className="w-11 h-11 rounded-full bg-avenza-bg flex items-center justify-center text-avenza-green hover:bg-white hover:text-avenza-bg transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Nav & Division Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Divisions with precise slugs */}
            <div>
              <h4 className="font-bold text-lg font-display mb-5 text-avenza-bg">Divisions</h4>
              <ul className="flex flex-col gap-3 font-medium text-xs sm:text-sm text-avenza-bg/80">
                <li>
                  <Link to="/companies/digital-marketing-team" className="hover:text-white transition-colors">
                    Thomas Astle (Marketing)
                  </Link>
                </li>
                <li>
                  <Link to="/companies/performance-ads-team" className="hover:text-white transition-colors">
                    Acton Creations (Ads & SEO)
                  </Link>
                </li>
                <li>
                  <Link to="/companies/tech-team" className="hover:text-white transition-colors">
                    Axoweb Technologies (Tech)
                  </Link>
                </li>
                <li>
                  <Link to="/companies/branding-team" className="hover:text-white transition-colors">
                    Upgrade (Branding & Events)
                  </Link>
                </li>
                <li>
                  <Link to="/companies/tax-compliance-team" className="hover:text-white transition-colors">
                    TSP & CO. (Tax & Compliance)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site Navigation */}
            <div>
              <h4 className="font-bold text-lg font-display mb-5 text-avenza-bg">Ecosystem</h4>
              <ul className="flex flex-col gap-2.5 font-medium text-xs sm:text-sm text-avenza-bg/80">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Collective</Link></li>
                <li><Link to="/influencers" className="hover:text-white transition-colors font-bold text-avenza-bg">Influencers Roster</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Capabilities</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/journey" className="hover:text-white transition-colors">Client Journey</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Leadership Board</Link></li>
                <li><Link to="/testimonials" className="hover:text-white transition-colors">Client Reviews</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Consultation Desk</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg font-display mb-4 text-avenza-bg">Growth Intelligence</h4>
              <p className="font-medium text-xs text-avenza-bg/80 mb-4 leading-relaxed">
                Receive our monthly breakdown on creator trends, SEO updates, and enterprise tax changes.
              </p>

              {!newsletterSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="relative">
                  <input 
                    type="email" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter business email" 
                    className="w-full bg-white/25 border-none rounded-full pl-4 pr-12 py-3.5 text-xs text-avenza-bg placeholder:text-avenza-bg/60 outline-none focus:bg-white/40 transition-colors font-medium"
                  />
                  <button 
                    type="submit" 
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-9 h-9 bg-avenza-bg rounded-full flex items-center justify-center text-avenza-green hover:bg-white hover:text-avenza-bg transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div className="p-3 bg-avenza-bg text-white rounded-2xl flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 size={16} className="text-avenza-green" />
                  <span>Subscribed! Welcome aboard.</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-avenza-bg/20 flex flex-col sm:flex-row justify-between items-center gap-4 font-medium text-avenza-bg/70 text-xs">
          <p>© {new Date().getFullYear()} AVENZA GROUP (A Collective of Specialist Companies). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-avenza-bg transition-colors underline cursor-pointer text-left"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-avenza-bg transition-colors underline cursor-pointer text-left"
            >
              Terms of Engagement
            </button>
            <span className="text-avenza-bg/50 hidden sm:inline">Pan-India Operations</span>
          </div>
        </div>
      </div>

      {/* Legal & Policy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
}

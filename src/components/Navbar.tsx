import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Divisions', href: '/companies' },
    { name: 'Influencers', href: '/influencers' },
    { name: 'Capabilities', href: '/services' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div
          className={cn(
            'flex items-center justify-between rounded-full px-5 py-3 md:px-7 md:py-3.5 transition-all duration-500 border',
            scrolled
              ? 'bg-avenza-surface/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50'
              : 'bg-avenza-surface/40 backdrop-blur-md border-white/5'
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white z-50 flex items-center gap-1 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>AVENZA</span>
            <span className="text-avenza-green group-hover:scale-125 transition-transform inline-block">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-xs xl:text-sm font-medium transition-colors relative py-1',
                    isActive
                      ? 'text-avenza-green font-semibold'
                      : 'text-avenza-gray-light/80 hover:text-white'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-avenza-green rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs hover:bg-white transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-avenza-green/10"
            >
              <span>Book Strategy Call</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden text-white z-50 p-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen bg-avenza-bg/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-between pt-28 pb-10 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-5 items-center text-center my-auto">
              <span className="text-[11px] font-mono uppercase tracking-widest text-avenza-green flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>Avenza Group Navigation</span>
              </span>

              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    key={link.name}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'text-2xl font-display font-bold transition-colors block py-1',
                        isActive
                          ? 'text-avenza-green'
                          : 'text-white hover:text-avenza-green'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-avenza-green text-avenza-bg font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-avenza-green/20"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <p className="text-center text-[11px] text-avenza-gray-light/50 font-mono">
                © {new Date().getFullYear()} AVENZA GROUP • Pan-India
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

import React from 'react';
import { ArrowRight, Globe, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-avanza-green text-avanza-bg pt-32 pb-12 rounded-t-[40px] md:rounded-t-[80px] -mt-10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          
          <div className="lg:col-span-5">
            <h2 className="text-[64px] md:text-[96px] font-bold font-display tracking-tight leading-none mb-6">
              AVANZA<span className="text-white">.</span>
            </h2>
            <p className="text-avanza-bg/80 text-xl max-w-sm mb-10 font-medium">
              A collective of specialist companies engineering business growth.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-avanza-bg flex items-center justify-center text-avanza-green hover:bg-white hover:text-avanza-bg transition-colors">
                <Link2 size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-avanza-bg flex items-center justify-center text-avanza-green hover:bg-white hover:text-avanza-bg transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-6">Companies</h4>
              <ul className="flex flex-col gap-4 font-medium text-avanza-bg/80">
                <li><Link to="/companies" className="hover:text-white transition-colors">Upgrade</Link></li>
                <li><Link to="/companies" className="hover:text-white transition-colors">Axoweb Technologies</Link></li>
                <li><Link to="/companies" className="hover:text-white transition-colors">Thomas Astle</Link></li>
                <li><Link to="/companies" className="hover:text-white transition-colors">Acton Creations</Link></li>
                <li><Link to="/companies" className="hover:text-white transition-colors">TSP & CO.</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Navigation</h4>
              <ul className="flex flex-col gap-4 font-medium text-avanza-bg/80">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Capabilities</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-xl mb-6">Newsletter</h4>
              <p className="font-medium text-avanza-bg/80 mb-4">Stay updated with our latest news.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/20 border-none rounded-full px-6 py-4 text-avanza-bg placeholder-avanza-bg/60 outline-none focus:bg-white/30 transition-colors font-medium"
                />
                <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-avanza-bg rounded-full flex items-center justify-center text-avanza-green hover:bg-white hover:text-avanza-bg transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-avanza-bg/20 flex flex-col md:flex-row justify-between items-center gap-4 font-medium text-avanza-bg/70 text-sm">
          <p>© {new Date().getFullYear()} AVANZA GROUP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-avanza-bg transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-avanza-bg transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

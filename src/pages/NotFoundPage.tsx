import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="pt-40 pb-28 min-h-[80vh] bg-avenza-bg flex flex-col items-center justify-center text-center px-6">
      <div className="w-20 h-20 rounded-3xl bg-avenza-surface border border-avenza-green/20 flex items-center justify-center text-avenza-green mb-8 shadow-xl shadow-avenza-green/5">
        <Compass size={40} className="animate-spin-slow" />
      </div>

      <span className="text-avenza-green font-mono text-sm uppercase tracking-widest mb-3">
        404 • Page Not Found
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Lost in the Ecosystem?
      </h1>

      <p className="text-avenza-gray-light/60 max-w-md mb-10 leading-relaxed">
        The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="px-8 py-4 rounded-full bg-avenza-green text-avenza-bg font-bold text-sm hover:bg-white transition-all duration-300 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/companies"
          className="px-8 py-4 rounded-full bg-avenza-surface border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors"
        >
          Explore Divisions
        </Link>
      </div>
    </div>
  );
}

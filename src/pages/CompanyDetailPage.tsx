import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';
import { companiesData } from '../data/companiesData';

export default function CompanyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const company = slug ? companiesData[slug] : undefined;

  if (!company) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-avenza-bg flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Company Not Found</h1>
        <p className="text-avenza-gray-light/60 mb-8">The division you are looking for does not exist.</p>
        <Link
          to="/companies"
          className="px-6 py-3 rounded-full bg-avenza-green text-avenza-bg font-semibold hover:bg-white transition-colors"
        >
          View All Companies
        </Link>
      </div>
    );
  }

  const Icon = company.icon;
  const otherCompanies = Object.values(companiesData).filter((c) => c.slug !== company.slug);

  return (
    <div className="pt-32 min-h-screen bg-avenza-bg text-avenza-gray-light">
      
      {/* Top Navigation & Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-avenza-gray-light/70 hover:text-avenza-green transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Companies</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className={`rounded-[36px] bg-gradient-to-br ${company.color} border border-white/10 p-8 md:p-16 relative overflow-hidden`}>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-avenza-green text-xs font-semibold uppercase tracking-wider mb-6">
                  <Building2 size={14} />
                  <span>{company.category}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{company.name}</h1>
                <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
                  {company.tagline}
                </p>
              </div>

              <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-avenza-green flex-shrink-0">
                <Icon size={48} />
              </div>
            </div>

            {/* Stats Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 relative z-10">
              {company.highlights.map((h, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{h.stat}</p>
                  <p className="text-xs md:text-sm text-white/70">{h.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Overview & About Company */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About {company.name}</h2>
            <p className="text-lg text-avenza-gray-light/80 leading-relaxed mb-8">
              {company.overview}
            </p>
            <div className="p-6 rounded-2xl bg-avenza-surface border border-white/5">
              <h4 className="text-sm font-semibold text-avenza-green uppercase tracking-wider mb-3">Key Focus</h4>
              <p className="text-sm text-avenza-gray-light/70">{company.shortDescription}</p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-avenza-surface border border-white/5 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Ready to Partner with {company.name}?</h3>
            <p className="text-sm text-avenza-gray-light/70 mb-8">
              Get in touch with our specialist team for a tailored consultation and enterprise solutions.
            </p>
            <Link
              to="/contact"
              className="w-full py-4 rounded-xl bg-avenza-green text-avenza-bg font-bold text-sm flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <span>{company.ctaText}</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Services List */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <h2 className="text-3xl font-bold text-white mb-12">Core Capabilities & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {company.services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-avenza-surface border border-white/5 hover:border-avenza-green/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-avenza-green/10 text-avenza-green flex items-center justify-center mb-6">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-sm text-avenza-gray-light/70 leading-relaxed">{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore Other Divisions */}
      <section className="bg-avenza-surface/40 py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-white mb-8">Other Divisions in Avenza Group</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCompanies.map((c) => {
              const CompIcon = c.icon;
              return (
                <Link
                  key={c.slug}
                  to={`/companies/${c.slug}`}
                  className="p-6 rounded-2xl bg-avenza-surface border border-white/5 hover:border-avenza-green/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-avenza-green mb-4 group-hover:scale-110 transition-transform">
                    <CompIcon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-avenza-green transition-colors">{c.name}</h4>
                  <p className="text-xs text-avenza-gray-light/50">{c.category}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

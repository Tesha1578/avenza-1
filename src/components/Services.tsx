import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code2, Megaphone, Target, Landmark, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ServicePillar {
  id: string;
  pillar: string;
  team: string;
  tagline: string;
  description: string;
  icon: any;
  deliverables: string[];
  metrics: string;
  image: string;
  targetLink: string;
}

const servicePillars: ServicePillar[] = [
  {
    id: 'digital-marketing',
    pillar: 'Digital Marketing & Content Strategy',
    team: 'Thomas Astle by Avenza',
    tagline: 'Scale Market Share through Organic Content, Creator Viral Reels & Cult Followings.',
    description: 'We construct full-funnel digital marketing ecosystems that capture audience attention and convert it into customer loyalty. Powered by our proprietary network of 22+ exclusive creators, viral video scripting, and data-driven community management, we make brands culturally relevant and impossible to ignore.',
    icon: Megaphone,
    deliverables: [
      'Omnichannel Social Media Management',
      'Creator & Influencer Brand Activations',
      'Viral Reel Scripting & Studio Video Production',
      'Content Marketing & Thought Leadership Articles',
      'Brand Reputation & Community Engagement',
    ],
    metrics: '25M+ Monthly Content Views • 4.8% Avg Engagement',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    targetLink: '/companies/digital-marketing-team',
  },
  {
    id: 'performance-ads',
    pillar: 'Performance Marketing & SEO',
    team: 'Acton Creations by Avenza',
    tagline: 'High-ROAS Paid Acquisition, Technical SEO Domination & Revenue Funnels.',
    description: 'We operate with mathematical rigor to turn advertising spend into predictable profit. Managing multimillion-rupee budgets across Meta, Google Search, YouTube, and programmatic networks, backed by aggressive technical SEO that secures number-one organic Google rankings.',
    icon: Target,
    deliverables: [
      'Meta Ads (Facebook & Instagram) Scaling',
      'Google PPC, Search & Performance Max (PMax)',
      'Technical SEO, Semantic Markup & Core Web Vitals',
      'Conversion Rate Optimization (CRO) & Funnel Design',
      'Server-Side Attribution (CAPI) & Advanced Analytics',
    ],
    metrics: '4.8x Average Client ROAS • ₹25Cr+ Ad Spend Managed',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    targetLink: '/companies/performance-ads-team',
  },
  {
    id: 'branding-events',
    pillar: 'Company Branding & Experiential Events',
    team: 'Upgrade by Avenza',
    tagline: 'Design Iconic Brand Identities, Pan-India Summits & Immersive Roadshows.',
    description: 'Brand building is an emotional art and an engineering science. We define corporate identities through comprehensive design systems, logo suites, and brand style guides, and bring them into the real world with executive corporate summits, high-footfall mall activations, and digital LED outdoor installations.',
    icon: Sparkles,
    deliverables: [
      'Brand Strategy, Positioning & Visual Guidelines',
      'Logo Systems, Typography & Color Hierarchy',
      'Corporate Summits, Conferences & MICE Execution',
      'Experiential Roadshows & High-Footfall Mall Pop-ups',
      'Dynamic LED Spectaculars & Interactive Displays',
    ],
    metrics: '500+ Events Delivered • 50M+ Footfall Touched',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop',
    targetLink: '/companies/branding-team',
  },
  {
    id: 'tech-software',
    pillar: 'Tech & High-Performance Web Engineering',
    team: 'Axoweb Technologies by Avenza',
    tagline: 'Ultra-Fast Web Applications, Custom AI Automation & Enterprise Software.',
    description: 'The digital flagship of your business. We engineer lightning-fast, conversion-optimized corporate websites, custom web applications, AI automation pipelines, and iOS/Android mobile apps that provide flawless user experiences and scale gracefully to millions of users.',
    icon: Code2,
    deliverables: [
      'Enterprise Websites & React / Next.js Applications',
      'Custom AI Agents, Workflow Pipelines & LLMs',
      'Mobile Application Development (iOS & Android)',
      'Conversion-Centered UI/UX Design Systems',
      'Cloud Architecture, DevOps & 99.98% Uptime SLA',
    ],
    metrics: '140+ Digital Platforms • 99.98% Uptime Guarantee',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    targetLink: '/companies/tech-team',
  },
  {
    id: 'compliance-tax',
    pillar: 'Tax & Corporate Financial Compliance',
    team: 'TSP & CO. by Avenza',
    tagline: 'Stress-Free Corporate Tax, Timely GST Filing & Statutory Audit Governance.',
    description: 'Rapid growth demands bulletproof legal and financial foundations. We handle statutory corporate tax strategy, GST filings, entity incorporation, trademark IP defense, and regulatory governance so businesses can operate with total compliance and zero liability.',
    icon: Landmark,
    deliverables: [
      'Monthly & Annual GST Filings & Tax Planning',
      'Company Incorporation (Pvt Ltd, LLP, Partnership)',
      'Statutory Financial Auditing & Balance Sheets',
      'Trademark Registration & Intellectual Property Defense',
      'Influencer Contracts & Campaign Legal Governance',
    ],
    metrics: '1,000+ Compliant Enterprises • 100% Filing Accuracy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop',
    targetLink: '/companies/tax-compliance-team',
  },
];

export default function Services({ className }: { className?: string } = {}) {
  const [activePillar, setActivePillar] = useState<string>(servicePillars[0].id);

  const currentService = servicePillars.find((s) => s.id === activePillar) || servicePillars[0];
  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className={cn("py-12 sm:py-16 md:py-20 bg-avenza-surface/60 border-t border-b border-white/5 relative overflow-hidden", className)}>
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-avenza-green/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-avenza-surface border border-avenza-green/20 text-avenza-green text-xs font-medium mb-3.5 sm:mb-4"
          >
            <Sparkles size={15} />
            <span>Full-Spectrum Digital Services</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-display mb-6 tracking-tight"
          >
            Capabilities Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenza-green via-white to-avenza-gray-light">
              Market Domination.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-avenza-gray-light/70 leading-relaxed"
          >
            From high-converting web marketing and viral creator campaigns to enterprise software architecture and corporate compliance, our five specialized teams deliver complete end-to-end execution.
          </motion.p>
        </div>

        {/* Pillar Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {servicePillars.map((s) => (
            <button
              key={s.id}
              onClick={() => setActivePillar(s.id)}
              className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activePillar === s.id
                  ? 'bg-avenza-green text-avenza-bg shadow-lg shadow-avenza-green/20 font-bold'
                  : 'bg-avenza-surface border border-white/5 text-avenza-gray-light/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{s.pillar.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Featured Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-avenza-surface rounded-[36px] border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-avenza-green/10 text-avenza-green text-xs font-bold border border-avenza-green/20">
                      <CurrentIcon size={14} />
                      <span>{currentService.team}</span>
                    </span>
                    <span className="text-xs text-avenza-gray-light/50 font-mono">
                      {currentService.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 font-display leading-tight">
                    {currentService.pillar}
                  </h3>

                  <p className="text-sm sm:text-base text-avenza-green font-medium mb-6">
                    {currentService.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-avenza-gray-light/80 leading-relaxed mb-8">
                    {currentService.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                    Key Deliverables & Capabilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {currentService.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-avenza-bg/60 border border-white/5">
                        <CheckCircle2 size={16} className="text-avenza-green flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-avenza-gray-light/90 font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <Link
                      to={currentService.targetLink}
                      className="px-6 py-3.5 rounded-full bg-avenza-green text-avenza-bg font-bold text-xs sm:text-sm hover:bg-white transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-avenza-green/20"
                    >
                      <span>Explore Division Specs</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
                    >
                      Request Service Proposal
                    </Link>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-square border border-white/10 shadow-2xl group">
                  <img
                    src={currentService.image}
                    alt={currentService.pillar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-avenza-bg/90 via-avenza-bg/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-avenza-surface/90 backdrop-blur-md border border-white/10">
                    <p className="text-xs text-avenza-green font-bold uppercase tracking-wider mb-1">
                      Division Highlight
                    </p>
                    <p className="text-sm font-bold text-white font-display">
                      {currentService.team}
                    </p>
                    <p className="text-xs text-avenza-gray-light/70 mt-1">
                      {currentService.metrics}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

import { Sparkles, Code2, Megaphone, Target, Landmark, LucideIcon } from 'lucide-react';

export interface CompanyDetail {
  slug: string;
  name: string;
  subsidiaryName: string;
  category: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  icon: LucideIcon;
  color: string;
  services: {
    title: string;
    description: string;
  }[];
  highlights: {
    stat: string;
    label: string;
  }[];
  ctaText: string;
}

export const companiesData: Record<string, CompanyDetail> = {
  'tech-team': {
    slug: 'tech-team',
    name: 'Tech & Website Engineering Team',
    subsidiaryName: 'Axoweb Technologies',
    category: 'Technology & AI Solutions',
    tagline: 'Engineering High-Performance Web Platforms, Custom Software, AI Systems & Digital Infrastructure.',
    shortDescription: 'Enterprise Web Apps, Next.js / React Platforms, AI Workflows, Cloud Infrastructure & UI/UX Systems.',
    overview: 'Axoweb Technologies is the engineering powerhouse of Avenza Group. We architect, build, and deploy ultra-fast, search-optimized web applications, mobile platforms, custom AI automation agents, and scalable cloud solutions. From high-converting digital marketing websites to mission-critical SaaS architectures, our engineering team unites cutting-edge software craft with pixel-perfect modern design.',
    icon: Code2,
    color: 'from-blue-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'High-Performance Web & App Development',
        description: 'Blazing-fast, SEO-optimized, responsive websites and enterprise web applications engineered using modern React, Next.js, TypeScript, and serverless cloud APIs.',
      },
      {
        title: 'Custom AI Systems & Workflow Automation',
        description: 'Bespoke LLM applications, intelligent conversational agents, automated lead qualification pipelines, and internal workflow automations.',
      },
      {
        title: 'Mobile App Engineering (iOS & Android)',
        description: 'Native and cross-platform mobile solutions delivering fluid 60fps animations, offline resilience, and friction-free user onboardings.',
      },
      {
        title: 'UI/UX Design Systems & Interactive Prototypes',
        description: 'Conversion-centered interface design, comprehensive design systems, user journey mapping, and usability testing built to maximize user retention.',
      },
      {
        title: 'Cloud Infrastructure, Security & 99.9% Uptime',
        description: 'Automated CI/CD pipelines, containerized microservices, SSL/TLS hardening, database optimization, and managed cloud deployments.',
      },
    ],
    highlights: [
      { stat: '140+', label: 'Digital Platforms Built' },
      { stat: '99.98%', label: 'System Reliability' },
      { stat: '30+', label: 'Engineers & Designers' },
    ],
    ctaText: 'Consult with Our Engineering Team',
  },

  'branding-team': {
    slug: 'branding-team',
    name: 'Branding & Experiential Events Team',
    subsidiaryName: 'Upgrade',
    category: 'Branding & Experiential',
    tagline: 'Designing Iconic Brand Identities, Immersive Offline Experiences & Large-Scale Activations.',
    shortDescription: 'Brand Identity Systems, Corporate Summits, Experiential Roadshows, Mall Takeovers & LED Displays.',
    overview: 'Upgrade by Avenza leads corporate brand identity and high-impact physical activations. We bring brands to life through multi-sensory experiences: from crafting comprehensive brand guidelines and typographic identities to producing large-scale corporate summits, nationwide mobile roadshows, mall experiential takeovers, and cutting-edge digital LED outdoor visual displays.',
    icon: Sparkles,
    color: 'from-amber-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Comprehensive Brand Strategy & Visual Identity',
        description: 'Brand positioning, logo design systems, brand guideline manuals, color psychology, and tone-of-voice documentation for market leaders.',
      },
      {
        title: 'Corporate Summits, Conferences & MICE',
        description: 'Turnkey planning and execution for executive conferences, industry summits, dealer meets, and annual corporate galas across Pan-India.',
      },
      {
        title: 'Experiential Roadshows & Mall Takeovers',
        description: 'High-footfall physical activations, interactive demo kiosks, and traveling brand pop-ups that create lasting consumer memories.',
      },
      {
        title: 'LED Spectaculars & Interactive OOH Displays',
        description: 'Curved LED installations, dynamic promotional staging, architectural projection mapping, and digital out-of-home experiential showcases.',
      },
      {
        title: 'Retail Store Design & Visual Merchandising',
        description: 'Spatial brand architecture, retail pop-up fit-outs, and luxury exhibition pavilion fabrication.',
      },
    ],
    highlights: [
      { stat: '500+', label: 'Events & Activations' },
      { stat: '50M+', label: 'Live Footfall Touched' },
      { stat: '98.5%', label: 'Client Satisfaction' },
    ],
    ctaText: 'Plan a Brand Campaign with Upgrade',
  },

  'digital-marketing-team': {
    slug: 'digital-marketing-team',
    name: 'Digital Marketing & Content Team',
    subsidiaryName: 'Thomas Astle',
    category: 'Digital Marketing & Content Strategy',
    tagline: 'Scaling Market Share through Organic Content Engines, Creator Campaigns & Viral Video Production.',
    shortDescription: 'Web Marketing, Organic Social Media, Creator Partnerships, Commercial Video & Viral Reels.',
    overview: 'Thomas Astle by Avenza drives social dominance and inbound customer demand. By marrying analytical digital marketing with an exclusive network of over 50 verified influencers and cinematic video producers, we produce editorial content and social campaigns that build cult brand followings and convert passive scrollers into passionate customers.',
    icon: Megaphone,
    color: 'from-emerald-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Full-Spectrum Web & Social Marketing',
        description: 'Omnichannel content planning, social media account management, community nurture, and proactive brand reputation management.',
      },
      {
        title: 'Creator & Influencer Campaign Management',
        description: 'End-to-end talent scouting, contract negotiations, script supervision, and performance tracking across our network of 22+ exclusive creators.',
      },
      {
        title: 'Cinematic Video Production & Reel Architecture',
        description: 'Scriptwriting, filming, high-velocity reel editing, motion graphics, and audio mastering designed to trigger organic platform algorithms.',
      },
      {
        title: 'Thought Leadership & Content Marketing',
        description: 'Long-form editorial articles, executive LinkedIn ghostwriting, whitepapers, and industry benchmark reports that establish market authority.',
      },
      {
        title: 'Brand Storytelling & Viral Launches',
        description: 'High-concept creative launch campaigns, hashtag challenges, and multi-creator synchronized digital takeovers.',
      },
    ],
    highlights: [
      { stat: '25M+', label: 'Monthly Video Views' },
      { stat: '50+', label: 'Exclusive Talent Roster' },
      { stat: '350+', label: 'Viral Brand Campaigns' },
    ],
    ctaText: 'Elevate Marketing with Thomas Astle',
  },

  'performance-ads-team': {
    slug: 'performance-ads-team',
    name: 'Performance & Paid Ads Team',
    subsidiaryName: 'Acton Creations',
    category: 'Performance Advertising & SEO',
    tagline: 'High-ROAS Paid Advertising, Technical SEO Domination & Revenue-Generating Conversion Funnels.',
    shortDescription: 'Meta Ads, Google PPC & PMax, Technical SEO, Conversion Rate Optimization & Growth Analytics.',
    overview: 'Acton Creations by Avenza is dedicated to revenue generation and customer acquisition. Operating with mathematical precision, our performance media buyers and search engineers manage multimillion-rupee advertising budgets on Meta, Google, YouTube, and programmatic ad exchanges, backed by technical SEO that captures high-intent organic search volume.',
    icon: Target,
    color: 'from-purple-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Paid Media & High-ROAS Performance Ads',
        description: 'Granular audience segmentation, creative testing loops, algorithmic bidding, and aggressive scaling across Meta (Facebook & Instagram) and Google Ads.',
      },
      {
        title: 'Technical SEO & Search Dominance',
        description: 'Core Web Vitals tuning, semantic schema markup, keyword cluster mapping, backlink authority building, and local SEO domination.',
      },
      {
        title: 'Conversion Rate Optimization (CRO) & Funnels',
        description: 'Heatmap analysis, A/B testing of value propositions, checkout friction removal, and high-velocity landing page design.',
      },
      {
        title: 'Full-Funnel Attribution & Analytics Architecture',
        description: 'Server-side Conversion API (CAPI) setup, Google Tag Manager, GA4 custom events, and revenue attribution modeling.',
      },
      {
        title: 'Retention & Email Automation Flows',
        description: 'Lifecycle email marketing, automated SMS win-back flows, and VIP customer retention sequences that maximize Lifetime Value (LTV).',
      },
    ],
    highlights: [
      { stat: '4.8x', label: 'Average Client ROAS' },
      { stat: '₹25Cr+', label: 'Managed Ad Spend' },
      { stat: '160+', label: 'Scaled E-Commerce & B2B Brands' },
    ],
    ctaText: 'Scale Ad Performance with Acton',
  },

  'tax-compliance-team': {
    slug: 'tax-compliance-team',
    name: 'Tax & Compliance Advisory Team',
    subsidiaryName: 'TSP & CO.',
    category: 'Tax & Corporate Financial Advisory',
    tagline: 'Corporate Tax Strategy, Timely GST Filing, Entity Structuring & Statutory Audit Governance.',
    shortDescription: 'GST Filings, Corporate Tax Advisory, Entity Incorporation, Trademark IP & Financial Audits.',
    overview: 'TSP & CO. by Avenza provides comprehensive corporate accounting, tax advisory, and regulatory compliance. We safeguard high-growth companies from legal exposure with meticulous GST filings, corporate tax planning, intellectual property protection, and statutory financial audits so founders and executives can expand without regulatory friction.',
    icon: Landmark,
    color: 'from-yellow-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Corporate Tax Strategy & GST Compliance',
        description: 'Monthly and annual GST returns, corporate tax structuring, input tax credit (ITC) reconciliation, and representation before tax authorities.',
      },
      {
        title: 'Company Registration & Entity Structuring',
        description: 'Private Limited incorporation, LLP formation, partnership agreements, and cross-border corporate structuring.',
      },
      {
        title: 'Financial Auditing, Balance Sheets & Reporting',
        description: 'Statutory audits, internal financial controls, quarterly MIS reports, and investor-ready balance sheet preparations.',
      },
      {
        title: 'Intellectual Property & Trademark Registration',
        description: 'Trademark filings, copyright protection, brand name defense, and licensing agreement reviews.',
      },
      {
        title: 'Contract Governance & Advertising Compliance',
        description: 'Influencer agreement vetting, agency-client contract frameworks, NDAs, and regulatory compliance advisory.',
      },
    ],
    highlights: [
      { stat: '1,000+', label: 'Compliant Enterprises' },
      { stat: '100%', label: 'Filing Accuracy Rate' },
      { stat: '18+', label: 'Years Combined Expertise' },
    ],
    ctaText: 'Schedule a Consultation with TSP & CO.',
  },
};

import { Sparkles, Code2, Megaphone, Target, Landmark, LucideIcon } from 'lucide-react';

export interface CompanyDetail {
  slug: string;
  name: string;
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
    category: 'Technology & AI Solutions',
    tagline: 'Building High-Performance Websites, Custom Software, AI Products & Digital Ecosystems.',
    shortDescription: 'Websites, Full-Stack Software, AI Solutions, Mobile Apps, UI/UX, Cloud & Automation.',
    overview: 'Our Tech & Website Engineering Team is the digital core of Avenza. We craft modern, lightning-fast web applications, mobile platforms, custom AI models, cloud architecture, and enterprise software. From responsive corporate websites to intelligent workflow automation, our engineering team brings technical precision and cutting-edge design to every project.',
    icon: Code2,
    color: 'from-blue-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Website & Web Application Development',
        description: 'Modern, responsive, ultra-fast websites and web applications engineered with React, Next.js, and cloud backends.',
      },
      {
        title: 'AI & Machine Learning Systems',
        description: 'Custom AI agents, automated workflow pipelines, NLP tools, and intelligent data systems.',
      },
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android delivering seamless user experiences.',
      },
      {
        title: 'UI/UX & Product Design',
        description: 'User-centered design systems, interactive prototypes, and conversion-optimized interfaces.',
      },
    ],
    highlights: [
      { stat: '120+', label: 'Websites & Apps Built' },
      { stat: '99.9%', label: 'System Uptime' },
      { stat: '25+', label: 'Engineering Specialists' },
    ],
    ctaText: 'Work with our Tech & Website Team',
  },

  'branding-team': {
    slug: 'branding-team',
    name: 'Branding & Events Team',
    category: 'Branding & Experiential',
    tagline: 'Creating Immersive Offline Brand Experiences, Corporate Summits & LED Activations.',
    shortDescription: 'Brand Activations, Corporate Events, MICE, Roadshows, Mall Campaigns, LED Displays.',
    overview: 'Our Branding & Events Team specializes in high-impact physical brand activations and experiential marketing. We connect brands with audiences through corporate summits, nationwide roadshows, mall campaigns, and dynamic LED promotional displays.',
    icon: Sparkles,
    color: 'from-amber-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Brand Activations & Mall Campaigns',
        description: 'Interactive physical brand touchpoints designed to boost recall and drive real-world engagement.',
      },
      {
        title: 'Corporate Events & MICE',
        description: 'Flawless execution for corporate conferences, trade exhibitions, and executive summits.',
      },
      {
        title: 'Roadshows & Experiential Tours',
        description: 'End-to-end mobile brand tours across target cities with live product demonstrations.',
      },
      {
        title: 'LED Promotions & Visual Displays',
        description: 'Dynamic LED displays, visual installations, and outdoor interactive media.',
      },
    ],
    highlights: [
      { stat: '500+', label: 'Events & Activations' },
      { stat: '50M+', label: 'Audience Impressions' },
      { stat: '98%', label: 'Client Approval' },
    ],
    ctaText: 'Plan an Event with Branding Team',
  },

  'digital-marketing-team': {
    slug: 'digital-marketing-team',
    name: 'Digital Marketing Team',
    category: 'Digital Marketing & Content',
    tagline: 'Scaling Brands through Creator Partnerships, Reel Strategy & Viral Content.',
    shortDescription: 'Content Strategy, Social Media Management, Creator Campaigns, Video Production.',
    overview: 'Our Digital Marketing Team powers social growth and creative media campaigns. By combining data-backed social strategy with a exclusive network of influencers and video editors, we help brands build authentic audience loyalty and dominate social channels.',
    icon: Megaphone,
    color: 'from-emerald-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Social Media Management & Growth',
        description: 'Editorial content planning, community management, and short-form video strategy.',
      },
      {
        title: 'Creator & Influencer Partnerships',
        description: 'Strategic brand collaborations with top models, actors, and digital content creators.',
      },
      {
        title: 'Video Production & Reel Editing',
        description: 'Cinematic commercials, viral social reels, and high-converting creative ad video assets.',
      },
      {
        title: 'Creative Campaign Direction',
        description: 'Full-service campaign concepts, scripting, production, and performance tracking.',
      },
    ],
    highlights: [
      { stat: '20M+', label: 'Monthly Views' },
      { stat: '50+', label: 'Influencer Network' },
      { stat: '300+', label: 'Viral Campaigns' },
    ],
    ctaText: 'Grow with Digital Marketing Team',
  },

  'performance-ads-team': {
    slug: 'performance-ads-team',
    name: 'Performance & Ads Team',
    category: 'Advertising & Performance',
    tagline: 'High-ROI Paid Advertising, SEO Domination & Customer Acquisition Engines.',
    shortDescription: 'Performance Ads (Meta/Google), SEO, Funnel Building, ROI Scaling.',
    overview: 'Our Performance & Ads Team is laser-focused on customer acquisition, ROAS (Return on Ad Spend), and organic search domination. We run data-driven paid advertising campaigns on Meta, Google, and programmatic channels backed by technical SEO.',
    icon: Target,
    color: 'from-purple-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Paid Media & Performance Ads',
        description: 'Meta Ads, Google PPC, targeted audience segmentation, and ROAS optimization.',
      },
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'Technical SEO audits, keyword ranking strategies, and organic lead acquisition.',
      },
      {
        title: 'Conversion Funnel Building',
        description: 'High-converting landing pages, sales funnels, and user journey optimization.',
      },
      {
        title: 'Growth Analytics & Attribution',
        description: 'Real-time campaign tracking, cohort analysis, and revenue attribution modeling.',
      },
    ],
    highlights: [
      { stat: '4.8x', label: 'Average ROAS' },
      { stat: '$10M+', label: 'Managed Ad Spend' },
      { stat: '150+', label: 'Scaled Brands' },
    ],
    ctaText: 'Scale Ads with Performance Team',
  },

  'tax-compliance-team': {
    slug: 'tax-compliance-team',
    name: 'Tax & Compliance Advisory Team',
    category: 'Tax & Financial Advisory',
    tagline: 'Stress-Free Corporate Tax, GST Filing, Legal Structuring & Financial Advisory.',
    shortDescription: 'GST Advisory, Income Tax, Business Registration, Financial Audit.',
    overview: 'Our Tax & Compliance Advisory Team delivers comprehensive financial, tax, and legal advisory. We handle GST filings, corporate registrations, income tax strategy, and audit readiness so businesses can operate with total compliance and confidence.',
    icon: Landmark,
    color: 'from-yellow-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'GST & Corporate Tax Advisory',
        description: 'Timely filing, GST compliance, tax planning, and statutory tax representation.',
      },
      {
        title: 'Company Registration & Compliance',
        description: 'Pvt Ltd, LLP, Partnership, and trademark registration services.',
      },
      {
        title: 'Financial Planning & Audit',
        description: 'Internal financial auditing, balance sheet preparation, and corporate financial consulting.',
      },
      {
        title: 'Legal Structuring & Risk Advisory',
        description: 'Statutory compliance management, contract reviews, and financial risk mitigation.',
      },
    ],
    highlights: [
      { stat: '1000+', label: 'Compliant Enterprises' },
      { stat: '100%', label: 'Filing Accuracy' },
      { stat: '15+', label: 'Years Expertise' },
    ],
    ctaText: 'Consult with Tax & Compliance Team',
  },
};

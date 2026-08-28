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
  'upgrade': {
    slug: 'upgrade',
    name: 'Upgrade',
    category: 'Branding & Experiential',
    tagline: 'Transforming Brand Presence into Unforgettable Physical & Digital Experiences.',
    shortDescription: 'Brand Activations, Corporate Events, MICE, Roadshows, Mall Campaigns, LED Promotions.',
    overview: 'Upgrade is Avenza’s flagship experiential marketing and brand activation division. We bridge the gap between brands and their audiences through immersive offline events, high-impact activations, nationwide roadshows, and cutting-edge LED promotional spectacles. From corporate summits to massive public consumer interactions, Upgrade delivers flawless execution and unforgettable engagement.',
    icon: Sparkles,
    color: 'from-amber-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Brand Activations & Mall Campaigns',
        description: 'Engaging consumer touchpoints designed to boost recall, drive trials, and turn audience curiosity into brand loyalty.',
      },
      {
        title: 'Corporate Events & MICE',
        description: 'Seamless execution for high-profile meetings, incentive trips, conventions, and corporate exhibitions.',
      },
      {
        title: 'Roadshows & Experiential Tours',
        description: 'End-to-end mobile brand tours across key target demographics with live demonstrations and real-time interaction.',
      },
      {
        title: 'Digital & LED Promotions',
        description: 'Next-generation visual displays, dynamic LED installations, and interactive digital signage.',
      },
    ],
    highlights: [
      { stat: '500+', label: 'Events Executed' },
      { stat: '50M+', label: 'Audience Reach' },
      { stat: '98%', label: 'Client Satisfaction' },
    ],
    ctaText: 'Launch an Event with Upgrade',
  },

  'axoweb-technologies': {
    slug: 'axoweb-technologies',
    name: 'Axoweb Technologies',
    category: 'Technology & AI Solutions',
    tagline: 'Building High-Performance Software, AI Products & Digital Ecosystems.',
    shortDescription: 'Software, AI, Apps, Websites, UI/UX, Cloud, Automation.',
    overview: 'Axoweb Technologies is the engineering engine of Avenza. We craft modern, scalable web applications, mobile platforms, custom AI models, cloud architecture, and enterprise software. Whether engineering sophisticated user interfaces or automating complex business workflows, Axoweb turns bold ideas into resilient technology solutions.',
    icon: Code2,
    color: 'from-blue-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Full-Stack Software Engineering',
        description: 'Robust, modern web applications built using React, Next.js, Node.js, and cloud-native architecture.',
      },
      {
        title: 'AI & Machine Learning Integration',
        description: 'Custom intelligent agents, automated workflows, NLP tools, and predictive data systems.',
      },
      {
        title: 'Mobile App Development',
        description: 'Cross-platform iOS and Android applications delivering silky smooth user experiences.',
      },
      {
        title: 'UI/UX & Product Design',
        description: 'User-centered visual systems, interactive wireframes, and design languages tailored for maximum conversion.',
      },
    ],
    highlights: [
      { stat: '120+', label: 'Digital Products Built' },
      { stat: '99.9%', label: 'Uptime Reliability' },
      { stat: '25+', label: 'Tech Specialist Team' },
    ],
    ctaText: 'Build Your Tech with Axoweb',
  },

  'thomas-astle': {
    slug: 'thomas-astle',
    name: 'Thomas Astle',
    tagline: 'Scaling Brands through Creator Partnerships & Viral Content Strategy.',
    category: 'Digital Marketing & Talent',
    shortDescription: 'Content Strategy, Social Media, Creative Campaigns, Influencer Marketing, Video Editing.',
    overview: 'Thomas Astle is Avenza’s media powerhouse, managing elite creators and crafting viral digital campaigns. By pairing data-backed content strategy with a premium roster of influencers across fashion, acting, lifestyle, and entertainment, Thomas Astle helps brands dominate social algorithms and build authentic community affinity.',
    icon: Megaphone,
    color: 'from-emerald-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Influencer Talent Management',
        description: 'Curating strategic brand partnerships with leading actors, models, and digital content creators.',
      },
      {
        title: 'Content Strategy & Social Growth',
        description: 'Data-driven editorial calendars, trend forecasting, and high-impact reel/short video production.',
      },
      {
        title: 'Video Production & Editing',
        description: 'Cinematic commercials, social reels, product showcases, and high-converting creative ad assets.',
      },
      {
        title: 'Creative Campaign Direction',
        description: 'End-to-end campaign concepts, scripting, casting, shooting, and performance tracking.',
      },
    ],
    highlights: [
      { stat: '20M+', label: 'Monthly Social Views' },
      { stat: '50+', label: 'Exclusive Talent Roster' },
      { stat: '300+', label: 'Successful Campaigns' },
    ],
    ctaText: 'Partner with Thomas Astle',
  },

  'acton-creations': {
    slug: 'acton-creations',
    name: 'Acton Creations',
    category: 'Advertising & Performance',
    tagline: 'High-ROI Performance Marketing, PPC Ads & Strategic Brand Growth.',
    shortDescription: 'Performance Marketing, SEO, Paid Ads, Brand Growth, Campaign Management.',
    overview: 'Acton Creations is a precision ad agency hyper-focused on customer acquisition, return on ad spend (ROAS), and organic search domination. We construct data-informed paid advertising funnels across Meta, Google, and LinkedIn while elevating brand rankings with targeted SEO.',
    icon: Target,
    color: 'from-purple-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'Performance Paid Ads (Meta & Google)',
        description: 'Targeted media buying, direct-response ad copy, multivariate testing, and ROAS optimization.',
      },
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'Comprehensive technical SEO, keyword authority strategies, and organic lead acquisition.',
      },
      {
        title: 'Funnel Building & Conversion Optimization',
        description: 'High-converting landing pages, A/B testing, and user journey optimization.',
      },
      {
        title: 'Brand Growth Strategy',
        description: 'Multi-channel acquisition strategies tailored for scale-ups and enterprise brands.',
      },
    ],
    highlights: [
      { stat: '4.8x', label: 'Average ROAS' },
      { stat: '$10M+', label: 'Ad Spend Managed' },
      { stat: '150+', label: 'Active Growth Clients' },
    ],
    ctaText: 'Scale Campaigns with Acton',
  },

  'tsp-and-co': {
    slug: 'tsp-and-co',
    name: 'TSP & CO.',
    category: 'Tax & Compliance Advisory',
    tagline: 'Comprehensive Financial Advisory, Corporate Compliance & GST Management.',
    shortDescription: 'GST, Income Tax, Business Registration, Financial Advisory.',
    overview: 'TSP & CO. provides trusted tax, legal, and regulatory compliance consulting to startups, enterprises, and high-net-worth individuals. Our team of certified financial experts handles GST filings, corporate registration, tax planning, and audit services so you can focus entirely on growing your core business.',
    icon: Landmark,
    color: 'from-yellow-500/20 via-avenza-surface to-avenza-surface-light',
    services: [
      {
        title: 'GST & Corporate Tax Advisory',
        description: 'Timely filing, structure optimization, tax planning, and compliance audits.',
      },
      {
        title: 'Business Registration & Incorporation',
        description: 'Private Limited, LLP, Partnership, and trademark registration services.',
      },
      {
        title: 'Financial Planning & Audit',
        description: 'Internal financial audits, cash flow projections, and investor-ready reporting.',
      },
      {
        title: 'Legal & Regulatory Compliance',
        description: 'Ongoing statutory compliance, contract drafting, and regulatory guidance.',
      },
    ],
    highlights: [
      { stat: '1000+', label: 'Businesses Compliant' },
      { stat: '100%', label: 'Filing Accuracy' },
      { stat: '15+', label: 'Years Combined Expertise' },
    ],
    ctaText: 'Consult with TSP & CO.',
  },
};

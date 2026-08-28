import diVyasaravananPhoto from '../../assets/di_vyasaravanan.png';
import riyaThiyagarajanPhoto from '../../assets/riya_thiyagarajan.png';
import dhivyaDuraisamyPhoto from '../../assets/dhivya_duraisamy.png';
import iconicveroPhoto from '../../assets/iconicvero.png';
import sarangiShyamPhoto from '../../assets/sarangi_shyam.png';
import magiModelPhoto from '../../assets/magi_model.png';
import thamizhselviPhoto from '../../assets/thamizhselvi.png';
import ishwaryaIshupandaPhoto from '../../assets/ishwarya_ishupanda.png';

export interface Influencer {
  id: string;
  name: string;
  handle: string;
  instagramUrl: string;
  category: 'Fashion & Lifestyle' | 'Acting & Media' | 'Modeling' | 'Digital Creator' | 'Fitness & Wellness';
  bio: string;
  image: string;
}

export const influencers: Influencer[] = [
  {
    id: 'di-vyasaravanan',
    name: 'Divya Saravanan',
    handle: 'di.vyasaravanan',
    instagramUrl: 'https://www.instagram.com/di.vyasaravanan',
    category: 'Fashion & Lifestyle',
    bio: 'Fashion, aesthetic lifestyle content & brand collaborations.',
    image: diVyasaravananPhoto,
  },
  {
    id: 'dhivya-duraisamy',
    name: 'Dhivya Duraisamy',
    handle: 'dhivya__duraisamy',
    instagramUrl: 'https://www.instagram.com/dhivya__duraisamy',
    category: 'Acting & Media',
    bio: 'Actor, news presenter & popular media personality.',
    image: dhivyaDuraisamyPhoto,
  },
  {
    id: 'riya-thiyagarajan',
    name: 'Riya Thiyagarajan',
    handle: 'riya_thiyagarajan',
    instagramUrl: 'https://www.instagram.com/riya_thiyagarajan',
    category: 'Fashion & Lifestyle',
    bio: 'Lifestyle, travel & contemporary fashion creator.',
    image: riyaThiyagarajanPhoto,
  },
  {
    id: 'iconicvero',
    name: 'Iconic Vero',
    handle: '_iconicvero_',
    instagramUrl: 'https://www.instagram.com/_iconicvero_',
    category: 'Modeling',
    bio: 'High fashion model, runway artist & style influencer.',
    image: iconicveroPhoto,
  },
  {
    id: 'sarangi-shyam',
    name: 'Sarangi Shyam',
    handle: 'sarangi.shyam',
    instagramUrl: 'https://www.instagram.com/sarangi.shyam',
    category: 'Fashion & Lifestyle',
    bio: 'Beauty enthusiast, ethnic wear & lifestyle curator.',
    image: sarangiShyamPhoto,
  },
  {
    id: 'magi-model',
    name: 'Magi',
    handle: 'magi.model',
    instagramUrl: 'https://www.instagram.com/magi.model',
    category: 'Modeling',
    bio: 'Professional model, commercial campaigns & brand face.',
    image: magiModelPhoto,
  },
  {
    id: 'i-hiroshini',
    name: 'Hiroshini',
    handle: 'i_hiroshini',
    instagramUrl: 'https://www.instagram.com/i_hiroshini',
    category: 'Digital Creator',
    bio: 'Content creator, youth culture & trending reels.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'thamizhselvi',
    name: 'Thamizhselvi',
    handle: 'thamizhselvi_',
    instagramUrl: 'https://www.instagram.com/thamizhselvi_',
    category: 'Digital Creator',
    bio: 'Digital creator, ethnic lifestyle & brand promotions.',
    image: thamizhselviPhoto,
  },
  {
    id: 'ishwarya-ishupanda',
    name: 'Ishwarya (Ishu Panda)',
    handle: 'ishwarya_ishupanda',
    instagramUrl: 'https://www.instagram.com/ishwarya_ishupanda',
    category: 'Digital Creator',
    bio: 'Entertainment, comedic storytelling & lifestyle creator.',
    image: ishwaryaIshupandaPhoto,
  },
  {
    id: 'sahasraofficially',
    name: 'Sahasra',
    handle: 'sahasraofficially',
    instagramUrl: 'https://www.instagram.com/sahasraofficially',
    category: 'Acting & Media',
    bio: 'Media personality, television artist & digital creator.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'riyamanoj-official',
    name: 'Riya Manoj',
    handle: 'riyamanoj_official',
    instagramUrl: 'https://www.instagram.com/riyamanoj_official',
    category: 'Acting & Media',
    bio: 'Child artist, actor & youth media icon.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'a-c-h-u-5',
    name: 'Achu',
    handle: 'a.c.h.u._5',
    instagramUrl: 'https://www.instagram.com/a.c.h.u._5',
    category: 'Fitness & Wellness',
    bio: 'Fitness motivator, lifestyle creator & brand ambassador.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'actor-vaidee',
    name: 'Actor Vaidee',
    handle: 'actor_vaidee',
    instagramUrl: 'https://www.instagram.com/actor_vaidee',
    category: 'Acting & Media',
    bio: 'Film actor, theatre artist & video content creator.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'sivaranjanii',
    name: 'Sivaranjani',
    handle: 'sivaranjanii_',
    instagramUrl: 'https://www.instagram.com/sivaranjanii_',
    category: 'Fashion & Lifestyle',
    bio: 'Style enthusiast, beauty ambassador & lifestyle blogger.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'jishma-unnikrishnan',
    name: 'Jishma Unnikrishnan',
    handle: 'jishma_unnikrishnan',
    instagramUrl: 'https://www.instagram.com/jishma_unnikrishnan',
    category: 'Modeling',
    bio: 'Fashion model, traditional & contemporary shoot model.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'iamswathiii',
    name: 'Swathi',
    handle: 'iamswathiii_',
    instagramUrl: 'https://www.instagram.com/iamswathiii_',
    category: 'Fashion & Lifestyle',
    bio: 'Trendsetter, lifestyle content & brand partnerships.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'thefaceofabi',
    name: 'Abi (The Face of Abi)',
    handle: 'thefaceofabi',
    instagramUrl: 'https://www.instagram.com/thefaceofabi',
    category: 'Modeling',
    bio: 'Editorial model, brand face & aesthetic content creator.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'raveena-boopathi',
    name: 'Raveena Boopathi',
    handle: 'raveena_boopathi',
    instagramUrl: 'https://www.instagram.com/raveena_boopathi',
    category: 'Acting & Media',
    bio: 'Media anchor, television personality & content creator.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'divya-gowri',
    name: 'Divya Gowri',
    handle: 'divya_gowri_',
    instagramUrl: 'https://www.instagram.com/divya_gowri_',
    category: 'Fashion & Lifestyle',
    bio: 'Fashion vlogger, lifestyle & personal styling creator.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'pranavyaaa',
    name: 'Pranavya',
    handle: '_.pranavyaaa._',
    instagramUrl: 'https://www.instagram.com/_.pranavyaaa._',
    category: 'Digital Creator',
    bio: 'Gen-Z content creator, reel artist & fashion enthusiast.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'vasundhara-srinath',
    name: 'Vasundhara Srinath',
    handle: 'vasundhara_srinath',
    instagramUrl: 'https://www.instagram.com/vasundhara_srinath',
    category: 'Fashion & Lifestyle',
    bio: 'Luxury lifestyle, fine jewelry & high-end brand ambassador.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'sushmitha',
    name: 'Sushmitha',
    handle: 'iam._sushmitha._',
    instagramUrl: 'https://www.instagram.com/iam._sushmitha._',
    category: 'Digital Creator',
    bio: 'Creative influencer, aesthetic visuals & lifestyle creator.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
  },
];

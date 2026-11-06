
import {
  Volume2,
  Music,
  Lightbulb,
  Tv,
  Flame,
  Box,
  Heart,
  Building2,
  Cpu,
  ShieldCheck,
  Sliders,
  Layers,
  Zap,
  CheckCircle2
} from 'lucide-react';

// ==========================================
// EVENT VIBE THEMES
// ==========================================

export const VIBE_THEMES = {
  concert: {
    id: 'concert',
    name: 'Concert Gold & Fire',
    bgGlow: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    badge: 'CONCERT LIVE MODE',
    tagline: 'Powerful Sound, Dynamic Lighting & Stage Production'
  },

  wedding: {
    id: 'wedding',
    name: 'Royal Wedding Luxury',
    bgGlow: 'from-amber-300/20 via-orange-400/10 to-transparent',
    accentColor: 'text-amber-300',
    borderColor: 'border-amber-300/40',
    badge: 'ROYAL WEDDING MODE',
    tagline: 'Elegant Ambience, Beautiful Lighting & Grand Celebrations'
  },

  djnight: {
    id: 'djnight',
    name: 'EDM & DJ Night',
    bgGlow: 'from-purple-600/20 via-pink-500/10 to-transparent',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    badge: 'DJ & EDM NIGHT MODE',
    tagline: 'High-Energy DJ Setup, Sound & Synchronized Lighting'
  },

  corporate: {
    id: 'corporate',
    name: 'Corporate Summit',
    bgGlow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    badge: 'CORPORATE GALA MODE',
    tagline: 'Professional Audio, Visual Displays & Event Coordination'
  }
};


// ==========================================
// SERVICES DATA
// ==========================================

export const SERVICES_DATA = [
  {
    id: 'sound-systems',
    icon: Volume2,
    title: 'Professional Sound Systems',
    tagline: 'Powerful Audio & Balanced Sound Experience',

    shortDesc:
      'Professional sound solutions for weddings, concerts, DJ nights, corporate events and celebrations of every scale.',

    fullDesc:
      'Make every moment sound exceptional with professionally planned sound arrangements. From intimate gatherings to large outdoor events, we help create a suitable audio setup based on your venue, audience size and event requirements.',

    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'Professional sound system arrangements',
      'Speaker and subwoofer setup options',
      'Digital audio mixing and sound control',
      'Wireless microphone arrangements',
      'Audio monitoring for live performances',
      'Sound planning according to venue size'
    ]
  },

  {
    id: 'dj-setup',
    icon: Music,
    title: 'DJ & Club Rig Production',
    tagline: 'Dynamic DJ Setup & High-Energy Music Experience',

    shortDesc:
      'Create an energetic atmosphere with DJ setups, performance arrangements, stage monitors and synchronized lighting.',

    fullDesc:
      'Give your celebration the energy it deserves. We arrange DJ setups for wedding sangeet functions, private parties, club-style events, college festivals and music celebrations. The setup can be planned according to the artist, venue and event requirements.',

    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'DJ console and player setup options',
      'Professional DJ mixer arrangements',
      'DJ booth and stage presentation',
      'Performance monitoring arrangements',
      'DJ-focused lighting setup',
      'Music and event-based setup planning'
    ]
  },

  {
    id: 'stage-lighting',
    icon: Lightbulb,
    title: 'Intelligent Stage Lighting',
    tagline: 'Creative Lighting Design & Visual Effects',

    shortDesc:
      'Transform your venue with moving lights, LED fixtures, stage spotlights and customized lighting arrangements.',

    fullDesc:
      'Lighting plays an important role in creating the atmosphere of an event. We plan stage lighting, ambient lighting, moving light effects and venue illumination according to your event theme, stage design and venue requirements.',

    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'Moving head lighting arrangements',
      'LED PAR and wash lighting options',
      'Stage spotlight arrangements',
      'DMX-based lighting control options',
      'Venue and architectural uplighting',
      'Customized lighting effects and sequences'
    ]
  },

  {
    id: 'led-wall',
    icon: Tv,
    title: 'LED Video Walls & Visuals',
    tagline: 'Big Screens, Bright Visuals & Event Displays',

    shortDesc:
      'Indoor and outdoor LED screen arrangements for stage backdrops, live visuals, presentations and event branding.',

    fullDesc:
      'Make your event visually engaging with LED video wall arrangements. Whether you need a stage backdrop, presentation display, live camera visuals or customized event content, we help plan a suitable screen setup for your venue.',

    image:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'Indoor LED screen arrangements',
      'Outdoor LED screen arrangements',
      'Stage backdrop display solutions',
      'Presentation and video playback support',
      'Live camera display integration options',
      'Screen size and placement planning'
    ]
  },

  {
    id: 'special-fx',
    icon: Flame,
    title: 'Laser & Special FX Production',
    tagline: 'Create Memorable Moments with Visual Effects',

    shortDesc:
      'Enhance grand entrances, performances and celebrations with suitable special effects and visual experiences.',

    fullDesc:
      'Add excitement to your event with special effects planned around important moments. From grand entrances and stage performances to celebrations and reveals, available effects can be selected according to the venue and event requirements. All effects are subject to venue permissions and applicable safety requirements.',

    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'Cold spark effect arrangements',
      'Low fog and atmospheric effects',
      'CO2 effect options',
      'Laser visual effects',
      'Confetti and streamer effects',
      'Effect planning according to venue permissions'
    ]
  },

  {
    id: 'truss-structure',
    icon: Box,
    title: 'Aluminium Truss & Stage Rigging',
    tagline: 'Stage Structures Designed for Your Event',

    shortDesc:
      'Stage structures, truss arrangements, lighting support and customized stage layouts for different event formats.',

    fullDesc:
      'The right stage structure creates the foundation for a successful event setup. We plan stage platforms, truss arrangements and equipment positioning according to the venue layout, event design and production requirements. Structural arrangements should be finalized with suitable safety assessment and installation practices.',

    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'Aluminium truss arrangement options',
      'Stage platform setup',
      'Lighting support structures',
      'Custom stage layouts',
      'Stage risers and access arrangements',
      'Venue-based structural planning'
    ]
  },

  {
    id: 'royal-wedding',
    icon: Heart,
    title: 'Wedding & Royal Reception Setup',
    tagline: 'Make Your Special Day Truly Unforgettable',

    shortDesc:
      'Wedding production arrangements covering Sangeet, Varmala, reception, Mandap lighting and grand celebrations.',

    fullDesc:
      'Every wedding deserves a memorable atmosphere. We help bring your celebration together with sound, lighting, stage arrangements and visual elements. From elegant wedding functions to energetic Sangeet nights and grand receptions, the setup is planned around your preferences and venue.',

    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'Wedding stage and backdrop arrangements',
      'Sangeet sound and lighting setup',
      'Varmala stage and entrance arrangements',
      'Ambient and decorative lighting',
      'LED screen and visual backdrop options',
      'Baraat sound arrangements'
    ]
  },

  {
    id: 'corporate-event',
    icon: Building2,
    title: 'Corporate Event Production',
    tagline: 'Professional Setup for Business Events',

    shortDesc:
      'Event production arrangements for conferences, seminars, product launches, award ceremonies and corporate gatherings.',

    fullDesc:
      'Professional presentation requires proper planning and coordination. We help arrange sound, microphones, stage lighting, LED displays and other event production requirements for corporate gatherings, conferences, seminars and launches.',

    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',

    specs: [
      'Podium and wireless microphone arrangements',
      'Conference and seminar sound setup',
      'Speaker and stage lighting',
      'LED presentation display options',
      'Event branding and visual arrangements',
      'Live camera and streaming support options'
    ]
  }
];


// ==========================================
// EVENTS WE COVER
// ==========================================

export const EVENTS_COVERED = [
  {
    title: 'Weddings & Receptions',
    desc:
      'Beautiful wedding stages, Sangeet arrangements, Varmala setups and elegant event lighting.',

    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },

  {
    title: 'Live Concerts & Festivals',
    desc:
      'Event sound, stage lighting, LED displays and production arrangements for live performances.',

    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800'
  },

  {
    title: 'DJ Nights & EDM Shows',
    desc:
      'DJ setups, energetic lighting effects and visual arrangements for music events.',

    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  },

  {
    title: 'Corporate Galas & Launches',
    desc:
      'Professional sound, presentation screens, stage lighting and corporate event arrangements.',

    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },

  {
    title: 'College Festivals',
    desc:
      'Stage production, DJ arrangements, sound systems and lighting for college celebrations.',

    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800'
  },

  {
    title: 'Cultural Programs',
    desc:
      'Sound, stage and lighting arrangements for cultural, traditional and live performances.',

    image:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=800'
  }
];


// ==========================================
// GALLERY IMAGES
// Replace stock images with actual event photos
// when available.
// ==========================================

export const GALLERY_IMAGES = [
  {
    id: 1,
    category: 'concerts',
    title: 'Live Concert Stage',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
    desc:
      'A live music event atmosphere with stage lighting and concert production.'
  },

  {
    id: 2,
    category: 'weddings',
    title: 'Royal Wedding Celebration',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    desc:
      'An elegant wedding celebration with beautiful stage and venue arrangements.'
  },

  {
    id: 3,
    category: 'djnights',
    title: 'DJ Night Experience',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
    desc:
      'A high-energy DJ event with music, lighting and an energetic atmosphere.'
  },

  {
    id: 4,
    category: 'corporate',
    title: 'Corporate Event Setup',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    desc:
      'A professional corporate gathering with stage and presentation arrangements.'
  },

  {
    id: 5,
    category: 'concerts',
    title: 'Stage Lighting Experience',
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200',
    desc:
      'A dynamic live event atmosphere with stage lighting and visual effects.'
  },

  {
    id: 6,
    category: 'weddings',
    title: 'Wedding Celebration Lighting',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200',
    desc:
      'A celebration atmosphere with lighting and visual effects.'
  }
];


// ==========================================
// WHY CHOOSE US
// ==========================================

export const WHY_CHOOSE_US = [
  {
    icon: Cpu,
    title: 'Event-Focused Solutions',
    desc:
      'We plan sound, lighting and visual arrangements according to your event type, venue and audience requirements.'
  },

  {
    icon: ShieldCheck,
    title: 'Careful Setup Planning',
    desc:
      'We focus on proper equipment placement, setup coordination and practical planning for your event requirements.'
  },

  {
    icon: Sliders,
    title: 'Customized Sound & Lighting',
    desc:
      'Every event is different. We help select suitable sound and lighting arrangements based on your theme and expectations.'
  },

  {
    icon: Layers,
    title: 'Stage & Production Planning',
    desc:
      'From stage layout to truss and visual arrangements, we help bring different production elements together.'
  },

  {
    icon: Zap,
    title: 'Coordinated Event Execution',
    desc:
      'Our focus is on coordinating the planned production requirements throughout the event setup and execution.'
  },

  {
    icon: CheckCircle2,
    title: 'Complete Event Solutions',
    desc:
      'Sound, lighting, LED displays, stage arrangements and event production solutions under one roof.'
  }
];


// ==========================================
// BUSINESS CONTACT DETAILS
// ==========================================

export const BUSINESS_DETAILS = {
  name: 'Shree Ganesh Sound & Light',
  owner: 'Lucky Shriwas',
  phone: '+91 7000389061',
  phoneRaw: '7000389061',
  whatsappNumber: '917000389061',
  city: 'Indore',
  state: 'Madhya Pradesh',
  country: 'India'
};


// ==========================================
// WHATSAPP LINK GENERATOR
// ==========================================

export const generateWhatsAppLink = (customText) => {
  const phone = BUSINESS_DETAILS.whatsappNumber;

  const defaultMessage =
    'Hello Shree Ganesh Sound & Light team! I would like to inquire about sound, lighting and event production services for my upcoming event.';

  const message = customText || defaultMessage;
  const encodedText = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedText}`;
};


// ==========================================
// DEFAULT EXPORT
// ==========================================

const websiteData = {
  VIBE_THEMES,
  SERVICES_DATA,
  EVENTS_COVERED,
  GALLERY_IMAGES,
  WHY_CHOOSE_US,
  BUSINESS_DETAILS,
  generateWhatsAppLink
};

export default websiteData;

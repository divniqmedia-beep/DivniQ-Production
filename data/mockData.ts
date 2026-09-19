/**
 * Typed content constants for Divniq Productions.
 * Mapped from content brief sections 04–15 and 17–21.
 *
 * `content-brief.md` was not present in the workspace at scaffold time.
 * Values follow DivniQ Creative Media Studio public offerings and the
 * productions positioning ("Where Stories Take Flight").
 */

export type CapabilityItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  items: string[];
  href: string;
  image: string;
};

export type ServiceItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  subServices: string[];
  href: string;
};

export type DifferenceTrait = {
  id: string;
  title: string;
  description: string;
};

export type DifferenceContent = {
  kicker: string;
  headingLead: string;
  headingAccent: string;
  traits: DifferenceTrait[];
};

export type IndustryItem = {
  id: string;
  name: string;
  description: string;
};

export type AgencyPartnershipContent = {
  kicker: string;
  headingLead: string;
  headingAccent: string;
  body: string;
  rolesHeading: string;
  roles: string[];
  cta: CtaItem;
};

export type TechnologyFeature = {
  id: string;
  title: string;
  description: string;
};

export type TechnologyContent = {
  kicker: string;
  headingLead: string;
  headingAccent: string;
  body: string;
  networkTitle: string;
  networkBody: string;
  features: TechnologyFeature[];
};

export type PortfolioKind = "film" | "photography" | "events";

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: string;
  kind: PortfolioKind;
  year: string;
  location: string;
  description: string;
  thumbnail: string;
};

export type CustomerSegment = {
  id: string;
  index: string;
  name: string;
  audiences: string[];
};

export type EngagementModel = {
  id: string;
  index: string;
  title: string;
  cadence: string;
  description: string;
  value: string;
};

export type ProofStat = {
  id: string;
  from: number;
  to: number;
  decimals?: number;
  suffix: string;
  label: string;
  detail: string;
};

export type FooterContent = {
  headlineLead: string;
  headlineAccent: string;
  wordmark: string;
  links: CtaItem[];
  socials: CtaItem[];
  legal: CtaItem[];
  email: string;
  location: string;
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type CtaItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  kicker: string;
  heading: string;
  headingLines: [string, string];
  mark: string;
  subtitle: string;
  body: string;
  services: string[];
  primaryCta: CtaItem;
  secondaryCta: CtaItem;
  videoSrc: string;
  posterSrc: string;
};

export type IntroContent = {
  kicker: string;
  headingLead: string;
  headingAccent: string;
  body: string;
  capabilities: string[];
};

export type EcosystemIcon =
  | "video"
  | "camera"
  | "smartphone"
  | "sparkles"
  | "megaphone"
  | "library";

export type EcosystemStep = {
  id: string;
  index: string;
  title: string;
  icon: EcosystemIcon;
  outputs: string[];
};

export type ContentEcosystemContent = {
  kicker: string;
  headingLead: string;
  headingAccent: string;
  body: string;
  originLabel: string;
  steps: EcosystemStep[];
};

export type SpecializedNiche = {
  id: string;
  index: string;
  title: string;
  titleLines: [string, string];
  body: string;
  usp: string;
  deliverables: string[];
  cta: CtaItem;
};

export type SpecializedMediaContent = {
  kicker: string;
  niches: SpecializedNiche[];
};

export type AboutValue = {
  id: string;
  title: string;
  description: string;
};

export type AboutPageContent = {
  hero: {
    kicker: string;
    headingLines: [string, string];
    subtitle: string;
  };
  about: {
    kicker: string;
    heading: string;
    body: string;
  };
  vision: {
    kicker: string;
    headingLead: string;
    headingAccent: string;
    body: string;
  };
  values: {
    kicker: string;
    heading: string;
    items: AboutValue[];
  };
};

export type ServiceDirectoryItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type ServicePageContent = {
  hero: {
    kicker: string;
    headingLines: [string, string];
    subtitle: string;
  };
  directory: ServiceDirectoryItem[];
};

export type PoliticalPipelineIcon =
  | "plan"
  | "deploy"
  | "shoot"
  | "edit"
  | "repurpose"
  | "deliver";

export type PoliticalPipelineStep = {
  id: string;
  title: string;
  description: string;
  icon: PoliticalPipelineIcon;
};

export type PoliticalPageContent = {
  hero: {
    kicker: string;
    headingLines: [string, string];
    subtitle: string;
    cta: CtaItem;
  };
  services: {
    kicker: string;
    heading: string;
    items: string[];
  };
  model: {
    kicker: string;
    headingLead: string;
    headingAccent: string;
    body: string;
    steps: PoliticalPipelineStep[];
  };
};

export type ServiceDirectoryGroup = {
  id: string;
  index: string;
  title: string;
  description: string;
  services: string[];
};

/** Brand — core capabilities */
export const coreCapabilities = [
  "Film & Video Production",
  "Professional Photography",
  "Reels & Short-Form Content",
  "Political Media & Campaign Production",
  "Event Media Production",
  "Digital Content Production",
  "Post Production",
  "Live Production",
] as const;

/** Home — core capabilities bento */
export const capabilitiesGrid: CapabilityItem[] = [
  {
    id: "film-video",
    index: "01",
    title: "FILM & VIDEO",
    description: "Brand films, campaign spots, and directed cinema from concept through grade.",
    items: ["Corporate", "Promo", "Institutional", "Campaign"],
    href: "/services#film-video",
    image:
      "https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=1332&auto=format&fit=crop",
  },
  {
    id: "photography",
    index: "02",
    title: "PHOTOGRAPHY",
    description: "Sharp stills for brands, campaigns, real estate, and live moments.",
    items: ["Corporate", "Political", "Real Estate", "Event"],
    href: "/services#photography",
    image:
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "reels-short-form",
    index: "03",
    title: "REELS & SHORT-FORM",
    description: "One shoot packaged into a high-volume short-form content engine.",
    items: ["1 Shoot → 30–50 Videos"],
    href: "/services#reels-short-form",
    image:
      "https://images.unsplash.com/photo-1530712024539-ecd73dfb1c9d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "political-media",
    index: "04",
    title: "POLITICAL MEDIA",
    description: "Rapid-turn coverage and edits built for the pace of the campaign trail.",
    items: ["Rapid editing", "Rally coverage"],
    href: "/political-media",
    image:
      "https://images.unsplash.com/photo-1759659334772-c3a05b8178e9?q=80&w=1074&auto=format&fit=crop",
  },
  {
    id: "event-media",
    index: "05",
    title: "EVENT MEDIA",
    description: "Full event capture through aftermovies that keep the energy alive.",
    items: ["Complete event coverage", "Aftermovies"],
    href: "/services#event-media",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "digital-content",
    index: "06",
    title: "DIGITAL CONTENT",
    description: "Ongoing founder and brand content on retainers that stay on-brief.",
    items: ["Monthly retainers", "Founder content"],
    href: "/services#digital-content",
    image:
      "https://plus.unsplash.com/premium_photo-1684017834245-f714094ca936?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "specialized",
    index: "07",
    title: "SPECIALIZED",
    description: "Drone, multi-cam, live streaming, and FPV for complex productions.",
    items: ["Drone", "Multi-cam", "Live Streaming", "FPV"],
    href: "/services#specialized",
    image:
      "https://images.unsplash.com/photo-1541943201372-99066ec6a5c5?q=80&w=687&auto=format&fit=crop",
  },
];

/** Brand — production philosophy */
export const philosophy = ["SHOOT", "PRODUCE", "EDIT", "PUBLISH", "AMPLIFY"] as const;

/** Home — philosophy / process list (Lyniq-style) */
export const philosophyProcess = {
  heading: "Our process",
  body: "Our five-step process keeps you informed and involved at every stage — from the first frame on set to the last publish and amplify pass.",
  cta: { label: "Schedule a consultation", href: "/contact" },
  steps: [
    {
      id: "shoot",
      step: "01",
      title: "Shoot",
      description:
        "On-set direction, lighting, and performance held to one visual standard before a cut begins.",
    },
    {
      id: "produce",
      step: "02",
      title: "Produce",
      description:
        "Crews, kit, and schedule run as one production engine — cinema craft at the speed of the brief.",
    },
    {
      id: "edit",
      step: "03",
      title: "Edit",
      description:
        "Picture, motion, color, and sound find their finish so every deliverable shares one look.",
    },
    {
      id: "publish",
      step: "04",
      title: "Publish",
      description:
        "Platform-ready cutdowns and packages, delivered on time for the channels that matter.",
    },
    {
      id: "amplify",
      step: "05",
      title: "Amplify",
      description:
        "Asset libraries and follow-through that keep the story working long after launch day.",
    },
  ] satisfies ProcessStep[],
} as const;

/** Brand — target customers */
export const targetCustomers = [
  "Political",
  "Corporate",
  "Commercial",
  "Experiences",
  "Digital",
  "Agencies",
] as const;

export const customerSegments: CustomerSegment[] = [
  {
    id: "political",
    index: "01",
    name: "POLITICAL",
    audiences: ["Candidates", "Parties", "Campaign cells", "War rooms"],
  },
  {
    id: "corporate",
    index: "02",
    name: "CORPORATE",
    audiences: ["Leadership", "Internal", "Employer brand", "IR"],
  },
  {
    id: "commercial",
    index: "03",
    name: "COMMERCIAL",
    audiences: ["Product", "Retail", "Automotive", "Fashion"],
  },
  {
    id: "experiences",
    index: "04",
    name: "EXPERIENCES",
    audiences: ["Launches", "Hospitality", "Conferences", "Live nights"],
  },
  {
    id: "digital",
    index: "05",
    name: "DIGITAL",
    audiences: ["Founders", "Platforms", "Startups", "Social-native"],
  },
  {
    id: "agencies",
    index: "06",
    name: "AGENCIES",
    audiences: ["Creative", "Media", "PR", "Brand"],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    id: "project",
    index: "01",
    title: "PROJECT BASED",
    cadence: "One-time production projects",
    description: "A single film, stills set, or package — quoted, shot, and delivered to a locked brief.",
    value: "₹50,000 — ₹5,00,000+",
  },
  {
    id: "retainer",
    index: "02",
    title: "MONTHLY RETAINERS",
    cadence: "Continuous content production",
    description: "A standing content engine. Crew on call, a library that compounds, no re-brief every month.",
    value: "₹50,000 — ₹5,00,000+ /month",
  },
  {
    id: "event",
    index: "03",
    title: "EVENT BASED",
    cadence: "Fixed production packages",
    description: "Coverage, recap, and aftermovie for rooms that only happen once.",
    value: "Photo + Video + Reels + Aftermovie",
  },
  {
    id: "campaign",
    index: "04",
    title: "CAMPAIGN BASED",
    cadence: "Large-scale campaign contracts",
    description: "Multi-week political or brand bursts with a same-day publish loop.",
    value: "30-Day / 90-Day / Election Campaign",
  },
];

/** Homepage — Lyniq-style proof strip */
export const proofStats: ProofStat[] = [
  {
    id: "websites",
    from: 11,
    to: 17,
    suffix: "+",
    label: "Websites launched",
    detail: "Helping brands make their mark online.",
  },
  {
    id: "users",
    from: 0.1,
    to: 1.5,
    decimals: 1,
    suffix: "M+",
    label: "Users reached",
    detail: "Our work engages audiences globally.",
  },
  {
    id: "satisfaction",
    from: 19,
    to: 92,
    suffix: "%",
    label: "Client satisfaction rate",
    detail: "Long-term partnerships through proven results.",
  },
  {
    id: "years",
    from: 5,
    to: 10,
    suffix: "+",
    label: "Years of expertise",
    detail: "Delivering impactful production solutions.",
  },
];

/** Homepage — closing CTA */
export const closingCta = {
  kicker: "Start a project",
  headingLead: "TELL US WHAT YOU’RE",
  headingAccent: "PRODUCING.",
  body: "Briefs, campaigns, events, retainers — one production partner from the first frame to the last delivery.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "View Services", href: "/services" },
} as const;

/** Homepage — FAQ */
export const faqContent = {
  heading: "FAQ",
  body: "We've heard it all. Here's everything you need to know before working with us.",
  cta: { label: "Ask a question", href: "/contact" },
  items: [
    {
      id: "process",
      question: "What's your process for producing a new film or campaign?",
      answer:
        "We start by locking the brief, story, and shot list, then move through shoot, produce, edit, publish, and amplify — with checkpoints so you're never waiting on a black box.",
    },
    {
      id: "changes",
      question: "What if I need changes or extra cutdowns after delivery?",
      answer:
        "We design packages with revisions in mind and can add cutdowns, platform variants, or follow-up stills as scoped change orders or under a monthly retainer.",
    },
    {
      id: "retainers",
      question: "Do you offer ongoing content retainers?",
      answer:
        "Yes. Monthly retainers keep crew, kit, and a compounding asset library on call — so you're not re-briefing a new vendor every cycle.",
    },
    {
      id: "timeline",
      question: "How long does a typical project take from brief to delivery?",
      answer:
        "Timelines depend on scope. A focused film or stills set can turn in days to a few weeks; multi-week campaigns and events are scheduled against your publish calendar.",
    },
    {
      id: "formats",
      question: "Can you deliver for every platform from one shoot?",
      answer:
        "That's the default. One shoot becomes a library of masters, cutdowns, verticals, and stills packaged for the channels you need.",
    },
  ],
} as const;

/** Brand — grouped services directory */
export const servicesDirectory: ServiceDirectoryGroup[] = [
  {
    id: "film-video",
    index: "01",
    title: "Film & Video",
    description:
      "Brand films, campaign spots, and long-form directed as cinema — concept through grade, held to one look.",
    services: [
      "Corporate films",
      "Promo films",
      "Institutional films",
      "Campaign spots",
      "Brand films & teasers",
      "Leadership films",
      "Spatial / luxury walkthroughs",
      "Documentary & long-form",
    ],
  },
  {
    id: "photography",
    index: "02",
    title: "Photography",
    description:
      "Stills pulled with the same light as the film. Campaign, product, portrait, and reportage that live next to the moving image.",
    services: [
      "Corporate stills",
      "Political stills",
      "Real estate",
      "Event photography",
      "Portrait & leadership",
      "Product & texture",
      "BTS and reportage",
    ],
  },
  {
    id: "reels-short-form",
    index: "03",
    title: "Reels & Short-Form",
    description:
      "Hook-led cuts native to the feed. One shoot scores 30–50 videos — 9:16, stories, series, and paid variants from the master.",
    services: [
      "1 shoot → 30–50 videos",
      "9:16 reels & hooks",
      "Stories & series formats",
      "Paid-social variants",
      "Launch-day bursts",
      "Platform-native ratios",
    ],
  },
  {
    id: "political-media",
    index: "04",
    title: "Political Media",
    description:
      "Campaign coverage that publishes while the moment is still the story — ground, war-room, and same-day cutdowns.",
    services: [
      "Rapid editing",
      "Rally coverage",
      "Leader photography",
      "Public meetings",
      "Rapid response",
      "War-room cutdowns",
      "Candidate profiles",
      "Manifesto films",
    ],
  },
  {
    id: "event-media",
    index: "05",
    title: "Event Media",
    description:
      "Conferences, launches, and nights that only happen once. Recaps, speaker cuts, and aftermovies ready before the room empties.",
    services: [
      "Complete event coverage",
      "Aftermovies",
      "Conference recaps",
      "Highlight films",
      "Speaker clips",
      "Photo sets",
      "Brand activation films",
    ],
  },
  {
    id: "digital-content",
    index: "06",
    title: "Digital Content",
    description:
      "Packaged digital content, retainers, and founder-led series — channel-native assets that travel with the film.",
    services: [
      "Monthly retainers",
      "Founder content",
      "Digital content packages",
      "Motion graphics",
      "Channel cutdowns",
      "Asset libraries",
    ],
  },
  {
    id: "specialized",
    index: "07",
    title: "Specialized",
    description:
      "The rooms beside the main unit — aerials, multi-cam, live, and FPV held to the same visual standard.",
    services: [
      "Drone",
      "Multi-cam",
      "Live streaming",
      "FPV",
      "Live-to-tape",
      "Aerial & second unit",
    ],
  },
];

export const heroContent: HeroContent = {
  kicker: "Divniq Productions",
  heading: "WHERE STORIES TAKE FLIGHT.",
  headingLines: ["WHERE STORIES", "TAKE FLIGHT."],
  mark: "",
  subtitle: "Production-First Media Company.",
  body: "We conceive, shoot, and finish cinematic work for brands, campaigns, and events. Your story deserves more than coverage — it needs production that lands.",
  services: [
    "Film & Video Production",
    "Photography",
    "Reels & Short-Form",
    "Political Media",
  ],
  primaryCta: { label: "Start a Project", href: "/#contact" },
  secondaryCta: { label: "View Capabilities", href: "/#capabilities" },
  videoSrc:
    "https://cdn.pixabay.com/video/2019/07/11/25051-348037665_large.mp4",
  posterSrc:
    "https://images.unsplash.com/photo-1632187989763-c9c620420b4d?q=80&w=2400&auto=format&fit=crop",
};

/** Section 05 — Introduction */
export const introContent: IntroContent = {
  kicker: "Our big idea",
  headingLead: "WE DON’T JUST CAPTURE MOMENTS.",
  headingAccent: "WE PRODUCE IMPACT.",
  body: "Divniq Productions is built to become the production engine behind stories, campaigns, events, brands, people, and movements — cinema craft at the speed of the brief.",
  capabilities: [
    "STORIES",
    "CAMPAIGNS",
    "EVENTS",
    "BRANDS",
    "PEOPLE",
    "MOVEMENTS",
  ],
};

/** Section 06 — Services */
export const servicesList: ServiceItem[] = [
  {
    id: "film-video-production",
    index: "01",
    title: "Film & Video Production",
    description:
      "Brand films, campaign spots, and long-form directed as cinema — concept through grade.",
    subServices: ["Brand films", "Campaign spots", "Corporate films", "Walkthroughs"],
    href: "/services#film-video",
  },
  {
    id: "professional-photography",
    index: "02",
    title: "Professional Photography",
    description:
      "Campaign, product, portrait, and reportage stills pulled with the same light as the film.",
    subServices: ["Campaign stills", "Product", "Portrait", "Reportage"],
    href: "/services#photography",
  },
  {
    id: "reels-short-form-content",
    index: "03",
    title: "Reels & Short-Form Content",
    description:
      "Hook-led cuts native to the feed — 9:16, stories, series, and paid variants from the master.",
    subServices: ["9:16 reels", "Stories", "Series formats", "Paid variants"],
    href: "/services#reels-short-form",
  },
  {
    id: "political-media-campaign",
    index: "04",
    title: "Political Media & Campaign Production",
    description:
      "Ground coverage, war-room cutdowns, and same-day publish for campaigns that move on the hour.",
    subServices: ["Rally films", "Candidate profiles", "War-room cuts", "Same-day social"],
    href: "/political-media",
  },
  {
    id: "event-media-production",
    index: "05",
    title: "Event Media Production",
    description:
      "Conferences, launches, and nights that only happen once — recaps ready before the room empties.",
    subServices: ["Recaps", "Highlights", "Speaker clips", "Photo sets"],
    href: "/services#event-media",
  },
  {
    id: "digital-content-production",
    index: "06",
    title: "Digital Content Production",
    description:
      "Packaged digital content, motion, and channel-native assets that travel with the film.",
    subServices: ["Content packages", "Motion", "Channel cuts", "Libraries"],
    href: "/services#digital-content",
  },
  {
    id: "post-production",
    index: "07",
    title: "Post Production",
    description:
      "Editorial, color, sound, and motion in one pipeline — masters ready for every channel.",
    subServices: ["Editorial", "Color grade", "Sound design", "Motion graphics"],
    href: "/services#digital-content",
  },
  {
    id: "live-production",
    index: "08",
    title: "Live Production",
    description:
      "Multi-cam live capture and live-to-tape — the floor, the switch, the same visual standard.",
    subServices: ["Multi-cam", "Live-to-tape", "Switching", "Live cuts"],
    href: "/services#specialized",
  },
];

/** Section 07 — The Divniq Difference */
export const divniqDifference: DifferenceContent = {
  kicker: "07 — The Difference",
  headingLead: "ONE PRODUCTION PARTNER.",
  headingAccent: "Multiple Capabilities.",
  traits: [
    {
      id: "speed",
      title: "SPEED",
      description:
        "Brief to frame without the agency lag. Lean crews, locked shot lists, and a post pipeline that turns around while the story is still warm.",
    },
    {
      id: "scale",
      title: "SCALE",
      description:
        "One camera or a multi-unit day. Aerials, second units, and a bench that grows with the brief — without handing the story to another house.",
    },
    {
      id: "quality",
      title: "QUALITY",
      description:
        "Cinema cameras, considered light, color, and sound as standard. The finish is the point, not a luxury add-on.",
    },
    {
      id: "craft",
      title: "CRAFT",
      description:
        "Direction that holds a single visual standard from the first recce to the last grade. Nothing incidental makes the cut.",
    },
    {
      id: "clarity",
      title: "CLARITY",
      description:
        "One producer, one thread. Strategy, production, and post share a room so the story never fragments between vendors.",
    },
    {
      id: "ownership",
      title: "OWNERSHIP",
      description:
        "Reusable asset libraries and platform cutdowns — not a single hero film that dies on one channel.",
    },
  ],
};

/** Section 08 — Content ecosystem */
export const contentEcosystem: ContentEcosystemContent = {
  kicker: "08 — Ecosystem",
  headingLead: "ONE SHOOT.",
  headingAccent: "Dozens of Stories.",
  body: "A single capture day is scored, stills-pulled, cut, and packaged across every frame a brand needs. The shoot is the source. The library is the product.",
  originLabel: "Master Capture",
  steps: [
    {
      id: "video",
      index: "01",
      title: "Video",
      icon: "video",
      outputs: ["Hero film", "Teaser", "Cutdown"],
    },
    {
      id: "photography",
      index: "02",
      title: "Photography",
      icon: "camera",
      outputs: ["Campaign stills", "Detail", "BTS"],
    },
    {
      id: "reels",
      index: "03",
      title: "Reels",
      icon: "smartphone",
      outputs: ["9:16 hooks", "Stories", "Series"],
    },
    {
      id: "motion",
      index: "04",
      title: "Motion",
      icon: "sparkles",
      outputs: ["Titles", "Packs", "Explainers"],
    },
    {
      id: "ads",
      index: "05",
      title: "Ads",
      icon: "megaphone",
      outputs: ["Paid variants", "End cards", "Hooks"],
    },
    {
      id: "library",
      index: "06",
      title: "Library",
      icon: "library",
      outputs: ["Masters", "Cutdowns", "Reuse"],
    },
  ],
};

/** Sections 09 & 10 — Specialized media */
export const specializedMedia: SpecializedMediaContent = {
  kicker: "09 / 10 — Specialized",
  niches: [
    {
      id: "political",
      index: "09",
      title: "Political Media",
      titleLines: ["POLITICAL", "MEDIA"],
      body: "Campaigns move on the hour. We cover the ground, cut in the van, and publish while the moment is still the story — not a recap of yesterday.",
      usp: "SHOOT TODAY. EDIT TODAY. PUBLISH TODAY.",
      deliverables: [
        "Rally & ground films",
        "Candidate profiles",
        "War-room cutdowns",
        "Same-day social bursts",
        "Manifesto films",
        "Booth & booth-floor content",
      ],
      cta: { label: "Plan Campaign Coverage", href: "/political-media" },
    },
    {
      id: "event",
      index: "10",
      title: "Event Media",
      titleLines: ["EVENT", "MEDIA"],
      body: "Conferences, launches, and nights that only happen once. Coverage that feels directed — highlights, speaker cuts, and photo sets ready before the room empties.",
      usp: "SHOOT TODAY. EDIT TODAY. PUBLISH TODAY.",
      deliverables: [
        "Conference recaps",
        "Highlight films",
        "Speaker clips",
        "Photo sets",
        "Same-day social",
        "Brand activation films",
      ],
      cta: { label: "Book Event Coverage", href: "/events" },
    },
  ],
};

/** Section 11 — Industries */
const industryCopy: Record<(typeof targetCustomers)[number], string> = {
  Political: "Campaigns, rallies, and same-day cuts that keep up with the news cycle.",
  Corporate: "Leadership, culture, and capability films with the restraint of a house style.",
  Commercial: "Brand and product films for houses competing in a crowded frame.",
  Experiences: "Launches, hospitality, and live rooms told through atmosphere and place.",
  Digital: "Platform-native content, motion, and cutdowns built for every channel.",
  Agencies: "An outsourced production department behind the pitch — billed through you.",
};

export const industriesList: IndustryItem[] = targetCustomers.map((name) => ({
  id: name.toLowerCase(),
  name,
  description: industryCopy[name],
}));

/** Section 12 — Agency partnerships */
export const agencyPartnership: AgencyPartnershipContent = {
  kicker: "12 — Agencies",
  headingLead: "YOUR OUTSOURCED",
  headingAccent: "Production Department.",
  body: "Agencies don’t need to hire 5 separate people. Five hires become one white-label partnership — crews, kit, and finish under one standard, billed through you.",
  rolesHeading: "Crew on call",
  roles: [
    "Directors & DPs",
    "Producers & APs",
    "Gaffers & grips",
    "Drone operators",
    "Editors",
    "Colorists",
    "Sound designers",
    "Motion designers",
  ],
  cta: { label: "Partner With Us", href: "/agencies" },
};

/** Section 15 — Technology */
export const technologyContent: TechnologyContent = {
  kicker: "15 — Technology",
  headingLead: "AI-ASSISTED PRODUCTION.",
  headingAccent: "Human-directed.",
  body: "Logging, first assemblies, and variant generation sit in the pipeline so craft can stay on the image. The machine sorts. The director decides.",
  networkTitle: "DIVNIQ PRODUCTIONS NETWORK",
  networkBody:
    "A connected bench of crews, rooms, and finish — one visual standard across cities, scaled without handing the story to another house.",
  features: [
    {
      id: "assist",
      title: "Selects, faster",
      description: "AI-assisted logging and selects so editorial starts closer to the cut.",
    },
    {
      id: "variants",
      title: "Variants, not one-offs",
      description: "Platform cutdowns and paid versions generated from a locked master.",
    },
    {
      id: "network",
      title: "One standard, many floors",
      description: "Shared look-up tables, shot language, and delivery specs across the network.",
    },
  ],
};

/** Section 13 — Selected work */
export const portfolioFilters = ["ALL", "FILM", "PHOTOGRAPHY", "EVENTS"] as const;

export type PortfolioFilter = (typeof portfolioFilters)[number];

export const portfolioWork: PortfolioItem[] = [
  {
    id: "who-we-are-in-motion",
    title: "Who We Are in Motion",
    client: "Studio",
    category: "Brand Film",
    kind: "film",
    year: "2025",
    location: "Panchkula",
    description:
      "An origin film for the studio — identity, craft, and the people behind the frame.",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "brand-film-teaser",
    title: "Brand Film Teaser",
    client: "Confidential",
    category: "Teaser",
    kind: "film",
    year: "2025",
    location: "Chandigarh",
    description:
      "A compressed narrative cut designed to land in the first seconds and leave a mark.",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "luxury-walkthrough",
    title: "Luxury Walkthrough",
    client: "Hospitality",
    category: "Spatial Film",
    kind: "film",
    year: "2025",
    location: "Zirakpur",
    description:
      "A paced walkthrough where light, material, and silence do the selling.",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "nature-cut",
    title: "Nature Cut",
    client: "Lifestyle",
    category: "Editorial",
    kind: "film",
    year: "2024",
    location: "Himachal",
    description:
      "Landscape and texture as mood — a quiet film built on observation rather than exposition.",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "hotel-preet",
    title: "Hotel Preet",
    client: "Hotel Preet",
    category: "Photography",
    kind: "photography",
    year: "2024",
    location: "Panchkula",
    description:
      "A hospitality portrait that places the guest inside the atmosphere of the house.",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "product-still-life",
    title: "Product Still Life",
    client: "Consumer",
    category: "Photography",
    kind: "photography",
    year: "2025",
    location: "Studio",
    description: "Texture, light, and object — stills pulled to hold luxury in a single frame.",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "launch-night",
    title: "Launch Night",
    client: "Enterprise",
    category: "Event",
    kind: "events",
    year: "2025",
    location: "Chandigarh",
    description: "Same-day recap and floor coverage for a night that only happens once.",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
  },
];

/** Section 14 — Footer */
export const footerContent: FooterContent = {
  headlineLead: "LET’S PRODUCE",
  headlineAccent: "SOMETHING.",
  wordmark: "DIVNIQ PRODUCTIONS",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Vimeo", href: "https://vimeo.com" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  email: "info@divniq.com",
  location: "Panchkula, India",
};

/** Section 20 — Production process */
export const productionProcess: ProcessStep[] = [
  {
    id: "concept",
    step: "01",
    title: "Concept",
    description:
      "Scripts, storyboards, and shot lists. We lock the story, the frame, and the intent before a camera moves.",
  },
  {
    id: "production",
    step: "02",
    title: "Production",
    description:
      "Shoot and capture on brand. Direction, lighting, and performance held to a single visual standard.",
  },
  {
    id: "post",
    step: "03",
    title: "Post",
    description:
      "Edit, motion, color, and sound design. The cut finds its rhythm; the image finds its finish.",
  },
  {
    id: "delivery",
    step: "04",
    title: "Delivery",
    description:
      "Cutdowns for every platform, packaged as a reusable asset library — one story, many frames.",
  },
];

/** Section 17–19 — About */
export const aboutPage: AboutPageContent = {
  hero: {
    kicker: "17 — About",
    headingLines: ["ABOUT", "DIVNIQ."],
    subtitle:
      "A production-first media company. We conceive, shoot, and finish cinematic work for brands, campaigns, and events — one partner from the first frame to the last delivery.",
  },
  about: {
    kicker: "The studio",
    heading: "ABOUT DIVNIQ",
    body: "DivniQ Productions is built around the floor, not the deck. Direction, cinematography, stills, and post sit in one room so the story never fragments between vendors. We work with brands, agencies, and campaigns that need cinema craft at the speed of the brief.",
  },
  vision: {
    kicker: "Vision",
    headingLead: "VISION",
    headingAccent: "To become North India’s leading production-first media company.",
    body: "A production network with one visual standard — craft on the image, speed in the pipeline, nothing incidental in the frame.",
  },
  values: {
    kicker: "Mission",
    heading: "MISSION",
    items: [
      {
        id: "people",
        title: "PEOPLE",
        description: "Direction, crew, and craft in one room — not a roster of vendors to coordinate.",
      },
      {
        id: "technology",
        title: "TECHNOLOGY",
        description: "AI-assisted logging and variants so the director stays on the image.",
      },
      {
        id: "speed",
        title: "SPEED",
        description: "Same-day when the moment demands it. The story publishes while it is still the story.",
      },
      {
        id: "scale",
        title: "SCALE",
        description: "One camera or a multi-unit day. Aerials, second units, and finish that grow with the brief.",
      },
      {
        id: "storytelling",
        title: "STORYTELLING",
        description: "Every frame directed. Every cut intentional. Cinema craft at the speed of the brief.",
      },
    ],
  },
};

/** Section 20 — Services directory */
export const servicePage: ServicePageContent = {
  hero: {
    kicker: "20 — Services",
    headingLines: ["WHAT WE", "PRODUCE."],
    subtitle:
      "Seven rooms. One production partner. Film, photography, short-form, political, events, digital, and specialized — browse the directory without leaving the story.",
  },
  directory: servicesDirectory.map(({ services, ...group }) => ({
    ...group,
    deliverables: services,
  })),
};

/** Section 21 — Political media */
export const politicalPage: PoliticalPageContent = {
  hero: {
    kicker: "21 — Political",
    headingLines: ["FROM THE GROUND", "TO THE SCREEN."],
    subtitle:
      "Campaigns move on the hour. We cover the ground, cut in the van, and publish while the moment is still the story — not a recap of yesterday.",
    cta: { label: "Plan Campaign Coverage", href: "/contact" },
  },
  services: {
    kicker: "Core services",
    heading: "What we cover",
    items: [
      "Rally & ground films",
      "Candidate profiles",
      "War-room cutdowns",
      "Same-day social bursts",
      "Manifesto films",
      "Booth & booth-floor content",
    ],
  },
  model: {
    kicker: "Production model",
    headingLead: "SHOOT TODAY.",
    headingAccent: "Publish today.",
    body: "A six-step loop built for the news cycle. Plan the ground, deploy the crew, shoot the moment, edit in motion, repurpose for every channel, deliver before the story cools.",
    steps: [
      {
        id: "plan",
        title: "Plan",
        description: "Routes, talking points, shot language, and a publish calendar locked before wheels up.",
        icon: "plan",
      },
      {
        id: "deploy",
        title: "Deploy",
        description: "Lean crews and kit on the ground — first unit, second unit, aerial when the brief needs height.",
        icon: "deploy",
      },
      {
        id: "shoot",
        title: "Shoot",
        description: "Coverage that holds a visual standard in chaos. Rally, road, booth, and war-room.",
        icon: "shoot",
      },
      {
        id: "edit",
        title: "Edit",
        description: "Cut in the van or the nearest room. Selects, assembly, and a first publishable piece the same day.",
        icon: "edit",
      },
      {
        id: "repurpose",
        title: "Repurpose",
        description: "Verticals, hooks, stills, and paid variants from the master — one moment, many frames.",
        icon: "repurpose",
      },
      {
        id: "deliver",
        title: "Deliver",
        description: "Files on the channels that matter before the cycle turns. The library stays with the campaign.",
        icon: "deliver",
      },
    ],
  },
};

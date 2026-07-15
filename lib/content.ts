export type NavLink = {
  href: string;
  label: string;
  chevron?: boolean;
  cta?: boolean;
};

export type WhyFetanSlide =
  | {
      kind: "intro";
      title: string;
      pills: string[];
      tagline: string;
      bg: "wf-bg1";
      image: string;
      imageAlt: string;
    }
  | {
      kind: "value";
      num: string;
      word: string;
      line: string;
      desc: string;
      bg: "wf-bg2" | "wf-bg3" | "wf-bg4";
      image: string;
      imageAlt: string;
    };

export type ServiceItem = {
  index: string;
  name: string;
  nameBreak?: boolean;
  desc: string;
  href?: string;
  highlight?: boolean;
};

export type WorkCategory = "all" | "outdoor" | "digital" | "branding" | "events";

export type WorkItem = {
  id: string;
  category: Exclude<WorkCategory, "all">;
  tag: string;
  title: string;
  description: string;
  visual: "g1" | "g2" | "g3" | "g4" | "g5" | "g6";
  videoSrc?: string;
};

export type StatItem = {
  count: number;
  suffix: string;
  label: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initial: string;
};

export const siteMeta = {
  title: "Fetan Advertising | Full Service Creative Agency",
  description:
    "Fetan Advertising is a full service creative agency covering outdoor media, digital marketing, branding, print, and live events.",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@fetanadvertising.com",
  phone: "+251 90 000 0000",
  phoneHref: "tel:+251900000000",
  location: "Haile Gebre Silase St, Addis Ababa, Ethiopia",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Fetan+Advertising,+Haile+Gebre+Silase+St,+Addis+Ababa&hl=en&z=16&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/Fetan+Advertising,+Haile+Gebre+Silase+St,+Addis+Ababa/data=!4m2!3m1!1s0x164b854d7142d119:0x25b47a5b1822ab02",
};

export const navLinks: NavLink[] = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services", chevron: true },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Start a Campaign", cta: true },
];

export const heroContent = {
  eyebrow: "Full Service Creative Advertising",
  lines: ["IDEAS LOUD", "ENOUGH TO", "STOP TRAFFIC"] as const,
  accentWord: "TRAFFIC",
  tagline: "Every Campaign, Every City, Every Result.",
  subcopy:
    "Fetan Advertising is a full service creative agency covering outdoor media, digital marketing, branding, print, and live events, produced with the discipline of a film set and the reach of a city skyline.",
  primaryCta: { href: "#work", label: "See Our Work" },
  secondaryCta: { href: "#contact", label: "Start a Campaign" },
  videoSrc: "/videos/hero.mp4",
} as const;

export const videoBannerContent = {
  videoSrc: "/videos/banner.mp4",
  primaryCta: { href: "#work", label: "See Our Work" },
  secondaryCta: { href: "#contact", label: "Start A Project" },
  leftText: ["Just What Your Brand", "Needs."],
  rightText: ["Creative Advertising Agency", "In Addis."],
} as const;

export const whyFetanSlides: WhyFetanSlide[] = [
  {
    kind: "intro",
    title: "WHY\nFETAN",
    pills: ["Emotional", "Fearless", "Authentic"],
    tagline:
      "We don't just run campaigns.\nWe create moments that make Addis stop and feel.",
    bg: "wf-bg1",
    image: "/images/why-fetan/intro-drone.png",
    imageAlt:
      "Aerial production silhouette — drone over a vast Ethiopian landscape at sunset",
  },
  {
    kind: "value",
    num: "01",
    word: "EMOTION",
    line: "We Move People, Not Just Metrics.",
    desc: "We tell stories that make audiences feel, because emotion builds connection, and connection builds brands that last.",
    bg: "wf-bg2",
    image: "/images/why-fetan/emotion-crew.png",
    imageAlt:
      "Fetan crew on location with cinema camera and gimbal during a golden-hour shoot",
  },
  {
    kind: "value",
    num: "02",
    word: "FEARLESS",
    line: "Chaos Is Where We Create.",
    desc: "We don't play it safe. We experiment, break the format, and rebuild campaigns into something bold, loud, and alive.",
    bg: "wf-bg3",
    image: "/images/why-fetan/fearless-production.png",
    imageAlt:
      "Professional production monitor and wireless transmitter filming a city sunset",
  },
  {
    kind: "value",
    num: "03",
    word: "AUTHENTIC",
    line: "We Keep It Real. Always.",
    desc: "No fluff, just honest creative that speaks to real people, in real streets, across real Ethiopia.",
    bg: "wf-bg4",
    image: "/images/why-fetan/authentic-heritage.png",
    imageAlt:
      "People in traditional Ethiopian dress taking a selfie at a historic stone castle",
  },
];

export const tickerServices = [
  "Outdoor Advertising",
  "Printing",
  "Strategy",
  "Design",
  "Exhibition Booth",
  "Advertising",
  "Event",
  "Marketing",
] as const;

export const showreelContent = {
  heading: "The\nShowreel",
  subcopy:
    "A minute of what we ship across outdoor, digital, and live production, cut together.",
  videoSrc: "/videos/showreel.mp4",
} as const;

export const servicesSection = {
  heading: "What We\nProduce",
  subcopy:
    "Eight disciplines, one production line, every deliverable shot, designed, and shipped under one roof.",
} as const;

export const services: ServiceItem[] = [
  {
    index: "OOH",
    name: "Outdoor\nAdvertising",
    desc: "Billboard Advertising has been around for a while and still works well. Fetan keeps it effective by being interesting and innovative.",
    href: "https://outdoor.fetanadvertising.com/",
  },
  {
    index: "PRT",
    name: "Printing",
    desc: "Bring your ideas to life with our exceptional printing services. We use state-of-the-art technology to deliver high-quality prints for all your needs.",
    href: "https://fetanadvertising.com/marketing/",
  },
  {
    index: "STR",
    name: "Strategy",
    desc: "A skyscraper can only be built as tall as the depth of the foundation, so do your brands.",
    href: "https://fetanadvertising.com/strategy/",
  },
  {
    index: "DSN",
    name: "Design",
    desc: "We're artists at heart and we believe in the transformative power of brilliant design.",
    href: "https://fetanadvertising.com/design/",
  },
  {
    index: "EXH",
    name: "Exhibition\nBooth",
    desc: "Tired of exhibitions that blend into the background? We don't do generic. Our exhibition design strategies are tailored to turn heads, engage minds, and leave a lasting impression.",
    href: "https://fetanadvertising.com/exhibition-booth/",
  },
  {
    index: "ADV",
    name: "Advertising",
    desc: "When you hear the word advertising, what comes to mind? The billboards along the highway, TV or Radio ads, or posters on delivery trucks?",
    href: "https://fetanadvertising.com/advertising/",
  },
  {
    index: "EVT",
    name: "Event",
    desc: "No matter what your corporate occasion, we know that every single detail reflects your brand. And every single detail must be perfect.",
    href: "https://fetanadvertising.com/event/",
  },
  {
    index: "MKT",
    name: "Marketing",
    desc: "There is a multifaceted digital world that we all live in. To be seen in the digital age means you have to have a digital presence.",
    href: "https://fetanadvertising.com/marketing/",
  },
  {
    index: "",
    name: "Let's Roll\nCamera",
    desc: "One agency, every discipline. Talk to our team.",
    highlight: true,
  },
];

export const workSection = {
  heading: "Selected\nCampaigns",
  subcopy: "A cut of recent work across outdoor, digital, and live production.",
} as const;

export const workFilters: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "outdoor", label: "Outdoor" },
  { id: "digital", label: "Digital" },
  { id: "branding", label: "Branding" },
  { id: "events", label: "Events" },
];

export const workItems: WorkItem[] = [
  {
    id: "skyline",
    category: "outdoor",
    tag: "Outdoor",
    title: "Skyline Takeover",
    description: "Citywide billboard rollout across 40 sites over 6 weeks.",
    visual: "g1",
    videoSrc: "/videos/work-skyline.mp4",
  },
  {
    id: "launch",
    category: "digital",
    tag: "Digital",
    title: "Launch Sprint",
    description: "Paid social + content push for a retail launch.",
    visual: "g2",
  },
  {
    id: "identity",
    category: "branding",
    tag: "Branding",
    title: "Full Identity",
    description: "Logo, system, and guidelines for a fintech client.",
    visual: "g3",
    videoSrc: "/videos/work-identity.mp4",
  },
  {
    id: "reveal",
    category: "events",
    tag: "Events",
    title: "Product Reveal",
    description: "Live launch event for 800 guests, full staging.",
    visual: "g4",
  },
  {
    id: "transit",
    category: "outdoor",
    tag: "Outdoor",
    title: "Transit Wrap",
    description: "Fleetwide vehicle branding across the metro.",
    visual: "g5",
  },
  {
    id: "always-on",
    category: "digital",
    tag: "Digital",
    title: "Always-On",
    description: "Ongoing performance marketing retainer.",
    visual: "g6",
    videoSrc: "/videos/work-always-on.mp4",
  },
];

export const statsSection = {
  eyebrow: "Impact, In Numbers",
  heading: "Fifteen years of putting brands where people actually look.",
} as const;

export const stats: StatItem[] = [
  { count: 10, suffix: "+", label: "Years in Business" },
  { count: 620, suffix: "+", label: "Campaigns Delivered" },
  { count: 180, suffix: "+", label: "Active Clients" },
  { count: 40, suffix: "+", label: "Cities Covered" },
];

export const clientsSection = {
  eyebrow: "Our Clients",
  heading: "Trusted By",
} as const;

export const clients = [
  "Retail Group",
  "Horizon Bank",
  "Nova Telecom",
  "Meskel Events Co.",
  "Habesha Beverages",
  "Addis Mall",
  "Sheba Insurance",
  "Tana Airlines",
  "Kaldi Coffee Co.",
  "Blue Nile Logistics",
] as const;

export const testimonialsSection = {
  eyebrow: "Testimonial",
  heading: "What Our\nClients Say",
} as const;

export const testimonials: Testimonial[] = [
  {
    name: "Mekdes A.",
    role: "Marketing Director, Retail Group",
    quote:
      "Fetan didn't just run our billboards. They ran the whole launch like a production. Every site, every asset, on time.",
    initial: "M",
  },
  {
    name: "Samuel T.",
    role: "Head of Brand, Horizon Bank",
    quote:
      "They rebuilt our identity from the logo up and it finally feels like one bank, everywhere you see it.",
    initial: "S",
  },
  {
    name: "Rahel G.",
    role: "Growth Lead, Nova Telecom",
    quote:
      "Our always-on digital retainer with Fetan is the most consistent performance channel we run.",
    initial: "R",
  },
  {
    name: "Yonas K.",
    role: "Founder, Meskel Events Co.",
    quote:
      "800 guests, zero hiccups. Their event team runs a room the way a director runs a set.",
    initial: "Y",
  },
];

export const ctaBandContent = {
  heading: "Ready To Start\nYour Next Campaign?",
  ctaLabel: "Request A Quote",
  ctaHref: "#contact",
} as const;

export const quoteFormContent = {
  eyebrow: "Get A Quote",
  heading: "Tell Us About\nYour Campaign",
  subcopy:
    "Share a few details and we’ll come back with scope, timing, and next steps.",
  mapHeading: "Find Us",
  mapAddress: "Fetan Advertising — Haile Gebre Silase St, Addis Ababa",
  services: [
    "Outdoor Advertising",
    "Printing",
    "Strategy",
    "Design",
    "Exhibition Booth",
    "Advertising",
    "Event",
    "Marketing",
    "Full Campaign",
  ],
  budgets: [
    "Under $5,000",
    "$5,000 – $15,000",
    "$15,000 – $50,000",
    "$50,000+",
    "Not sure yet",
  ],
  submitLabel: "Send Quote Request",
  successMessage:
    "Thanks — your quote request was sent. We’ll get back to you soon.",
  errorMessage:
    "Something went wrong sending your request. Please try again or email us directly.",
} as const;

export const footerContent = {
  brandCopy:
    "A full service creative advertising agency covering outdoor, digital, branding, print, and events, produced under one roof.",
  services: [
    { href: "#services", label: "Outdoor Advertising" },
    { href: "#services", label: "Digital Marketing" },
    { href: "#services", label: "Branding" },
    { href: "#services", label: "Event Management" },
  ],
  agency: [
    { href: "#work", label: "Our Work" },
    { href: "#impact", label: "Impact" },
    { href: "#stories", label: "Client Stories" },
    { href: "#contact", label: "Contact" },
  ],
  socials: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Behance" },
  ],
  copyright: "© 2026 Fetan Advertising. All rights reserved.",
} as const;

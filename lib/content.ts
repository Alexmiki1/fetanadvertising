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
  id?: string;
  index: string;
  name: string;
  nameBreak?: boolean;
  desc: string;
  href?: string;
  highlight?: boolean;
};

export type WorkCategory = "all" | "outdoor" | "digital" | "branding" | "events" | "printing";

export type WorkItem = {
  id: string;
  category: Exclude<WorkCategory, "all">;
  tag: string;
  title: string;
  description: string;
  visual: "g1" | "g2" | "g3" | "g4" | "g5" | "g6";
  videoSrc?: string;
  heroYoutubeId?: string;
  heroImage?: string;
  hideFromHome?: boolean;
  details?: {
    intro?: string;
    sections?: {
      number: string;
      title: string;
      content: string;
      image?: string;
      youtubeId?: string;
    }[];
    gallery?: string[];
  };
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
  title: "Fetan Advertising | Full Service Creative Agency in Addis Ababa",
  description:
    "Fetan Advertising is a top full-service creative agency in Addis Ababa, Ethiopia, specializing in outdoor media, digital marketing, branding, video production, and live events.",
  keywords: [
    "Advertising agency in Addis Ababa",
    "Creative agency Ethiopia",
    "Outdoor media Addis Ababa",
    "Digital marketing Ethiopia",
    "Branding agency Addis Ababa",
    "Video production Ethiopia",
    "Live events Addis Ababa",
    "Fetan Advertising"
  ],
  siteUrl: "https://fetanadvertising.com",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@fetanadvertising.com",
  phone: "+251913001010",
  phoneHref: "tel:+251913001010",
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
  imageSrc: "/images/banner_image.png",
  primaryCta: { href: "#work", label: "See Our Work" },
  secondaryCta: { href: "#contact", label: "Start A Project" },
  leftText: ["Just What Your Brand", "Needs."],
  rightText: ["Creative Advertising Agency", "In Addis."],
} as const;

export const aboutContent = {
  eyebrow: "WHO ARE WE",
  heading: "THE\nCREATIVE\nREBELLION",
  button: {
    label: "ABOUT US",
    href: "/#about",
  },
  paragraphs: [
    "Fetan Advertising is an advertising and creative agency in Ethiopia dedicated to helping businesses grow through innovative marketing, creative storytelling, and impactful brand experiences. We specialize in outdoor advertising, digital LED screen advertising, printing, graphic design, exhibition booths, event branding, digital marketing, and brand strategy, providing complete advertising solutions tailored to the unique goals of every client. From designing eye catching campaigns and producing high quality print materials to managing digital marketing initiatives and delivering large scale advertising projects, we combine creativity, technology, and strategic thinking to ensure every campaign reaches the right audience and delivers meaningful results.",
    "Our team works closely with businesses, organizations, and institutions to transform ideas into powerful campaigns that strengthen brand identity, increase visibility, engage customers, and create lasting impressions. Whether launching a new product, promoting a service, or building long term brand awareness, we are committed to delivering innovative solutions that help our clients stand out in a competitive market and achieve measurable success."
  ]
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
    word: "BIG IDEAS",
    line: "Big ideas win.",
    desc: "",
    bg: "wf-bg2",
    image: "/images/why-fetan/big_ideas_habesha.png",
    imageAlt: "Habeshan Ethiopian creative team brainstorming big ideas",
  },
  {
    kind: "value",
    num: "02",
    word: "SIMPLICITY",
    line: "Simplicity is the ultimate sophistication.",
    desc: "",
    bg: "wf-bg3",
    image: "/images/why-fetan/simplicity.png",
    imageAlt: "Sleek modern camera on soundstage",
  },
  {
    kind: "value",
    num: "03",
    word: "AUTHENTICITY",
    line: "Authenticity over everything.",
    desc: "",
    bg: "wf-bg4",
    image: "/images/why-fetan/authentic-heritage.png",
    imageAlt: "People in traditional Ethiopian dress taking a selfie at a historic stone castle",
  }
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
  youtubeId: "dctCqmgbwfw",
} as const;

export const servicesSection = {
  heading: "What We\nProduce",
  subcopy:
    "Eight disciplines, one production line, every deliverable shot, designed, and shipped under one roof.",
} as const;

export const services: ServiceItem[] = [
  {
    id: "outdoor-advertising",
    index: "OOH",
    name: "Outdoor\nAdvertising",
    desc: "Billboard Advertising has been around for a while and still works well. Fetan keeps it effective by being interesting and innovative.",
    href: "/services/outdoor-advertising",
  },
  {
    id: "printing",
    index: "PRT",
    name: "Printing",
    desc: "Bring your ideas to life with our exceptional printing services. We use state-of-the-art technology to deliver high-quality prints for all your needs.",
    href: "/services/printing",
  },
  {
    id: "strategy",
    index: "STR",
    name: "Strategy",
    desc: "A skyscraper can only be built as tall as the depth of the foundation, so do your brands.",
    href: "/services/strategy",
  },
  {
    id: "design",
    index: "DSN",
    name: "Design",
    desc: "We're artists at heart and we believe in the transformative power of brilliant design.",
    href: "/services/design",
  },
  {
    id: "exhibition-booth",
    index: "EXH",
    name: "Exhibition\nBooth",
    desc: "Tired of exhibitions that blend into the background? We don't do generic. Our exhibition design strategies are tailored to turn heads, engage minds, and leave a lasting impression.",
    href: "/services/exhibition-booth",
  },
  {
    id: "advertising",
    index: "ADV",
    name: "Advertising",
    desc: "When you hear the word advertising, what comes to mind? The billboards along the highway, TV or Radio ads, or posters on delivery trucks?",
    href: "/services/advertising",
  },
  {
    id: "event",
    index: "EVT",
    name: "Event",
    desc: "No matter what your corporate occasion, we know that every single detail reflects your brand. And every single detail must be perfect.",
    href: "/services/event",
  },
  {
    id: "marketing",
    index: "MKT",
    name: "Marketing",
    desc: "There is a multifaceted digital world that we all live in. To be seen in the digital age means you have to have a digital presence.",
    href: "/services/marketing",
  },
  {
    index: "",
    name: "Let's Roll\nCamera",
    desc: "One agency, every discipline. Talk to our team.",
    href: "/#contact",
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
  { id: "printing", label: "Printing" },
];

export const workItems: WorkItem[] = [
  {
    id: "skyline",
    category: "branding",
    tag: "Branding",
    title: "Abay Homes",
    description: "Citywide billboard rollout across 40 sites over 6 weeks.",
    visual: "g1",
    heroImage: "/images/abay-home.png",
    details: {
      intro: "The branding for Abay Homes was created to establish the company as a modern, trustworthy, and premium real estate developer in Ethiopia’s growing housing market. The goal was to build a strong visual identity that reflects quality construction, modern urban living, and long-term investment value while appealing to both local homeowners and diaspora investors.\n\nThe brand identity combines professionalism, elegance, and reliability through clean visuals, modern typography, and a refined real estate aesthetic that communicates comfort, trust, and contemporary living.",
      sections: [
        {
          number: "01",
          title: "THE CHALLENGE",
          content: "Abay Homes needed a branding identity that could clearly communicate its vision in a crowded and fast-growing real estate market. Many property developers share similar messaging, making it difficult for audiences to instantly recognize what makes one brand different from another.\n\nThe main challenge was creating a visual identity that balances luxury and accessibility while building trust among potential buyers and investors. The brand also needed to present itself as modern, organized, and future-focused without losing the sense of warmth and comfort associated with home ownership.\n\nAdditionally, the branding had to work consistently across multiple touchpoints including the website, social media, property advertisements, brochures, and outdoor marketing materials.",
          image: "/images/abay-2.png"
        },
        {
          number: "02",
          title: "THE IDEA",
          content: "The solution focused on developing a clean and modern brand identity that reflects confidence, sophistication, and contemporary urban living.\n\nA refined visual system was created using:\n• Minimal and professional design elements\n• Strong typography for clarity and authority\n• A balanced color palette that communicates trust and elegance\n• Structured layouts inspired by architecture and modern real estate design\n• Consistent visual hierarchy across digital and print materials",
          image: "/images/abay-4.png"
        },
        {
          number: "03",
          title: "THE EXECUTION",
          content: "The branding direction emphasized simplicity and professionalism while highlighting the lifestyle and investment value of the properties. Every element of the identity was designed to create a premium yet welcoming experience that appeals to modern homeowners and investors alike.\n\nThis cohesive branding system helped establish a recognizable and polished presence for Abay Homes across all customer-facing platforms.",
          image: "/images/abay-3.png"
        },
        {
          number: "04",
          title: "THE IMPACT",
          content: "The branding successfully positioned Abay Homes as a modern and credible real estate company within Addis Ababa’s competitive property market.\n\nThe new identity helped:\n• Strengthen brand recognition and professionalism\n• Improve visual consistency across all platforms\n• Build trust with potential homeowners and investors\n• Enhance the company’s premium market positioning\n• Create a stronger emotional connection with the target audience\n\nThe overall branding established Abay Homes as a forward-thinking real estate brand that represents quality, modern living, and confidence in the Ethiopian housing sector.",
          image: "/images/abay-5.png"
        }
      ]
    }
  },
  {
    id: "launch",
    category: "branding",
    tag: "Branding",
    title: "Dema Hope",
    description: "Comprehensive branding and logo design for Dema Hope Real Estate, establishing a premium and modern visual identity.",
    visual: "g3",
    heroImage: "/images/dema-home.png",
    details: {
      intro: "The branding and logo project for Dema Hope Real Estate focused on building a premium and modern visual identity that reflects luxury living, trust, and high-end real estate development in Ethiopia. The brand was designed to position Dema Hope as a leading real estate company offering upscale residential and commercial properties in Addis Ababa’s most desirable neighborhoods.\n\nThe identity combines elegance, professionalism, and modern urban lifestyle aesthetics while supporting the company’s long-term vision of redefining luxury real estate in Ethiopia. The branding also needed to communicate the company’s philosophy: “Dream. Elevate. Master. Achieve.",
      sections: [
        {
          number: "01",
          title: "THE CHALLENGE",
          content: "The Ethiopian real estate market is highly competitive, with many developers competing for trust, visibility, and credibility. The challenge was to create a branding system and logo that would:\n\n• Differentiate Dema Hope from traditional and generic real estate brands\n• Communicate luxury, sophistication, and modern urban living\n• Build confidence among investors, homeowners, and diaspora buyers\n• Appeal to both local and international audiences\n• Create a strong visual identity adaptable across digital platforms, billboards, property signage, brochures, and social media\n\nAnother challenge was balancing premium luxury aesthetics with accessibility and trust, especially in a market where buyers are cautious about real estate investments and project delivery reliability.",
          image: "/images/dema-1.png"
        },
        {
          number: "02",
          title: "THE IDEA",
          content: "The branding solution focused on creating a sleek, elegant, and memorable identity system that visually represents luxury real estate and modern architecture. The logo and branding direction emphasized:\n\n• Minimal and sophisticated typography to reflect premium living\n• A clean and modern visual language inspired by architecture and urban development\n• A refined luxury-focused color palette to communicate exclusivity and professionalism",
          image: "/images/dema-2.png"
        },
        {
          number: "03",
          title: "THE EXECUTION",
          content: "Consistent branding across websites, property presentations, social media campaigns, and marketing materials.\n\nStrong messaging centered around aspiration, lifestyle elevation, and trust.\n\nThe visual identity was designed to support Dema Hope’s portfolio of luxury developments in locations such as Bole, Signal, Kazanchis, and Shola while reinforcing the company’s image as a forward-thinking and high-quality developer.",
          image: "/images/dema-3.png"
        },
        {
          number: "04",
          title: "THE IMPACT",
          content: "The final branding created a polished and recognizable identity that strengthened Dema Hope Real Estate’s market presence and premium positioning. The new visual system helped the company present its developments with a more luxurious, modern, and credible image.\n\nThe branding improved:\n• Brand recognition and professional presentation\n• Customer trust and investor confidence\n• Consistency across digital and physical marketing materials\n• The perception of quality, luxury, and innovation\n• The company’s ability to showcase high-end properties with a premium lifestyle-focused identity\n\nThe result was a strong real estate brand that visually communicates elegance, ambition, and modern luxury living in Ethiopia’s growing real estate market.",
          image: "/images/dema-4.png"
        }
      ]
    },
  },
  {
    id: "identity",
    category: "branding",
    tag: "Branding",
    title: "ALPHA POST TENSTION PLC",
    description: "Logo, system, and guidelines for an engineering client.",
    visual: "g3",
    heroImage: "/images/alpha-home.png",
    details: {
      intro: "Alpha Post Tension PLC is a Grade One specialized post-tension company registered in Ethiopia, established by Ethiopian professionals with extensive technical knowledge and hands-on experience gained across the Middle East. The company delivers advanced post-tension engineering solutions for modern construction projects, combining international standards with local expertise.\n\nThe objective of this project was to create a strong and professional brand presence that reflects the company’s technical excellence, reliability, and innovation in the construction industry. The visual identity and communication materials were designed to showcase Alpha Post Tension PLC as a trusted engineering partner capable of delivering high-performance structural solutions for complex construction developments.\n\nThe branding approach focused on creating a clean, modern, and industrial visual language that communicates strength, precision, and professionalism while positioning the company competitively within the Ethiopian construction sector.",
      sections: [
        {
          number: "01",
          title: "THE CHALLENGE",
          content: "The main challenge was to create a visual identity that reflects the technical expertise and professionalism of Alpha Post Tension PLC while maintaining a clean and modern appearance. Since the construction and engineering industry is highly competitive, the brand needed a strong and recognizable identity that communicates strength, precision, and reliability.\n\nAnother challenge was simplifying complex engineering concepts into a minimal and memorable logo system that could work effectively across different platforms, including company profiles, construction signage, social media, uniforms, and digital applications. The existing visual presentation also needed stronger consistency, improved typography, and a more premium industrial feel to position the company as a leading post-tension specialist in Ethiopia.",
          image: "/images/alpha-1.png"
        },
        {
          number: "02",
          title: "THE IDEA",
          content: "The creative direction focused on building a bold, modern, and professional identity that reflects the engineering precision and structural strength of Alpha Post Tension PLC. The branding was designed to communicate trust, innovation, and technical excellence while maintaining a clean and memorable visual system.\n\nA strong orange color palette was selected to represent energy, construction, visibility, and confidence, while the white typography creates a clean contrast that improves clarity and professionalism. The typography uses a modern sans-serif style to give the brand a contemporary and industrial appearance that feels stable, technical, and easy to recognize.",
          image: "/images/alpha-2.png"
        },
        {
          number: "03",
          title: "THE EXECUTION",
          content: "The layout approach was kept minimal and balanced, allowing the logo and typography to remain highly visible across both print and digital applications. Circular graphic elements were incorporated into the logo symbol to subtly represent tension cables, structural systems, and connectivity within modern engineering solutions.\n\nOverall, the branding style combines simplicity with strong industrial aesthetics to create a professional identity that positions Alpha Post Tension PLC as a reliable and forward-thinking construction engineering company.",
          image: "/images/alpha-3.png"
        },
        {
          number: "04",
          title: "THE IMPACT",
          content: "The final branding system helped establish a stronger and more professional identity for Alpha Post Tension PLC across both digital and print platforms. The new visual direction improved brand consistency and created a modern industrial appearance that better reflects the company’s technical expertise and engineering capabilities.\n\nThe identity system was designed to increase brand recognition, strengthen client trust, and improve the company’s professional presentation within the competitive construction industry. Through the use of clean typography, bold color application, and structured layouts, the branding created a more confident and recognizable presence suitable for company profiles, construction materials, social media, and future marketing applications.",
          image: "/images/alpha-4.png"
        }
      ]
    }
  },
  {
    id: "reveal",
    category: "branding",
    tag: "Branding",
    title: "Bamacon",
    description: "Live launch event for 800 guests, full staging.",
    visual: "g4",
    heroImage: "/images/bamacon-home.png",
    details: {
      intro: "The branding and logo project for Bamacon Engineering PLC focused on creating a strong and professional identity that reflects the company’s position as a Grade 1 construction and engineering firm in Ethiopia. The brand needed to communicate trust, strength, innovation, and modern construction expertise while representing Bamacon’s large-scale projects, sister companies, and growing presence in the engineering and real estate industry. The visual identity was designed to align with the company’s mission of delivering high-quality engineering, construction, and infrastructure solutions.",
      sections: [
        {
          number: "01",
          title: "THE CHALLENGE",
          content: "Bamacon Engineering operates in a highly competitive construction market where many companies use generic industrial branding. The challenge was to create a brand identity and logo that would:\n\n• Stand out in the Ethiopian construction and engineering industry\n• Reflect professionalism, reliability, and technical expertise\n• Represent both engineering precision and modern architectural development\n• Build trust with corporate clients, investors, and partners\n• Maintain consistency across websites, project signage, social media, and marketing materials\n\nAnother challenge was balancing a modern visual style with the company’s strong industrial and infrastructure-focused background.",
          image: "/images/bama-5.png"
        },
        {
          number: "02",
          title: "THE IDEA",
          content: "The branding solution focused on developing a clean, bold, and professional identity system that visually represents Bamacon Engineering’s values and services. The logo direction emphasized:\n\n• Strong geometric forms to symbolize structure, stability, and engineering precision\n• A modern and corporate typography style for professionalism and trust\n• A construction-inspired visual identity that aligns with large-scale building and infrastructure projects",
          image: "/images/bama-logo-mark.png"
        },
        {
          number: "03",
          title: "THE EXECUTION",
          content: "Consistent brand application across digital platforms, construction projects, company profiles, and promotional materials.\n\nA refined color palette that communicates strength, confidence, and reliability.\n\nThe branding was designed to support Bamacon’s image as a forward-thinking engineering company involved in construction, real estate, concrete production, and infrastructure development.",
          image: "/images/bama-3.png"
        },
        {
          number: "04",
          title: "THE IMPACT",
          content: "The final branding created a stronger and more recognizable corporate presence for Bamacon Engineering. The updated visual identity helped the company present itself as a modern, credible, and high-capacity construction brand capable of handling large-scale projects and partnerships.\n\nThe branding system improved:\n• Brand consistency across platforms and marketing materials\n• Professional presentation to clients and stakeholders\n• Visual recognition in the construction industry\n• Customer trust and corporate credibility\n• The company’s ability to showcase its projects and services with a modern and organized identity\n\nThe result was a professional engineering brand that visually communicates quality construction, innovation, and long-term reliability.",
          image: "/images/bama-4.png"
        }
      ]
    }
  },
  {
    id: "transit",
    category: "outdoor",
    tag: "Outdoor",
    title: "Beu Delivery",
    description: "Fleetwide vehicle branding across the metro.",
    visual: "g5",
    heroYoutubeId: "3WJsBEsSRKw",
    details: {
      intro: "This Digital Out of Home (DOOH) campaign is designed to capture attention with vibrant visuals and compelling messaging in high traffic locations. By displaying beU on premium LED screens throughout the city, the campaign reinforces brand awareness, encourages app downloads, and reminds people that delicious food is only a few taps away.",
      sections: [
        {
          number: "01",
          title: "CAMPAIGN OBJECTIVES",
          content: "✦ Increase brand awareness across Addis Ababa\n✦ Drive mobile app downloads\n✦ Promote fast and affordable food delivery\n✦ Highlight restaurant variety and exclusive offers\n✦ Increase daily customer orders"
        },
        {
          number: "02",
          title: "TARGET AUDIENCE",
          content: "— Office workers\n— University students\n— Busy professionals\n— Families\n— Young adults\n— Anyone looking for fast, reliable food delivery"
        },
        {
          number: "03",
          title: "LOCATIONS",
          content: "— Bole Friendship\n— Churchill\n— Merkato\n— CMC Roundabout\n— Bole Road\n— Wello Sefer\n— Bole Airport VIP Entrance\n— Near Bambis"
        }
      ]
    }
  },
  {
    id: "always-on",
    category: "outdoor",
    tag: "Outdoor",
    title: "Emirates Airlines",
    description: "Ongoing performance marketing retainer.",
    visual: "g6",
    heroYoutubeId: "cc03Hz13ewU",
    details: {
      intro: "This Digital Out of Home (DOOH) campaign is designed to capture attention with high impact visuals displayed on premium LED screens in Addis Ababa's busiest locations. Whether promoting international travel, holiday packages, or business destinations, the campaign delivers exceptional visibility, inspires travelers, and strengthens Emirates' premium brand presence.",
      sections: [
        {
          number: "01",
          title: "CAMPAIGN OBJECTIVES",
          content: "✦ Increase brand awareness in Ethiopia\n✦ Promote international travel and holiday destinations\n✦ Drive flight bookings\n✦ Highlight Emirates' premium travel experience\n✦ Reach travelers during peak commuting hours"
        },
        {
          number: "02",
          title: "TARGET AUDIENCE",
          content: "— Business professionals\n— International travelers\n— Tourists\n— Families\n— Students traveling abroad\n— Frequent flyers"
        },
        {
          number: "03",
          title: "LOCATIONS",
          content: "— Bole Friendship\n— Churchill\n— Merkato\n— CMC Roundabout\n— Bole Road\n— Wello Sefer\n— Bole Airport VIP Entrance\n— Near Bambis"
        }
      ]
    }
  },
  {
    id: "alpha-exhibition",
    category: "events",
    tag: "Events",
    title: "ALPHA POST TENSION EXHIBITION",
    description: "Custom exhibition booth design and fabrication for Alpha Post Tension PLC.",
    visual: "g2",
    heroImage: "/images/exhibition-1.jpg",
    hideFromHome: true,
    details: {
      intro: "Fetan Advertising partnered with Alpha Post Tension PLC to design, fabricate, and install a custom exhibition booth that stands out in a crowded hall. We focused on striking visual elements, interactive spaces, and clear brand messaging to engage visitors and showcase their technical expertise.",
      gallery: [
        "/images/exhibition-1.jpg",
        "/images/exhibition-2.jpg",
        "/images/exhibition-3.jpg",
        "/images/exhibition-4.jpg"
      ]
    }
  },
  {
    id: "bamamix-exhibition",
    category: "events",
    tag: "Events",
    title: "BAMAMIX EXHIBITION",
    description: "Custom exhibition booth design and fabrication for BamaMix Construction Material Manufacturing PLC.",
    visual: "g3",
    heroImage: "/images/bamamix-1.jpg",
    hideFromHome: true,
    details: {
      intro: "Fetan Advertising partnered with BamaMix to design and build a modern, high-impact exhibition booth. We focused on striking visual elements, interactive spaces, and clear brand messaging to engage visitors and showcase their products.",
      gallery: [
        "/images/bamamix-1.jpg",
        "/images/bamamix-2.jpg",
        "/images/bamamix-3.jpg",
        "/images/bamamix-4.jpg"
      ]
    }
  },
  {
    id: "bamamix-printing",
    category: "printing",
    tag: "Printing",
    title: "BAMAMIX MERCHANDISE",
    description: "Corporate merchandise and print materials designed for BamaMix Construction Material Manufacturing PLC.",
    visual: "g5",
    heroImage: "/images/printing-1.jpg",
    hideFromHome: true,
    details: {
      intro: "A cohesive set of branded corporate materials, including custom apparel, business cards, and promotional items designed to strengthen the BamaMix brand identity.",
      gallery: [
        "/images/printing-1.jpg",
        "/images/printing-2.jpg",
        "/images/printing-3.jpg",
        "/images/printing-4.jpg",
        "/images/printing-5.jpg"
      ]
    }
  }
];

export const statsSection = {
  eyebrow: "Impact, In Numbers",
  heading: "Ten years of putting brands where people actually look.",
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

export const clients: { name: string; logo: string; scale?: number }[] = [
  { name: "Dashen Bank", logo: "/images/clients/dashen-bank.png", scale: 1.2 },
  { name: "Alpha Post Tension", logo: "/images/clients/alpha-post-tension.png", scale: 1.6 },
  { name: "Horra Corporate Group", logo: "/images/clients/client3.png", scale: 1.6 },
  { name: "Bamacon Construction", logo: "/images/clients/bamacon-construction.png", scale: 1.6 },
  { name: "BDO", logo: "/images/clients/client5.png", scale: 1.3 },
  { name: "Awash Bank", logo: "/images/clients/awash-bank.png", scale: 1.3 },
  { name: "Zemen Bank", logo: "/images/clients/zemen-bank-v2.png", scale: 1.2 },
  { name: "Yango", logo: "/images/clients/client7.png", scale: 1.3 },
  { name: "Coca-Cola", logo: "/images/clients/coca-cola.png", scale: 1.2 },
  { name: "Scope Lubricants", logo: "/images/clients/scope-lubricants.png", scale: 2.2 },
];

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
    { href: "https://www.instagram.com/fetanads?igsh=dnhjcWpsaHc0N3l0", label: "Instagram" },
    { href: "https://www.linkedin.com/company/fetanadvertising/", label: "LinkedIn" },
    { href: "https://web.facebook.com/fetanads", label: "Facebook" },
  ],
  copyright: "© 2026 Fetan Advertising. All rights reserved.",
} as const;

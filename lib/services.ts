import type { ArtKind, CategorySlug } from "./projects";

export interface Service {
  slug: string;
  number: string;
  name: string;
  /** Short nav / tile label */
  short: string;
  /** One-line pitch */
  pitch: string;
  summary: string;
  whoItHelps: string[];
  deliverables: string[];
  value: { title: string; text: string }[];
  approach: { title: string; text: string }[];
  capabilities: string[];
  categories: CategorySlug[];
  art: ArtKind;
  artVariant?: 0 | 1 | 2;
  flagship?: boolean;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    name: "Website Development",
    short: "Web",
    pitch: "Custom websites and web experiences, designed and engineered end to end.",
    summary:
      "Our flagship service. We design and build websites that look exceptional, load quickly, work for everyone and guide visitors toward a clear next step — from premium business sites and landing pages to e-commerce stores and full web applications.",
    whoItHelps: [
      "Businesses whose current site undersells them",
      "Brands launching a new product, service or store",
      "Teams that need a site they can actually maintain",
      "Founders who want a distinctive presence, not a template",
    ],
    deliverables: [
      "Premium business websites",
      "Custom landing pages",
      "E-commerce websites",
      "Interactive brand experiences",
      "Web applications",
      "Responsive design",
      "UI / UX design",
      "Frontend and backend development",
      "Motion-rich experiences",
      "Performance optimisation",
      "Search-engine-friendly foundations",
      "Third-party service integrations",
    ],
    value: [
      {
        title: "Considered design",
        text: "Layout, typography and motion that communicate who you are in the first few seconds.",
      },
      {
        title: "Fast loading",
        text: "Performance is designed in from the start — optimised media, lean code and sensible rendering choices.",
      },
      {
        title: "Accessible to everyone",
        text: "Semantic markup, keyboard support and strong contrast so no visitor is left out.",
      },
      {
        title: "Built for mobile",
        text: "Layouts composed for phones first-class, not shrunk down from desktop.",
      },
      {
        title: "Clear conversion paths",
        text: "Every page has a purpose and an obvious next step, whether that is a booking, a purchase or an enquiry.",
      },
      {
        title: "Ready to grow",
        text: "Clean, documented code and content structures that make future changes straightforward.",
      },
    ],
    approach: [
      { title: "Understand the goal", text: "We start with what the site must achieve and who it must convince." },
      { title: "Design the experience", text: "Structure, interface and motion are designed together so they feel like one system." },
      { title: "Engineer it properly", text: "We build with modern frameworks, careful rendering strategy and measurable performance targets." },
      { title: "Test and refine", text: "Real devices, keyboard testing and performance checks before launch." },
    ],
    capabilities: [
      "Business websites",
      "Landing pages",
      "E-commerce",
      "Web apps",
      "UI / UX",
      "Performance",
    ],
    categories: ["web-development", "e-commerce"],
    art: "fashion",
    flagship: true,
    metaDescription:
      "Custom website development by Zen-C Solutions: premium business sites, e-commerce, landing pages and web applications — designed for speed, accessibility and results.",
  },
  {
    slug: "software-development",
    number: "02",
    name: "Software Development",
    short: "Software",
    pitch: "Custom tools, dashboards and workflows that remove friction from how you work.",
    summary:
      "We build practical business software: internal tools, dashboards, workflow automation and web applications that connect to the systems you already use. We scope honestly and build what we can deliver well.",
    whoItHelps: [
      "Teams drowning in spreadsheets and manual hand-offs",
      "Businesses that need a single view of their operations",
      "Startups validating a product with a first working version",
    ],
    deliverables: [
      "Custom business software",
      "Dashboards and reporting views",
      "Internal tools",
      "Workflow automation",
      "Web applications",
      "Integrations with existing services",
    ],
    value: [
      { title: "Less manual work", text: "Automate repetitive steps so people spend time on judgement, not copying data." },
      { title: "One source of truth", text: "Bring scattered information into a single, readable workspace." },
      { title: "Fit to your process", text: "Software shaped around how your team works, not the other way round." },
    ],
    approach: [
      { title: "Map the workflow", text: "We watch how work really happens before designing anything." },
      { title: "Prototype early", text: "Clickable prototypes let you react before code is written." },
      { title: "Build in increments", text: "Working slices delivered early so you can use and shape the product." },
      { title: "Hand over properly", text: "Documentation and a clear path for support or further development." },
    ],
    capabilities: ["Internal tools", "Dashboards", "Automation", "Web apps", "Integrations"],
    categories: ["software"],
    art: "dashboard",
    metaDescription:
      "Custom software by Zen-C Solutions: internal tools, dashboards, workflow automation and web applications built around how your team works.",
  },
  {
    slug: "graphic-design",
    number: "03",
    name: "Graphic Design & Brand Identity",
    short: "Graphic design",
    pitch: "Identity systems and visual assets that make every touchpoint feel like one brand.",
    summary:
      "From a first logo to a complete identity system, we design the visual language your brand uses everywhere: typography, colour, layout principles and the assets that carry them across print and digital.",
    whoItHelps: [
      "New businesses defining how they look and sound",
      "Established brands whose visuals have drifted out of sync",
      "Teams producing campaigns that need consistent creative",
    ],
    deliverables: [
      "Visual identity systems",
      "Logo and wordmark design",
      "Campaign design",
      "Promotional graphics",
      "Digital assets and templates",
      "Typography and colour systems",
      "Brand guidelines",
    ],
    value: [
      { title: "Recognisable", text: "A consistent system people can identify at a glance." },
      { title: "Flexible", text: "Rules and templates that make new material quick to produce." },
      { title: "Cohesive", text: "Print, web, social and motion all drawing from one visual language." },
    ],
    approach: [
      { title: "Research and direction", text: "Audience, category and positioning shape the creative territory." },
      { title: "Explore", text: "We develop distinct routes before narrowing to one." },
      { title: "Systemise", text: "Marks become systems — type, colour, grid, application." },
      { title: "Document", text: "Guidelines and asset packs so the identity stays consistent." },
    ],
    capabilities: ["Identity", "Logos", "Campaigns", "Digital assets", "Guidelines"],
    categories: ["graphic-design"],
    art: "identity",
    metaDescription:
      "Graphic design and brand identity by Zen-C Solutions: visual identity systems, campaign design, typography and consistent digital assets.",
  },
  {
    slug: "motion-graphics",
    number: "04",
    name: "Motion Graphics",
    short: "Motion",
    pitch: "Animated typography, logos and visuals that give your story momentum.",
    summary:
      "Motion makes information memorable. We create animated typography, logo animations, promotional graphics and brand storytelling pieces for web, social and screen.",
    whoItHelps: [
      "Brands that want their message to stand out in a moving feed",
      "Teams needing animated assets for websites and presentations",
      "Campaigns that need a strong, consistent animated look",
    ],
    deliverables: [
      "Animated typography",
      "Logo animation",
      "Promotional motion design",
      "Digital advertising visuals",
      "Brand storytelling through motion",
      "Social-ready animated assets",
    ],
    value: [
      { title: "Attention", text: "Movement earns the first second — design earns the rest." },
      { title: "Clarity", text: "Complex ideas explained in simple, animated steps." },
      { title: "Reuse", text: "Motion systems that extend across many assets, not one-off clips." },
    ],
    approach: [
      { title: "Script and storyboard", text: "Every piece begins with what it needs to say and in what order." },
      { title: "Design frames", text: "Key frames settle the look before animation starts." },
      { title: "Animate with timing", text: "Rhythm, easing and hierarchy applied with restraint." },
      { title: "Deliver for each platform", text: "Correct formats, sizes and compression for where it will play." },
    ],
    capabilities: ["Kinetic type", "Logo animation", "Promo motion", "Ad visuals", "Storytelling"],
    categories: ["motion-graphics"],
    art: "title",
    metaDescription:
      "Motion graphics by Zen-C Solutions: animated typography, logo animation, promotional motion design and brand storytelling.",
  },
  {
    slug: "video-editing",
    number: "05",
    name: "Video Editing & Content Production",
    short: "Video",
    pitch: "Promotional and short-form video edited for rhythm, clarity and platform.",
    summary:
      "We edit promotional films, short-form social content and branded video, and prepare campaign assets in the right formats for every platform.",
    whoItHelps: [
      "Businesses with footage that needs shaping into something sharp",
      "Brands producing regular short-form social content",
      "Campaign teams needing multiple cuts from one shoot",
    ],
    deliverables: [
      "Promotional videos",
      "Social media edits",
      "Short-form content",
      "Branded video",
      "Campaign assets",
      "Platform-ready creative and cut-downs",
    ],
    value: [
      { title: "Pace", text: "Edits structured to hold attention from the first second." },
      { title: "Consistency", text: "Branded intros, captions and graphics applied across every video." },
      { title: "Efficiency", text: "One edit planned for many aspect ratios and platforms." },
    ],
    approach: [
      { title: "Review and plan", text: "We assess footage and set the structure before cutting." },
      { title: "Assemble", text: "A rough cut establishes story and rhythm." },
      { title: "Polish", text: "Colour, sound, graphics and captions." },
      { title: "Export", text: "Delivered in the formats each platform needs." },
    ],
    capabilities: ["Promo films", "Short-form", "Branded video", "Cut-downs", "Captions"],
    categories: ["video-editing"],
    art: "edit",
    metaDescription:
      "Video editing and content production by Zen-C Solutions: promotional videos, short-form social edits and platform-ready branded content.",
  },
  {
    slug: "advertising-campaigns",
    number: "06",
    name: "Advertising & Campaign Management",
    short: "Advertising",
    pitch: "Paid campaigns planned, launched and monitored with creative that earns its budget.",
    summary:
      "We plan campaigns, set up paid media, produce creative variations, define audiences, run tests and monitor performance where this is part of the agreed scope. We don't promise specific results — we promise a clear process and honest reporting.",
    whoItHelps: [
      "Businesses ready to put budget behind their message",
      "Brands that need creative and campaign set-up under one roof",
      "Teams wanting structured testing rather than guesswork",
    ],
    deliverables: [
      "Campaign planning",
      "Paid media setup",
      "Creative variations",
      "Audience targeting",
      "Testing structure",
      "Performance monitoring and reporting",
    ],
    value: [
      { title: "Joined-up", text: "Creative, targeting and measurement planned together." },
      { title: "Tested", text: "Variations compared deliberately so decisions come from evidence." },
      { title: "Transparent", text: "You see what is running, what it costs and what we are learning." },
    ],
    approach: [
      { title: "Plan", text: "Objectives, audiences, budget logic and measurement defined first." },
      { title: "Set up", text: "Accounts, tracking and creative prepared correctly." },
      { title: "Test", text: "Creative and audience variations compared in a structured way." },
      { title: "Monitor and refine", text: "Regular review and adjustment within the agreed scope." },
    ],
    capabilities: ["Planning", "Paid media", "Creative variants", "Targeting", "Reporting"],
    categories: ["advertising"],
    art: "social",
    artVariant: 1,
    metaDescription:
      "Advertising and campaign management by Zen-C Solutions: campaign planning, paid media setup, creative variations, testing and transparent reporting.",
  },
  {
    slug: "social-media-management",
    number: "07",
    name: "Social Media Management",
    short: "Social",
    pitch: "Planned, designed and published — a consistent presence without the daily scramble.",
    summary:
      "We plan content, create platform-specific visuals, publish on a schedule and manage accounts so your brand shows up consistently. Scope varies by engagement, and we are explicit about which activities are included.",
    whoItHelps: [
      "Businesses with no time to post consistently",
      "Brands whose social visuals feel disconnected from the rest of their identity",
      "Teams wanting a clear content rhythm and creative direction",
    ],
    deliverables: [
      "Content planning",
      "Publishing and scheduling",
      "Visual consistency across posts",
      "Creative direction",
      "Platform-specific content",
      "Account management",
    ],
    value: [
      { title: "Consistency", text: "A steady rhythm of content that looks like one brand." },
      { title: "Fit", text: "Content shaped for each platform rather than copied between them." },
      { title: "Clarity", text: "A defined scope so you always know what is and isn't included." },
    ],
    approach: [
      { title: "Audit and align", text: "Review existing accounts and agree goals and tone." },
      { title: "Plan the rhythm", text: "A content calendar balancing formats and themes." },
      { title: "Create and publish", text: "Design, copy and scheduling handled to the agreed scope." },
      { title: "Review", text: "Regular check-ins on what's working and what to change." },
    ],
    capabilities: ["Planning", "Publishing", "Visual identity", "Creative direction", "Account care"],
    categories: ["social-media"],
    art: "social",
    artVariant: 2,
    metaDescription:
      "Social media management by Zen-C Solutions: content planning, platform-specific creative, publishing and account management with a clearly defined scope.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export function adjacentServices(slug: string) {
  const i = services.findIndex((s) => s.slug === slug);
  return {
    prev: services[(i - 1 + services.length) % services.length],
    next: services[(i + 1) % services.length],
  };
}

export const processSteps = [
  { n: "01", title: "Discover", text: "Understand the business, audience and goal." },
  { n: "02", title: "Define", text: "Set direction, scope and priorities." },
  { n: "03", title: "Create", text: "Design and build the solution." },
  { n: "04", title: "Refine", text: "Test, improve and polish." },
  { n: "05", title: "Deliver", text: "Launch and provide the agreed handover or ongoing support." },
] as const;

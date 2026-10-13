/**
 * Portfolio data. Launch content is made of clearly-labelled CONCEPT projects —
 * fictional brands, no clients, no results. To add real work later:
 *   1. add an entry below (or swap one out),
 *   2. drop images in /public/images/projects/<slug>/ and set `media.image`,
 *   3. optionally set `liveUrl` and a `status` of "Live project".
 * No component logic needs to change.
 */

export type CategorySlug =
  | "web-development"
  | "e-commerce"
  | "software"
  | "graphic-design"
  | "motion-graphics"
  | "video-editing"
  | "advertising"
  | "social-media";

export interface Category {
  slug: CategorySlug;
  label: string;
  serviceHref: string;
}

export const categories: Category[] = [
  { slug: "web-development", label: "Web Development", serviceHref: "/services/web-development" },
  { slug: "e-commerce", label: "E-commerce", serviceHref: "/services/web-development" },
  { slug: "software", label: "Software", serviceHref: "/services/software-development" },
  { slug: "graphic-design", label: "Graphic Design", serviceHref: "/services/graphic-design" },
  { slug: "motion-graphics", label: "Motion Graphics", serviceHref: "/services/motion-graphics" },
  { slug: "video-editing", label: "Video Editing", serviceHref: "/services/video-editing" },
  { slug: "advertising", label: "Advertising", serviceHref: "/services/advertising-campaigns" },
  { slug: "social-media", label: "Social Media", serviceHref: "/services/social-media-management" },
];

export const categoryLabel = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)?.label ?? slug;

/** Procedural placeholder artwork used until real media is supplied. */
export type ArtKind =
  | "fashion"
  | "restaurant"
  | "dental"
  | "dashboard"
  | "identity"
  | "title"
  | "edit"
  | "social";

export type ProjectStatus =
  | "Concept project"
  | "Internal experiment"
  | "Speculative design"
  | "Demonstration project"
  | "Live project";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: CategorySlug;
  /** Appears in additional category filters. */
  alsoIn?: CategorySlug[];
  type: string;
  status: ProjectStatus;
  summary: string;
  objective?: string;
  approach?: string[];
  deliverables?: string[];
  technical?: string[];
  art: ArtKind;
  /** Real media — when absent the designed placeholder is shown. */
  media?: { image?: ProjectImage; video?: { src: string; poster?: string } };
  liveUrl?: string;
  /** Short note shown on the case study about what the project demonstrates. */
  demonstrates?: string;
}

export const projects: Project[] = [
  {
    slug: "maison-nuit",
    number: "01",
    title: "Maison Nuit",
    category: "e-commerce",
    type: "Fashion e-commerce experience",
    status: "Concept project",
    art: "fashion",
    summary:
      "A speculative storefront for a fictional eveningwear label — editorial imagery first, with a frictionless path from lookbook to bag.",
    objective:
      "Explore how an online store can feel like a fashion editorial without slowing the shopper down.",
    approach: [
      "Product pages designed as editorial spreads, with large-format imagery and quiet typography.",
      "A restrained monochrome interface so the garments carry the colour.",
      "Size selection and bag access that stay one tap away on mobile.",
      "Collection filtering that keeps the layout stable while products change.",
    ],
    deliverables: [
      "Home and collection page concepts",
      "Product detail layout",
      "Mobile bag and checkout flow concept",
      "Interface component set",
    ],
    technical: [
      "Server-rendered catalogue pages for fast first paint",
      "Responsive, optimised image delivery with reserved aspect ratios",
      "Headless-commerce integration pattern (concept stage)",
    ],
    demonstrates: "Art-directed e-commerce layout and mobile purchase flow design.",
  },
  // {
  //   slug: "ember-and-salt",
  //   number: "02",
  //   title: "Ember & Salt",
  //   category: "web-development",
  //   type: "Luxury restaurant website",
  //   status: "Speculative design",
  //   art: "restaurant",
  //   summary:
  //     "A moody, type-led website for a fictional fine-dining restaurant: menu, atmosphere and reservations in one quiet scroll.",
  //   objective:
  //     "Create a site that sells an atmosphere before it sells a table — and still makes booking effortless.",
  //   approach: [
  //     "Large dark compositions with a single focal image per section.",
  //     "Menu typography designed for slow reading, not scanning.",
  //     "A persistent reservation action that never obscures the content.",
  //   ],
  //   deliverables: [
  //     "Home, menu and reservation page designs",
  //     "Responsive layout system",
  //     "Motion direction for section transitions",
  //   ],
  //   technical: [
  //     "Static-first rendering with lightweight enhancement",
  //     "Accessible reservation form pattern",
  //     "Motion that respects reduced-motion preferences",
  //   ],
  //   demonstrates: "Atmospheric brand storytelling on the web with a clear conversion path.",
  // },

  {
  slug: "ember-and-salt",
  number: "02",
  title: "Ember & Salt",
  category: "web-development",
  type: "Luxury restaurant website",
  status: "Speculative design",
  art: "restaurant",
  summary:
    "A moody, type-led website for a fictional fine-dining restaurant: menu, atmosphere and reservations in one quiet scroll.",
  objective:
    "Create a site that sells an atmosphere before it sells a table — and still makes booking effortless.",
  approach: [
    "Large dark compositions with a single focal image per section.",
    "Menu typography designed for slow reading, not scanning.",
    "A persistent reservation action that never obscures the content.",
  ],
  deliverables: [
    "Home, menu and reservation page designs",
    "Responsive layout system",
    "Motion direction for section transitions",
  ],
  technical: [
    "Static-first rendering with lightweight enhancement",
    "Accessible reservation form pattern",
    "Motion that respects reduced-motion preferences",
  ],

  media: {
    image: {
      src: "/images/projects/ember-and-salt/hero.jpg",
      alt: "Atmospheric interior of the Ember and Salt restaurant",
      width: 1600,
      height: 1200,
    },
  },

  demonstrates: "Atmospheric brand storytelling on the web with a clear conversion path.",
},

  {
    slug: "aurel-dental",
    number: "03",
    title: "Aurel Dental",
    category: "web-development",
    type: "Healthcare website",
    status: "Concept project",
    art: "dental",
    summary:
      "A calm, trustworthy website for a fictional dental practice — soft surfaces, clear information and an obvious way to book a visit.",
    objective:
      "Show that a healthcare site can feel reassuring and modern while staying plain-spoken and accessible.",
    approach: [
      "A light, high-contrast palette with generous spacing to reduce visual anxiety.",
      "Treatments explained in short, plain-language blocks.",
      "Booking and contact options reachable from every screen size.",
    ],
    deliverables: [
      "Home, treatments and booking page designs",
      "Accessible colour and type system",
      "Mobile-first layout",
    ],
    technical: [
      "Semantic, accessible markup as the foundation",
      "Local-business structured-data pattern (to be filled with real details)",
    ],
    demonstrates: "Accessible, reassuring design for service businesses.",
  },
  {
    slug: "meridian-console",
    number: "04",
    title: "Meridian Console",
    category: "software",
    type: "Business software dashboard",
    status: "Demonstration project",
    art: "dashboard",
    summary:
      "An operations dashboard concept that turns scattered business activity into one readable, actionable workspace.",
    objective:
      "Design an internal tool that people would actually want to open every morning.",
    approach: [
      "Information hierarchy that puts decisions before data.",
      "Dense but calm tables with clear states and keyboard-friendly interactions.",
      "A modular layout so teams can show only what matters to them.",
    ],
    deliverables: [
      "Dashboard, list and detail views",
      "Component library direction",
      "Workflow concepts for common tasks",
    ],
    technical: [
      "Type-safe data layer pattern (concept stage)",
      "Role-aware interface structure",
      "Integration points for third-party services",
    ],
    demonstrates: "Product-level interface thinking for internal tools and dashboards.",
  },
  {
    slug: "atlas-form",
    number: "05",
    title: "Atlas Form",
    category: "graphic-design",
    type: "Experimental brand identity",
    status: "Internal experiment",
    art: "identity",
    summary:
      "A geometric identity system built from a single construction grid — monogram, wordmark, palette and applications.",
    objective:
      "Test how far one simple geometric rule can carry a complete, flexible brand identity.",
    approach: [
      "A monogram constructed from a shared grid so every mark feels related.",
      "Restricted greyscale palette with one metallic accent.",
      "Typography pairing chosen for contrast between display and text.",
    ],
    deliverables: [
      "Monogram and wordmark",
      "Colour and type system",
      "Stationery and digital application mock-ups",
    ],
    media: { video: { src: "/videos/axiom-mark.mp4", poster: "/images/motion/axiom-mark.webp" } },
    demonstrates: "Systematic visual identity design and brand consistency.",
  },
  {
    slug: "signal-title-sequence",
    number: "06",
    title: "Signal",
    category: "motion-graphics",
    type: "Title sequence concept",
    status: "Concept project",
    art: "title",
    summary:
      "A typographic title sequence concept: scan-lines, kinetic letterforms and a controlled reveal built for the screen.",
    objective:
      "Explore how typography alone can carry a cinematic opening with no footage at all.",
    approach: [
      "Motion built around a strict timing grid so every move lands on a beat.",
      "A reduced palette that keeps the type as the only hero.",
      "Sound-ready structure with clear hit points.",
    ],
    deliverables: ["Storyboard frames", "Typographic motion study", "Delivery-ready format plan"],
    media: { video: { src: "/videos/signal-title.mp4", poster: "/images/motion/signal-title.webp" } },
    demonstrates: "Kinetic typography and motion direction.",
  },
  {
    slug: "cut-24-commercial-edit",
    number: "07",
    title: "Cut 24",
    category: "video-editing",
    type: "Commercial video edit",
    status: "Demonstration project",
    art: "edit",
    summary:
      "A commercial edit exploring pacing, rhythm and sound — how a short film earns attention in the first seconds.",
    objective: "Show how structure and pacing shape a product film, regardless of the footage.",
    approach: [
      "Opening hook designed for muted autoplay environments.",
      "Cuts timed to an audio structure rather than the other way around.",
      "Multiple aspect-ratio deliverables planned from the first assembly.",
    ],
    deliverables: ["Master edit", "Platform-ready cut-downs", "Caption and thumbnail plan"],
    media: { video: { src: "/videos/cut-24-edit.mp4", poster: "/images/motion/cut-24-edit.webp" } },
    demonstrates: "Editing craft, pacing and multi-platform delivery planning.",
  },
  {
    slug: "pulse-social-campaign",
    number: "08",
    title: "Pulse",
    category: "social-media",
    alsoIn: ["advertising"],
    type: "Social advertising campaign",
    status: "Concept project",
    art: "social",
    summary:
      "A campaign concept for a fictional product launch — one idea expressed across feed posts, stories and carousel ads.",
    objective:
      "Design a single visual idea flexible enough to work in every placement without repeating itself.",
    approach: [
      "A modular layout system so creative variations are quick to produce.",
      "Platform-specific crops planned up front, not retrofitted.",
      "A testing structure for comparing creative directions.",
    ],
    deliverables: ["Feed, story and carousel templates", "Creative variation set", "Content rhythm plan"],
    media: { video: { src: "/videos/pulse-loop.mp4", poster: "/images/motion/pulse-loop.webp" } },
    demonstrates: "Campaign thinking and platform-native creative production.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const projectsIn = (cat: CategorySlug) =>
  projects.filter((p) => p.category === cat || p.alsoIn?.includes(cat));

export function adjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

/** Serialisable subset passed to client components. */
export interface ProjectCardData {
  slug: string;
  number: string;
  title: string;
  category: CategorySlug;
  alsoIn?: CategorySlug[];
  type: string;
  status: ProjectStatus;
  art: ArtKind;
  image?: ProjectImage;
}

export const toCard = (p: Project): ProjectCardData => ({
  slug: p.slug,
  number: p.number,
  title: p.title,
  category: p.category,
  alsoIn: p.alsoIn,
  type: p.type,
  status: p.status,
  art: p.art,
  image: p.media?.image,
});

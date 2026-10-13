import type { ArtKind } from "./projects";

/**
 * Motion Lab content. Everything here is placeholder until real footage exists.
 * To publish a video: put the MP4 in /public/videos/ and set `video.src`
 * (and optionally `video.poster`). Until then the item renders as a designed
 * placeholder frame and never pretends to be playing.
 */

export type MotionKind = "Motion graphics" | "Video editing" | "Campaign" | "Social cut";

export interface MotionItem {
  slug: string;
  title: string;
  kind: MotionKind;
  caption: string;
  art: ArtKind;
  artVariant?: 0 | 1 | 2;
  /** CSS aspect-ratio value */
  ratio: "16 / 9" | "9 / 16" | "1 / 1" | "4 / 5";
  status: "Concept project" | "Internal experiment" | "Demonstration project";
  video?: { src: string; poster?: string };
  /** Related portfolio project */
  projectSlug?: string;
}

export const motionKinds: MotionKind[] = [
  "Motion graphics",
  "Video editing",
  "Campaign",
  "Social cut",
];

export const motionItems: MotionItem[] = [
  {
    slug: "signal-title-sequence",
    title: "Signal — Title Sequence",
    kind: "Motion graphics",
    caption: "A typographic opening built from scan-lines and kinetic letterforms.",
    art: "title",
    ratio: "16 / 9",
    status: "Concept project",
    video: { src: "/videos/signal-title.mp4", poster: "/images/motion/signal-title.webp" },
    projectSlug: "signal-title-sequence",
  },
  {
    slug: "cut-24",
    title: "Cut 24 — Commercial Edit",
    kind: "Video editing",
    caption: "Pacing and rhythm study for a product film.",
    art: "edit",
    ratio: "16 / 9",
    status: "Demonstration project",
    video: { src: "/videos/cut-24-edit.mp4", poster: "/images/motion/cut-24-edit.webp" },
    projectSlug: "cut-24-commercial-edit",
  },
  {
    slug: "pulse-story",
    title: "Pulse — Story Cut",
    kind: "Social cut",
    caption: "Vertical story edit from the Pulse launch concept.",
    art: "social",
    artVariant: 1,
    ratio: "9 / 16",
    status: "Concept project",
    projectSlug: "pulse-social-campaign",
  },
  {
    slug: "atlas-logo-motion",
    title: "Atlas — Logo Animation",
    kind: "Motion graphics",
    caption: "Monogram construction animated from the identity grid.",
    art: "identity",
    artVariant: 1,
    ratio: "16 / 9",
    status: "Internal experiment",
    video: { src: "/videos/axiom-mark.mp4", poster: "/images/motion/axiom-mark.webp" },
    projectSlug: "atlas-form",
  },
  {
    slug: "pulse-launch-spot",
    title: "Pulse — Launch Spot",
    kind: "Campaign",
    caption: "Campaign film concept for a fictional product launch.",
    art: "social",
    ratio: "16 / 9",
    status: "Concept project",
    video: { src: "/videos/pulse-loop.mp4", poster: "/images/motion/pulse-loop.webp" },
    projectSlug: "pulse-social-campaign",
  },
  {
    slug: "kinetic-type-study",
    title: "Kinetic Type Study",
    kind: "Motion graphics",
    caption: "Experiments in hierarchy, rhythm and easing with type only.",
    art: "title",
    artVariant: 2,
    ratio: "4 / 5",
    status: "Internal experiment",
  },
];

/** Structure prepared for a future stock-video library. Not a marketplace. */
export const plannedCollections = [
  { title: "Abstract loops", text: "Seamless, brand-neutral backgrounds for web and screen." },
  { title: "Typographic motion", text: "Animated type backdrops and lower-thirds." },
  { title: "Interface motion", text: "Clean UI-style animations for product storytelling." },
];

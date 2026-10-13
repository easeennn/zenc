/**
 * Shared inquiry validation. Used by the client form (instant feedback) AND the
 * /api/contact route (authoritative). Plain TypeScript — no dependency.
 */

export const inquiryServices = [
  "Website Development",
  "Software Development",
  "Graphic Design & Branding",
  "Motion Graphics",
  "Video Editing",
  "Advertising & Campaigns",
  "Social Media Management",
  "Not sure yet",
] as const;

export interface InquiryInput {
  name: string;
  email: string;
  business: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
  /** Honeypot — real visitors never fill this. */
  website: string;
}

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

export const emptyInquiry: InquiryInput = {
  name: "",
  email: "",
  business: "",
  services: [],
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(
  raw: unknown,
):
  | { ok: true; data: InquiryInput; honeypot: boolean }
  | { ok: false; errors: InquiryErrors } {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const str = (v: unknown, max = 4000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

  const data: InquiryInput = {
    name: str(r.name, 120),
    email: str(r.email, 200),
    business: str(r.business, 160),
    services: Array.isArray(r.services)
      ? r.services.filter((s): s is string => typeof s === "string").slice(0, 12)
      : [],
    budget: str(r.budget, 80),
    timeline: str(r.timeline, 80),
    message: str(r.message, 4000),
    website: str(r.website, 200),
  };

  const errors: InquiryErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!data.email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(data.email)) errors.email = "That email address doesn't look right.";
  if (data.services.length === 0) errors.services = "Choose at least one service.";
  if (data.message.length < 20)
    errors.message = "Tell us a little more — at least a couple of sentences.";

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, data, honeypot: data.website.length > 0 };
}

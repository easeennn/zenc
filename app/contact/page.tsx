import type { Metadata } from "next";
import { Lines } from "@/components/ui/Lines";
import { ContactForm } from "@/components/forms/ContactForm";
import { canonicalFor, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Zen-C Solutions about your project — website, software, branding, motion, video, advertising or social media — and we'll respond with how we'd approach it.",
  alternates: canonicalFor("/contact"),
};

const NEXT_STEPS = [
  ["Send your brief", "Share what you're building, who it's for and any timing that matters."],
  ["We review it", "We read what you send and consider how we'd approach it."],
  ["We get back to you", "We reply with questions or a suggested next step."],
];

export default function ContactPage() {
  const { email, phone, location } = siteConfig.contact;
  return (
    <section className="contact shell">
      <div className="contact__intro">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">→</span>Start a project
        </p>
        <Lines as="h1" load className="display display--xl" lines={["TELL US", "WHAT YOU’RE", "BUILDING."]} />
        <p className="lede" data-reveal="">
          A few details are enough to begin. The more you share, the better we can respond.
        </p>

        <ol className="nsteps" data-reveal="">
          {NEXT_STEPS.map(([t, d], i) => (
            <li key={t}>
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>

        {(email || phone || location) && (
          <ul className="direct" data-reveal="">
            {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
            {phone && <li><a href={`tel:${phone}`}>{phone}</a></li>}
            {location && <li>{location}</li>}
          </ul>
        )}
      </div>

      <div className="contact__form" data-reveal="">
        <ContactForm />
      </div>
    </section>
  );
}

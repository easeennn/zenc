import type { Metadata } from "next";
import { Lines } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import { MotionLabGallery } from "@/components/media/MotionLabGallery";
import { FinalCta } from "@/components/home/FinalCta";
import { motionItems, plannedCollections } from "@/lib/motion-lab";
import { canonicalFor } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Motion Lab",
  description:
    "Zen-C's Motion Lab: motion graphics, video editing and campaign film concepts — a curated studio built to grow into a stock-video library.",
  alternates: canonicalFor("/motion-lab"),
};

export default function MotionLabPage() {
  return (
    <>
      <section className="pagehead shell">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">LAB</span>Motion graphics · Video · Campaign film
        </p>
        <Lines as="h1" load className="display display--mega" lines={["MOTION", "LAB."]} />
        <div className="pagehead__row" data-reveal="">
          <p className="lede">
            A curated space for movement: title sequences, edits, campaign films and short-form cuts. Footage is being
            prepared — frames below are clearly marked placeholders until real files are published.
          </p>
          <div className="btn-row">
            <ButtonLink href="/services/motion-graphics">Motion graphics</ButtonLink>
            <ButtonLink href="/services/video-editing" variant="ghost">
              Video editing
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--tight shell" aria-label="Motion Lab gallery">
        <MotionLabGallery items={motionItems} />
      </section>

      <section className="section shell" aria-labelledby="stock-title">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">—</span>Coming later
        </p>
        <Lines id="stock-title" className="display display--l" lines={["A STOCK", "LIBRARY, LATER."]} />
        <p className="lede" data-reveal="">
          The Motion Lab is structured to host a stock-video collection in future. It isn&rsquo;t available yet — there is
          no catalogue, checkout or download — but these are the collections we&rsquo;re planning for.
        </p>
        <ul className="planned">
          {plannedCollections.map((c, i) => (
            <li key={c.title} data-reveal="">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className="chip">Planned</span>
            </li>
          ))}
        </ul>
      </section>

      <FinalCta lines={["NEED MOTION", "FOR YOUR BRAND?"]} text="Tell us what you want to say and where it will play. We'll shape the right format." />
    </>
  );
}

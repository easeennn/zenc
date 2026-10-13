import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";
import { ServiceHeader, ValueGrid, ApproachSteps, WhoItHelps, RelatedWork, ServiceCta, Split } from "@/components/services/Blocks";
import { ContentCalendar } from "@/components/services/Signatures";

const service = getService("social-media-management")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
  alternates: canonicalFor(`/services/${service.slug}`),
};

const SCOPE: [string, string][] = [
  ["Content planning", "Available"],
  ["Platform-specific creative", "Available"],
  ["Publishing & scheduling", "Available"],
  ["Account management", "Available"],
  ["Paid promotion", "Separate — see advertising"],
  ["Video production", "Separate — see video editing"],
];

export default function SocialMediaPage() {
  return (
    <>
      <ServiceHeader
        service={service}
        lines={["SHOW UP.", "CONSISTENTLY."]}
        lede="Planned, designed and published — a coherent presence across platforms, without the daily scramble."
      />
      <section className="shell section section--tight" aria-label="Content rhythm">
        <ContentCalendar />
      </section>
      <Split
        left={<WhoItHelps service={service} />}
        right={
          <div className="sblock">
            <h2 className="sblock__h" data-reveal="">What&rsquo;s in scope</h2>
            <p className="note" data-reveal="">
              Every engagement is scoped individually. Not every activity is included in every package.
            </p>
            <table className="scope" data-reveal="">
              <caption className="sr-only">Social media services and availability</caption>
              <thead>
                <tr>
                  <th scope="col">Activity</th>
                  <th scope="col">Availability</th>
                </tr>
              </thead>
              <tbody>
                {SCOPE.map(([a, b]) => (
                  <tr key={a}>
                    <th scope="row">{a}</th>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      />
      <section className="section section--tight shell">
        <ValueGrid service={service} title="What consistency does for a brand" />
      </section>
      <section className="section section--tight shell">
        <ApproachSteps service={service} title="How an engagement runs" />
      </section>
      <RelatedWork service={service} title="Social concept" />
      <ServiceCta service={service} lines={["LET’S PLAN", "YOUR FEED."]} />
    </>
  );
}

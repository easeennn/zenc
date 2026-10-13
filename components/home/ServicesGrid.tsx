import Link from "next/link";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arrow } from "@/components/ui/Arrow";
import { ProjectMedia } from "@/components/media/ProjectMedia";
import { services } from "@/lib/services";

/** Seven services in one editorial system — website development dominates. */
const SPAN: Record<string, string> = {
  "web-development": "svc--hero",
  "software-development": "svc--tall",
  "graphic-design": "svc--third",
  "motion-graphics": "svc--third",
  "video-editing": "svc--third",
  "advertising-campaigns": "svc--half",
  "social-media-management": "svc--half",
};

export function ServicesGrid({ id = "services-title" }: { id?: string }) {
  return (
    <section className="section shell" aria-labelledby={id}>
      <SectionHead index="03" eyebrow="Services" id={id} lines={["EVERYTHING", "UNDER ONE ROOF."]}>
        <p>Seven connected disciplines. Start with one, or combine several — each can stand alone.</p>
      </SectionHead>
      <ul className="svc-grid">
        {services.map((s) => (
          <li key={s.slug} className={`svc ${SPAN[s.slug]}${s.flagship ? " svc--flagship" : ""}`} data-reveal="">
            <Link href={`/services/${s.slug}`} className="svc__link">
              <div className="svc__media">
                <div className="svc__zoom">
                  <ProjectMedia art={s.art} variant={s.artVariant} sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                {s.flagship && <span className="chip chip--solid svc__flag">Flagship service</span>}
              </div>
              <div className="svc__body">
                <div className="svc__head">
                  <span className="svc__num">{s.number}</span>
                  <h3 className="svc__name">{s.name}</h3>
                  <Arrow direction="up-right" className="svc__arrow" />
                </div>
                <p className="svc__pitch">{s.pitch}</p>
                <ul className="svc__tags" aria-label={`${s.name} capabilities`}>
                  {(s.flagship ? s.capabilities : s.capabilities.slice(0, 3)).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

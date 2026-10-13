import { Lines } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import { getService } from "@/lib/services";
import { DeviceShowcase } from "./DeviceShowcase";

const PRINCIPLES = [
  { t: "Responsive by default", d: "Composed for phones, tablets and large displays — not shrunk from one of them." },
  { t: "Fast by design", d: "Optimised media, lean code and the right rendering strategy for each page." },
  { t: "Motion with purpose", d: "Animation that guides attention and never gets in the way." },
  { t: "Custom functionality", d: "Booking, e-commerce, dashboards and integrations built around your process." },
];

/** The flagship service gets the most visual weight on the homepage. */
export function WebDevShowcase() {
  const web = getService("web-development")!;
  return (
    <section className="section webdev" aria-labelledby="webdev-title">
      <div className="webdev__bg mono" aria-hidden="true">WEB</div>
      <div className="shell">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">02</span>Core capability / {web.name}
        </p>
        <div className="webdev__grid">
          <div className="webdev__copy">
            <Lines
              id="webdev-title"
              className="display display--xl"
              lines={["WEBSITES THAT", "PERFORM,", "NOT JUST", "APPEAR."]}
            />
            <p className="lede" data-reveal="">
              Our flagship service. We design and engineer ambitious digital experiences — premium business sites,
              e-commerce stores and web applications — with the craft of a design studio and the discipline of an
              engineering team.
            </p>
            <ul className="caps" data-reveal="">
              {web.deliverables.slice(0, 8).map((d, i) => (
                <li key={d}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="btn-row" data-reveal="">
              <ButtonLink href="/services/web-development">Explore web development</ButtonLink>
              <ButtonLink href="/work" variant="ghost">
                See website work
              </ButtonLink>
            </div>
          </div>
          <div className="webdev__visual" data-reveal="">
            <DeviceShowcase />
          </div>
        </div>

        <ul className="principles">
          {PRINCIPLES.map((p, i) => (
            <li key={p.t} data-reveal="">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

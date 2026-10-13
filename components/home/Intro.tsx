import { Lines } from "@/components/ui/Lines";

const DISCIPLINES = [
  { n: "01", t: "Strategy", d: "Clear goals before a single pixel." },
  { n: "02", t: "Design", d: "Identity, interface and motion as one system." },
  { n: "03", t: "Engineering", d: "Fast, accessible, maintainable builds." },
  { n: "04", t: "Production", d: "Video, motion and content to carry the message." },
];

export function Intro() {
  return (
    <section className="section intro shell" aria-labelledby="intro-title">
      <p className="eyebrow" data-reveal="">
        <span className="eyebrow__idx">00</span>The studio
      </p>
      <div className="intro__grid">
        <Lines
          id="intro-title"
          className="display display--xl"
          lines={["WE TURN AMBITION", "INTO DIGITAL", "EXPERIENCE."]}
        />
        <div className="intro__body" data-reveal="">
          <p className="lede">
            Zen-C combines strategy, design, engineering and creative production to help businesses present themselves
            better and operate more effectively — whether that means a website, a piece of software, a brand or a
            campaign.
          </p>
        </div>
      </div>
      <ul className="intro__list">
        {DISCIPLINES.map((d) => (
          <li key={d.n} data-reveal="">
            <span className="mono">{d.n}</span>
            <h3>{d.t}</h3>
            <p>{d.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { ConceptArt } from "@/components/media/ConceptArt";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { BrowserFrame, PhoneFrame } from "@/components/media/BrowserFrame";

/**
 * One signature visual per service so the seven pages don't share a skeleton.
 * All are server-rendered, CSS/SVG based and carry honest "illustrative" labels.
 */

/* 01 — Web: layered device composition */
export function WebStack() {
  return (
    <div className="wstack">
      <div className="wstack__main" data-parallax="0.5">
        <BrowserFrame label="concept://maison-nuit">
          <ConceptArt kind="fashion" />
        </BrowserFrame>
      </div>
      <div className="wstack__side" data-parallax="1.2">
        <BrowserFrame label="concept://ember-and-salt">
          <ConceptArt kind="restaurant" />
        </BrowserFrame>
      </div>
      <div className="wstack__phone" data-parallax="1.6">
        <PhoneFrame>
          <ConceptArt kind="dental" variant={1} />
        </PhoneFrame>
      </div>
    </div>
  );
}

/* 02 — Software: dashboard + module map */
export function DashboardSpec() {
  const modules = [
    "Overview",
    "Records & tables",
    "Workflows",
    "Approvals",
    "Reports",
    "Roles & access",
    "Integrations",
    "Notifications",
  ];
  return (
    <div className="dspec">
      <div className="dspec__ui" data-mask="">
        <div className="mask__in">
          <ConceptArt kind="dashboard" />
        </div>
      </div>
      <div className="dspec__mods">
        <p className="mono">Typical building blocks</p>
        <ul>
          {modules.map((m, i) => (
            <li key={m} data-reveal="">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              {m}
            </li>
          ))}
        </ul>
        <p className="note">Illustrative modules. Every build is scoped to the actual workflow.</p>
      </div>
    </div>
  );
}

/* 03 — Graphic design: identity mosaic */
export function IdentityGallery() {
  return (
    <div className="igal">
      <figure className="igal__a" data-mask="">
        <div className="mask__in"><ConceptArt kind="identity" /></div>
      </figure>
      <figure className="igal__b" data-mask="">
        <div className="mask__in"><ConceptArt kind="identity" variant={1} /></div>
      </figure>
      <figure className="igal__c" data-mask="">
        <div className="mask__in"><ConceptArt kind="identity" variant={2} /></div>
      </figure>
      <div className="igal__type" data-reveal="">
        <span className="igal__aa" aria-hidden="true">Aa</span>
        <p className="mono">Display / Text / Mono</p>
        <p>Type pairing chosen for contrast.</p>
      </div>
      <div className="igal__swatches" data-reveal="" role="img" aria-label="Greyscale colour palette from white to near-black">
        {["#f5f5f5", "#c5c7ca", "#8d9096", "#3a3a3a", "#181818"].map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

/* 04 — Motion: kinetic type stage (CSS only, stops under reduced motion) */
export function TypeStage() {
  const words = ["MOVE", "REVEAL", "TELL", "LAND"];
  return (
    <div className="tstage" aria-hidden="true">
      <div className="tstage__words">
        {words.map((w, i) => (
          <span key={w} style={{ ["--i" as string]: i }}>
            {w}
          </span>
        ))}
      </div>
      <div className="tstage__rule">
        <i />
      </div>
      <p className="mono tstage__label">Kinetic type — study</p>
    </div>
  );
}

/* 05 — Video: three aspect ratios, click-to-play */
export function VideoStrip() {
  return (
    <div className="vstrip">
      <figure className="vstrip__a" data-reveal="">
        <VideoPlayer title="Cut 24 — commercial edit concept" art="edit" ratio="16 / 9" src="/videos/cut-24-edit.mp4" poster="/images/motion/cut-24-edit.webp" />
        <figcaption className="mono">16:9 — promotional edit</figcaption>
      </figure>
      <figure className="vstrip__b" data-reveal="">
        <VideoPlayer title="Vertical story cut concept" art="social" artVariant={1} ratio="9 / 16" />
        <figcaption className="mono">9:16 — short-form</figcaption>
      </figure>
      <figure className="vstrip__c" data-reveal="">
        <VideoPlayer title="Square feed cut concept" art="identity" artVariant={1} ratio="1 / 1" />
        <figcaption className="mono">1:1 — feed</figcaption>
      </figure>
    </div>
  );
}

/* 06 — Advertising: campaign loop */
export function CampaignLoop() {
  const stages = ["Plan", "Set up", "Test creative", "Monitor", "Refine"];
  return (
    <div className="cloop">
      <ol className="cloop__stages">
        {stages.map((s, i) => (
          <li key={s} data-reveal="">
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </li>
        ))}
        <li className="cloop__back" aria-hidden="true">↺ repeat</li>
      </ol>
      <div className="cloop__variants" aria-label="Creative variation examples">
        {[0, 1, 2].map((v) => (
          <div key={v} className="cloop__v" data-mask="">
            <div className="mask__in"><ConceptArt kind="social" variant={v as 0 | 1 | 2} /></div>
            <span className="chip">Variant {String.fromCharCode(65 + v)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 07 — Social: weekly rhythm */
export function ContentCalendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const plan: (string | null)[][] = [
    ["Carousel", null, "Reel", null, "Static", null, "Story"],
    [null, "Story", null, "Carousel", null, "Reel", null],
    ["Static", null, "Story", null, "Reel", null, null],
  ];
  return (
    <div className="ccal" role="table" aria-label="Illustrative weekly content rhythm">
      <div className="ccal__row ccal__row--head" role="row">
        {days.map((d) => (
          <span key={d} role="columnheader" className="mono">{d}</span>
        ))}
      </div>
      {plan.map((row, r) => (
        <div className="ccal__row" role="row" key={r}>
          {row.map((cell, c) => (
            <span key={c} role="cell" className={cell ? "ccal__cell" : "ccal__cell ccal__cell--empty"}>
              {cell ?? <span className="sr-only">No post</span>}
            </span>
          ))}
        </div>
      ))}
      <p className="note">Illustrative rhythm only — formats and frequency are agreed per engagement.</p>
    </div>
  );
}

import Link from "next/link";
import { Lines } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectMedia } from "@/components/media/ProjectMedia";
import { motionItems } from "@/lib/motion-lab";

/**
 * Cinematic but cheap: poster frames only. No <video> is mounted on the
 * homepage, so nothing downloads or plays until the visitor opens the Motion Lab.
 */
export function MotionPreview() {
  const [feature, ...rest] = motionItems;
  const small = [motionItems[2], motionItems[3], motionItems[4]];
  void rest;

  return (
    <section className="section mlab" aria-labelledby="mlab-title">
      <div className="shell">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">04</span>Motion Lab
        </p>
        <div className="mlab__head">
          <Lines id="mlab-title" className="display display--xl" lines={["MOTION,", "IN FRAME."]} />
          <div data-reveal="">
            <p className="lede">
              Title sequences, edits, campaign films and short-form cuts. A curated studio for motion graphics and
              video — built to grow into a stock-footage library.
            </p>
            <ButtonLink href="/motion-lab">Enter the Motion Lab</ButtonLink>
          </div>
        </div>

        <div className="mlab__grid">
          <Link href="/motion-lab" className="mfeature" data-mask="">
            <div className="mask__in">
              <div className="mfeature__zoom" data-parallax="0.6">
                <ProjectMedia art={feature.art} sizes="(min-width: 1024px) 66vw, 100vw" />
              </div>
            </div>
            <span className="mfeature__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M8 5.5v13l11-6.5Z" fill="currentColor" />
              </svg>
            </span>
            <span className="mfeature__meta">
              <span className="chip">{feature.kind}</span>
              <span className="mfeature__title">{feature.title}</span>
            </span>
          </Link>

          <ul className="mlab__side">
            {small.map((m) => (
              <li key={m.slug} data-reveal="">
                <Link href="/motion-lab" className="mthumb">
                  <span className="mthumb__img">
                    <ProjectMedia art={m.art} variant={m.artVariant} sizes="200px" />
                  </span>
                  <span className="mthumb__text">
                    <span className="mono">{m.kind}</span>
                    <span>{m.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

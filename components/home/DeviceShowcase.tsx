"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BrowserFrame, PhoneFrame } from "@/components/media/BrowserFrame";
import { ConceptArt } from "@/components/media/ConceptArt";
import type { ArtKind } from "@/lib/projects";

interface Concept {
  id: string;
  label: string;
  url: string;
  art: ArtKind;
}

const CONCEPTS: Concept[] = [
  { id: "maison", label: "Maison Nuit", url: "concept://maison-nuit", art: "fashion" },
  { id: "ember", label: "Ember & Salt", url: "concept://ember-and-salt", art: "restaurant" },
  { id: "aurel", label: "Aurel Dental", url: "concept://aurel-dental", art: "dental" },
];

/** Desktop + phone presentation of the same concept; tabs switch concepts. */
export function DeviceShowcase() {
  const [active, setActive] = useState(0);
  const c = CONCEPTS[active];

  return (
    <div className="devices">
      <div className="devices__tabs" role="group" aria-label="Website concepts">
        {CONCEPTS.map((x, i) => (
          <button key={x.id} type="button" className="dtab" aria-pressed={active === i} onClick={() => setActive(i)}>
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            {x.label}
          </button>
        ))}
      </div>

      <div className="devices__stage">
        <div className="devices__desktop" data-parallax="0.5">
          <BrowserFrame label={c.url}>
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={c.id}
                className="devices__screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ConceptArt kind={c.art} />
              </motion.div>
            </AnimatePresence>
          </BrowserFrame>
        </div>

        <div className="devices__phone" data-parallax="1.4">
          <PhoneFrame>
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={c.id}
                className="devices__screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ConceptArt kind={c.art} variant={1} />
              </motion.div>
            </AnimatePresence>
          </PhoneFrame>
        </div>

        <p className="devices__caption mono" aria-live="polite">
          {c.label} — concept project, desktop and mobile
        </p>
      </div>
    </div>
  );
}

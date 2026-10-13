"use client";

import { useState } from "react";
import type { ArtKind } from "@/lib/projects";
import { ConceptArt } from "./ConceptArt";

interface Props {
  title: string;
  art: ArtKind;
  artVariant?: 0 | 1 | 2;
  ratio?: string;
  src?: string;
  poster?: string;
  autoPlay?: boolean;
}

/**
 * Click-to-play video. Shows a poster first; the <video> element (with native,
 * keyboard-accessible controls) is only mounted after the visitor asks to play,
 * so nothing downloads or autoplays on page load. When no file has been
 * supplied it renders an honest placeholder frame — it never pretends to play.
 */
export function VideoPlayer({ title, art, artVariant = 0, ratio = "16 / 9", src, poster, autoPlay }: Props) {
  const [playing, setPlaying] = useState(Boolean(autoPlay && src));

  if (!src) {
    return (
      <div className="video video--pending" style={{ aspectRatio: ratio }}>
        <ConceptArt kind={art} variant={artVariant} />
        <div className="video__overlay">
          <span className="chip chip--solid">Placeholder</span>
          <p className="video__note">Footage for this piece hasn&rsquo;t been published yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video" style={{ aspectRatio: ratio }}>
      {playing ? (
        <video controls autoPlay playsInline preload="metadata" poster={poster} aria-label={title}>
          <source src={src} />
          Your browser can&rsquo;t play this video.
        </video>
      ) : (
        <>
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={poster} alt="" className="video__poster" loading="lazy" />
          ) : (
            <ConceptArt kind={art} variant={artVariant} />
          )}
          <button type="button" className="video__play" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5Z" fill="currentColor" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

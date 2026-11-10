// 'use client';

// import type { CSSProperties } from 'react';

// export type LibraniAyerHeroProps = {
//   /** Background image URL, import, or public path such as "/images/hero.jpg". */
//   backgroundImage: string;
//   title?: string;
//   description?: string;
//   catalogLabel?: string;
//   catalogHref?: string;
//   className?: string;
// };

// const defaultDescription =
//   'Our collection of modern hoodies combines cutting-edge trends with unmatched comfort. Perfect for any occasion, from a relaxed casual look to an active day. Find your perfect hoodie today!';

// export default function LibraniAyerHero({
//   backgroundImage,
//   title = 'LIBRANI AYER',
//   description = defaultDescription,
//   catalogLabel = 'CATALOG',
//   catalogHref = '#catalog',
//   className = '',
// }: LibraniAyerHeroProps) {
//   return (
//     <section
//       className={`librani-hero ${className}`.trim()}
//       style={{ '--hero-image': `url("${backgroundImage}")` } as CSSProperties}
//       aria-labelledby="librani-ayer-title"
//     >
//       <div className="librani-hero__image" aria-hidden="true" />
//       <div className="librani-hero__tint" aria-hidden="true" />
//       <div className="librani-hero__vignette" aria-hidden="true" />

//       <div className="librani-hero__content">
//         <h1 id="librani-ayer-title" className="librani-hero__title">
//           {title}
//         </h1>

//         <p className="librani-hero__description">{description}</p>

//         <a className="librani-hero__catalog" href={catalogHref}>
//           <span>{catalogLabel}</span>
//           <i aria-hidden="true" />
//         </a>
//       </div>

//       <style jsx>{`
//         .librani-hero {
//           --hero-image: none;
//           position: relative;
//           isolation: isolate;
//           display: flex;
//           width: 100%;
//           min-height: clamp(30rem, 56.25vw, 52rem);
//           overflow: hidden;
//           color: #fff;
//           background: #10191a;
//           font-family: Arial, Helvetica, sans-serif;
//         }

//         .librani-hero__image,
//         .librani-hero__tint,
//         .librani-hero__vignette {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//         }

//         .librani-hero__image {
//           z-index: -3;
//           background-image: var(--hero-image);
//           background-position: center center;
//           background-repeat: no-repeat;
//           background-size: cover;
//           transform: scale(1.002);
//         }

//         .librani-hero__tint {
//           z-index: -2;
//           background:
//             linear-gradient(90deg, rgba(3, 12, 14, 0.62) 0%, rgba(3, 12, 14, 0.2) 42%, rgba(3, 12, 14, 0.03) 74%),
//             linear-gradient(0deg, rgba(2, 9, 10, 0.3) 0%, transparent 45%, rgba(2, 9, 10, 0.06) 100%);
//         }

//         .librani-hero__vignette {
//           z-index: -1;
//           background: radial-gradient(ellipse at center, transparent 46%, rgba(0, 0, 0, 0.24) 100%);
//         }

//         .librani-hero__content {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;
//           width: min(100%, 92rem);
//           min-height: inherit;
//           box-sizing: border-box;
//           margin: 0 auto;
//           padding: clamp(2rem, 8vw, 7.5rem) clamp(1.25rem, 6vw, 7rem);
//         }

//         .librani-hero__title {
//           max-width: 95%;
//           margin: 0;
//           color: #f8faf9;
//           font-family: 'Arial Narrow', 'Roboto Condensed', Impact, Haettenschweiler, sans-serif;
//           font-size: clamp(3.4rem, 10.7vw, 10rem);
//           font-stretch: condensed;
//           font-weight: 900;
//           letter-spacing: -0.065em;
//           line-height: 0.82;
//           text-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
//           white-space: nowrap;
//         }

//         .librani-hero__description {
//           width: min(34rem, 54vw);
//           margin: clamp(1.1rem, 2vw, 1.65rem) 0 0;
//           color: rgba(255, 255, 255, 0.78);
//           font-size: clamp(0.62rem, 0.72vw, 0.82rem);
//           font-weight: 400;
//           letter-spacing: 0.01em;
//           line-height: 1.38;
//           text-wrap: pretty;
//         }

//         .librani-hero__catalog {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.45rem;
//           margin-top: clamp(1.5rem, 3vw, 2.7rem);
//           color: #e7ed28;
//           font-family: Arial, Helvetica, sans-serif;
//           font-size: clamp(0.75rem, 1vw, 1rem);
//           font-weight: 500;
//           letter-spacing: 0.025em;
//           line-height: 1;
//           text-decoration: none;
//           transition: color 180ms ease, transform 180ms ease;
//         }

//         .librani-hero__catalog span {
//           border-bottom: 1px solid currentColor;
//           padding-bottom: 0.2rem;
//         }

//         .librani-hero__catalog i {
//           display: block;
//           width: 0.5rem;
//           height: 0.5rem;
//           border-top: 1px solid currentColor;
//           border-right: 1px solid currentColor;
//           transform: rotate(45deg);
//           transition: transform 180ms ease;
//         }

//         .librani-hero__catalog:hover {
//           color: #ffff66;
//           transform: translateX(0.15rem);
//         }

//         .librani-hero__catalog:hover i {
//           transform: rotate(45deg) translate(0.12rem, -0.12rem);
//         }

//         .librani-hero__catalog:focus-visible {
//           outline: 2px solid #e7ed28;
//           outline-offset: 0.45rem;
//         }

//         @media (max-width: 700px) {
//           .librani-hero {
//             min-height: max(32rem, 100svh);
//           }

//           .librani-hero__image {
//             background-position: 62% center;
//           }

//           .librani-hero__content {
//             justify-content: flex-end;
//             padding: 2rem 1.25rem 3rem;
//           }

//           .librani-hero__title {
//             max-width: 100%;
//             font-size: clamp(3.1rem, 15vw, 6rem);
//             line-height: 0.86;
//             white-space: normal;
//           }

//           .librani-hero__description {
//             width: min(24rem, 88vw);
//             font-size: 0.72rem;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .librani-hero__catalog,
//           .librani-hero__catalog i {
//             transition: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

'use client';

import type { CSSProperties } from 'react';

export type LibraniAyerHeroProps = {
  /** Background image URL, import, or public path such as "/images/hero.jpg". */
  backgroundImage: string;
  title?: string;
  description?: string;
  catalogLabel?: string;
  catalogHref?: string;
  className?: string;
};

const defaultDescription =
  'Our collection of modern hoodies combines cutting-edge trends with unmatched comfort. Perfect for any occasion, from a relaxed casual look to an active day. Find your perfect hoodie today!';

export default function LibraniAyerHero({
  backgroundImage,
  title = 'LIBRANI AYER',
  description = defaultDescription,
  catalogLabel = 'CATALOG',
  catalogHref = '#catalog',
  className = '',
}: LibraniAyerHeroProps) {
  return (
    <section
      className={`librani-hero ${className}`.trim()}
      style={{ '--hero-image': `url("${backgroundImage}")` } as CSSProperties}
      aria-labelledby="librani-ayer-title"
    >
      <div className="librani-hero__image" aria-hidden="true" />
      <div className="librani-hero__tint" aria-hidden="true" />
      <div className="librani-hero__vignette" aria-hidden="true" />

      <div className="librani-hero__content">
        <h1 id="librani-ayer-title" className="librani-hero__title">
          {title}
        </h1>

        <p className="librani-hero__description">{description}</p>

        <a className="librani-hero__catalog" href={catalogHref}>
          <span>{catalogLabel}</span>
          <i aria-hidden="true" />
        </a>
      </div>

      <style jsx>{`
        .librani-hero {
          --hero-image: none;
          position: relative;
          isolation: isolate;
          display: flex;
          width: 100%;
          min-height: clamp(30rem, 56.25vw, 52rem);
          overflow: hidden;
          color: #fff;
          background: #10191a;
          font-family: Arial, Helvetica, sans-serif;
        }

        .librani-hero__image,
        .librani-hero__tint,
        .librani-hero__vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .librani-hero__image {
          z-index: -3;
          background-image: var(--hero-image);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          transform: scale(1.002);
        }

        .librani-hero__tint {
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(3, 12, 14, 0.62) 0%, rgba(3, 12, 14, 0.2) 42%, rgba(3, 12, 14, 0.03) 74%),
            linear-gradient(0deg, rgba(2, 9, 10, 0.3) 0%, transparent 45%, rgba(2, 9, 10, 0.06) 100%);
        }

        .librani-hero__vignette {
          z-index: -1;
          background: radial-gradient(ellipse at center, transparent 46%, rgba(0, 0, 0, 0.24) 100%);
        }

        .librani-hero__content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          width: min(100%, 92rem);
          min-height: inherit;
          box-sizing: border-box;
          margin: 0 auto;
          padding: clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 6vw, 7rem) clamp(3.25rem, 8vw, 7.5rem);
        }

        .librani-hero__title {
          max-width: min(95%, 82rem);
          margin: 0;
          color: #f8faf9;
          font-family: 'Arial Narrow', 'Roboto Condensed', Impact, Haettenschweiler, sans-serif;
          font-size: clamp(3.4rem, 10.7vw, 10rem);
          font-stretch: condensed;
          font-weight: 900;
          letter-spacing: -0.065em;
          line-height: 0.82;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
        }

        .librani-hero__description {
          width: min(34rem, 54vw);
          margin: clamp(1.1rem, 2vw, 1.65rem) 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(0.62rem, 0.72vw, 0.82rem);
          font-weight: 400;
          letter-spacing: 0.01em;
          line-height: 1.38;
          text-wrap: pretty;
        }

        .librani-hero__catalog {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          margin-top: clamp(1.5rem, 3vw, 2.7rem);
          color: #e7ed28;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(0.75rem, 1vw, 1rem);
          font-weight: 500;
          letter-spacing: 0.025em;
          line-height: 1;
          text-decoration: none;
          transition: color 180ms ease, transform 180ms ease;
        }

        .librani-hero__catalog span {
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.2rem;
        }

        .librani-hero__catalog i {
          display: block;
          width: 0.5rem;
          height: 0.5rem;
          border-top: 1px solid currentColor;
          border-right: 1px solid currentColor;
          transform: rotate(45deg);
          transition: transform 180ms ease;
        }

        .librani-hero__catalog:hover {
          color: #ffff66;
          transform: translateX(0.15rem);
        }

        .librani-hero__catalog:hover i {
          transform: rotate(45deg) translate(0.12rem, -0.12rem);
        }

        .librani-hero__catalog:focus-visible {
          outline: 2px solid #e7ed28;
          outline-offset: 0.45rem;
        }

        @media (max-width: 700px) {
          .librani-hero {
            min-height: max(32rem, 100svh);
          }

          .librani-hero__image {
            background-position: 62% center;
          }

          .librani-hero__content {
            justify-content: flex-end;
            padding: 2rem 1.25rem 3rem;
          }

          .librani-hero__title {
            max-width: 100%;
            font-size: clamp(3.1rem, 15vw, 6rem);
            line-height: 0.86;
            white-space: normal;
          }

          .librani-hero__description {
            width: min(24rem, 88vw);
            font-size: 0.72rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .librani-hero__catalog,
          .librani-hero__catalog i {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

import type { JSX, ReactNode } from "react";
import type { ArtKind } from "@/lib/projects";

/**
 * Designed placeholder artwork for concept projects. Pure SVG, no network, no
 * client JS. Each `kind` is a small art-directed composition in the Zen-C
 * monochrome language. `variant` crops into a detail of the same composition,
 * which is how case studies get "selected visuals" from one source.
 *
 * Replace with real imagery by setting `media.image` on a project — see
 * components/media/ProjectMedia.tsx.
 */

const D = "var(--font-display), 'Barlow Condensed', 'Arial Narrow', Impact, sans-serif";
const M = "var(--font-mono), ui-monospace, 'SFMono-Regular', monospace";
const VIEWBOX = ["0 0 800 600", "0 0 470 352", "330 248 470 352"] as const;

function Fashion() {
  return (
    <>
      <rect width="800" height="600" fill="#d6d7d9" />
      <rect x="480" width="320" height="600" fill="#0b0b0b" />
      <path d="M96 600V262a164 164 0 0 1 328 0v338Z" fill="#bcbec2" />
      <path d="M96 600V262a164 164 0 0 1 328 0v338Z" fill="none" stroke="#9b9ea3" strokeWidth="1" />
      <ellipse cx="260" cy="196" rx="30" ry="40" fill="#161616" />
      <path d="M222 244q38-14 76 0l46 98 12 258H164l12-258Z" fill="#111" />
      <path d="M260 250l3 350" stroke="#3a3a3a" strokeWidth="2" />
      <path d="M196 340q64 34 128 0" stroke="#2d2d2d" strokeWidth="2" fill="none" />
      <path d="M230 600l14-170M290 600l-14-170" stroke="#262626" strokeWidth="1.5" />
      <text transform="translate(548 572) rotate(-90)" fontFamily={D} fontWeight="700" fontSize="118" fill="#f5f5f5" letterSpacing="2" textLength="520" lengthAdjust="spacingAndGlyphs">MAISON NUIT</text>
      <rect x="640" y="48" width="116" height="148" fill="#1b1b1b" stroke="#ffffff" strokeOpacity=".14" />
      <rect x="640" y="212" width="116" height="148" fill="#161616" stroke="#ffffff" strokeOpacity=".14" />
      <path d="M660 140q38-60 76 0v56h-76z" fill="#3a3a3a" />
      <path d="M660 300q38-50 76 0v60h-76z" fill="#2b2b2b" />
      <rect x="640" y="372" width="70" height="6" fill="#c5c7ca" />
      <rect x="640" y="388" width="40" height="5" fill="#555" />
      <rect x="40" y="36" width="60" height="6" fill="#0b0b0b" />
      <rect x="40" y="52" width="38" height="5" fill="#6d6f73" />
      <circle cx="430" cy="48" r="5" fill="#0b0b0b" />
      <circle cx="450" cy="48" r="5" fill="none" stroke="#0b0b0b" strokeWidth="1.5" />
      <rect x="40" y="520" width="150" height="40" fill="#0b0b0b" />
      <text x="115" y="546" textAnchor="middle" fontFamily={M} fontSize="13" letterSpacing="2" fill="#f5f5f5">ADD TO BAG</text>
    </>
  );
}

function Restaurant() {
  return (
    <>
      <rect width="800" height="600" fill="#0a0a0a" />
      <g fill="none" stroke="#fff">
        <circle cx="548" cy="300" r="250" strokeOpacity=".07" />
        <circle cx="548" cy="300" r="214" strokeOpacity=".12" />
        <circle cx="548" cy="300" r="182" fill="#121212" strokeOpacity=".2" />
        <circle cx="548" cy="300" r="128" strokeOpacity=".16" />
        <circle cx="548" cy="300" r="70" fill="#1a1a1a" strokeOpacity=".24" />
      </g>
      <path d="M498 290c18-34 56-34 78 0-22 34-60 34-78 0Z" fill="#cfd0d3" fillOpacity=".92" />
      <path d="M510 292c14-14 40-16 56 0" stroke="#0a0a0a" strokeWidth="2" fill="none" />
      <circle cx="610" cy="246" r="9" fill="#c5c7ca" />
      <circle cx="466" cy="344" r="6" fill="#8d9096" />
      <circle cx="620" cy="350" r="5" fill="#8d9096" />
      <path d="M470 240q16-26 40-30" stroke="#8d9096" strokeWidth="2" fill="none" />
      <g transform="translate(64 0)">
      <text x="48" y="238" fontFamily={D} fontWeight="700" fontSize="132" fill="#f5f5f5" textLength="290" lengthAdjust="spacingAndGlyphs">EMBER</text>
      <text x="48" y="352" fontFamily={D} fontWeight="700" fontSize="132" fill="none" stroke="#f5f5f5" strokeWidth="1.5" textLength="330" lengthAdjust="spacingAndGlyphs">&amp; SALT</text>
      <rect x="52" y="400" width="210" height="1" fill="#fff" fillOpacity=".3" />
      <text x="52" y="430" fontFamily={M} fontSize="13" letterSpacing="3" fill="#c5c7ca">RESERVE A TABLE →</text>
      <g fill="#fff" fillOpacity=".18">
        <rect x="52" y="476" width="170" height="3" />
        <rect x="52" y="496" width="120" height="3" />
        <rect x="52" y="516" width="150" height="3" />
      </g>
      <text x="52" y="52" fontFamily={M} fontSize="11" letterSpacing="3" fill="#8d9096">MENU · ATMOSPHERE · VISIT</text>
      </g>
    </>
  );
}

function Dental() {
  return (
    <>
      <rect width="800" height="600" fill="#e8e9eb" />
      <circle cx="610" cy="210" r="270" fill="#f5f5f6" />
      <circle cx="120" cy="560" r="210" fill="#dcdde0" />
      <path d="M512 178c-52-12-82 30-72 94 8 62 20 150 46 170 22 14 26-40 36-80 10-22 32-22 42 0 10 40 14 94 38 80 26-20 38-108 46-170 10-64-20-106-72-94-22 6-42 6-64 0Z" fill="#fff" stroke="#c4c6ca" strokeWidth="2" />
      <path d="M476 214c12-14 28-16 44-8" stroke="#e1e2e4" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M340 468q140 70 300-4" stroke="#0b0b0b" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="92" y="40" width="616" height="44" rx="22" fill="#fff" stroke="#d3d4d7" />
      <text x="120" y="68" fontFamily={D} fontWeight="700" fontSize="26" letterSpacing="3" fill="#0b0b0b">AUREL</text>
      <g fill="#6d6f73">
        <rect x="310" y="58" width="52" height="5" rx="2" />
        <rect x="382" y="58" width="52" height="5" rx="2" />
        <rect x="454" y="58" width="52" height="5" rx="2" />
      </g>
      <rect x="556" y="48" width="140" height="28" rx="14" fill="#0b0b0b" />
      <text x="626" y="67" textAnchor="middle" fontFamily={M} fontSize="11" letterSpacing="2" fill="#f5f5f5">BOOK A VISIT</text>
      <g transform="translate(60 0)">
      <text x="56" y="250" fontFamily={D} fontWeight="700" fontSize="92" fill="#0b0b0b" textLength="320" lengthAdjust="spacingAndGlyphs">A CALMER</text>
      <text x="56" y="326" fontFamily={D} fontWeight="700" fontSize="92" fill="#0b0b0b" textLength="235" lengthAdjust="spacingAndGlyphs">WAY TO</text>
      <text x="56" y="402" fontFamily={D} fontWeight="700" fontSize="92" fill="none" stroke="#0b0b0b" strokeWidth="1.5" textLength="200" lengthAdjust="spacingAndGlyphs">CARE.</text>
      <g fill="#8a8c90">
        <rect x="58" y="440" width="240" height="5" rx="2" />
        <rect x="58" y="458" width="190" height="5" rx="2" />
      </g>
      </g>
    </>
  );
}

function Dashboard() {
  const bars = [60, 96, 72, 130, 104, 150, 118, 168, 140, 186];
  return (
    <>
      <rect width="800" height="600" fill="#0c0c0c" />
      <rect width="148" height="600" fill="#111" />
      <rect x="148" width="1" height="600" fill="#fff" fillOpacity=".12" />
      <rect x="24" y="28" width="28" height="28" rx="6" fill="#c5c7ca" />
      <g fill="#2a2a2a">
        {[100, 140, 180, 220, 260].map((y) => (
          <rect key={y} x="24" y={y} width="100" height="10" rx="3" />
        ))}
      </g>
      <rect x="24" y="100" width="100" height="10" rx="3" fill="#f5f5f5" />
      <rect x="172" y="24" width="420" height="34" rx="17" fill="#151515" stroke="#fff" strokeOpacity=".12" />
      <circle cx="760" cy="41" r="15" fill="#222" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${172 + i * 208} 84)`}>
          <rect width="192" height="108" rx="10" fill="#141414" stroke="#fff" strokeOpacity=".12" />
          <rect x="16" y="16" width="64" height="6" rx="2" fill="#6d6f73" />
          <rect x="16" y="34" width="92" height="18" rx="3" fill="#f5f5f5" />
          <polyline points="16,92 44,74 68,84 100,60 132,70 176,44" fill="none" stroke="#c5c7ca" strokeWidth="2" />
        </g>
      ))}
      <rect x="172" y="212" width="400" height="236" rx="10" fill="#141414" stroke="#fff" strokeOpacity=".12" />
      <rect x="192" y="232" width="110" height="7" rx="2" fill="#6d6f73" />
      {bars.map((h, i) => (
        <rect key={i} x={196 + i * 36} y={426 - h} width="22" height={h} rx="3" fill={i === 9 ? "#f5f5f5" : "#3a3a3a"} />
      ))}
      <rect x="592" y="212" width="184" height="236" rx="10" fill="#141414" stroke="#fff" strokeOpacity=".12" />
      <circle cx="684" cy="318" r="58" fill="none" stroke="#2a2a2a" strokeWidth="14" />
      <path d="M684 260a58 58 0 0 1 56 74" fill="none" stroke="#f5f5f5" strokeWidth="14" />
      <rect x="172" y="468" width="604" height="110" rx="10" fill="#111" stroke="#fff" strokeOpacity=".12" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(192 ${486 + i * 30})`}>
          <rect width="140" height="8" rx="2" fill="#3a3a3a" />
          <rect x="220" width="90" height="8" rx="2" fill="#2a2a2a" />
          <rect x="400" width="70" height="8" rx="4" fill={i === 0 ? "#c5c7ca" : "#2a2a2a"} />
          <rect x="520" width="60" height="8" rx="2" fill="#2a2a2a" />
        </g>
      ))}
    </>
  );
}

function Identity() {
  return (
    <>
      <rect width="800" height="600" fill="#0a0a0a" />
      <g stroke="#fff" strokeOpacity=".07">
        {[100, 200, 300, 400, 500, 600, 700].map((x) => (
          <path key={x} d={`M${x} 0V600`} />
        ))}
        {[100, 200, 300, 400, 500].map((y) => (
          <path key={y} d={`M0 ${y}H800`} />
        ))}
      </g>
      <rect x="60" y="60" width="300" height="300" fill="#c5c7ca" />
      <path d="M210 100 320 320H280l-22-48h-96l-22 48H100Z" fill="#0a0a0a" />
      <path d="M210 168 238 232h-56Z" fill="#c5c7ca" />
      <text x="400" y="132" fontFamily={D} fontWeight="700" fontSize="112" fill="#f5f5f5" letterSpacing="2" textLength="250" lengthAdjust="spacingAndGlyphs">ATLAS</text>
      <text x="400" y="228" fontFamily={D} fontWeight="700" fontSize="112" fill="none" stroke="#f5f5f5" strokeWidth="1.5" letterSpacing="2" textLength="200" lengthAdjust="spacingAndGlyphs">FORM</text>
      <text x="402" y="268" fontFamily={M} fontSize="12" letterSpacing="4" fill="#8d9096">IDENTITY SYSTEM</text>
      {["#f5f5f5", "#c5c7ca", "#8d9096", "#3a3a3a", "#181818"].map((c, i) => (
        <circle key={c} cx={420 + i * 62} cy="330" r="26" fill={c} stroke="#fff" strokeOpacity=".2" />
      ))}
      <g transform="rotate(-6 200 480)">
        <rect x="60" y="410" width="280" height="150" fill="#f5f5f5" />
        <path d="M84 440 110 500H92l-6-14H64l-6 14H40Z" transform="translate(30 0) scale(.9)" fill="#0a0a0a" />
        <rect x="190" y="440" width="120" height="6" fill="#0a0a0a" />
        <rect x="190" y="458" width="80" height="4" fill="#6d6f73" />
        <rect x="190" y="520" width="100" height="3" fill="#6d6f73" />
      </g>
      <g transform="rotate(5 560 480)">
        <rect x="420" y="420" width="280" height="150" fill="#181818" stroke="#fff" strokeOpacity=".2" />
        <text x="444" y="496" fontFamily={D} fontWeight="700" fontSize="46" fill="#f5f5f5" letterSpacing="2" textLength="200" lengthAdjust="spacingAndGlyphs">ATLAS FORM</text>
        <rect x="444" y="520" width="90" height="3" fill="#c5c7ca" />
      </g>
    </>
  );
}

function Title() {
  return (
    <>
      <defs>
        <pattern id="zc-scan" width="800" height="6" patternUnits="userSpaceOnUse">
          <rect width="800" height="3" fill="#fff" />
        </pattern>
        <mask id="zc-scan-mask">
          <rect width="800" height="600" fill="#000" />
          <text x="400" y="400" textAnchor="middle" fontFamily={D} fontWeight="700" fontSize="290" fill="#fff" letterSpacing="6" textLength="540" lengthAdjust="spacingAndGlyphs">SIGNAL</text>
          <rect y="270" width="800" height="3" fill="#000" />
          <rect y="318" width="800" height="3" fill="#000" />
        </mask>
      </defs>
      <rect width="800" height="600" fill="#060606" />
      <circle cx="400" cy="300" r="190" fill="none" stroke="#fff" strokeOpacity=".1" />
      <circle cx="400" cy="300" r="250" fill="none" stroke="#fff" strokeOpacity=".06" />
      <rect width="800" height="600" fill="url(#zc-scan)" opacity=".05" />
      <rect width="800" height="600" fill="#f5f5f5" mask="url(#zc-scan-mask)" />
      <g stroke="#c5c7ca" strokeWidth="2" fill="none">
        <path d="M40 90V40h50M710 40h50v50M40 510v50h50M710 560h50v-50" />
      </g>
      <text x="48" y="582" fontFamily={M} fontSize="12" letterSpacing="3" fill="#8d9096">TC 00:00:12:08</text>
      <text x="752" y="582" textAnchor="end" fontFamily={M} fontSize="12" letterSpacing="3" fill="#8d9096">TITLE SEQUENCE · CONCEPT</text>
      <rect x="48" y="30" width="704" height="1" fill="#fff" fillOpacity=".2" />
      <rect x="48" y="30" width="260" height="1" fill="#f5f5f5" />
    </>
  );
}

function Edit() {
  const clip = (x: number, w: number, y: number, fill: string, key: string) => (
    <rect key={key} x={x} y={y} width={w} height="34" rx="3" fill={fill} stroke="#fff" strokeOpacity=".16" />
  );
  return (
    <>
      <rect width="800" height="600" fill="#0b0b0b" />
      <rect x="40" y="32" width="720" height="300" fill="#121212" stroke="#fff" strokeOpacity=".14" />
      <circle cx="400" cy="162" r="96" fill="#1b1b1b" />
      <path d="M340 250c10-64 40-96 60-96s50 32 60 96Z" fill="#2b2b2b" />
      <circle cx="400" cy="140" r="30" fill="#2b2b2b" />
      <circle cx="400" cy="182" r="44" fill="none" stroke="#f5f5f5" strokeOpacity=".9" strokeWidth="2" />
      <path d="M388 164 420 182 388 200Z" fill="#f5f5f5" />
      <rect x="40" y="318" width="720" height="14" fill="#0b0b0b" />
      <rect x="40" y="326" width="460" height="3" fill="#c5c7ca" />
      <g stroke="#fff" strokeOpacity=".25">
        {Array.from({ length: 36 }, (_, i) => (
          <path key={i} d={`M${40 + i * 20} 372v${i % 5 === 0 ? 14 : 7}`} />
        ))}
      </g>
      <text x="40" y="362" fontFamily={M} fontSize="11" letterSpacing="2" fill="#8d9096">00:00</text>
      {["V2", "V1", "A1", "A2"].map((t, i) => (
        <text key={t} x="44" y={424 + i * 44} fontFamily={M} fontSize="11" fill="#6d6f73">{t}</text>
      ))}
      {clip(80, 150, 402, "#3a3a3a", "a")}
      {clip(240, 220, 402, "#2a2a2a", "b")}
      {clip(480, 130, 402, "#4a4a4a", "c")}
      {clip(80, 280, 446, "#c5c7ca", "d")}
      {clip(370, 240, 446, "#8d9096", "e")}
      <path d="M80 508q40-18 80 0t80 0 80 0 80 0 80 0 80 0" fill="none" stroke="#6d6f73" strokeWidth="2" transform="translate(0 4)" />
      <path d="M80 552q40-12 80 0t80 0 80 0 80 0 80 0 80 0" fill="none" stroke="#4a4a4a" strokeWidth="2" />
      <path d="M500 346v240" stroke="#f5f5f5" strokeWidth="1.5" />
      <path d="M492 338h16l-8 12Z" fill="#f5f5f5" />
    </>
  );
}

function Social() {
  const phone = (x: number, y: number, w: number, h: number, rot: number, body: ReactNode, key: string) => (
    <g key={key} transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y} width={w} height={h} rx="26" fill="#161616" stroke="#fff" strokeOpacity=".22" strokeWidth="1.5" />
      {body}
    </g>
  );
  return (
    <>
      <rect width="800" height="600" fill="#0e0e0e" />
      <circle cx="400" cy="300" r="260" fill="none" stroke="#fff" strokeOpacity=".06" />
      {phone(56, 120, 214, 400, -6, (
        <>
          <circle cx="84" cy="150" r="10" fill="#c5c7ca" />
          <rect x="100" y="146" width="70" height="7" rx="3" fill="#555" />
          <rect x="74" y="176" width="178" height="178" rx="6" fill="#2a2a2a" />
          <circle cx="163" cy="265" r="46" fill="#f5f5f5" />
          <rect x="74" y="372" width="120" height="8" rx="3" fill="#f5f5f5" />
          <rect x="74" y="392" width="150" height="6" rx="3" fill="#555" />
          <circle cx="82" cy="430" r="6" fill="none" stroke="#c5c7ca" />
          <circle cx="104" cy="430" r="6" fill="none" stroke="#c5c7ca" />
        </>
      ), "p1")}
      {phone(292, 70, 226, 440, 0, (
        <>
          <rect x="304" y="86" width="202" height="4" rx="2" fill="#333" />
          <rect x="304" y="86" width="90" height="4" rx="2" fill="#f5f5f5" />
          <rect x="304" y="106" width="202" height="380" rx="14" fill="#f5f5f5" />
          <text x="404" y="262" textAnchor="middle" fontFamily={D} fontWeight="700" fontSize="104" fill="#0b0b0b" textLength="230" lengthAdjust="spacingAndGlyphs">PULSE</text>
          <text x="404" y="322" textAnchor="middle" fontFamily={M} fontSize="12" letterSpacing="4" fill="#0b0b0b">COMING SOON</text>
          <rect x="344" y="430" width="120" height="30" rx="15" fill="#0b0b0b" />
        </>
      ), "p2")}
      {phone(540, 126, 214, 400, 6, (
        <>
          <rect x="558" y="150" width="178" height="178" rx="6" fill="#3a3a3a" />
          <path d="M558 328 647 214l89 114Z" fill="#c5c7ca" />
          <rect x="558" y="346" width="178" height="82" rx="6" fill="#222" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={622 + i * 14} cy="458" r="3.5" fill={i === 1 ? "#f5f5f5" : "#555"} />
          ))}
          <rect x="558" y="478" width="110" height="8" rx="3" fill="#f5f5f5" />
        </>
      ), "p3")}
    </>
  );
}

const ART: Record<ArtKind, () => JSX.Element> = {
  fashion: Fashion,
  restaurant: Restaurant,
  dental: Dental,
  dashboard: Dashboard,
  identity: Identity,
  title: Title,
  edit: Edit,
  social: Social,
};

export function ConceptArt({ kind, variant = 0 }: { kind: ArtKind; variant?: 0 | 1 | 2 }) {
  const Art = ART[kind];
  return (
    <svg
      className="art"
      viewBox={VIEWBOX[variant]}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <Art />
    </svg>
  );
}

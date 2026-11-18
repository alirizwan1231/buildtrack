import type { PanelKind } from "@/data/projects";

/**
 * Blueprint-style "site photo" panel — pure SVG line-art of a building
 * elevation over a deep-blue gradient with grid + progress overlay.
 * No external images anywhere in this project.
 */
const scenes: Record<PanelKind, React.ReactNode> = {
  tower: (
    <>
      <rect x="150" y="30" width="100" height="250" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1="150" y1={58 + i * 26} x2="250" y2={58 + i * 26} />
      ))}
      <line x1="175" y1="30" x2="175" y2="280" /><line x1="200" y1="30" x2="200" y2="280" /><line x1="225" y1="30" x2="225" y2="280" />
      <line x1="200" y1="30" x2="200" y2="8" /><line x1="120" y1="8" x2="290" y2="8" /><line x1="272" y1="8" x2="272" y2="52" />
      <rect x="258" y="52" width="28" height="20" /><line x1="90" y1="280" x2="90" y2="180" /><rect x="70" y="160" width="40" height="120" />
    </>
  ),
  villa: (
    <>
      <path d="M60 190 L200 110 L340 190" /><rect x="90" y="190" width="220" height="90" />
      <line x1="200" y1="110" x2="200" y2="280" /><rect x="120" y="215" width="34" height="65" /><rect x="246" y="215" width="34" height="65" />
      <rect x="182" y="205" width="36" height="30" /><path d="M40 280 h320" strokeDasharray="2 6" />
      <circle cx="70" cy="90" r="16" /><line x1="70" y1="106" x2="70" y2="140" /><path d="M52 118 q18 -14 36 0" />
      <circle cx="330" cy="90" r="16" /><line x1="330" y1="106" x2="330" y2="140" /><path d="M312 118 q18 -14 36 0" />
    </>
  ),
  mall: (
    <>
      <rect x="60" y="90" width="280" height="190" />
      <line x1="60" y1="128" x2="340" y2="128" /><line x1="60" y1="166" x2="340" y2="166" /><line x1="60" y1="204" x2="340" y2="204" /><line x1="60" y1="242" x2="340" y2="242" />
      <path d="M60 90 Q200 40 340 90" /><rect x="165" y="242" width="70" height="38" />
      {Array.from({ length: 6 }).map((_, i) => (<line key={i} x1={105 + i * 40} y1="90" x2={105 + i * 40} y2="280" />))}
      <circle cx="200" cy="66" r="10" />
    </>
  ),
  warehouse: (
    <>
      <path d="M40 130 L200 70 L360 130" /><rect x="40" y="130" width="320" height="150" />
      {Array.from({ length: 5 }).map((_, i) => (<rect key={i} x={66 + i * 62} y="215" width="38" height="65" />))}
      <line x1="40" y1="180" x2="360" y2="180" /><line x1="90" y1="130" x2="90" y2="280" /><line x1="310" y1="130" x2="310" y2="280" />
      <rect x="168" y="96" width="64" height="20" />
    </>
  ),
  bridge: (
    <>
      <path d="M20 230 Q200 190 380 230" fill="none" /><line x1="20" y1="230" x2="380" y2="230" />
      <line x1="130" y1="230" x2="130" y2="60" /><line x1="270" y1="230" x2="270" y2="60" />
      <line x1="122" y1="60" x2="138" y2="60" /><line x1="262" y1="60" x2="278" y2="60" />
      <line x1="130" y1="70" x2="40" y2="228" /><line x1="130" y1="70" x2="90" y2="230" /><line x1="130" y1="70" x2="200" y2="222" />
      <line x1="270" y1="70" x2="200" y2="222" /><line x1="270" y1="70" x2="310" y2="230" /><line x1="270" y1="70" x2="360" y2="228" />
      <path d="M20 258 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" strokeDasharray="3 4" />
    </>
  ),
  office: (
    <>
      <rect x="70" y="90" width="80" height="190" /><rect x="165" y="55" width="90" height="225" /><rect x="270" y="110" width="70" height="170" />
      {Array.from({ length: 6 }).map((_, i) => (<line key={`a${i}`} x1="70" y1={120 + i * 28} x2="150" y2={120 + i * 28} />))}
      {Array.from({ length: 8 }).map((_, i) => (<line key={`b${i}`} x1="165" y1={84 + i * 26} x2="255" y2={84 + i * 26} />))}
      {Array.from({ length: 5 }).map((_, i) => (<line key={`c${i}`} x1="270" y1={138 + i * 28} x2="340" y2={138 + i * 28} />))}
      <path d="M40 280 q30 -18 60 0 t60 0 t60 0 t60 0 t60 0" fill="none" />
    </>
  ),
};

export default function SitePanel({
  kind,
  progress,
  className = "",
  showProgress = true,
}: {
  kind: PanelKind;
  progress?: number;
  className?: string;
  showProgress?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id={`bp-${kind}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#12283f" />
            <stop offset="100%" stopColor="#0a1626" />
          </linearGradient>
          <pattern id={`grid-${kind}`} width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M25 0 H0 V25" fill="none" stroke="rgba(125,211,252,0.10)" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#bp-${kind})`} />
        <rect width="400" height="300" fill={`url(#grid-${kind})`} />
        <g stroke="#7dd3fc" strokeWidth="1.6" fill="rgba(56,189,248,0.05)" opacity="0.9">
          {scenes[kind]}
        </g>
        <line x1="0" y1="280" x2="400" y2="280" stroke="#f5b301" strokeWidth="2" strokeDasharray="10 6" opacity="0.8" />
        <circle cx="352" cy="36" r="15" fill="none" stroke="#f5b301" strokeWidth="1.4" opacity="0.85" />
        <text x="352" y="41" textAnchor="middle" fontSize="11" fill="#f5b301" fontFamily="monospace">BT</text>
      </svg>
      {showProgress && progress !== undefined && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3 pt-8">
          <div className="flex items-end justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-200/80">Site Progress</span>
            <span className="font-mono text-sm font-bold text-amber-400">{progress}%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full rounded-full bg-amber-400" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}

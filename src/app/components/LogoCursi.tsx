/* ============================================================
   Logo signature Cursi — « C » calligraphique dans un double
   anneau d'or, losange, wordmark CURSI et paraphe signé
   ============================================================ */

type ProprietesLogo = { className?: string };

const degrade = (
  <linearGradient id="degrade-cursi" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stopColor="#F6EDD2" />
    <stop offset="50%" stopColor="#D4AF37" />
    <stop offset="100%" stopColor="#8A6D20" />
  </linearGradient>
);

/* Lockup complet : monogramme + wordmark + paraphe */
export default function LogoCursi({ className = "h-10 w-auto" }: ProprietesLogo) {
  return (
    <svg viewBox="0 0 212 60" className={className} role="img" aria-label="Cursi">
      <defs>{degrade}</defs>

      <g fill="none" stroke="url(#degrade-cursi)">
        {/* Double anneau */}
        <circle cx="32" cy="30" r="25" strokeWidth="1.2" />
        <circle cx="32" cy="30" r="21.5" strokeWidth="0.6" opacity="0.5" />
        {/* C calligraphique */}
        <path
          d="M42 20 C 36 12, 19 13, 15.5 25 C 12 37, 21.5 47.5, 37 45.5 C 41.5 44.8, 45 42.5, 47 39.5"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Paraphe sous le wordmark */}
        <path
          d="M68 44.5 C 92 50.5, 128 50.5, 152 45 C 168 41.5, 182 43, 196 47.5"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </g>

      {/* Losange doré */}
      <path d="M52.5 5.5 l2.6 2.6 -2.6 2.6 -2.6 -2.6 z" fill="url(#degrade-cursi)" />

      {/* Wordmark */}
      <text
        x="68"
        y="37"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="27"
        fontWeight="bold"
        letterSpacing="7"
        fill="url(#degrade-cursi)"
      >
        CURSI
      </text>
    </svg>
  );
}

/* Monogramme seul (avatar, favicon, ornement) */
export function MonogrammeCursi({ className = "h-10 w-10" }: ProprietesLogo) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Monogramme Cursi">
      <defs>
        <linearGradient id="degrade-cursi-mono" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6EDD2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6D20" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#degrade-cursi-mono)">
        <circle cx="32" cy="32" r="27" strokeWidth="1.4" />
        <circle cx="32" cy="32" r="23" strokeWidth="0.7" opacity="0.5" />
        <path
          d="M44 24 C 37 14, 17 15, 13 29 C 9 43, 20 55, 38 52.5 C 43 51.6, 47 49, 49.5 45.5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      <path d="M54 6 l3 3 -3 3 -3 -3 z" fill="url(#degrade-cursi-mono)" />
    </svg>
  );
}

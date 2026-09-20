/* ============================================================
   Jeu d'icônes SVG inline — trait fin, couleur héritée
   (currentColor), aucune dépendance externe
   ============================================================ */

type ProprietesIcone = { className?: string };

const attributs = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/* --- Langages & code, portfolio --- */
export function IconeCode({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* --- Web / frameworks --- */
export function IconeGlobe({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* --- Systèmes & réseaux --- */
export function IconeTerminal({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

/* --- Manette de jeu --- */
export function IconeGamepad({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <line x1="6" y1="11" x2="10" y2="11" />
      <line x1="8" y1="9" x2="8" y2="13" />
      <line x1="15" y1="12" x2="15.01" y2="12" />
      <line x1="18" y1="10" x2="18.01" y2="10" />
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
    </svg>
  );
}

/* --- Trophée (tournois e-sport) --- */
export function IconeTrophee({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

/* --- Discussion / messagerie --- */
export function IconeDiscussion({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/* --- Serveur (lab & virtualisation) --- */
export function IconeServeur({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

/* --- Bouclier (clan) --- */
export function IconeBouclier({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/* --- Carte (level design) --- */
export function IconeCarte({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

/* --- Ordinateur (setup) --- */
export function IconeOrdinateur({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

/* --- Smartphone (setup) --- */
export function IconeSmartphone({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

/* --- E-mail --- */
export function IconeMail({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* --- Téléphone (WhatsApp) --- */
export function IconeTelephone({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* --- Appareil photo (Instagram) --- */
export function IconeAppareilPhoto({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

/* --- GitHub --- */
export function IconeGitHub({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

/* --- Flèche droite --- */
export function IconeFlecheDroite({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* --- Flèche haut --- */
export function IconeFlecheHaut({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

/* --- Menu burger --- */
export function IconeMenu({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

/* --- Croix (fermeture) --- */
export function IconeCroix({ className = "h-5 w-5" }: ProprietesIcone) {
  return (
    <svg {...attributs} className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* --- Étoile à quatre branches (ornement doré) --- */
export function IconeEtoile({ className = "h-3.5 w-3.5" }: ProprietesIcone) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.35 7.65L22 12l-7.65 2.35L12 22l-2.35-7.65L2 12l7.65-2.35L12 2z" />
    </svg>
  );
}

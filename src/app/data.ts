/**
 * Source unique de vérité du portfolio : tout le contenu éditorial est ici.
 * Les composants ne font que de la mise en page.
 */

export const IDENTITE = {
  prenom: "Cursi",
  nomUsage: "ʙᴀʀᴀʟɴɢᴜɪ",
  alias: ["†ㅤSYNXㅤ☯", "Zzz_cursi"],
  age: 19,
  ville: "Brazzaville, Congo",
  etudes: "Licence 1 Informatique",
  slogan:
    "Seuls les plus forts survivent dans ce monde. La paix ne peut être atteinte que par la puissance.",
  citation: {
    texte: "Le bonheur de ta vie dépend de la qualité de tes pensées.",
    auteur: "Marc Aurèle",
  },
  /** Statut affiché dans la section contact. */
  statut: "Ouvert aux projets, aux squads et aux discussions systèmes.",
} as const;

export const FREE_FIRE = {
  depuis: 2019,
  rang: "Élite Héroïque",
  heures: "2 500+",
  booyahs: "5 000+",
  uid: "2982734895",
  clan: "ɴᴏᴛ ʟɪᴋᴇ ᴜs",
} as const;

/** Chiffres clés du hero (repris de FREE_FIRE pour éviter les divergences). */
export const STATS = [
  { valeur: FREE_FIRE.booyahs, legende: "Booyahs" },
  { valeur: FREE_FIRE.heures, legende: "Heures de jeu" },
  { valeur: FREE_FIRE.rang, legende: "Rang Free Fire" },
  { valeur: `Depuis ${FREE_FIRE.depuis}`, legende: "Sur Free Fire" },
] as const;

/** Sections ancrées, dans l'ordre du document : navigation, fil doré, titres. */
export const SECTIONS = [
  { id: "apropos", label: "À propos", numero: "01", titre: "Étudiant le jour, stratège la nuit." },
  { id: "competences", label: "Compétences", numero: "02", titre: "Quatre terrains d'entraînement." },
  { id: "projets", label: "Projets", numero: "03", titre: "Ce que je construis, en jeu et en code." },
  { id: "parcours", label: "Parcours", numero: "04", titre: "Une trajectoire, plusieurs arènes." },
  { id: "contact", label: "Contact", numero: "05", titre: "On joue une partie ?" },
] as const;

export const PASSIONS = ["Animé", "Stoïcisme", "Free Fire", "Craftland Studio"] as const;

export type TypeMateriel = "pc" | "mobile" | "console";

export const SETUP: { label: string; type: TypeMateriel }[] = [
  { label: "PC Dell · i5 8ᵉ gén · 8 Go RAM", type: "pc" },
  { label: "Galaxy Z Fold2 5G", type: "mobile" },
  { label: "Galaxy A16", type: "mobile" },
  { label: "Xbox One", type: "console" },
];

/** Faits Free Fire mis en avant dans « À propos ». */
export const FAITS_JEU: { label: string; valeur: string }[] = [
  { label: "Rang", valeur: FREE_FIRE.rang },
  { label: "Clan", valeur: FREE_FIRE.clan },
  { label: "Booyahs", valeur: FREE_FIRE.booyahs },
  { label: "Heures", valeur: FREE_FIRE.heures },
];

export const COMPETENCES: { titre: string; resume: string; competences: string[] }[] = [
  {
    titre: "Langages & code",
    resume: "Les fondations : algorithmique, POO et bases de données.",
    competences: [
      "C++ · POO (classes, pointeurs, mémoire)",
      "SQL · jointures, normalisation",
      "Modélisation Entité-Association",
      "HTML",
      "CSS",
      "JavaScript · TypeScript",
    ],
  },
  {
    titre: "Frameworks & web",
    resume: "Ce qui transforme une maquette en site vivant.",
    competences: ["React", "Next.js", "Tailwind CSS", "Vibe coding"],
  },
  {
    titre: "Systèmes & réseaux",
    resume: "Mon lab : installer, casser, comprendre, réparer.",
    competences: [
      "Arch Linux",
      "Ubuntu Server",
      "Kali Linux",
      "Windows Server 2022",
      "SFTP",
      "OpenSSH",
      "GRUB",
      "VirtualBox",
      "VMware",
      "Partages réseau",
    ],
  },
  {
    titre: "Outils & gamer",
    resume: "Le quotidien : de l'éditeur de code au HUD du jeu.",
    competences: [
      "VS Code + MinGW/MSYS2",
      "Git & GitHub",
      "Arduino",
      "SimulIDE",
      "Shizuku",
      "Brevent",
      "Free Fire · HUD & sensibilité",
      "Craftland Studio",
      "Xbox One",
    ],
  },
];

export type Lien = { label: string; href: string; externe: boolean };

export type Projet = {
  image: string;
  imageWebp: string;
  alt: string;
  titre: string;
  description: string;
  techs: string[];
  lien?: Lien;
};

export const CONTACTS = {
  email: "baralangui7@gmail.com",
  discord: "https://discord.gg/W7S3YdKE",
  whatsapp: "https://wa.me/qr/4PWVMBD2JGTQI1",
  instagram: "https://www.instagram.com/zzz_cursi",
  github: "https://github.com/khalixcursi-stack/cursi_presentation",
  githubProfil: "https://github.com/khalixcursi-stack",
} as const;

export const PROJETS: Projet[] = [
  {
    image: "/projets/portfolio.jpg",
    imageWebp: "/projets/portfolio.webp",
    alt: "Éditeur de code à la syntaxe dorée sur un bureau noir",
    titre: "Portfolio personnel — ce site",
    description:
      "Mon site personnel conçu et développé de A à Z : Next.js, TypeScript, Tailwind, thèmes clair et sombre, responsive et référencement.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    lien: { label: "Code source", href: CONTACTS.github, externe: true },
  },
  {
    image: "/projets/tournois.jpg",
    imageWebp: "/projets/tournois.webp",
    alt: "Trophée doré sur une scène e-sport sombre",
    titre: "Modèle web de tournois e-sport",
    description:
      "Un modèle de site pour organiser des tournois e-sport : affiches, brackets et annonces, pensé pour la communauté Free Fire.",
    techs: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    image: "/projets/discord.jpg",
    imageWebp: "/projets/discord.webp",
    alt: "Bulles de discussion dorées reliées en réseau sur fond noir",
    titre: "Serveur Discord info & prog",
    description:
      "Création et organisation d'un serveur Discord axé sur l'informatique et la programmation : entraide, ressources et défis.",
    techs: ["Discord", "Communauté", "Entraide"],
    lien: { label: "Rejoindre", href: CONTACTS.discord, externe: true },
  },
  {
    image: "/projets/lab.jpg",
    imageWebp: "/projets/lab.webp",
    alt: "Rack serveur et terminaux éclairés d'une lumière dorée",
    titre: "Lab serveurs & virtualisation",
    description:
      "Ubuntu Server en VM avec partages réseau, Arch Linux automatisé via archinstall + GRUB, service SFTP OpenSSH sur Windows Server 2022.",
    techs: ["Ubuntu Server", "Arch Linux", "WS 2022", "SFTP", "GRUB"],
  },
  {
    image: "/projets/clan.jpg",
    imageWebp: "/projets/clan.webp",
    alt: "Écusson héraldique doré entouré de lauriers sur fond noir",
    titre: `Clan ${FREE_FIRE.clan}`,
    description:
      "Guerres de clans, tactiques et cohésion de squad en Élite Héroïque : on ne ressemble à personne — c'est voulu.",
    techs: ["Free Fire", "Guerre de clans", "Squad"],
    lien: { label: "Rejoindre", href: CONTACTS.discord, externe: true },
  },
  {
    image: "/projets/craftland.jpg",
    imageWebp: "/projets/craftland.webp",
    alt: "Vue aérienne d'une île d'entraînement battle royale au crépuscule",
    titre: "Cartes Craftland Studio",
    description:
      "Conception de cartes personnalisées dans Craftland Studio : des arènes d'entraînement pensées pour le rush et le clutch.",
    techs: ["Craftland Studio", "Level design"],
    lien: { label: "Voir", href: CONTACTS.instagram, externe: true },
  },
];

export const PARCOURS: { date: string; titre: string; description: string }[] = [
  {
    date: "2026 — Aujourd'hui",
    titre: "Licence 1 Informatique & lab systèmes",
    description:
      "POO en C++, développement web, modélisation de bases de données — et à la maison : VM Linux, serveurs et virtualisation.",
  },
  {
    date: "2024",
    titre: "Élite Héroïque, clan & communauté",
    description: `Le cap des ${FREE_FIRE.booyahs} Booyahs franchi, le rang ${FREE_FIRE.rang} atteint avec ${FREE_FIRE.clan}, et le lancement de mon serveur Discord info & prog.`,
  },
  {
    date: `${FREE_FIRE.depuis}`,
    titre: "La découverte de Free Fire",
    description: `Première partie, premier Booyah. Ce qui n'était qu'un passe-temps devient une discipline : plus de ${FREE_FIRE.heures.replace("+", "")} heures d'entraînement depuis.`,
  },
];

export const LIENS_CONTACT: { label: string; description: string; href: string; externe: boolean }[] = [
  { label: "Discord", description: "Serveur info & prog", href: CONTACTS.discord, externe: true },
  { label: "WhatsApp", description: "Discussion directe", href: CONTACTS.whatsapp, externe: true },
  { label: "Instagram", description: "@zzz_cursi", href: CONTACTS.instagram, externe: true },
  { label: "GitHub", description: "Profil & code source", href: CONTACTS.githubProfil, externe: true },
];

/** Liens du pied de page : sections puis réseaux. */
export const LIENS_PIED: Lien[] = [
  ...SECTIONS.map(section => ({ label: section.label, href: `#${section.id}`, externe: false })),
  { label: "GitHub", href: CONTACTS.githubProfil, externe: true },
  { label: "Instagram", href: CONTACTS.instagram, externe: true },
];

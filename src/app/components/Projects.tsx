import type { ComponentType } from "react";
import { CONTACTS, FREE_FIRE } from "../data";
import {
  IconeBouclier,
  IconeCarte,
  IconeCode,
  IconeDiscussion,
  IconeFlecheDroite,
  IconeServeur,
  IconeTrophee,
} from "./Icones";

type Projet = {
  titre: string;
  description: string;
  techs: string[];
  banniere: string;
  icone: ComponentType<{ className?: string }>;
  liens?: { label: string; href: string }[];
};

const projets: Projet[] = [
  {
    titre: "Portfolio personnel — ce site",
    description:
      "Mon site personnel conçu et développé de A à Z : Next.js, TypeScript, Tailwind, thème noir & or, responsive et SEO.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    banniere: "from-gold-300/30 to-gold-700/10",
    icone: IconeCode,
    liens: [{ label: "Code source", href: CONTACTS.github }],
  },
  {
    titre: "Modèle web de tournois e-sport",
    description:
      "Un modèle de site pour organiser des tournois e-sport : affiches, brackets et annonces, pensé pour la communauté Free Fire.",
    techs: ["HTML", "CSS", "React", "Tailwind CSS"],
    banniere: "from-gold-500/25 to-gold-800/10",
    icone: IconeTrophee,
  },
  {
    titre: "Serveur Discord info & prog",
    description:
      "Création et organisation d'un serveur Discord axé sur l'informatique et la programmation : entraide, ressources et défis.",
    techs: ["Discord", "Communauté", "Entraide"],
    banniere: "from-gold-200/25 to-gold-600/10",
    icone: IconeDiscussion,
    liens: [{ label: "Rejoindre", href: CONTACTS.discord }],
  },
  {
    titre: "Lab serveurs & virtualisation",
    description:
      "Ubuntu Server en VM avec partages réseau, Arch Linux automatisé via archinstall + GRUB, service SFTP OpenSSH sur Windows Server 2022.",
    techs: ["Ubuntu Server", "Arch Linux", "WS 2022", "SFTP", "GRUB"],
    banniere: "from-gold-400/20 to-gold-900/15",
    icone: IconeServeur,
  },
  {
    titre: `Clan ${FREE_FIRE.clan}`,
    description:
      "Guerres de clans, tactiques et cohésion de squad en Élite Héroïque : on ne ressemble à personne — c'est voulu.",
    techs: ["Free Fire", "Guerre de clans", "Squad"],
    banniere: "from-gold-300/20 via-gold-600/15 to-gold-900/10",
    icone: IconeBouclier,
    liens: [{ label: "Rejoindre", href: CONTACTS.discord }],
  },
  {
    titre: "Cartes Craftland Studio",
    description:
      "Conception de cartes personnalisées dans Craftland Studio : des arènes d'entraînement pensées pour le rush et le clutch.",
    techs: ["Craftland Studio", "Level design"],
    banniere: "from-gold-500/25 to-gold-200/10",
    icone: IconeCarte,
    liens: [{ label: "Voir", href: CONTACTS.instagram }],
  },
];

export default function Projects() {
  return (
    <section id="projets" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="filet-dore font-serif text-3xl font-bold text-neutral-100">
          Mes projets
        </h2>
        <p className="mt-5 max-w-2xl text-neutral-400">
          Du code, des serveurs et des arènes : ce que je construis, en jeu et en dehors.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((p) => (
            <article
              key={p.titre}
              className="flex flex-col overflow-hidden rounded-2xl border border-gold-500/15 bg-nuit-950/70 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-or"
            >
              <div
                className={`flex h-36 items-center justify-center bg-gradient-to-br ${p.banniere} text-gold-300`}
                aria-hidden="true"
              >
                <p.icone className="h-14 w-14" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-gold-100">{p.titre}</h3>
                <p className="my-3 text-sm leading-relaxed text-neutral-400">
                  {p.description}
                </p>
                <ul className="mb-4 flex flex-wrap gap-1.5">
                  {p.techs.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-gold-500/15 bg-gold-500/10 px-2.5 py-1 text-xs text-gold-100/75"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {p.liens && (
                  <div className="mt-auto flex gap-3">
                    {p.liens.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition hover:text-gold-200 hover:underline"
                      >
                        {l.label}
                        <IconeFlecheDroite className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

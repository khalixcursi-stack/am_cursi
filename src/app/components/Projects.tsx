import { CONTACTS, FREE_FIRE } from "../data";

type Projet = {
  titre: string;
  description: string;
  techs: string[];
  banniere: string;
  icone: string;
  liens?: { label: string; href: string }[];
};

const projets: Projet[] = [
  {
    titre: "Portfolio personnel — ce site",
    description:
      "Mon site personnel conçu et développé de A à Z : Next.js, TypeScript, Tailwind, thème sombre/clair, responsive et SEO.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    banniere: "from-blue-600/40 to-purple-600/30",
    icone: "🧑🏾‍💻",
    liens: [{ label: "Code source", href: CONTACTS.github }],
  },
  {
    titre: "Modèle web de tournois e-sport",
    description:
      "Un modèle de site pour organiser des tournois e-sport : affiches, brackets et annonces, pensé pour la communauté Free Fire.",
    techs: ["HTML", "CSS", "React", "Tailwind CSS"],
    banniere: "from-orange-600/40 to-red-600/30",
    icone: "🏆",
  },
  {
    titre: "Serveur Discord info & prog",
    description:
      "Création et organisation d'un serveur Discord axé sur l'informatique et la programmation : entraide, ressources et défis.",
    techs: ["Discord", "Communauté", "Entraide"],
    banniere: "from-indigo-600/40 to-blue-600/30",
    icone: "💬",
    liens: [{ label: "Rejoindre", href: CONTACTS.discord }],
  },
  {
    titre: "Lab serveurs & virtualisation",
    description:
      "Ubuntu Server en VM avec partages réseau, Arch Linux automatisé via archinstall + GRUB, service SFTP OpenSSH sur Windows Server 2022.",
    techs: ["Ubuntu Server", "Arch Linux", "WS 2022", "SFTP", "GRUB"],
    banniere: "from-emerald-600/40 to-teal-600/30",
    icone: "🖥️",
  },
  {
    titre: `Clan ${FREE_FIRE.clan}`,
    description:
      "Guerres de clans, tactiques et cohésion de squad en Élite Héroïque : on ne ressemble à personne — c'est voulu.",
    techs: ["Free Fire", "Guerre de clans", "Squad"],
    banniere: "from-amber-600/40 to-yellow-600/30",
    icone: "🛡️",
    liens: [{ label: "Rejoindre", href: CONTACTS.discord }],
  },
  {
    titre: "Cartes Craftland Studio",
    description:
      "Conception de cartes personnalisées dans Craftland Studio : des arènes d'entraînement pensées pour le rush et le clutch.",
    techs: ["Craftland Studio", "Level design"],
    banniere: "from-fuchsia-600/40 to-pink-600/30",
    icone: "🗺️",
    liens: [{ label: "Voir", href: CONTACTS.instagram }],
  },
];

export default function Projects() {
  return (
    <section id="projets" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Mes projets</h2>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Du code, des serveurs et des arènes : ce que je construis, en jeu et en dehors.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((p) => (
            <article
              key={p.titre}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div
                className={`flex h-36 items-center justify-center bg-gradient-to-br ${p.banniere} text-5xl`}
                aria-hidden="true"
              >
                {p.icone}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.titre}</h3>
                <p className="my-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {p.description}
                </p>
                <ul className="mb-4 flex flex-wrap gap-1.5">
                  {p.techs.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300"
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
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {l.label} →
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

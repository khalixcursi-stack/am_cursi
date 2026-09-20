import { CONTACTS } from "../data";
import { IconExternal } from "./icons";

const projects = [
  {
    image: "/projets/portfolio.jpg", alt: "Éditeur de code à la syntaxe dorée sur un bureau noir",
    title: "Portfolio personnel — ce site",
    description: "Mon site personnel conçu et développé de A à Z : Next.js, TypeScript, Tailwind, thème clair/sombre, responsive et SEO.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: { label: "Code source", href: CONTACTS.github },
  },
  {
    image: "/projets/tournois.jpg", alt: "Trophée doré sur une scène e-sport sombre",
    title: "Modèle web de tournois e-sport",
    description: "Un modèle de site pour organiser des tournois e-sport : affiches, brackets et annonces, pensé pour la communauté Free Fire.",
    techs: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    image: "/projets/discord.jpg", alt: "Bulles de discussion dorées reliées en réseau sur fond noir",
    title: "Serveur Discord info & prog",
    description: "Création et organisation d'un serveur Discord axé sur l'informatique et la programmation : entraide, ressources et défis.",
    techs: ["Discord", "Communauté", "Entraide"],
    link: { label: "Rejoindre", href: CONTACTS.discord },
  },
  {
    image: "/projets/lab.jpg", alt: "Rack serveur et terminaux éclairés d’une lumière dorée",
    title: "Lab serveurs & virtualisation",
    description: "Ubuntu Server en VM avec partages réseau, Arch Linux automatisé via archinstall + GRUB, service SFTP OpenSSH sur Windows Server 2022.",
    techs: ["Ubuntu Server", "Arch Linux", "WS 2022", "SFTP", "GRUB"],
  },
  {
    image: "/projets/clan.jpg", alt: "Écusson héraldique doré entouré de lauriers sur fond noir",
    title: "Clan ɴᴏᴛ ɪᴋᴇ ᴜs",
    description: "Guerres de clans, tactiques et cohésion de squad en Élite Héroïque : on ne ressemble à personne — c'est voulu.",
    techs: ["Free Fire", "Guerre de clans", "Squad"],
    link: { label: "Rejoindre", href: CONTACTS.discord },
  },
  {
    image: "/projets/craftland.jpg", alt: "Vue aérienne d’une île d’entraînement battle royale au crépuscule",
    title: "Cartes Craftland Studio",
    description: "Conception de cartes personnalisées dans Craftland Studio : des arènes d'entraînement pensées pour le rush et le clutch.",
    techs: ["Craftland Studio", "Level design"],
    link: { label: "Voir", href: CONTACTS.instagram },
  },
];

export default function Projects() {
  return (
    <section id="projets" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">03 · Projets</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">Ce que je construis, en jeu et en code.</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <article key={project.title} className="flex flex-col overflow-hidden border border-gold/20 transition-colors hover:border-gold/50">
              <img src={project.image} alt={project.alt} width="1536" height="1024" loading="lazy" className="h-44 w-full border-b border-gold/20 object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl leading-tight">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-80">{project.description}</p>
                <ul className="mb-6 mt-5 flex flex-wrap gap-2">
                  {project.techs.map(tech => <li key={tech} className="rounded-full border border-gold/25 px-2.5 py-1 text-xs">{tech}</li>)}
                </ul>
                {project.link && <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 self-start text-sm text-gold hover:underline">{project.link.label}<IconExternal className="h-4 w-4" /></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

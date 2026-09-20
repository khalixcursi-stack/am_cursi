import { IconCode, IconGlobe, IconServer, IconGamepad } from "./icons";

const categories = [
  { title: "Langages & code", icon: IconCode, skills: ["C++ · POO (classes, pointeurs, mémoire)", "SQL · jointures, normalisation", "Modélisation Entité-Association", "HTML", "CSS", "JavaScript-TypeScript"] },
  { title: "Frameworks & web", icon: IconGlobe, skills: ["React", "Next.js", "Tailwind CSS", "Vibe coding"] },
  { title: "Systèmes & réseaux", icon: IconServer, skills: ["Arch Linux", "Ubuntu Server", "Kali Linux", "Windows Server 2022", "SFTP", "OpenSSH", "GRUB", "VirtualBox", "VMware", "Partages réseau"] },
  { title: "Outils & gamer", icon: IconGamepad, skills: ["VS Code + MinGW/MSYS2", "Git & GitHub", "Arduino", "SimulIDE", "Shizuku", "Brevent", "Free Fire · HUD & sensibilité", "Craftland Studio", "Xbox One"] },
];

export default function Skills() {
  return (
    <section id="competences" className="bg-white/60 px-6 py-24 dark:bg-encre md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">02 · Compétences</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Trois terrains d&apos;entraînement.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="border border-gold/20 bg-ivoire p-7 dark:bg-nuit">
              <h3 className="flex items-center gap-4 font-serif text-2xl"><Icon className="h-6 w-6 shrink-0 text-gold" />{title}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {skills.map(skill => <li key={skill} className="rounded-full border border-gold/25 px-3 py-1.5 text-sm">{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

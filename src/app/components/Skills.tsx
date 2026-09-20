const categories = [
  {
    titre: "Langages & code",
    emoji: "⌨️",
    skills: [
      "C++ · POO (classes, pointeurs, mémoire)",
      "SQL · jointures, normalisation",
      "Modélisation Entité-Association",
      "HTML",
      "CSS",
      "JavaScript / TypeScript",
    ],
  },
  {
    titre: "Frameworks & web",
    emoji: "🌐",
    skills: ["React", "Next.js", "Tailwind CSS", "Vibe coding"],
  },
  {
    titre: "Systèmes & réseaux",
    emoji: "🐧",
    skills: [
      "Arch Linux",
      "Ubuntu Server",
      "Kali Linux",
      "Windows Server 2022",
      "SFTP / OpenSSH",
      "GRUB",
      "VirtualBox / VMware",
      "Partages réseau",
    ],
  },
  {
    titre: "Outils & gamer",
    emoji: "🎮",
    skills: [
      "VS Code + MinGW/MSYS2",
      "Git & GitHub",
      "Arduino / SimulIDE",
      "Shizuku / Brevent",
      "Free Fire · HUD & sensibilité",
      "Craftland Studio",
      "Xbox One",
    ],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="border-y border-gold-500/10 bg-nuit-900/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="filet-dore font-serif text-3xl font-bold text-neutral-100">
          Compétences
        </h2>
        <p className="mt-5 max-w-2xl text-neutral-400">
          Classées par domaine — ce que je pratique à l'université, au lab et en jeu.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.titre}
              className="rounded-2xl border border-gold-500/15 bg-nuit-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-or"
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold text-gold-100">
                <span aria-hidden="true" className="text-gold-400">{cat.emoji}</span>
                {cat.titre}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-gold-500/15 bg-gold-500/10 px-3.5 py-1.5 text-sm text-gold-100/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

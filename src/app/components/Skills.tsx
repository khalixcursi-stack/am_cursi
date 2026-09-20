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
    <section id="competences" className="bg-neutral-50 px-6 py-24 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Compétences</h2>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Classées par domaine — ce que je pratique à l'université, au lab et en jeu.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.titre}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-blue-500/60 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
            >
              <h3 className="text-lg font-semibold">
                <span aria-hidden="true" className="mr-2">{cat.emoji}</span>
                {cat.titre}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
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

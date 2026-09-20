import { FREE_FIRE } from "../data";

const etapes = [
  {
    date: "2025 — Aujourd'hui",
    titre: "Licence 1 Informatique & lab systèmes",
    texte:
      "POO en C++, développement web, modélisation de bases de données — et à la maison : VM Linux, serveurs et virtualisation.",
  },
  {
    date: "2024",
    titre: `Élite Héroïque, clan & communauté`,
    texte: `Le cap des ${FREE_FIRE.booyahs} Booyahs franchi, le rang ${FREE_FIRE.rang} atteint avec ${FREE_FIRE.clan}, et le lancement de mon serveur Discord info & prog.`,
  },
  {
    date: String(FREE_FIRE.depuis),
    titre: "La découverte de Free Fire",
    texte:
      "Première partie, premier Booyah. Ce qui n'était qu'un passe-temps devient une discipline : plus de 2 500 heures d'entraînement depuis.",
  },
];

export default function Experience() {
  return (
    <section id="parcours" className="bg-neutral-50 px-6 py-24 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold">Parcours</h2>
        <ol className="mt-10 space-y-10 border-l border-neutral-300 pl-8 dark:border-neutral-700">
          {etapes.map((e) => (
            <li key={e.date} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.45rem] top-1.5 h-4 w-4 rounded-full border-2 border-blue-600 bg-white dark:border-blue-400 dark:bg-neutral-950"
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                {e.date}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{e.titre}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">{e.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { FREE_FIRE } from "../data";
import Reveal from "./Reveal";

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
    <section id="parcours" className="border-y border-gold-500/10 bg-nuit-900/40 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="filet-dore font-serif text-3xl font-bold text-neutral-100">
            Parcours
          </h2>
        </Reveal>
        <Reveal delai={150}>
          <ol className="mt-12 space-y-10 border-l border-gold-500/25 pl-8">
            {etapes.map((e) => (
              <li key={e.date} className="relative">
                <span
                  aria-hidden="true"
                  className="point-dore absolute -left-[2.45rem] top-1.5 h-4 w-4 rounded-full border-2 border-gold-400 bg-nuit-950"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {e.date}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gold-100">{e.titre}</h3>
                <p className="mt-2 text-neutral-400">{e.texte}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

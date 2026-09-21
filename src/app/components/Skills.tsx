import { COMPETENCES } from "../data";
import { IconCode, IconGamepad, IconGlobe, IconServer } from "./icons";
import Reveal from "./Reveal";

const ICONES: Record<string, typeof IconCode> = {
  "Langages & code": IconCode,
  "Frameworks & web": IconGlobe,
  "Systèmes & réseaux": IconServer,
  "Outils & gamer": IconGamepad,
};

export default function Skills() {
  return (
    <section id="competences" className="bg-white/60 px-6 py-24 dark:bg-encre md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] texte-accent">02 · Compétences</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Quatre terrains d&apos;entraînement.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed opacity-75">
            Des langages aux serveurs, en passant par le web et la scène du jeu : chaque domaine
            nourrit les autres.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {COMPETENCES.map((categorie, index) => {
            const Icone = ICONES[categorie.titre] ?? IconCode;
            return (
              <Reveal key={categorie.titre} delay={index * 80}>
                <article className="h-full border border-orgrave/20 bg-ivoire p-7 transition-colors hover:border-orgrave/50 dark:border-gold/20 dark:bg-nuit dark:hover:border-gold/50">
                  <h3 className="flex items-center gap-4 font-serif text-2xl">
                    <Icone className="h-6 w-6 shrink-0 text-orgrave dark:text-gold" />
                    {categorie.titre}
                  </h3>
                  <p className="mt-3 text-sm opacity-70">{categorie.resume}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {categorie.competences.map(competence => (
                      <li
                        key={competence}
                        className="rounded-full border border-orgrave/25 px-3 py-1.5 text-sm dark:border-gold/25"
                      >
                        {competence}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

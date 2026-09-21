import { PARCOURS } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="parcours" className="bg-white/60 px-6 py-24 dark:bg-encre md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] texte-accent">04 · Parcours</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Une trajectoire, plusieurs arènes.
          </h2>
        </Reveal>

        <ol className="ml-2 mt-12 max-w-3xl space-y-12 border-l border-orgrave/30 dark:border-gold/30">
          {PARCOURS.map((etape, index) => (
            <li key={etape.date} className="relative pl-8 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border border-orgrave bg-ivoire dark:border-gold dark:bg-encre"
              />
              <Reveal delay={index * 80}>
                <p className="text-xs uppercase tracking-[0.2em] texte-accent">{etape.date}</p>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl">{etape.titre}</h3>
                <p className="mt-3 leading-relaxed opacity-80">{etape.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

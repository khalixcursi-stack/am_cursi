import { PROJETS } from "../data";
import { IconExternal } from "./icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projets" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] texte-accent">03 · Projets</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Ce que je construis, en jeu et en code.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed opacity-75">
            Six projets représentatifs : du site que vous lisez aux cartes créées dans Craftland
            Studio.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJETS.map((projet, index) => (
            <Reveal key={projet.titre} delay={(index % 3) * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden border border-orgrave/20 transition-colors hover:border-orgrave/50 dark:border-gold/20 dark:hover:border-gold/50">
                <picture>
                  <source srcSet={projet.imageWebp} type="image/webp" />
                  <img
                    src={projet.image}
                    alt={projet.alt}
                    width={960}
                    height={540}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/9] w-full border-b border-orgrave/20 object-cover dark:border-gold/20"
                  />
                </picture>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl leading-tight">{projet.titre}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-80">{projet.description}</p>
                  <ul className="mb-6 mt-5 flex flex-wrap gap-2">
                    {projet.techs.map(tech => (
                      <li
                        key={tech}
                        className="rounded-full border border-orgrave/25 px-2.5 py-1 text-xs dark:border-gold/25"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {projet.lien && (
                    <a
                      href={projet.lien.href}
                      target={projet.lien.externe ? "_blank" : undefined}
                      rel={projet.lien.externe ? "noopener noreferrer" : undefined}
                      className="mt-auto inline-flex items-center gap-2 self-start text-sm texte-accent hover:underline"
                    >
                      {projet.lien.label}
                      <IconExternal className="h-4 w-4" />
                      {projet.lien.externe && <span className="sr-only">(nouvel onglet)</span>}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

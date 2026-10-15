import type { Metadata } from "next";
import Link from "next/link";
import { CARRIERES, CONTACTS, IDENTITE, PROJETS } from "../data";
import Reveal from "../components/Reveal";
import { IconArrowRight, IconMail } from "../components/icons";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Rejoindre Cursi : stages, missions et collaborations autour du développement web, des systèmes Linux et de la communauté Free Fire.",
  alternates: { canonical: "/carrieres" },
  openGraph: {
    title: "Carrières · Cursi",
    description: "Stages, missions et collaborations avec Cursi, étudiant en informatique à Brazzaville.",
    url: "/carrieres",
  },
};

/** Délai d'apparition (ms) pour l'entrée échelonnée du hero. */
const delai = (ms: number) => ({ animationDelay: `${ms}ms` });

const LIBELLE_NUMERO = (index: number) => String(index + 1).padStart(2, "0");

export default function CarrieresPage() {
  const mosaique = PROJETS;
  const realisations = PROJETS.slice(0, 3);

  return (
    <>
      {/* Accroche : titre large + mosaïque d'images, comme la page d'origine */}
      <section aria-labelledby="titre-carrieres" className="relative overflow-hidden px-6 pb-16 pt-32 md:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-halo-or motion-safe:animate-flottement" />
        <div className="relative mx-auto max-w-6xl">
          <p className="motion-safe:animate-montee text-xs uppercase tracking-[0.3em] texte-accent" style={delai(0)}>
            Carrières · {IDENTITE.ville}
          </p>
          <h1
            id="titre-carrieres"
            className="motion-safe:animate-montee mt-6 font-sans text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={delai(120)}
          >
            {CARRIERES.accroche}
          </h1>
          <div className="motion-safe:animate-montee mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" style={delai(300)}>
            <p className="max-w-xl text-base leading-relaxed opacity-80 sm:text-lg">{CARRIERES.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#postes"
                className="inline-flex items-center gap-2 border border-gold bg-gold px-6 py-3 text-sm font-medium text-[#14100a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/85"
              >
                Voir les postes ouverts
                <IconArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-orgrave/40 px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orgrave hover:text-orgrave dark:border-gold/40 dark:hover:border-gold dark:hover:text-gold"
              >
                Retour au portfolio
              </Link>
            </div>
          </div>
        </div>

        <ul className="relative mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {mosaique.map((projet, index) => (
            <li
              key={projet.titre}
              className="motion-safe:animate-montee overflow-hidden"
              style={delai(400 + index * 80)}
            >
              <picture className="block overflow-hidden">
                <source srcSet={projet.imageWebp} type="image/webp" />
                <img
                  src={projet.image}
                  alt={projet.alt}
                  width={960}
                  height={600}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </picture>
            </li>
          ))}
        </ul>
      </section>

      {/* Histoire : titre à gauche, texte à droite, séparés par un filet */}
      <section aria-labelledby="titre-histoire" className="border-t border-orgrave/20 px-6 py-24 dark:border-gold/20 md:py-32">
        <Reveal className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Notre histoire</p>
            <h2 id="titre-histoire" className="mt-4 font-sans text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Un projet personnel, une équipe en construction.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed opacity-80">
            {CARRIERES.histoire.map(paragraphe => (
              <p key={paragraphe}>{paragraphe}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Valeurs : trois colonnes numérotées */}
      <section aria-labelledby="titre-valeurs" className="border-t border-orgrave/20 px-6 py-24 dark:border-gold/20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Nos valeurs</p>
            <h2 id="titre-valeurs" className="mt-4 max-w-3xl font-sans text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Trois principes pour avancer.
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
            {CARRIERES.valeurs.map((valeur, index) => (
              <li
                key={valeur.titre}
                className="group border-t border-orgrave/30 pt-8 md:px-8 md:first:pl-0 md:last:pr-0 dark:border-gold/30"
              >
                <Reveal delay={index * 100}>
                  <p className="font-sans text-sm texte-accent">{LIBELLE_NUMERO(index)}</p>
                  <h3 className="mt-6 font-sans text-2xl font-medium transition-colors group-hover:texte-accent">
                    {valeur.titre}
                  </h3>
                  <p className="mt-4 leading-relaxed opacity-80">{valeur.texte}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Postes ouverts : tableau à lignes */}
      <section id="postes" aria-labelledby="titre-postes" className="border-t border-orgrave/20 bg-white/60 px-6 py-24 dark:border-gold/20 dark:bg-encre md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Postes ouverts</p>
            <h2 id="titre-postes" className="mt-4 font-sans text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              {CARRIERES.postes.length} missions à pourvoir.
            </h2>
          </Reveal>

          <div className="mt-14">
            <div
              aria-hidden="true"
              className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-6 border-b border-orgrave/30 pb-3 text-xs uppercase tracking-[0.2em] opacity-60 md:grid dark:border-gold/30"
            >
              <span>Poste</span>
              <span>Domaine</span>
              <span>Lieu</span>
              <span>Type</span>
            </div>
            <ul className="divide-y divide-orgrave/20 dark:divide-gold/20">
              {CARRIERES.postes.map((poste, index) => (
                <li key={poste.titre} className="group relative">
                  <Reveal delay={index * 60}>
                    <a
                      href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent(`Candidature : ${poste.titre}`)}`}
                      className="relative grid gap-3 py-8 pl-0 transition-[padding] duration-500 hover:pl-6 md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center md:gap-6"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100"
                      />
                      <div>
                        <h3 className="font-sans text-2xl font-medium leading-tight transition-colors group-hover:text-orgrave dark:group-hover:text-gold">
                          {poste.titre}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed opacity-70">{poste.description}</p>
                      </div>
                      <p className="text-sm opacity-80">
                        <span className="text-xs uppercase tracking-[0.2em] opacity-60 md:hidden">Domaine : </span>
                        {poste.domaine}
                      </p>
                      <p className="text-sm opacity-80">
                        <span className="text-xs uppercase tracking-[0.2em] opacity-60 md:hidden">Lieu : </span>
                        {poste.lieu}
                      </p>
                      <p className="flex items-center justify-between text-sm opacity-80">
                        <span>
                          <span className="text-xs uppercase tracking-[0.2em] opacity-60 md:hidden">Type : </span>
                          {poste.type}
                        </span>
                        <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </p>
                      <span className="sr-only">(candidater par e-mail)</span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Avantages : grille à filets fins */}
      <section aria-labelledby="titre-avantages" className="border-t border-orgrave/20 px-6 py-24 dark:border-gold/20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Ce que tu y gagnes</p>
            <h2 id="titre-avantages" className="mt-4 font-sans text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Un cadre pour progresser.
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-px overflow-hidden border border-orgrave/20 bg-orgrave/20 sm:grid-cols-2 lg:grid-cols-3 dark:border-gold/20 dark:bg-gold/20">
            {CARRIERES.avantages.map((avantage, index) => (
              <li key={avantage.titre} className="group bg-ivoire p-8 transition-colors duration-500 hover:bg-parchemin dark:bg-nuit dark:hover:bg-encre">
                <Reveal delay={index * 60}>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-60">{LIBELLE_NUMERO(index)}</p>
                  <h3 className="mt-8 font-sans text-xl font-medium">{avantage.titre}</h3>
                  <p className="mt-3 leading-relaxed opacity-80">{avantage.texte}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Derniers chantiers : cartes façon « actualités » */}
      <section aria-labelledby="titre-realisations" className="border-t border-orgrave/20 bg-white/60 px-6 py-24 dark:border-gold/20 dark:bg-encre md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Derniers chantiers</p>
            <h2 id="titre-realisations" className="mt-4 font-sans text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Ce qui se construit en ce moment.
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-8 md:grid-cols-3">
            {realisations.map((projet, index) => (
              <li key={projet.titre}>
                <Reveal delay={index * 80}>
                  <article className="group flex h-full flex-col">
                    <picture className="block overflow-hidden">
                      <source srcSet={projet.imageWebp} type="image/webp" />
                      <img
                        src={projet.image}
                        alt={projet.alt}
                        width={960}
                        height={600}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </picture>
                    <p className="mt-5 text-xs uppercase tracking-[0.2em] texte-accent">Projet</p>
                    <h3 className="mt-3 font-sans text-2xl font-medium leading-tight">{projet.titre}</h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-80">{projet.description}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Candidature : bandeau de fin */}
      <section aria-labelledby="titre-candidature" className="border-t border-orgrave/20 px-6 py-24 dark:border-gold/20 md:py-32">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 id="titre-candidature" className="font-sans text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              {CARRIERES.candidature.titre}
            </h2>
            <p className="mt-6 leading-relaxed opacity-80">{CARRIERES.candidature.texte}</p>
          </div>
          <a
            href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent("Candidature — Carrières Cursi")}`}
            className="inline-flex items-center gap-3 border border-gold bg-gold px-8 py-3.5 text-sm font-medium text-[#14100a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/85"
          >
            <IconMail className="h-4 w-4" />
            Envoyer une candidature
          </a>
        </Reveal>
      </section>
    </>
  );
}

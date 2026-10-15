import type { Metadata } from "next";
import Link from "next/link";
import { CARRIERES, CONTACTS, IDENTITE, PROJETS } from "../data";
import Reveal from "../components/Reveal";
import { IconArrowRight, IconMail, IconSparkles, IconUsers, IconServer, IconTrophy, IconLaptop, IconGlobe } from "../components/icons";

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

const ICONES_VALEURS = [IconTrophy, IconLaptop, IconUsers];
const ICONES_AVANTAGES = [IconGlobe, IconSparkles, IconUsers, IconLaptop, IconServer, IconTrophy];

export default function CarrieresPage() {
  const realisations = PROJETS.slice(0, 3);

  return (
    <>
      {/* Accroche */}
      <section aria-labelledby="titre-carrieres" className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-halo-or motion-safe:animate-flottement" />
        <div className="relative mx-auto max-w-6xl">
          <p className="motion-safe:animate-montee text-xs uppercase tracking-[0.3em] texte-accent" style={delai(0)}>
            Carrières · {IDENTITE.ville}
          </p>
          <h1
            id="titre-carrieres"
            className="motion-safe:animate-montee mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.05] sm:text-6xl md:text-7xl"
            style={delai(120)}
          >
            {CARRIERES.accroche}
          </h1>
          <span
            aria-hidden="true"
            className="motion-safe:animate-fondu-or mt-8 block h-px w-24 origin-left bg-gold"
            style={delai(500)}
          />
          <p className="motion-safe:animate-montee mt-8 max-w-2xl text-base font-light leading-relaxed opacity-80 sm:text-lg" style={delai(300)}>
            {CARRIERES.intro}
          </p>
          <div className="motion-safe:animate-montee mt-10 flex flex-col gap-4 sm:flex-row" style={delai(450)}>
            <a
              href="#postes"
              className="border border-gold bg-gold px-8 py-3.5 text-center text-sm text-[#14100a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/85 hover:shadow-[0_8px_24px_-8px_rgb(211_169_79/0.6)]"
            >
              Voir les postes ouverts
            </a>
            <Link
              href="/"
              className="border border-orgrave/40 px-8 py-3.5 text-center text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orgrave hover:text-orgrave dark:border-gold/40 dark:hover:border-gold dark:hover:text-gold"
            >
              Retour au portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section aria-labelledby="titre-histoire" className="bg-white/60 px-6 py-24 dark:bg-encre md:py-28">
        <Reveal className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Notre histoire</p>
            <h2 id="titre-histoire" className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Un projet personnel, une équipe en construction.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed opacity-80">
            {CARRIERES.histoire.map(paragraphe => (
              <p key={paragraphe}>{paragraphe}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Valeurs */}
      <section aria-labelledby="titre-valeurs" className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Nos valeurs</p>
            <h2 id="titre-valeurs" className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Trois principes pour avancer.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-px overflow-hidden border border-orgrave/20 bg-orgrave/20 dark:border-gold/20 dark:bg-gold/20 md:grid-cols-3">
            {CARRIERES.valeurs.map((valeur, index) => {
              const Icone = ICONES_VALEURS[index];
              return (
                <li key={valeur.titre} className="group bg-ivoire p-8 transition-colors duration-500 hover:bg-parchemin dark:bg-nuit dark:hover:bg-encre">
                  <Reveal delay={index * 80}>
                    <Icone className="h-6 w-6 texte-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6" />
                    <h3 className="mt-6 font-serif text-2xl">{valeur.titre}</h3>
                    <p className="mt-4 leading-relaxed opacity-80">{valeur.texte}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Postes ouverts */}
      <section id="postes" aria-labelledby="titre-postes" className="bg-white/60 px-6 py-24 dark:bg-encre md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Postes ouverts</p>
            <h2 id="titre-postes" className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {CARRIERES.postes.length} missions à pourvoir.
            </h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-orgrave/20 border-y border-orgrave/20 dark:divide-gold/20 dark:border-gold/20">
            {CARRIERES.postes.map((poste, index) => (
              <li key={poste.titre} className="relative">
                <Reveal delay={index * 60}>
                  <a
                    href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent(`Candidature : ${poste.titre}`)}`}
                    className="group relative grid gap-3 py-7 pl-0 transition-[padding] duration-500 hover:pl-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100"
                    />
                    <div>
                      <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-orgrave dark:group-hover:text-gold">{poste.titre}</h3>
                      <p className="mt-2 text-sm leading-relaxed opacity-80">{poste.description}</p>
                    </div>
                    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em] opacity-70 md:justify-end">
                      <span>{poste.domaine}</span>
                      <span aria-hidden="true">·</span>
                      <span>{poste.lieu}</span>
                      <span aria-hidden="true">·</span>
                      <span>{poste.type}</span>
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      <span className="sr-only">(candidater par e-mail)</span>
                    </p>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Avantages */}
      <section aria-labelledby="titre-avantages" className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Ce que tu y gagnes</p>
            <h2 id="titre-avantages" className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Un cadre pour progresser.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {CARRIERES.avantages.map((avantage, index) => {
              const Icone = ICONES_AVANTAGES[index];
              return (
                <li key={avantage.titre} className="group">
                  <Reveal delay={index * 60}>
                    <Icone className="h-6 w-6 texte-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    <h3 className="mt-5 font-serif text-2xl">{avantage.titre}</h3>
                    <p className="mt-3 leading-relaxed opacity-80">{avantage.texte}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Réalisations récentes */}
      <section aria-labelledby="titre-realisations" className="bg-white/60 px-6 py-24 dark:bg-encre md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] texte-accent">Derniers chantiers</p>
            <h2 id="titre-realisations" className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Ce qui se construit en ce moment.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {realisations.map((projet, index) => (
              <li key={projet.titre}>
                <Reveal delay={index * 80}>
                  <article className="group flex h-full flex-col overflow-hidden border border-orgrave/20 bg-ivoire transition-all duration-500 hover:-translate-y-1 hover:border-orgrave/50 hover:shadow-xl dark:border-gold/20 dark:bg-nuit dark:hover:border-gold/50">
                    <picture className="block overflow-hidden">
                      <source srcSet={projet.imageWebp} type="image/webp" />
                      <img
                        src={projet.image}
                        alt={projet.alt}
                        width={960}
                        height={600}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </picture>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-2xl leading-tight">{projet.titre}</h3>
                      <p className="mt-4 text-sm leading-relaxed opacity-80">{projet.description}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Candidature */}
      <section aria-labelledby="titre-candidature" className="px-6 py-24 text-center md:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <h2 id="titre-candidature" className="font-serif text-4xl leading-tight md:text-5xl">
            {CARRIERES.candidature.titre}
          </h2>
          <p className="mt-6 leading-relaxed opacity-80">{CARRIERES.candidature.texte}</p>
          <a
            href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent("Candidature — Carrières Cursi")}`}
            className="mt-10 inline-flex items-center gap-3 border border-gold bg-gold px-8 py-3.5 text-sm text-[#14100a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/85"
          >
            <IconMail className="h-4 w-4" />
            Envoyer une candidature
          </a>
        </Reveal>
      </section>
    </>
  );
}

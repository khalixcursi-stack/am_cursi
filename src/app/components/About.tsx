import { FAITS_JEU, FREE_FIRE, IDENTITE, PASSIONS, SETUP, type TypeMateriel } from "../data";
import { IconGamepad, IconLaptop, IconMap, IconShield, IconSmartphone, IconSparkles } from "./icons";
import Reveal from "./Reveal";

const ICONES_MATERIEL: Record<TypeMateriel, typeof IconLaptop> = {
  pc: IconLaptop,
  mobile: IconSmartphone,
  console: IconGamepad,
};

const ICONES_PASSIONS: Record<string, typeof IconSparkles> = {
  Animé: IconSparkles,
  Stoïcisme: IconShield,
  "Free Fire": IconGamepad,
  "Craftland Studio": IconMap,
};

export default function About() {
  return (
    <section id="apropos" className="px-6 py-24 md:py-28">
      <Reveal className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[18rem_1fr] md:gap-16">
        <figure className="mx-auto w-72 max-w-full border border-orgrave/40 bg-nuit p-4 dark:border-gold/40">
          <picture>
            <source srcSet="/logo-cursi.webp" type="image/webp" />
            <img
              src="/logo-cursi.png"
              alt="Logo Cursi : signature manuscrite blanche sur fond noir"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-contain"
            />
          </picture>
          <figcaption className="pb-3 pt-4 text-center font-serif text-xl italic text-parchemin">
            La signature Cursi
          </figcaption>
        </figure>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] texte-accent">01 · À propos</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Étudiant le jour, stratège la nuit.
          </h2>
          <p className="mt-6 leading-relaxed opacity-80">
            Je suis {IDENTITE.prenom}, {IDENTITE.nomUsage}, aussi connu sous les alias{" "}
            {IDENTITE.alias.join(" et ")}. À {IDENTITE.age} ans, je poursuis une {IDENTITE.etudes} à{" "}
            {IDENTITE.ville}. Entre code et stratégie, je construis mon parcours avec curiosité et
            discipline.
          </p>
          <p className="mt-4 leading-relaxed opacity-80">
            Sur Free Fire depuis {FREE_FIRE.depuis}, j&apos;y cultive la tactique d&apos;équipe au
            rang {FREE_FIRE.rang} avec le clan {FREE_FIRE.clan}. Hors du jeu, mon lab Arch Linux,
            Ubuntu Server et Windows Server 2022 est mon second terrain d&apos;expérimentation.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-orgrave/20 bg-orgrave/20 sm:grid-cols-4 dark:border-gold/20 dark:bg-gold/20">
            {FAITS_JEU.map(fait => (
              <div key={fait.label} className="bg-ivoire px-4 py-4 dark:bg-nuit">
                <dt className="text-[0.65rem] uppercase tracking-[0.2em] opacity-70">{fait.label}</dt>
                <dd className="mt-1.5 font-serif text-lg texte-accent">{fait.valeur}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="my-8 border-l border-orgrave/40 pl-5 dark:border-gold/40">
            <p className="font-serif text-2xl italic texte-accent">« {IDENTITE.citation.texte} »</p>
            <footer className="mt-3 text-xs uppercase tracking-[0.2em]">
              — {IDENTITE.citation.auteur}
            </footer>
          </blockquote>

          <h3 className="font-serif text-2xl">Passions</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {PASSIONS.map(passion => {
              const Icone = ICONES_PASSIONS[passion] ?? IconSparkles;
              return (
                <li
                  key={passion}
                  className="flex items-center gap-2 rounded-full border border-orgrave/25 px-3 py-1.5 text-sm dark:border-gold/25"
                >
                  <Icone className="h-4 w-4 text-orgrave dark:text-gold" />
                  {passion}
                </li>
              );
            })}
          </ul>

          <h3 className="mt-8 font-serif text-2xl">Mon setup</h3>
          <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {SETUP.map(materiel => {
              const Icone = ICONES_MATERIEL[materiel.type];
              return (
                <li key={materiel.label} className="flex items-center gap-3">
                  <Icone className="h-5 w-5 shrink-0 text-orgrave dark:text-gold" />
                  {materiel.label}
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

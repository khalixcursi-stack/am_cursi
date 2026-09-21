import { FREE_FIRE, IDENTITE, STATS } from "../data";
import { IconArrowDown, IconMapPin } from "./icons";

export default function Hero() {
  const annee = new Date().getFullYear();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-28 text-center md:pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-halo-or" />

      <div className="relative mx-auto max-w-4xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-orgrave/30 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] text-orgrave dark:border-gold/30 dark:text-gold">
          <IconMapPin className="h-3.5 w-3.5" />
          {IDENTITE.ville} · {annee}
        </p>

        <h1 className="mt-8 font-serif text-5xl font-normal leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          Bonjour, je suis <em className="italic texte-accent">Cursi</em>.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-relaxed opacity-80 sm:text-lg">
          Étudiant en {IDENTITE.etudes}, développeur en devenir — et joueur Free Fire{" "}
          {FREE_FIRE.rang} depuis {FREE_FIRE.depuis}.
        </p>

        <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed texte-accent sm:text-2xl">
          « {IDENTITE.slogan} »
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projets"
            className="border border-gold bg-gold px-8 py-3.5 text-sm text-[#14100a] transition-colors hover:bg-gold/85"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border border-orgrave/40 px-8 py-3.5 text-sm transition-colors hover:border-orgrave hover:text-orgrave dark:border-gold/40 dark:hover:border-gold dark:hover:text-gold"
          >
            Me contacter
          </a>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-orgrave/20 bg-orgrave/20 sm:grid-cols-4 dark:border-gold/20 dark:bg-gold/20">
          {STATS.map(stat => (
            <div key={stat.legende} className="bg-ivoire/90 px-4 py-5 backdrop-blur-sm dark:bg-nuit/90">
              <dt className="text-[0.65rem] uppercase tracking-[0.2em] opacity-70">{stat.legende}</dt>
              <dd className="mt-2 font-serif text-xl texte-accent">{stat.valeur}</dd>
            </div>
          ))}
        </dl>

        <a
          href="#apropos"
          className="mt-14 inline-flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] opacity-60 transition-colors hover:text-orgrave hover:opacity-100 dark:hover:text-gold"
        >
          Défiler
          <IconArrowDown className="h-4 w-4 motion-safe:animate-bounce" />
        </a>
      </div>
    </section>
  );
}

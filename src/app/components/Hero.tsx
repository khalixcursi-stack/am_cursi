import { FREE_FIRE, IDENTITE } from "../data";
import { IconeEtoile } from "./Icones";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="anim-fondu text-xs uppercase tracking-[0.35em] text-gold-400/90"
          style={{ animationDelay: "0.1s" }}
        >
          {IDENTITE.ville} · 2026
        </p>
        <h1
          className="anim-apparition mt-6 font-serif text-5xl font-bold tracking-tight text-neutral-100 md:text-7xl"
          style={{ animationDelay: "0.25s" }}
        >
          Bonjour, je suis{" "}
          <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
            {IDENTITE.prenom}
          </span>
        </h1>
        <p
          className="anim-apparition mt-5 text-lg text-neutral-400 md:text-xl"
          style={{ animationDelay: "0.45s" }}
        >
          Étudiant en {IDENTITE.etudes}, développeur en devenir — et joueur
          Free Fire {FREE_FIRE.rang} depuis {FREE_FIRE.depuis}.
        </p>

        <div
          className="anim-apparition mt-6 flex items-center justify-center gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          <span
            aria-hidden="true"
            className="hidden h-px w-14 bg-gradient-to-r from-transparent to-gold-500/70 sm:block"
          />
          <p className="flex items-center gap-3 font-serif text-lg italic text-gold-300">
            <IconeEtoile className="h-3 w-3 text-gold-500" />
            {IDENTITE.devise}
            <IconeEtoile className="h-3 w-3 text-gold-500" />
          </p>
          <span
            aria-hidden="true"
            className="hidden h-px w-14 bg-gradient-to-l from-transparent to-gold-500/70 sm:block"
          />
        </div>

        <div
          className="anim-apparition mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.75s" }}
        >
          <a
            href="#projets"
            className="bouton-or rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-semibold text-nuit-950 shadow-or transition hover:brightness-110"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gold-500/40 px-7 py-3.5 text-sm font-semibold text-gold-300 transition hover:border-gold-400 hover:bg-gold-500/10"
          >
            Me contacter
          </a>
        </div>

        <div
          className="anim-apparition mt-10 flex flex-wrap items-center justify-center gap-2 text-xs"
          style={{ animationDelay: "0.9s" }}
        >
          {[
            `${IDENTITE.age} ans`,
            IDENTITE.etudes,
            FREE_FIRE.rang,
            `Clan ${FREE_FIRE.clan}`,
          ].map((c) => (
            <span
              key={c}
              className="rounded-full border border-gold-500/25 bg-gold-500/5 px-3 py-1.5 text-gold-200/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

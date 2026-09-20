import { FREE_FIRE, IDENTITE } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-400/90">
          {IDENTITE.ville} · 2026
        </p>
        <h1 className="mt-6 font-serif text-5xl font-bold tracking-tight text-neutral-100 md:text-7xl">
          Bonjour, je suis{" "}
          <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
            {IDENTITE.prenom}
          </span>
        </h1>
        <p className="mt-5 text-lg text-neutral-400 md:text-xl">
          Étudiant en {IDENTITE.etudes}, développeur en devenir — et joueur
          Free Fire {FREE_FIRE.rang} depuis {FREE_FIRE.depuis}.
        </p>
        <p className="mt-3 font-serif text-lg italic text-gold-300/90">
          « {IDENTITE.slogan} »
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projets"
            className="rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-semibold text-nuit-950 shadow-or transition hover:brightness-110"
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs">
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

import { FREE_FIRE, IDENTITE } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
          {IDENTITE.ville} · 2026
        </p>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          Bonjour, je suis{" "}
          <span className="text-blue-600 dark:text-blue-400">{IDENTITE.prenom}</span>
        </h1>
        <p className="mt-5 text-lg text-neutral-600 md:text-xl dark:text-neutral-300">
          Étudiant en {IDENTITE.etudes}, développeur en devenir — et joueur
          Free Fire {FREE_FIRE.rang} depuis {FREE_FIRE.depuis}.
        </p>
        <p className="mt-3 font-medium italic text-neutral-500 dark:text-neutral-400">
          « {IDENTITE.slogan} »
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projets"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-600 dark:border-neutral-700 dark:hover:border-blue-400 dark:hover:text-blue-400"
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
              className="rounded-full bg-neutral-100 px-3 py-1.5 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

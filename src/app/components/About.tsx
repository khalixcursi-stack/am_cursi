import { FREE_FIRE, IDENTITE } from "../data";

const passions = ["One Piece", "Stoïcisme", "Free Fire", "Craftland Studio"];
const setup = [
  "💻 PC Dell · i5 8ᵉ gén · 8 Go RAM",
  "📱 Galaxy Z Fold2 5G",
  "📱 Galaxy A16",
  "🎮 Xbox One",
];

export default function About() {
  return (
    <section id="apropos" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[auto_1fr]">
        <div
          aria-hidden="true"
          className="mx-auto flex h-40 w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-6xl font-extrabold text-white shadow-xl shadow-blue-600/20"
        >
          C
        </div>
        <div>
          <h2 className="text-3xl font-bold">À propos</h2>
          <p className="mt-5 leading-relaxed text-neutral-600 dark:text-neutral-300">
            Moi c'est <strong>{IDENTITE.prenom}</strong> ({IDENTITE.nomUsage}),{" "}
            {IDENTITE.alias.join(" · ")} sur la toile. {IDENTITE.age} ans, étudiant en{" "}
            {IDENTITE.etudes} à {IDENTITE.ville}, je partage mon temps entre le code,
            les machines virtuelles Linux et les ranked Free Fire.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
            Sur le champ de bataille depuis {FREE_FIRE.depuis}, je joue{" "}
            <strong>{FREE_FIRE.rang}</strong> sous les couleurs du clan{" "}
            <strong>{FREE_FIRE.clan}</strong> — {FREE_FIRE.booyahs} Booyahs et{" "}
            {FREE_FIRE.heures} heures d'entraînement plus tard, toujours la même envie
            de progresser. Côté lab : Arch Linux, Ubuntu Server, Windows Server 2022 et
            beaucoup de curiosité.
          </p>
          <p className="mt-4 italic text-neutral-500 dark:text-neutral-400">
            « Le bonheur de ta vie dépend de la qualité de tes pensées. » — Marc Aurèle
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Passions
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {passions.map((p) => (
              <li
                key={p}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
              >
                {p}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Mon setup
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {setup.map((s) => (
              <li
                key={s}
                className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

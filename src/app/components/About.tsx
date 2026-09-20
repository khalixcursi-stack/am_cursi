import { FREE_FIRE, IDENTITE } from "../data";
import { IconeGamepad, IconeOrdinateur, IconeSmartphone } from "./Icones";
import { MonogrammeCursi } from "./LogoCursi";

const passions = ["One Piece", "Stoïcisme", "Free Fire", "Craftland Studio"];
const setup = [
  { icone: IconeOrdinateur, label: "PC Dell · i5 8ᵉ gén · 8 Go RAM" },
  { icone: IconeSmartphone, label: "Galaxy Z Fold2 5G" },
  { icone: IconeSmartphone, label: "Galaxy A16" },
  { icone: IconeGamepad, label: "Xbox One" },
];

export default function About() {
  return (
    <section id="apropos" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[auto_1fr]">
        <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-3xl border border-gold-500/30 bg-gradient-to-br from-gold-500/15 via-nuit-900 to-nuit-950 shadow-or">
          <MonogrammeCursi className="h-32 w-32" />
        </div>
        <div>
          <h2 className="filet-dore font-serif text-3xl font-bold text-neutral-100">
            À propos
          </h2>
          <p className="mt-6 leading-relaxed text-neutral-400">
            Moi c'est <strong className="text-gold-200">{IDENTITE.prenom}</strong> (
            {IDENTITE.nomUsage}), {IDENTITE.alias.join(" · ")} sur la toile.{" "}
            {IDENTITE.age} ans, étudiant en {IDENTITE.etudes} à {IDENTITE.ville},
            je partage mon temps entre le code, les machines virtuelles Linux et
            les ranked Free Fire.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Sur le champ de bataille depuis {FREE_FIRE.depuis}, je joue{" "}
            <strong className="text-gold-200">{FREE_FIRE.rang}</strong> sous les
            couleurs du clan <strong className="text-gold-200">{FREE_FIRE.clan}</strong> —{" "}
            {FREE_FIRE.booyahs} Booyahs et {FREE_FIRE.heures} heures
            d'entraînement plus tard, toujours la même envie de progresser. Côté
            lab : Arch Linux, Ubuntu Server, Windows Server 2022 et beaucoup de
            curiosité.
          </p>
          <p className="mt-4 font-serif italic text-gold-200/80">
            « Le bonheur de ta vie dépend de la qualité de tes pensées. » — Marc Aurèle
          </p>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400/80">
            Passions
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {passions.map((p) => (
              <li
                key={p}
                className="rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-2 text-sm text-gold-100/80"
              >
                {p}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400/80">
            Mon setup
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {setup.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-full border border-gold-500/15 px-4 py-2 text-sm text-neutral-300"
              >
                <span aria-hidden="true" className="text-gold-400">
                  <s.icone className="h-4 w-4" />
                </span>
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

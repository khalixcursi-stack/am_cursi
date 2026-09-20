import { FREE_FIRE, IDENTITE } from "../data";
import { IconLaptop, IconSmartphone, IconGamepad } from "./icons";

const setup = [
  { icon: IconLaptop, label: "PC Dell · i5 8 gén · 8 Go RAM" },
  { icon: IconSmartphone, label: "Galaxy Z Fold2 5G" },
  { icon: IconSmartphone, label: "Galaxy A16" },
  { icon: IconGamepad, label: "Xbox One" },
];

export default function About() {
  return (
    <section id="apropos" className="px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[18rem_1fr] md:gap-16">
        <figure className="mx-auto w-72 max-w-full border border-gold/40 bg-nuit p-4">
          <img src="/logo-cursi.png" alt="Logo Cursi — signature blanche sur fond noir" width="1024" height="1024" loading="lazy" className="h-auto w-full object-contain" />
          <figcaption className="pb-3 pt-4 text-center font-serif text-xl italic text-parchemin">La signature Cursi</figcaption>
        </figure>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">01 · À propos</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Étudiant le jour, stratège la nuit.</h2>
          <p className="mt-6 leading-relaxed opacity-80">Je suis {IDENTITE.prenom}, {IDENTITE.nomUsage}, aussi connu sous les alias {IDENTITE.alias.join(" et ")}. À {IDENTITE.age} ans, je poursuis une {IDENTITE.etudes} à {IDENTITE.ville}. Entre code et stratégie, je construis mon parcours avec curiosité et discipline.</p>
          <p className="mt-4 leading-relaxed opacity-80">Sur Free Fire depuis {FREE_FIRE.depuis}, je joue au rang {FREE_FIRE.rang} avec le clan {FREE_FIRE.clan} : {FREE_FIRE.booyahs} Booyahs et {FREE_FIRE.heures} heures d’entraînement. Hors du jeu, mon lab Arch Linux, Ubuntu Server et Windows Server 2022 est mon terrain d’expérimentation.</p>
          <blockquote className="my-8 border-l border-gold/40 pl-5">
            <p className="font-serif text-2xl italic text-gold">« Le bonheur de ta vie dépend de la qualité de tes pensées. »</p>
            <footer className="mt-3 text-xs tracking-[0.2em]">— MARC AURÈLE</footer>
          </blockquote>
          <h3 className="font-serif text-2xl">Passions</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {["Animé", "Stoïcisme", "Free Fire", "Craftland Studio"].map(passion => <li key={passion} className="rounded-full border border-gold/25 px-3 py-1 text-sm">{passion}</li>)}
          </ul>
          <h3 className="mt-7 font-serif text-2xl">Mon setup</h3>
          <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {setup.map(({ icon: Icon, label }) => <li key={label} className="flex items-center gap-3"><Icon className="h-5 w-5 shrink-0 text-gold" />{label}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

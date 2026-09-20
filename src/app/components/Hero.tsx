import { FREE_FIRE, IDENTITE } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 pb-20 pt-36 text-center">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase leading-loose tracking-[0.4em] text-gold">{IDENTITE.ville} · 2026</p>
        <h1 className="mt-8 font-serif text-6xl font-normal leading-[1.08] md:text-8xl">Bonjour, je suis <em className="italic text-gold">Cursi</em>.</h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg font-light leading-relaxed opacity-80">Étudiant en Licence 1 Informatique, développeur en devenir — et joueur Free Fire Élite Héroïque depuis 2019.</p>
        <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl italic leading-relaxed text-gold">« {IDENTITE.slogan} »</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#projets" className="border border-gold bg-gold px-8 py-3.5 text-sm text-[#14100a] transition-colors hover:bg-transparent hover:text-gold">Voir mes projets</a>
          <a href="#contact" className="border border-gold/40 px-8 py-3.5 text-sm transition-colors hover:border-gold hover:text-gold">Me contacter</a>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {[`${IDENTITE.age} ans`, IDENTITE.etudes, FREE_FIRE.rang, `Clan ${FREE_FIRE.clan}`].map(chip => <li key={chip} className="rounded-full border border-gold/25 px-4 py-1.5 text-xs">{chip}</li>)}
        </ul>
      </div>
    </section>
  );
}

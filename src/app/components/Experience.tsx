const steps = [
  {
    date: "2026 — Aujourd'hui",
    title: "Licence 1 Informatique & lab systèmes",
    description: "POO en C++, développement web, modélisation de bases de données — et à la maison : VM Linux, serveurs et virtualisation.",
  },
  {
    date: "2024",
    title: "Élite Héroïque, clan & communauté",
    description: "Le cap des 5 000+ Booyahs franchi, le rang Élite Héroïque atteint avec ɴᴏᴛ ɪᴋᴇ ᴜs, et le lancement de mon serveur Discord info & prog.",
  },
  {
    date: "2019",
    title: "La découverte de Free Fire",
    description: "Première partie, premier Booyah. Ce qui n'était qu'un passe-temps devient une discipline : plus de 2 500 heures d'entraînement depuis.",
  },
];

export default function Experience() {
  return (
    <section id="parcours" className="bg-white/60 px-6 py-24 dark:bg-encre md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">04 · Parcours</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Une trajectoire, plusieurs arènes.</h2>
        <ol className="ml-2 mt-12 max-w-3xl space-y-12 border-l border-gold/30">
          {steps.map(step => (
            <li key={step.date} className="relative pl-8 md:pl-10">
              <span aria-hidden="true" className="absolute -left-[6.5px] top-1 h-3 w-3 rounded-full border border-gold bg-ivoire dark:bg-encre" />
              <p className="text-xs tracking-[0.2em] text-gold">{step.date}</p>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl">{step.title}</h3>
              <p className="mt-3 leading-relaxed opacity-80">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

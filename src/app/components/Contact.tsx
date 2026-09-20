import { CONTACTS } from "../data";

const reseaux = [
  { label: "Discord", detail: "Serveur info & prog", href: CONTACTS.discord, icone: "🎮" },
  { label: "WhatsApp", detail: "Discussion directe", href: CONTACTS.whatsapp, icone: "💬" },
  { label: "Instagram", detail: "@zzz_cursi", href: CONTACTS.instagram, icone: "📸" },
  { label: "GitHub", detail: "Le code de ce site", href: CONTACTS.github, icone: "🐙" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="filet-dore-centre font-serif text-3xl font-bold text-neutral-100">
          Travaillons ensemble&nbsp;?
        </h2>
        <p className="mt-6 text-neutral-400">
          Pour une squad, un projet de code, un lab systèmes — ou juste discuter
          stratégie et stoïcisme : ma porte (et mon lobby) est toujours ouverte.
        </p>
        <a
          href={`mailto:${CONTACTS.email}`}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-sm font-semibold text-nuit-950 shadow-or transition hover:brightness-110"
        >
          ✉️ {CONTACTS.email}
        </a>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {reseaux.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gold-500/15 bg-nuit-950/70 p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-or"
              >
                <span aria-hidden="true" className="text-2xl text-gold-400">{r.icone}</span>
                <span>
                  <span className="block font-semibold text-gold-100">{r.label}</span>
                  <span className="block text-sm text-neutral-400">
                    {r.detail}
                  </span>
                </span>
                <span aria-hidden="true" className="ml-auto text-gold-400">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

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
        <h2 className="text-3xl font-bold">Travaillons ensemble&nbsp;?</h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Pour une squad, un projet de code, un lab systèmes — ou juste discuter
          stratégie et stoïcisme : ma porte (et mon lobby) est toujours ouverte.
        </p>
        <a
          href={`mailto:${CONTACTS.email}`}
          className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
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
                className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 text-left transition hover:border-blue-500/60 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
              >
                <span aria-hidden="true" className="text-2xl">{r.icone}</span>
                <span>
                  <span className="block font-semibold">{r.label}</span>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                    {r.detail}
                  </span>
                </span>
                <span aria-hidden="true" className="ml-auto text-blue-600 dark:text-blue-400">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

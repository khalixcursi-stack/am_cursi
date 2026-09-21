import { IDENTITE, LIENS_PIED } from "../data";
import { IconArrowUp } from "./icons";

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="border-t border-orgrave/20 px-6 py-10 dark:border-gold/20">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Liens de pied de page">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em]">
            {LIENS_PIED.map(lien => (
              <li key={lien.label}>
                <a
                  href={lien.href}
                  target={lien.externe ? "_blank" : undefined}
                  rel={lien.externe ? "noopener noreferrer" : undefined}
                  className="opacity-70 transition-opacity hover:text-orgrave hover:opacity-100 dark:hover:text-gold"
                >
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-orgrave/10 pt-6 text-center dark:border-gold/10 md:flex-row md:text-left">
          <p className="font-serif text-lg italic">
            © {annee} {IDENTITE.prenom} — {IDENTITE.nomUsage} · Conçu avec sérieux, joué avec passion.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <span className="opacity-60">Next.js · Tailwind</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 texte-accent hover:underline"
            >
              Haut de page
              <IconArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

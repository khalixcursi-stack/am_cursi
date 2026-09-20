import { IDENTITE } from "../data";
import { IconeFlecheHaut } from "./Icones";
import LogoCursi from "./LogoCursi";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/15 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <Reveal>
          <LogoCursi className="h-10 w-auto" />
        </Reveal>
        <p className="font-serif italic text-gold-200/70">
          « {IDENTITE.devise} »
        </p>
        <div className="flex w-full flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
          <p>© 2026 Cursi — Conçu avec sérieux, joué avec passion.</p>
          <p className="flex items-center gap-4">
            <span>Fait avec Next.js & Tailwind</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 font-medium text-gold-300 transition hover:text-gold-200 hover:underline"
            >
              Retour en haut
              <IconeFlecheHaut className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

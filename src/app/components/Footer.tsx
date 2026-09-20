import { IconArrowUp } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <p className="font-serif text-lg italic">© 2026 Cursi — Conçu avec sérieux, joué avec passion.</p>
        <div className="flex items-center gap-6 text-xs">
          <span className="opacity-60">Next.js · Tailwind</span>
          <a href="#hero" className="inline-flex items-center gap-2 text-gold hover:underline">Haut de page<IconArrowUp className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

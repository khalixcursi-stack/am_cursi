"use client";

import { useState } from "react";
import { IconeCroix, IconeMenu } from "./Icones";
import LogoCursi from "./LogoCursi";

const liens = [
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-500/20 bg-nuit-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" aria-label="Cursi — retour en haut" className="flex items-center">
          <LogoCursi className="h-10 w-auto" />
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navigation principale"
        >
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-neutral-400 transition hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setOuvert(!ouvert)}
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={ouvert}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-500/30 text-gold-300 transition hover:bg-gold-500/10"
          >
            {ouvert ? <IconeCroix className="h-5 w-5" /> : <IconeMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {ouvert && (
        <nav
          className="flex flex-col gap-1 border-t border-gold-500/20 bg-nuit-950 px-6 py-4 md:hidden"
          aria-label="Navigation mobile"
        >
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOuvert(false)}
              className="rounded-lg px-3 py-3 text-base text-neutral-300 transition hover:bg-gold-500/10 hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { IconSun, IconMoon } from "./icons";

const links = [
  ["À propos", "#apropos"],
  ["Compétences", "#competences"],
  ["Projets", "#projets"],
  ["Parcours", "#parcours"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function toggleTheme() {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    setDark(nextDark);
    try { localStorage.setItem("theme", nextDark ? "dark" : "light"); } catch { /* Le thème reste utilisable sans stockage. */ }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-ivoire/80 backdrop-blur-lg dark:bg-nuit/80">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#hero" onClick={() => setOpen(false)} aria-label="Cursi — accueil" className="font-serif text-3xl font-semibold">Cursi<span className="italic text-gold">.</span></a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold">{label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggleTheme} aria-label={dark ? "Activer le thème clair" : "Activer le thème sombre"} className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10">
            {dark ? <IconSun /> : <IconMoon />}
          </button>
          <button ref={menuButton} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} className="relative flex h-11 w-11 items-center justify-center md:hidden">
            <span className={`absolute h-px w-5 bg-gold transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-5 bg-gold transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-gold transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>
      <nav id="mobile-menu" aria-label="Navigation mobile" className={`${open ? "flex" : "hidden"} flex-col border-t border-gold/20 bg-ivoire px-6 py-4 dark:bg-nuit md:hidden`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold">{label}</a>)}
      </nav>
    </header>
  );
}

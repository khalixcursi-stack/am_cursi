"use client";

import { useEffect, useState } from "react";

const liens = [
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [ouvert, setOuvert] = useState(false);
  const [clair, setClair] = useState(false);

  useEffect(() => {
    setClair(!document.documentElement.classList.contains("dark"));
  }, []);

  function basculerTheme() {
    const racine = document.documentElement;
    const devientClair = racine.classList.contains("dark");
    racine.classList.toggle("dark", !devientClair);
    try {
      localStorage.setItem("theme", devientClair ? "light" : "dark");
    } catch {
      /* stockage indisponible */
    }
    setClair(devientClair);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/75 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="text-lg font-bold tracking-tight">
          Cursi<span className="text-blue-600 dark:text-blue-400">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-600 transition hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={basculerTheme}
            aria-label={clair ? "Passer en thème sombre" : "Passer en thème clair"}
            className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm transition hover:border-blue-500 dark:border-neutral-700"
          >
            {clair ? "🌙" : "☀️"}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={basculerTheme}
            aria-label={clair ? "Passer en thème sombre" : "Passer en thème clair"}
            className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm dark:border-neutral-700"
          >
            {clair ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setOuvert(!ouvert)}
            aria-label="Ouvrir le menu"
            aria-expanded={ouvert}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700"
          >
            <span className={`h-0.5 w-5 bg-current transition ${ouvert ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${ouvert ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${ouvert ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {ouvert && (
        <nav
          className="flex flex-col gap-1 border-t border-neutral-200 bg-white px-6 py-4 md:hidden dark:border-neutral-800 dark:bg-neutral-950"
          aria-label="Navigation mobile"
        >
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOuvert(false)}
              className="rounded-lg px-3 py-3 text-base text-neutral-700 transition hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "../data";
import { IconSun, IconMoon } from "./icons";

const LIENS_MOBILE = [{ id: "hero", label: "Accueil", numero: "00" }, ...SECTIONS];

export default function Header() {
  const [sombre, setSombre] = useState(true);
  const [ouvert, setOuvert] = useState(false);
  const [actif, setActif] = useState<string | null>(null);
  const boutonMenu = useRef<HTMLButtonElement>(null);

  // Le thème réel n'est connu qu'au montage (appliqué par le script du layout).
  useEffect(() => {
    setSombre(document.documentElement.classList.contains("dark"));
  }, []);

  // Surligne le lien de la section qui traverse le milieu de l'écran.
  useEffect(() => {
    const cibles = SECTIONS.map(section => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null
    );
    if (!cibles.length || typeof IntersectionObserver === "undefined") return;

    const observateur = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActif(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    cibles.forEach(cible => observateur.observe(cible));
    return () => observateur.disconnect();
  }, []);

  // En bas de page, la dernière section reste active même si elle est courte.
  useEffect(() => {
    const derniere = SECTIONS[SECTIONS.length - 1].id;
    function auDefilement() {
      const atteintLeBas =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atteintLeBas) setActif(derniere);
    }
    window.addEventListener("scroll", auDefilement, { passive: true });
    return () => window.removeEventListener("scroll", auDefilement);
  }, []);

  // Menu mobile : Échap, retour au clavier, sortie de l'écran mobile et défilement.
  useEffect(() => {
    if (!ouvert) return;
    let dernierDefilement = window.scrollY;

    function auClavier(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOuvert(false);
        boutonMenu.current?.focus();
      }
    }
    function auRedimensionnement() {
      if (window.innerWidth >= 768) setOuvert(false);
    }
    function auDefilement() {
      if (Math.abs(window.scrollY - dernierDefilement) > 24) setOuvert(false);
    }

    document.addEventListener("keydown", auClavier);
    window.addEventListener("resize", auRedimensionnement);
    window.addEventListener("scroll", auDefilement, { passive: true });
    return () => {
      document.removeEventListener("keydown", auClavier);
      window.removeEventListener("resize", auRedimensionnement);
      window.removeEventListener("scroll", auDefilement);
    };
  }, [ouvert]);

  function basculerTheme() {
    const racine = document.documentElement;
    const devientSombre = !racine.classList.contains("dark");
    racine.classList.toggle("dark", devientSombre);
    racine.style.colorScheme = devientSombre ? "dark" : "light";
    setSombre(devientSombre);
    try {
      localStorage.setItem("theme", devientSombre ? "dark" : "light");
    } catch {
      /* Le thème reste utilisable sans stockage. */
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-orgrave/20 bg-ivoire/85 backdrop-blur-lg dark:border-gold/20 dark:bg-nuit/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
        <a
          href="#hero"
          onClick={() => setOuvert(false)}
          aria-label="Cursi — retour en haut du site"
          className="font-serif text-2xl font-semibold md:text-3xl"
        >
          Cursi<span className="italic text-orgrave dark:text-gold">.</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-5 md:flex lg:gap-7">
          {SECTIONS.map(section => {
            const estActif = actif === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={estActif ? "true" : undefined}
                className={`group relative py-1 text-xs uppercase tracking-[0.2em] transition-colors ${
                  estActif ? "texte-accent" : "hover:text-orgrave dark:hover:text-gold"
                }`}
              >
                {section.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ${
                    estActif ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={basculerTheme}
            aria-label={sombre ? "Activer le thème clair" : "Activer le thème sombre"}
            title={sombre ? "Thème clair" : "Thème sombre"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orgrave/30 text-orgrave transition-colors hover:bg-gold/10 dark:border-gold/30 dark:text-gold"
          >
            {sombre ? <IconSun /> : <IconMoon />}
          </button>
          <button
            ref={boutonMenu}
            type="button"
            onClick={() => setOuvert(!ouvert)}
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className={`absolute h-px w-5 bg-gold transition-transform ${ouvert ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-5 bg-gold transition-opacity ${ouvert ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-gold transition-transform ${ouvert ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      {ouvert && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="animate-apparition-menu border-t border-orgrave/20 bg-ivoire px-6 pb-6 pt-2 dark:border-gold/20 dark:bg-nuit md:hidden"
        >
          <ul>
            {LIENS_MOBILE.map(lien => (
              <li key={lien.id}>
                <a
                  href={`#${lien.id}`}
                  onClick={() => setOuvert(false)}
                  aria-current={actif === lien.id ? "true" : undefined}
                  className={`flex items-baseline gap-3 border-b border-orgrave/10 py-3.5 text-sm uppercase tracking-[0.2em] transition-colors dark:border-gold/10 ${
                    actif === lien.id ? "texte-accent" : "hover:text-orgrave dark:hover:text-gold"
                  }`}
                >
                  <span className="text-[0.6rem] tracking-[0.2em] opacity-60">{lien.numero}</span>
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

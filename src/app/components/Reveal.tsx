"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Apparition douce au défilement — purement décorative.
 * - Le HTML servi reste visible sans JavaScript (rien n'est masqué côté serveur).
 * - Les blocs déjà à l'écran au chargement ne sont pas animés.
 * - `prefers-reduced-motion` désactive l'effet.
 */
const useEffetIsomorphe = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [cache, setCache] = useState(false);

  useEffetIsomorphe(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Déjà dans le premier écran : on affiche sans animer.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setCache(true);
    const observateur = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCache(false);
            observateur.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: cache ? "0ms" : `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        cache ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

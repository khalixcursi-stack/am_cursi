"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Révélation douce au scroll (IntersectionObserver) */

type ProprietesReveal = {
  children: ReactNode;
  delai?: number;
  className?: string;
};

export default function Reveal({
  children,
  delai = 0,
  className = "",
}: ProprietesReveal) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (entree.isIntersecting) {
            setVisible(true);
            observateur.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delai}ms` }}
      className={`${className} transform-gpu transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

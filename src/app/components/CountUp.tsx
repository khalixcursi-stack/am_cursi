"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const element = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const target = element.current;
    if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    let startTime: number | undefined;
    let started = false;

    function animate(time: number) {
      startTime ??= time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      entries => {
        if (started || !entries.some(entry => entry.isIntersecting)) return;
        started = true;
        setCurrent(0);
        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(target);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  return (
    <span ref={element} aria-live="off">
      {current.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

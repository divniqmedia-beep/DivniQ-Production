"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  decimals?: number;
  suffix?: string;
  /** Total time for the full count sequence (ms). */
  duration?: number;
  className?: string;
};

function formatValue(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
}

export default function AnimatedCounter({
  from,
  to,
  decimals = 0,
  suffix = "",
  duration = 1600,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    const step = decimals > 0 ? Number((10 ** -decimals).toFixed(decimals)) : 1;
    const direction = to >= from ? 1 : -1;
    const steps = Math.max(1, Math.round(Math.abs(to - from) / step));
    const intervalMs = Math.max(16, Math.floor(duration / steps));

    let current = from;
    let cancelled = false;
    setValue(current);

    const id = window.setInterval(() => {
      if (cancelled) return;

      current = Number((current + direction * step).toFixed(decimals));
      const reached = direction > 0 ? current >= to : current <= to;

      if (reached) {
        setValue(to);
        window.clearInterval(id);
        return;
      }

      setValue(current);
    }, intervalMs);

    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [decimals, duration, from, inView, prefersReducedMotion, to]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {formatValue(value, decimals)}
        {suffix}
      </span>
      <span className="sr-only">
        {formatValue(to, decimals)}
        {suffix}
      </span>
    </span>
  );
}

"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { introContent } from "@/data/mockData";

/**
 * Scroll-linked “zoom out” statement panel.
 * Tall track + sticky viewport → content starts oversized and settles to 1×.
 */
export default function BigIdeaParallax() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Ease curve: fast early shrink, soft settle into final scale (Framer-template feel)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    prefersReducedMotion ? [1, 1, 1] : [1.65, 1.08, 1],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    prefersReducedMotion ? [1, 1, 1] : [0.55, 1, 1],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [40, 0],
  );

  const { kicker, headingLead, headingAccent, body } = introContent;

  return (
    <section
      id="big-idea"
      ref={trackRef}
      className="relative h-[180vh] bg-[#0a0a0a]"
      aria-label="Big idea"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Cinematic atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18)_0%,transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_40%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />

        <motion.div
          style={{ scale, opacity, y }}
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center will-change-transform sm:px-10 md:px-16"
        >
          <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
            {kicker}
          </p>

          <h2 className="mt-6 font-display text-[clamp(2.25rem,7vw,5.75rem)] font-bold uppercase leading-[0.92] tracking-tightest text-white">
            <span className="block">{headingLead}</span>
            <span className="mt-2 block text-accent md:mt-3">{headingAccent}</span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/65 md:mt-10 md:text-base">
            {body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

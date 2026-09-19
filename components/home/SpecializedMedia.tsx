"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { specializedMedia, type SpecializedNiche } from "@/data/mockData";
import { fadeUp, view } from "@/lib/motion";

function NicheSection({
  niche,
  reversed,
}: {
  niche: SpecializedNiche;
  reversed: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <article className="border-t border-white/10">
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:grid-cols-2 lg:items-end lg:gap-20 lg:px-24 lg:py-40 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={fadeUp}
        >
          <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
            {niche.index} — {niche.title}
          </p>
          <h3 className="heading-display mt-5 text-snow">
            <span className="block">{niche.titleLines[0]}</span>
            <span className="block text-cinema-400">{niche.titleLines[1]}</span>
          </h3>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-cinema-300 md:mt-8 md:text-lg">
            {niche.body}
          </p>
          <p className="mt-6 max-w-md text-xs font-semibold uppercase tracking-[0.16em] text-accent md:mt-8 md:text-base">
            {niche.usp}
          </p>
          <motion.div className="mt-8 md:mt-10" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={niche.cta.href}
              className={
                reversed
                  ? "inline-flex min-h-11 items-center justify-center border border-snow/50 bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.18em] text-snow transition-colors duration-300 hover:border-snow hover:bg-snow hover:text-ink md:min-h-12 md:px-8"
                  : "inline-flex min-h-11 items-center justify-center border border-snow bg-snow px-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-snow md:min-h-12 md:px-8"
              }
            >
              {niche.cta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={fadeUp}
          className="border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10"
        >
          <p className="text-[11px] font-medium uppercase tracking-cinematic text-cinema-400">
            Deliverables
          </p>
          <ul className="mt-6 space-y-0 md:mt-8">
            {niche.deliverables.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4 last:border-b-0 md:gap-6"
              >
                <span className="text-[11px] uppercase tracking-cinematic text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm text-snow md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </article>
  );
}

export default function SpecializedMedia() {
  const prefersReducedMotion = useReducedMotion();
  const { kicker, niches } = specializedMedia;

  return (
    <section className="relative bg-ink">
      <motion.div
        className="mx-auto max-w-7xl px-6 pt-16 sm:px-10 md:px-16 md:pt-32 lg:px-24 lg:pt-40"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={view}
        variants={fadeUp}
      >
        <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
          {kicker}
        </p>
      </motion.div>

      {niches.map((niche, index) => (
        <NicheSection key={niche.id} niche={niche} reversed={index % 2 === 1} />
      ))}
    </section>
  );
}

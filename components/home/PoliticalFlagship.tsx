"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { container, ease, fadeUp, view } from "@/lib/motion";

const uspLines = ["SHOOT TODAY.", "EDIT TODAY.", "PUBLISH TODAY."] as const;

const flagshipServices = [
  { index: "01", title: "Leader Photography" },
  { index: "02", title: "Public Meetings" },
  { index: "03", title: "Rally Coverage" },
  { index: "04", title: "Rapid Response" },
] as const;

export default function PoliticalFlagship() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="political" className="bg-white px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={view}
        variants={container}
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-medium uppercase tracking-cinematic text-accent"
        >
          Capability 04 — Flagship vertical
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="heading-section mt-5 max-w-5xl uppercase text-ink"
        >
          POLITICAL MEDIA & CAMPAIGN PRODUCTION
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.2em] text-accent md:text-base"
        >
          SPEED IS OUR COMPETITIVE ADVANTAGE.
        </motion.p>

        <motion.p
          className="mt-12 font-semibold uppercase leading-[0.9] tracking-tightest text-ink md:mt-16"
          variants={container}
          aria-label="Shoot today. Edit today. Publish today."
        >
          {uspLines.map((line) => (
            <motion.span
              key={line}
              variants={fadeUp}
              className="block text-4xl md:text-5xl lg:text-7xl"
            >
              {line}
            </motion.span>
          ))}
        </motion.p>

        <motion.ul
          variants={container}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
        >
          {flagshipServices.map((service) => (
            <motion.li
              key={service.title}
              variants={fadeUp}
              className="surface-card p-6 transition-shadow duration-500 hover:shadow-soft md:p-8"
            >
              <span className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
                {service.index}
              </span>
              <p className="mt-4 text-xl font-semibold tracking-tight text-ink md:text-2xl">
                {service.title}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          className="mt-10"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.35, ease }}
        >
          <Link
            href="/political-media"
            className="inline-flex min-h-11 items-center justify-center border border-ink bg-ink px-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-500 hover:bg-transparent hover:text-ink md:min-h-12 md:px-9"
          >
            Plan Campaign Coverage
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";

import { divniqDifference } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

export default function DivniqDifference() {
  const prefersReducedMotion = useReducedMotion();
  const { kicker, headingLead, headingAccent, traits } = divniqDifference;

  return (
    <section className="relative bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
        <motion.div
          className="lg:sticky lg:top-[calc(var(--navbar-height)+1.25rem)] lg:self-start"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={fadeUp}
        >
          <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
            {kicker}
          </p>
          <h2 className="heading-section mt-5 max-w-xl text-snow">
            <span className="block uppercase">{headingLead}</span>
            <span className="mt-3 block font-medium text-accent">{headingAccent}</span>
          </h2>
        </motion.div>

        <motion.ul
          className="border-t border-white/10"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          {traits.map((trait, index) => (
            <motion.li
              key={trait.id}
              variants={fadeUp}
              className="border-b border-white/10 py-8 md:py-10"
            >
              <p className="text-[11px] font-medium uppercase tracking-cinematic text-cinema-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tightest text-snow md:text-5xl lg:text-6xl">
                {trait.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-cinema-300 md:text-base">
                {trait.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

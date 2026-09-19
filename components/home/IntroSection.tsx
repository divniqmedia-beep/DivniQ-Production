"use client";

import { motion, useReducedMotion } from "motion/react";

import { introContent } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

export default function IntroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { kicker, headingLead, headingAccent, body, capabilities } = introContent;

  return (
    <section className="bg-white px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-24">
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
          {kicker}
        </motion.p>
        <motion.h2 variants={fadeUp} className="heading-section mt-5 max-w-5xl text-ink">
          <span className="block uppercase">{headingLead}</span>
          <span className="mt-3 block text-accent">{headingAccent}</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base leading-relaxed text-cinema-600 md:text-lg"
        >
          {body}
        </motion.p>
        <motion.ul
          variants={container}
          className="mt-10 flex flex-wrap gap-x-3 gap-y-2"
          aria-label="What we produce behind"
        >
          {capabilities.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="border border-black/10 bg-canvas px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

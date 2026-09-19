"use client";

import { motion, useReducedMotion } from "motion/react";

import { technologyContent } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

export default function TechnologySection() {
  const prefersReducedMotion = useReducedMotion();
  const { kicker, headingLead, headingAccent, body, networkTitle, networkBody, features } =
    technologyContent;

  return (
    <section className="relative bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24 lg:py-40">
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
        <motion.h2 variants={fadeUp} className="heading-section mt-5 max-w-3xl text-snow">
          <span className="block uppercase">{headingLead}</span>
          <span className="mt-3 block font-medium text-accent">{headingAccent}</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-sm leading-relaxed text-cinema-300 md:mt-8 md:text-lg"
        >
          {body}
        </motion.p>

        <motion.div variants={fadeUp} className="tech-frame mt-12 p-px md:mt-16">
          <div className="bg-ink px-5 py-8 sm:px-10 md:px-14 md:py-14">
            <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
              Future vision
            </p>
            <h3 className="heading-sub mt-5 text-snow">{networkTitle}</h3>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cinema-300 md:text-base">
              {networkBody}
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-px bg-white/10 md:mt-12 md:grid-cols-3">
              {features.map((feature) => (
                <li key={feature.id} className="bg-ink px-0 py-8 md:px-8 md:py-0 md:first:pl-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-snow">
                    {feature.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cinema-300">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";

import { industriesList } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

export default function IndustriesCards() {
  const prefersReducedMotion = useReducedMotion();

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
          11 — Industries
        </motion.p>
        <motion.h2 variants={fadeUp} className="heading-section mt-5 max-w-3xl text-snow uppercase">
          Sectors we shoot.
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {industriesList.map((industry, index) => (
            <motion.article
              key={industry.id}
              variants={fadeUp}
              className="group flex min-h-[200px] flex-col justify-between border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-500 hover:bg-white/10 md:min-h-[240px]"
            >
              <span className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-snow">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cinema-300">{industry.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

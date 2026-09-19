"use client";

import { motion, useReducedMotion } from "motion/react";

import AnimatedCounter from "@/components/home/AnimatedCounter";
import { proofStats } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

export default function ProofStats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="stats"
      className="relative z-10 bg-white px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={view}
        variants={container}
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-3xl font-display text-[2rem] font-bold leading-[1.15] tracking-tight text-[#0C0C0C] sm:text-[2.5rem] md:text-[2.875rem] md:leading-[1.1]"
        >
          Our work speaks through numbers. Here&apos;s what we&apos;ve achieved so far.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {proofStats.map((stat) => (
            <motion.article
              key={stat.id}
              variants={fadeUp}
              className="flex min-h-[220px] flex-col justify-between border border-black/10 bg-canvas p-6 md:min-h-[260px] md:p-8"
            >
              <p className="font-display text-[11px] font-medium uppercase tracking-cinematic text-accent">
                {stat.label}
              </p>
              <div>
                <AnimatedCounter
                  from={stat.from}
                  to={stat.to}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  className="font-display text-[46px] font-semibold leading-[46px] text-[#0C0C0C] md:text-[90px] md:leading-none"
                />
                <p className="mt-3 text-sm leading-relaxed text-cinema-500">{stat.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

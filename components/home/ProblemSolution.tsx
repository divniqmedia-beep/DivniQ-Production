"use client";

import { ArrowDown, CheckCircle2, TriangleAlert } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { container, fadeUp, view } from "@/lib/motion";

export default function ProblemSolution() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="solution"
      className="relative bg-ink px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={view}
        variants={container}
      >
        <motion.article
          variants={fadeUp}
          className="w-full border border-red-500/35 bg-[#1A080A] p-8 shadow-[0_0_80px_rgba(185,28,28,0.18)] md:p-12 lg:p-16"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-cinematic text-red-400">
            <TriangleAlert aria-hidden="true" className="size-3.5" />
            The Gap
          </p>
          <h2 className="mt-5 font-semibold uppercase leading-[0.95] tracking-tightest text-red-50 text-[clamp(1.75rem,4.2vw,3.75rem)]">
            Multiple Vendors → Multiple Problems.
          </h2>
        </motion.article>

        <motion.div
          variants={fadeUp}
          className="relative flex flex-col items-center py-8 text-accent md:py-10"
          aria-hidden="true"
        >
          <span className="h-10 w-px bg-gradient-to-b from-red-500/70 to-violet-400/80 md:h-14" />
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-8 md:size-10" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <motion.article
          variants={fadeUp}
          className="w-full border border-violet-400/40 bg-[#12081F] p-8 shadow-[0_0_80px_rgba(139,92,246,0.2)] md:p-12 lg:p-16"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-cinematic text-violet-300">
            <CheckCircle2 aria-hidden="true" className="size-3.5" />
            The Divniq Solution
          </p>
          <h2 className="mt-5 font-semibold uppercase leading-[0.95] tracking-tightest text-violet-50 text-[clamp(1.75rem,4.2vw,3.75rem)]">
            One Professional Production Partner.
          </h2>
        </motion.article>
      </motion.div>
    </section>
  );
}

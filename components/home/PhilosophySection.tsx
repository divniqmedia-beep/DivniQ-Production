"use client";

import Link from "next/link";
import { CornerDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { philosophyProcess } from "@/data/mockData";
import { container, ease, fadeUp, view } from "@/lib/motion";

export default function PhilosophySection() {
  const prefersReducedMotion = useReducedMotion();
  const { heading, body, cta, steps } = philosophyProcess;

  return (
    <section
      id="philosophy"
      className="overflow-x-clip bg-white px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        {/* Left — heading + CTA */}
        <motion.div
          className="lg:col-span-5"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-semibold tracking-tight text-[#0C0C0C] sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.05]"
          >
            {heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md font-display text-base font-medium leading-relaxed text-cinema-500 md:text-[17px]"
          >
            {body}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2.5 font-display text-sm font-semibold text-[#0C0C0C] transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <CornerDownRight
                className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              {cta.label}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — numbered steps */}
        <motion.ol
          className="list-none divide-y divide-black/10 p-0 lg:col-span-7"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          aria-label="Production philosophy"
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.id}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: prefersReducedMotion ? 0 : index * 0.06 }}
              className="relative flex gap-5 py-8 first:pt-0 last:pb-0 md:gap-6 md:py-9"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-black/15 font-display text-xs font-medium text-cinema-500 md:size-11">
                {step.step}
              </span>

              <div className="min-w-0 flex-1 pr-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0C0C0C] md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg font-display text-sm font-medium leading-relaxed text-cinema-500 md:text-[15px]">
                  {step.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="absolute right-0 top-8 inline-block size-2.5 border-t-2 border-r-2 border-accent md:top-9"
              />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowDownRight,
  Camera,
  Library,
  Megaphone,
  Smartphone,
  Sparkles,
  Video,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { contentEcosystem, type EcosystemIcon } from "@/data/mockData";
import { container, ease, fadeUp, view } from "@/lib/motion";

const iconMap: Record<EcosystemIcon, LucideIcon> = {
  video: Video,
  camera: Camera,
  smartphone: Smartphone,
  sparkles: Sparkles,
  megaphone: Megaphone,
  library: Library,
};

export default function ContentEcosystem() {
  const prefersReducedMotion = useReducedMotion();
  const { kicker, headingLead, headingAccent, body, originLabel, steps } = contentEcosystem;

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
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
        </motion.div>

        <motion.div
          className="mt-12 md:mt-20"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md"
          >
            <span className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
              00
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-snow">
              {originLabel}
            </span>
          </motion.div>

          <div className="mt-2 flex justify-start pl-6 md:pl-8">
            <motion.div variants={fadeUp} className="flex flex-col items-center text-white/30">
              <motion.span
                className="h-10 w-px origin-top bg-white/20"
                initial={prefersReducedMotion ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              />
              <ArrowDown className="size-4" aria-hidden="true" />
            </motion.div>
          </div>

          <ol className="mt-2 space-y-3 md:space-y-1">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];

              return (
                <motion.li
                  key={step.id}
                  variants={fadeUp}
                  className="relative md:pl-[min(calc(var(--step)_*_3.25rem),12rem)]"
                  style={{ ["--step" as string]: index }}
                >
                  <div className="flex items-stretch gap-3 md:gap-4">
                    {index > 0 ? (
                      <div className="hidden w-8 shrink-0 items-center text-white/30 md:flex">
                        <motion.span
                          className="h-px flex-1 bg-white/20"
                          variants={fadeUp}
                        />
                        <ArrowDownRight className="size-4 shrink-0" aria-hidden="true" />
                      </div>
                    ) : (
                      <div className="hidden w-8 shrink-0 md:block" />
                    )}

                    <div className="flex min-w-0 flex-1 items-center gap-4 border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md transition-colors duration-500 hover:bg-white/10 md:max-w-xl md:px-6">
                      <span className="flex size-10 shrink-0 items-center justify-center border border-white/10 text-accent">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-cinematic text-cinema-400">
                          {step.index}
                        </p>
                        <p className="mt-1 text-lg font-semibold tracking-tight text-snow md:text-xl">
                          {step.title}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-cinema-400">
                          {step.outputs.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

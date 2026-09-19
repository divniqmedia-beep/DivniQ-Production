"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Map,
  Repeat2,
  Scissors,
  Send,
  Truck,
  Video,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import InnerHero from "@/components/layout/InnerHero";
import { politicalPage, type PoliticalPipelineIcon } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

const iconMap: Record<PoliticalPipelineIcon, LucideIcon> = {
  plan: Map,
  deploy: Truck,
  shoot: Video,
  edit: Scissors,
  repurpose: Repeat2,
  deliver: Send,
};

export default function PoliticalPageContent() {
  const prefersReducedMotion = useReducedMotion();
  const { hero, services, model } = politicalPage;

  return (
    <>
      <InnerHero
        kicker={hero.kicker}
        headingLines={hero.headingLines}
        subtitle={hero.subtitle}
        cta={hero.cta}
      />

      <section className="bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24 lg:py-40">
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end lg:gap-20"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-medium uppercase tracking-cinematic text-accent"
            >
              {services.kicker}
            </motion.p>
            <motion.h2 variants={fadeUp} className="heading-section mt-5 text-snow uppercase">
              {services.heading}
            </motion.h2>
          </div>

          <motion.ul
            variants={fadeUp}
            className="border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md md:px-8"
          >
            {services.items.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4 last:border-b-0"
              >
                <span className="text-[11px] uppercase tracking-cinematic text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-base text-snow md:text-lg">{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="border-t border-white/10 bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24 lg:py-40">
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
            {model.kicker}
          </motion.p>
          <motion.h2 variants={fadeUp} className="heading-section mt-5 max-w-3xl text-snow">
            <span className="block uppercase">{model.headingLead}</span>
            <span className="mt-3 block font-medium text-accent">{model.headingAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-relaxed text-cinema-300 md:text-lg"
          >
            {model.body}
          </motion.p>

          <ol className="mt-16">
            {model.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isLast = index === model.steps.length - 1;

              return (
                <motion.li key={step.id} variants={fadeUp} className="relative">
                  <div className="grid grid-cols-1 gap-4 border-t border-white/10 py-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-10 md:py-10">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center border border-white/10 text-accent">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-cinematic text-cinema-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {!isLast ? (
                        <ArrowRight
                          className="hidden size-4 text-white/25 md:inline"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tightest text-snow uppercase md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-cinema-300 md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          <p className="sr-only">
            Production model: Plan, Deploy, Shoot, Edit, Repurpose, Deliver.
          </p>
        </motion.div>
      </section>
    </>
  );
}

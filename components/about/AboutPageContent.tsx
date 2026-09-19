"use client";

import { motion, useReducedMotion } from "motion/react";

import InnerHero from "@/components/layout/InnerHero";
import { aboutPage } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

const missionSpans = [
  "md:col-span-2 xl:col-span-4 xl:row-span-2",
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-3",
  "xl:col-span-3",
];

export default function AboutPageContent() {
  const prefersReducedMotion = useReducedMotion();
  const { hero, about, vision, values } = aboutPage;

  return (
    <>
      <InnerHero kicker={hero.kicker} headingLines={hero.headingLines} subtitle={hero.subtitle} />

      <section className="bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-medium uppercase tracking-cinematic text-accent"
          >
            {about.kicker}
          </motion.p>
          <div>
            <motion.h2 variants={fadeUp} className="heading-section text-snow uppercase">
              {about.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-cinema-300 md:text-lg"
            >
              {about.body}
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section
        id="vision"
        className="border-t border-white/10 bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24"
      >
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
            {vision.kicker}
          </motion.p>
          <motion.h2 variants={fadeUp} className="heading-section mt-5 max-w-5xl text-snow">
            <span className="block uppercase">{vision.headingLead}</span>
            <span className="mt-4 block font-medium text-accent">{vision.headingAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-relaxed text-cinema-300 md:text-lg"
          >
            {vision.body}
          </motion.p>
        </motion.div>
      </section>

      <section
        id="mission"
        className="border-t border-white/10 bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24"
      >
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
            {values.kicker}
          </motion.p>
          <motion.h2 variants={fadeUp} className="heading-section mt-5 text-snow uppercase">
            {values.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-cinema-400 md:text-base"
          >
            People · Technology · Speed · Scale · Storytelling
          </motion.p>

          <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">
            {values.items.map((value, index) => (
              <motion.article
                key={value.id}
                variants={fadeUp}
                className={`flex flex-col justify-between border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-500 hover:bg-white/10 md:p-8 ${missionSpans[index]}`}
              >
                <span className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className={`mt-6 font-semibold uppercase tracking-tightest text-snow ${
                      index === 0 ? "text-3xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-cinema-300 md:text-base">
                    {value.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

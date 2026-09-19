"use client";

import { motion, useReducedMotion } from "motion/react";

import { container, fadeUp, view } from "@/lib/motion";

const pillars = [
  {
    index: "01",
    title: "Media Production",
    body: "Film, photography, and finish held to one cinematic standard — from the first frame to the master.",
  },
  {
    index: "02",
    title: "Content Creation",
    body: "Stories, stills, and short-form scored from the same shoot so every cut still feels authored.",
  },
  {
    index: "03",
    title: "Digital Content",
    body: "Channel-native packages, motion, and libraries built to travel with the film.",
  },
  {
    index: "04",
    title: "Campaign & Event Media",
    body: "Political, live, and nights that only happen once — coverage that publishes while the room is still warm.",
  },
] as const;

export default function PositioningSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="positioning" className="bg-canvas px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <motion.div
          className="lg:sticky lg:top-[calc(var(--navbar-height)+1.25rem)] lg:self-start"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={fadeUp}
        >
          <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
            Positioning
          </p>
          <h2 className="heading-section mt-5 max-w-xl text-ink">
            <span className="block uppercase text-accent">NOT JUST A VIDEOGRAPHY COMPANY.</span>
            <span className="mt-4 block uppercase">Production-First Media Company.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cinema-600 md:text-base">
            We combine four capabilities most agencies treat as separate vendors — under one
            production roof.
          </p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          {pillars.map((pillar) => (
            <motion.li
              key={pillar.index}
              variants={fadeUp}
              className="surface-card flex min-h-[220px] flex-col justify-between p-6 transition-shadow duration-500 hover:shadow-soft md:p-8"
            >
              <span className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
                {pillar.index}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cinema-500">{pillar.body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

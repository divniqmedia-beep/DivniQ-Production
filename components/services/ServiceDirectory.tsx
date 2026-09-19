"use client";

import { motion, useReducedMotion } from "motion/react";

import InnerHero from "@/components/layout/InnerHero";
import { servicePage, servicesDirectory } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

export default function ServiceDirectory() {
  const prefersReducedMotion = useReducedMotion();
  const { hero } = servicePage;

  return (
    <>
      <InnerHero kicker={hero.kicker} headingLines={hero.headingLines} subtitle={hero.subtitle} />

      <section className="bg-ink">
        {servicesDirectory.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="border-t border-white/10"
          >
            <header className="sticky top-[var(--navbar-height)] z-30 border-b border-white/10 bg-ink/90 backdrop-blur-md">
              <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-3 px-6 py-4 sm:px-10 md:px-16 lg:px-24">
                <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
                  {item.index}
                </p>
                <h2 className="heading-sub w-full text-snow uppercase md:w-auto">
                  {item.title}
                </h2>
              </div>
            </header>

            <motion.div
              className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 lg:px-24"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={view}
              variants={container}
            >
              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base leading-relaxed text-cinema-300 md:text-lg"
              >
                {item.description}
              </motion.p>
              <motion.ul variants={fadeUp} className="border-t border-white/10">
                {item.services.map((service, index) => (
                  <li
                    key={service}
                    className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
                  >
                    <span className="text-[11px] uppercase tracking-cinematic text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base text-snow md:text-lg">{service}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </article>
        ))}
      </section>
    </>
  );
}

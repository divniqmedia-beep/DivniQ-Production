"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { container, fadeUp } from "@/lib/motion";
import { heroContent, type CtaItem } from "@/data/mockData";

type InnerHeroProps = {
  kicker: string;
  headingLines: [string, string];
  subtitle: string;
  cta?: CtaItem;
};

export default function InnerHero({ kicker, headingLines, subtitle, cta }: InnerHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[70svh] overflow-hidden bg-canvas md:min-h-[75svh]">
      <div className="absolute inset-0">
        <Image
          src={heroContent.posterSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/85 to-canvas/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-canvas/90 via-canvas/40 to-transparent" />

      <div className="relative z-10 flex w-full flex-col justify-end px-6 pb-12 pt-[calc(var(--navbar-height)+1.5rem)] sm:px-10 md:px-16 md:pb-20 lg:px-24 lg:pb-24">
        <motion.div
          className="max-w-5xl"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={container}
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 text-[11px] font-medium uppercase tracking-cinematic text-accent"
          >
            {kicker}
          </motion.p>
          <motion.h1 variants={fadeUp} className="heading-display text-ink">
            <span className="block">{headingLines[0]}</span>
            <span className="block text-accent">{headingLines[1]}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-relaxed text-cinema-600 md:text-lg"
          >
            {subtitle}
          </motion.p>
          {cta ? (
            <motion.div
              variants={fadeUp}
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={cta.href}
                className="inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-transparent hover:text-ink"
              >
                {cta.label}
              </Link>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

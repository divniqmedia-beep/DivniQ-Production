"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { heroContent } from "@/data/mockData";
import { container, ease, fadeUp } from "@/lib/motion";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const {
    headingLines,
    mark,
    subtitle,
    body,
    services,
    primaryCta,
    secondaryCta,
    videoSrc,
    posterSrc,
  } = heroContent;

  return (
    <section
      id="hero"
      className="sticky top-0 z-0 isolate h-svh min-h-[100svh] overflow-hidden bg-[#1a0528]"
    >
      {/* Color plate */}
      <div className="absolute inset-0">
        <Image
          src={posterSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {!prefersReducedMotion ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
      </div>

      {/* Noise/grain — tile small, never stretch (Lyniq-style) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-repeat bg-[length:700px_700px]  mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/assets/hero/hero-gradient.avif)",
        }}
      />

      {/* Lyniq-style color washes: purple / cyan / orange-red */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-color"
        style={{
          background:
            "linear-gradient(125deg, #2A004E 0%, transparent 42%, #FF4500 78%, #00E5FF 100%)",
          opacity: 0.35,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 75% 30%, rgba(255,69,0,0.4) 0%, transparent 55%), radial-gradient(ellipse 40% 35% at 55% 8%, rgba(168,85,247,0.35) 0%, transparent 45%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-transparent to-black/25" />
      <div className="hero-grain absolute inset-0 z-[1]" />

      {/* Content — Lyniq composition */}
      <div className="relative z-[2] flex h-full flex-col px-5 pt-[calc(var(--navbar-height)+0.5rem)] pb-8 sm:px-8 md:px-12 lg:px-16 lg:pb-12">
        <motion.div
          className="flex flex-1 flex-col"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={container}
        >
          {mark ? (
            <motion.p
              variants={fadeUp}
              className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {mark}
            </motion.p>
          ) : null}

          <motion.h1
            variants={fadeUp}
            className={`hero-display max-w-[18ch] text-[clamp(3.25rem,12vw,9.5rem)] ${mark ? "mt-2 md:mt-4" : "mt-0"}`}
          >
            <span className="block">{headingLines[0]}</span>
            <span className="block md:ml-[8%] lg:ml-[12%]">{headingLines[1]}</span>
          </motion.h1>

          <div className="mt-auto grid grid-cols-1 items-end gap-8 pt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-12">
            <motion.div variants={fadeUp} className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 md:text-sm">
                {subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                {body}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <Link
                    href={primaryCta.href}
                    className="inline-flex min-h-11 items-center justify-center border border-white bg-white px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-400 hover:bg-transparent hover:text-white md:min-h-12 md:px-8"
                  >
                    {primaryCta.label}
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex min-h-11 items-center justify-center border border-white/50 bg-transparent px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-400 hover:border-white hover:bg-white hover:text-ink md:min-h-12 md:px-8"
                  >
                    {secondaryCta.label}
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="justify-self-start space-y-2 text-left md:justify-self-end md:text-right"
              aria-label="Core offerings"
            >
              {services.map((item) => (
                <li
                  key={item}
                  className="text-sm font-medium text-white/90 md:text-base lg:text-lg"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

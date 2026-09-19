"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { portfolioWork } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

export default function PortfolioSection() {
  const prefersReducedMotion = useReducedMotion();
  const featured = portfolioWork.slice(0, 5);

  return (
    <section id="work" className="bg-white px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={view}
        variants={container}
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-medium uppercase tracking-cinematic text-accent"
            >
              Selected work
            </motion.p>
            <motion.h2 variants={fadeUp} className="heading-section mt-4 max-w-3xl text-ink">
              <span className="block uppercase">Proven results,</span>
              <span className="mt-2 block text-accent">stunning frames.</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/work"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline"
            >
              All cases
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              className={`group overflow-hidden border border-black/10 bg-canvas ${
                index === 0 ? "md:col-span-2 xl:col-span-2 xl:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[16/10] xl:aspect-auto xl:h-full xl:min-h-[420px]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-[11px] uppercase tracking-cinematic text-accent">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-cinema-500">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

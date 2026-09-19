"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { capabilitiesGrid, type CapabilityItem } from "@/data/mockData";
import { ease } from "@/lib/motion";

function CapabilityCard({ capability }: { capability: CapabilityItem }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={capability.href}
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-canvas-muted">
          <Image
            src={capability.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span
            aria-hidden="true"
            className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#0C0C0C] shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:rotate-12 md:right-6 md:top-6"
          >
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </span>
        </div>

        <div className="mt-7 px-1 md:mt-8">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-[#0C0C0C] md:text-[1.75rem]">
            {capability.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-cinema-500 md:text-[15px]">
            {capability.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Categories">
            {capability.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-black/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0C0C0C]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}

export default function CapabilitiesGrid() {
  const prefersReducedMotion = useReducedMotion();
  const cardsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "start center"],
  });

  const headingOpacity = useTransform(
    scrollYProgress,
    prefersReducedMotion ? [0, 1] : [0.05, 0.9],
    prefersReducedMotion ? [1, 1] : [1, 0],
  );

  return (
    <section
      id="capabilities"
      className="relative bg-canvas px-6 pb-[20vh] pt-20 sm:px-10 md:px-16 md:pt-28 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          style={{ opacity: headingOpacity }}
          className="pointer-events-none sticky top-24 z-0 flex flex-col items-start py-6 will-change-[opacity] md:top-32 md:items-center md:py-10"
        >
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="inline-block size-3 border-t-2 border-r-2 border-accent"
            />
            <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
              Services
            </p>
          </div>

          <h2 className="mt-4 max-w-5xl text-left font-display text-4xl font-semibold uppercase leading-[0.96] tracking-tight text-[#0C0C0C] sm:text-6xl md:text-center md:text-7xl lg:text-[104px] lg:leading-[0.96]">
            What we produce.
          </h2>
        </motion.div>

        <div
          ref={cardsRef}
          className="relative z-10 mt-[30vh] grid grid-cols-1 gap-10 md:mt-[40vh] md:grid-cols-2 md:gap-x-8 md:gap-y-16"
        >
          {capabilitiesGrid.map((capability, index) => {
            const isOddColumn = index % 2 === 1;

            return (
              <motion.div
                key={capability.id}
                className={isOddColumn ? "md:mt-24 lg:mt-32" : "md:mt-0"}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, y: 120 }
                }
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                }}
              >
                <CapabilityCard capability={capability} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { servicesList, type ServiceItem } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

const bentoSpans = [
  "md:col-span-2 xl:col-span-4 xl:row-span-2",
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-3",
  "xl:col-span-3",
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-2",
];

function ServiceCard({
  service,
  featured,
  className,
}: {
  service: ServiceItem;
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`group flex h-full flex-col border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-500 hover:bg-white/10 md:p-8 ${className ?? ""}`}
    >
      <span className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
        {service.index}
      </span>

      <h3
        className={`mt-4 font-semibold tracking-tight text-snow ${
          featured
            ? "max-w-md text-2xl leading-tight md:text-4xl"
            : "text-xl leading-tight md:text-2xl"
        }`}
      >
        {service.title}
      </h3>

      <ul className="mt-6 flex-1 space-y-2">
        {service.subServices.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-cinema-300"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-snow"
      >
        Explore
        <ArrowRight
          aria-hidden="true"
          className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
        />
      </Link>
    </article>
  );
}

export default function ServicesGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-16 sm:px-10 md:px-16 md:py-32 lg:px-24 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={view}
        variants={container}
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-medium uppercase tracking-cinematic text-accent"
        >
          06 — Services
        </motion.p>
        <motion.h2 variants={fadeUp} className="heading-section mt-4 max-w-3xl text-snow uppercase">
          What we produce.
        </motion.h2>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className={bentoSpans[index]}
            >
              <ServiceCard service={service} featured={index === 0} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

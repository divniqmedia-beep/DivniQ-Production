"use client";

import Link from "next/link";
import { CornerDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { engagementModels, type EngagementModel } from "@/data/mockData";
import { container, ease, fadeUp, view } from "@/lib/motion";

function featuresFor(model: EngagementModel): string[] {
  const parts = model.description
    .split(/[.—]/)
    .map((part) => part.trim())
    .filter(Boolean);
  return [model.cadence, ...parts].slice(0, 4);
}

function priceParts(model: EngagementModel): { main: string; suffix: string | null } {
  if (model.id === "retainer") {
    return {
      main: model.value.replace(/\s*\/month$/i, ""),
      suffix: "/month",
    };
  }
  if (model.id === "project") {
    return { main: model.value, suffix: "/project" };
  }
  return { main: model.value, suffix: null };
}

function CornerBullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-1 inline-block size-2.5 shrink-0 border-t-2 border-r-2 border-accent"
    />
  );
}

export default function BusinessModels() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="models" className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:px-10 xl:px-12">
      <motion.div
        className="mx-auto w-full max-w-[96rem]"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={view}
        variants={container}
      >
        {/* Heading sits on white — outside the gray card shell */}
        <motion.div variants={fadeUp} className="mx-auto max-w-5xl bg-transparent text-center">
          <h2 className="font-display text-4xl font-semibold uppercase leading-[0.96] tracking-tight text-[#0B0B0C] sm:text-6xl md:text-7xl lg:text-[104px] lg:leading-[0.96]">
            Engagement Models
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-display text-[18px] font-medium leading-[25.2px] text-[#0C0C0C]">
            Diversified revenue across project, retainer, event, and campaign
            engagements.
          </p>
        </motion.div>

        <div className="mt-12 rounded-[40px] bg-[#F8F9FA] px-5 py-12 sm:px-8 md:mt-14 md:px-10 md:py-16 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8 xl:gap-10">
            {engagementModels.map((model) => {
              const featured = model.id === "retainer";
              const { main, suffix } = priceParts(model);
              const features = featuresFor(model);

              return (
                <motion.article
                  key={model.id}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease }}
                  className={`relative flex flex-col p-6 md:p-8 ${
                    featured
                      ? "rounded-3xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                      : "bg-transparent"
                  }`}
                >
                  {featured ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute right-6 top-6 inline-block size-3 border-t-2 border-r-2 border-accent"
                      />
                      <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-accent">
                        🔥 Most popular
                      </span>
                    </>
                  ) : (
                    <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0C0C0C]/50">
                      {model.index}
                    </span>
                  )}

                  <h3 className="font-display text-lg font-semibold tracking-tight text-[#0B0B0C]">
                    {model.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-end gap-x-1.5 gap-y-1">
                    <p
                      className={`font-display font-semibold tracking-tight text-[#0B0B0C] ${
                        suffix
                          ? "text-3xl leading-none md:text-[2.15rem]"
                          : "text-xl leading-snug md:text-2xl"
                      }`}
                    >
                      {main}
                    </p>
                    {suffix ? (
                      <span className="pb-1 font-display text-sm font-medium text-[#0C0C0C]/55">
                        {suffix}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 font-display text-[16px] font-medium leading-[20.8px] text-[#555555]">
                    {model.description}
                  </p>

                  <Link
                    href="/contact"
                    className={`group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 font-display text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] ${
                      featured
                        ? "bg-accent text-white shadow-[0_8px_24px_rgba(168,85,247,0.25)] hover:-translate-y-0.5 hover:bg-accent-muted hover:shadow-[0_12px_32px_rgba(168,85,247,0.35)]"
                        : "bg-white text-[#0B0B0C] shadow-sm hover:-translate-y-0.5 hover:bg-accent-soft hover:text-accent hover:shadow-[0_10px_28px_rgba(168,85,247,0.15)]"
                    }`}
                  >
                    <CornerDownRight
                      className={`size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5 ${
                        featured ? "text-white" : "text-accent"
                      }`}
                      aria-hidden="true"
                    />
                    Choose this plan
                  </Link>

                  <div className="mt-8">
                    <p className="font-display text-sm font-semibold text-[#0B0B0C]">
                      What&apos;s Included:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {features.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 font-display text-[16px] font-medium leading-[20.8px] text-[#0C0C0C]"
                        >
                          <CornerBullet />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-12 text-center font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-accent"
        >
          Diversified revenue = resilient business
        </motion.p>
      </motion.div>
    </section>
  );
}

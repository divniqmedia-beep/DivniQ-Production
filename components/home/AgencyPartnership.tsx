"use client";

import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { agencyPartnership } from "@/data/mockData";
import { ease } from "@/lib/motion";

const pipeline = [
  {
    kicker: "01",
    title: "AGENCY",
    detail: "Client Requirement",
  },
  {
    kicker: "02",
    title: "DIVNIQ PRODUCTIONS",
    detail: "Complete Production",
  },
  {
    kicker: "03",
    title: "DELIVERABLES",
    detail: "Photo + Video + Reels + Edit + Drone",
  },
] as const;

const viewport = { once: true, amount: 0.3 } as const;

export default function AgencyPartnership() {
  const prefersReducedMotion = useReducedMotion();
  const { body } = agencyPartnership;

  return (
    <section id="agencies" className="bg-canvas px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <ol className="flex list-none flex-col p-0" aria-label="Agency production pipeline">
          {pipeline.map((step, index) => {
            const cardDelay = index * 0.2;
            const arrowDelay = cardDelay + 0.1;

            return (
              <li key={step.title} className="flex flex-col">
                <motion.div
                  className="surface-card p-6 md:p-8"
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 40 }
                  }
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={viewport}
                  transition={{
                    duration: 0.55,
                    ease,
                    delay: prefersReducedMotion ? 0 : cardDelay,
                  }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
                    {step.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tightest text-ink md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-cinema-500">
                    {step.detail}
                  </p>
                </motion.div>

                {index < pipeline.length - 1 ? (
                  <motion.div
                    className="flex justify-center py-4 text-accent"
                    aria-hidden="true"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }
                    }
                    whileInView={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 1, scale: 1 }
                    }
                    viewport={viewport}
                    transition={{
                      duration: 0.4,
                      ease,
                      delay: prefersReducedMotion ? 0 : arrowDelay,
                    }}
                  >
                    <ArrowDown className="size-7" strokeWidth={1.5} />
                  </motion.div>
                ) : null}
              </li>
            );
          })}
        </ol>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{
            duration: 0.6,
            ease,
            delay: prefersReducedMotion ? 0 : 0.2,
          }}
        >
          <p className="text-[11px] font-medium uppercase tracking-cinematic text-accent">
            B2B · White-label
          </p>
          <h2 className="heading-section mt-5 uppercase text-ink">
            YOUR OUTSOURCED PRODUCTION DEPARTMENT.
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-cinema-600 md:text-lg">
            {body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

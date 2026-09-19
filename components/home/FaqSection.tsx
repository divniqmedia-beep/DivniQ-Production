"use client";

import { useState } from "react";
import Link from "next/link";
import { CornerDownRight, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { faqContent } from "@/data/mockData";
import { container, ease, fadeUp, view } from "@/lib/motion";

export default function FaqSection() {
  const prefersReducedMotion = useReducedMotion();
  const { heading, body, cta, items } = faqContent;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faq"
      className="bg-white px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <motion.div
          className="lg:col-span-4"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl font-semibold tracking-tight text-[#0C0C0C] sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]"
          >
            {heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-sm font-display text-base font-medium leading-relaxed text-cinema-500 md:text-[17px]"
          >
            {body}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2.5 font-display text-sm font-semibold text-[#0C0C0C] transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <CornerDownRight
                className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              {cta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-8"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <ul className="list-none divide-y divide-black/10 p-0" role="list">
            {items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <motion.li key={item.id} variants={fadeUp} className="py-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-trigger-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:py-8"
                  >
                    <span className="font-display text-base font-medium leading-snug text-[#0C0C0C] md:text-lg">
                      {item.question}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={`mt-1 size-5 shrink-0 text-accent transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${item.id}`}
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1, height: "auto" }
                            : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: "auto" }}
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 font-display text-sm font-medium leading-relaxed text-cinema-500 md:pb-8 md:text-[15px]">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

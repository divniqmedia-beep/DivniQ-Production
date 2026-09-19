"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { CornerDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { closingCta } from "@/data/mockData";
import { container, fadeUp, view } from "@/lib/motion";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2400&auto=format&fit=crop";

const inputClassName =
  "w-full border-0 border-b border-solid border-white/30 bg-transparent py-4 font-display text-base font-medium text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-0";

export default function ClosingCta() {
  const prefersReducedMotion = useReducedMotion();
  const { headingLead, headingAccent, body, primaryCta } = closingCta;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-5xl font-display text-5xl font-semibold uppercase leading-tight tracking-tight text-white md:text-[80px] md:leading-[0.95]"
          >
            <span className="block">{headingLead}</span>
            <span className="mt-1 block md:mt-2">{headingAccent}</span>
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-24">
            <motion.div variants={fadeUp}>
              <p className="max-w-md font-display text-lg font-medium leading-relaxed text-gray-300 md:text-xl">
                {body}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-gray-500 ring-1 ring-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop"
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    Divniq Team
                  </p>
                  <p className="mt-0.5 font-display text-xs font-medium text-white/50">
                    Production Support
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col gap-2"
              noValidate
            >
              <label className="sr-only" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Name *"
                autoComplete="name"
                className={inputClassName}
              />

              <label className="sr-only" htmlFor="contact-email">
                E-mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="E-mail *"
                autoComplete="email"
                className={`${inputClassName} mt-2`}
              />

              <label className="sr-only" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Message (Tell us about your project)"
                className={`${inputClassName} mt-2 resize-none`}
              />

              <button
                type="submit"
                className="group mt-10 inline-flex w-fit items-center gap-2.5 font-display text-base font-semibold text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <CornerDownRight
                  className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                {primaryCta.label === "Start a Project"
                  ? "Start a project"
                  : primaryCta.label}
              </button>

              {submitted ? (
                <p className="mt-4 font-display text-sm font-medium text-accent" role="status">
                  Thanks — we&apos;ll be in touch shortly.
                </p>
              ) : null}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

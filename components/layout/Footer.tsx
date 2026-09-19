"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { capabilitiesGrid, footerContent } from "@/data/mockData";
import { container, ease, fadeUp, view } from "@/lib/motion";

const EXPLORE = footerContent.links;

const SERVICES = capabilitiesGrid.slice(0, 4).map((item) => ({
  label: item.title,
  href: item.href,
}));

const SPECIALTIES = capabilitiesGrid.slice(4).map((item) => ({
  label: item.title,
  href: item.href,
}));

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11v6M8 8v.01M12 17v-4a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13V9c0-.6.4-1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="6" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 10.5v4l4-2-4-2Z" fill="currentColor" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/divniqevents",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/divniq-events",
    Icon: LinkedinIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/divniqevents",
    Icon: FacebookIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@divniqmedia",
    Icon: YoutubeIcon,
  },
] as const;

const columnTitleClass =
  "mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-white/85";
const columnLinkClass =
  "font-sans text-sm text-[#9aa3b5] transition-colors duration-200 hover:text-accent";
const iconBubbleClass =
  "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/80";

const Footer = forwardRef<HTMLElement, ComponentPropsWithoutRef<"footer">>(
  function Footer({ className = "", ...props }, ref) {
    const prefersReducedMotion = useReducedMotion();

    return (
      <footer
        ref={ref}
        id="site-footer"
        className={`relative w-full overflow-hidden bg-[#080d18] text-[#a8b0c0] ${className}`}
        {...props}
      >
        <div
          className="pointer-events-none absolute inset-x-[20%] bottom-0 h-[55%]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(168,85,247,0.12), transparent 70%)",
          }}
        />

        <motion.div
          className="relative z-[1] mx-auto max-w-7xl px-6 pb-8 pt-10 md:px-12 md:pt-14"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={view}
          variants={container}
        >
          <div className="mb-6 grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.3fr)_repeat(3,minmax(110px,1fr))_minmax(200px,1.15fr)] lg:gap-8">
            {/* Brand */}
            <motion.div
              variants={fadeUp}
              className="max-w-lg sm:col-span-2 lg:col-span-1"
            >
              <Link href="/" className="mb-5 inline-flex" aria-label="DIVNIQ Productions home">
                <Image
                  src="/assets/navbar/divniq-white.png"
                  alt="DIVNIQ Productions"
                  width={280}
                  height={56}
                  className="h-14 w-auto max-w-[280px] object-contain"
                />
              </Link>
              <p className="mb-3 font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-white/70">
                Where Stories Take Flight
              </p>
              <p className="max-w-[38ch] font-sans text-[15px] leading-relaxed text-[#9aa3b5]">
                Divniq Productions is a cinematic creative studio crafting brand
                films, motion, and visual stories — cinema craft at the speed of
                the brief.
              </p>
            </motion.div>

            {/* Explore */}
            <motion.nav variants={fadeUp} aria-label="Explore">
              <h3 className={columnTitleClass}>Explore</h3>
              <ul className="flex flex-col gap-3">
                {EXPLORE.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={columnLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Services */}
            <motion.nav variants={fadeUp} aria-label="Services">
              <h3 className={columnTitleClass}>Services</h3>
              <ul className="flex flex-col gap-3">
                {SERVICES.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={columnLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Capabilities */}
            <motion.nav variants={fadeUp} aria-label="Capabilities">
              <h3 className={columnTitleClass}>Capabilities</h3>
              <ul className="flex flex-col gap-3">
                {SPECIALTIES.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={columnLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Connect */}
            <motion.div variants={fadeUp}>
              <h3 className={columnTitleClass}>Connect</h3>
              <ul className="flex flex-col gap-3.5">
                <li className="flex items-start gap-3">
                  <span className={iconBubbleClass} aria-hidden>
                    <Mail size={15} strokeWidth={1.6} />
                  </span>
                  <a
                    href={`mailto:${footerContent.email}`}
                    className="pt-1.5 font-sans text-sm text-[#c5ccd8] transition-colors hover:text-accent"
                  >
                    {footerContent.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className={iconBubbleClass} aria-hidden>
                    <Phone size={15} strokeWidth={1.6} />
                  </span>
                  <a
                    href="tel:+919582115153"
                    className="pt-1.5 font-sans text-sm text-[#c5ccd8] transition-colors hover:text-accent"
                  >
                    +91 9582-115-153
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className={iconBubbleClass} aria-hidden>
                    <Phone size={15} strokeWidth={1.6} />
                  </span>
                  <a
                    href="tel:+919711971971"
                    className="pt-1.5 font-sans text-sm text-[#c5ccd8] transition-colors hover:text-accent"
                  >
                    +91 9711-971-971
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className={iconBubbleClass} aria-hidden>
                    <MapPin size={15} strokeWidth={1.6} />
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-[#9aa3b5]">
                    H.O : 517A, Vipul Business Park, Sector 48, Sohna Road,
                    Gurugram, Haryana 122001
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={iconBubbleClass} aria-hidden>
                    <MapPin size={15} strokeWidth={1.6} />
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-[#9aa3b5]">
                    B.O : Office No. 1, 4th Floor, Twin Tower, Sector 22,
                    Panchkula, Haryana 134112
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Social links">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/55 hover:bg-accent/15 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              <p className="mt-5 flex items-center gap-2 font-sans text-[13px] text-[#7e8798]">
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#4ade80] shadow-[0_0_0_3px_rgba(74,222,128,0.18)]"
                  aria-hidden
                />
                Mon - Sat · 10:00 AM - 7:00 PM
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease }}
            className="flex flex-col items-start justify-between gap-3 md:flex-row md:gap-8"
          >
            <p className="font-sans text-[13px] text-[#7a8394]">
              &copy; {new Date().getFullYear()} DivniQ Productions. All rights
              reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-[13px] text-[#7a8394]">
              {footerContent.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </footer>
    );
  },
);

export default Footer;

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

import { NavSidebar } from "@/components/layout/NavSidebar";
import { capabilitiesGrid } from "@/data/mockData";

const parentItemClass =
  "flex w-full items-center justify-between gap-3 px-4 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300";
const parentIdleClass = "text-white/80 hover:bg-white/10 hover:text-white";
const childItemClass =
  "block px-4 py-2 text-[14px] font-semibold tracking-wider uppercase text-white/60 transition-colors duration-300 hover:text-white";

const NAVBAR_HEIGHT_TOP = "7.5rem";
const NAVBAR_HEIGHT_SCROLLED = "4.5rem";
const NAVBAR_HEIGHT_TOP_MOBILE = "5rem";
const NAVBAR_HEIGHT_SCROLLED_MOBILE = "3.5rem";

function syncNavbarHeight(isAtTop: boolean) {
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  const value = isAtTop
    ? mobile
      ? NAVBAR_HEIGHT_TOP_MOBILE
      : NAVBAR_HEIGHT_TOP
    : mobile
      ? NAVBAR_HEIGHT_SCROLLED_MOBILE
      : NAVBAR_HEIGHT_SCROLLED;
  document.documentElement.style.setProperty("--navbar-height", value);
}

export default function Navbar() {
  const router = useRouter();
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nicheOpen, setNicheOpen] = useState(false);
  const nicheRef = useRef<HTMLDivElement>(null);

  const openContact = () => {
    setMobileMenuOpen(false);
    setNicheOpen(false);
    router.push("/#contact");
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 50;
      setIsAtTop(atTop);
      syncNavbarHeight(atTop);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!nicheOpen) return;

    const onPointerDown = (e: MouseEvent) => {
      if (nicheRef.current && !nicheRef.current.contains(e.target as Node)) {
        setNicheOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNicheOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [nicheOpen]);

  useEffect(() => {
    if (mobileMenuOpen) setNicheOpen(false);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-[100] w-full text-white transition-all duration-700 ease-in-out ${
          isAtTop ? "h-20 sm:h-24 md:h-[7.5rem]" : "h-14 sm:h-16 md:h-[4.5rem]"
        }`}
        style={
          isAtTop
            ? {
                background: "transparent",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                borderBottom: "none",
                boxShadow: "none",
              }
            : {
                background: "rgba(8, 8, 8, 0.55)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                borderBottom: "none",
                boxShadow: "none",
              }
        }
      >
        <div className="grid h-full w-full max-w-full grid-cols-3 items-center px-4 md:px-8 lg:px-16">
          <div className="flex h-full min-w-0 items-center gap-4 justify-self-start">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="relative z-[70] -ml-1 flex h-10 w-10 items-center justify-center text-white md:ml-0"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "close" : "menu"}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <X strokeWidth={2} className="h-6 w-6 md:h-8 md:w-8" />
                  ) : (
                    <Menu strokeWidth={2} className="h-6 w-6 md:h-8 md:w-8" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <div className="flex h-full min-w-0 items-center justify-center justify-self-center">
            <Link
              href="/"
              className="group relative flex h-full w-[120px] max-w-full items-center justify-center sm:w-[160px] md:w-[200px]"
              aria-label="DIVNIQ Productions home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/navbar/logo.png"
                alt="DIVNIQ PRODUCTIONS"
                className={`absolute inset-0 m-auto h-7 w-auto max-w-full object-contain transition-opacity duration-700 ease-in-out sm:h-9 md:h-12 ${
                  isAtTop
                    ? "opacity-100 group-hover:opacity-80"
                    : "pointer-events-none opacity-0"
                }`}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/navbar/DQ_white.png"
                alt=""
                aria-hidden
                className={`absolute inset-0 m-auto h-8 w-auto max-w-full object-contain transition-opacity duration-700 ease-in-out sm:h-10 md:h-9 ${
                  isAtTop
                    ? "pointer-events-none opacity-0"
                    : "opacity-100 group-hover:opacity-80"
                }`}
              />
            </Link>
          </div>

          <div className="flex h-full min-w-0 items-center justify-self-end">
            <div ref={nicheRef} className="relative flex items-center gap-1 sm:gap-3 md:gap-4">
              <button
                type="button"
                className="flex h-10 w-8 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80"
                aria-label={nicheOpen ? "Close services" : "Open services"}
                aria-expanded={nicheOpen}
                aria-haspopup="true"
                onClick={() => setNicheOpen((open) => !open)}
              >
                <ChevronDown
                  strokeWidth={2}
                  className={`h-4 w-4 transition-transform duration-300 ease-in-out md:h-5 md:w-5 ${
                    nicheOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={openContact}
                className="flex h-10 w-10 shrink-0 items-center justify-center transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90 md:h-11 md:w-11"
                aria-label="Contact"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/icons/icon-contact.png"
                  alt=""
                  aria-hidden
                  className="h-6 w-9 object-contain md:h-7 md:w-[44px]"
                />
              </button>

              <AnimatePresence>
                {nicheOpen ? (
                  <motion.div
                    role="menu"
                    aria-label="Capabilities"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[calc(100%+0.75rem)] right-0 z-[110] max-h-[70vh] w-[calc(100vw-2rem)] min-w-[208px] overflow-y-auto rounded-2xl border border-white/20 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:w-auto sm:min-w-[260px] sm:overflow-hidden"
                    style={{
                      background: "rgba(12, 12, 14, 0.55)",
                      backdropFilter: "blur(28px) saturate(160%)",
                      WebkitBackdropFilter: "blur(28px) saturate(160%)",
                    }}
                  >
                    <p className={`${parentItemClass} ${parentIdleClass} pointer-events-none opacity-60`}>
                      Capabilities
                    </p>
                    {capabilitiesGrid.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        role="menuitem"
                        className={childItemClass}
                        onClick={() => setNicheOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      <NavSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={openContact}
      />
    </>
  );
}

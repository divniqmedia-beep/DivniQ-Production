"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import { footerContent } from "@/data/mockData";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useSiteNav, type NavTarget } from "@/hooks/useSiteNav";

type MenuItem = {
  label: string;
  spaced: string;
  target: NavTarget;
};

const menuItems: MenuItem[] = [
  { label: "Home", spaced: "H o m e", target: { kind: "route", href: "/" } },
  { label: "About", spaced: "A b o u t", target: { kind: "route", href: "/about" } },
  {
    label: "Services",
    spaced: "S e r v i c e s",
    target: { kind: "route", href: "/services" },
  },
  { label: "Work", spaced: "W o r k", target: { kind: "hash", id: "work" } },
  {
    label: "Political",
    spaced: "P o l i t i c a l",
    target: { kind: "route", href: "/political-media" },
  },
  {
    label: "Contact",
    spaced: "C o n t a c t",
    target: { kind: "hash", id: "contact" },
  },
];

const listVariants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 15 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const linkClassName =
  "relative text-[17px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-white";

export interface NavSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

function MobileMenu({ isOpen, onClose, onOpenContact }: NavSidebarProps) {
  const goTo = useSiteNav(onClose);
  const [isAtTop, setIsAtTop] = useState(true);

  useLayoutEffect(() => {
    if (isOpen) setIsAtTop(window.scrollY < 50);
  }, [isOpen]);

  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const navigateTo = (target: NavTarget) => {
    document.body.classList.remove("overflow-hidden");
    document.body.style.overflow = "";
    goTo(target);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex h-[100dvh] w-full flex-col bg-black/95 px-4 pb-6 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            className={`grid w-full shrink-0 grid-cols-3 items-center ${
              isAtTop ? "h-20 sm:h-24" : "h-14 sm:h-16"
            }`}
          >
            <div className="flex h-full min-w-0 items-center justify-self-start">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="-ml-1 flex h-10 w-10 items-center justify-center text-white"
              >
                <X strokeWidth={2} className="h-6 w-6" />
              </button>
            </div>

            <div className="flex h-full min-w-0 items-center justify-center justify-self-center">
              <button
                type="button"
                aria-label="DIVNIQ home"
                className="flex h-full w-[120px] max-w-full items-center justify-center sm:w-[160px]"
                onClick={() => navigateTo({ kind: "route", href: "/" })}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    isAtTop
                      ? "/assets/navbar/logo.png"
                      : "/assets/navbar/DQ_white.png"
                  }
                  alt="DIVNIQ PRODUCTIONS"
                  className={`w-auto max-w-full object-contain ${
                    isAtTop ? "h-7 sm:h-9" : "h-8 sm:h-10"
                  }`}
                />
              </button>
            </div>

            <div className="flex h-full min-w-0 items-center justify-self-end">
              <button
                type="button"
                onClick={() => (onOpenContact ? onOpenContact() : onClose())}
                aria-label="Contact"
                className="flex h-10 w-10 shrink-0 items-center justify-center transition-opacity hover:opacity-80"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/icons/icon-contact.png"
                  alt=""
                  aria-hidden
                  className="h-6 w-9 object-contain"
                />
              </button>
            </div>
          </div>

          <motion.nav
            className="flex flex-1 flex-col overflow-y-auto py-8"
            variants={listVariants}
            initial="closed"
            animate="open"
          >
            <div className="my-auto flex w-full flex-col items-center gap-6">
              {menuItems.map((item) => (
                <motion.button
                  key={item.label}
                  type="button"
                  variants={itemVariants}
                  className="text-3xl font-bold uppercase tracking-wide text-white transition-colors hover:text-accent sm:text-4xl"
                  onClick={() => navigateTo(item.target)}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>

          <motion.div
            className="shrink-0 border-t border-white/10 pt-6 text-center"
            variants={itemVariants}
            initial="closed"
            animate="open"
            transition={{ delay: 0.35 }}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
              Get in touch
            </p>
            <a
              href={`mailto:${footerContent.email}`}
              className="mt-2 inline-block text-[15px] tracking-wide text-white/75 transition-colors hover:text-white"
            >
              {footerContent.email}
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DesktopSidebar({ isOpen, onClose }: NavSidebarProps) {
  const goTo = useSiteNav(onClose);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-transparent"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed top-0 left-0 z-[95] flex h-screen w-full flex-col border-r border-white/10 bg-black/30 backdrop-blur-md md:w-[40vw]"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="false"
            aria-label="Site navigation"
            onClick={(e: ReactMouseEvent) => e.stopPropagation()}
          >
            <motion.nav
              className="flex h-full flex-1 flex-col overflow-y-auto pr-12 pb-10 text-right lg:pr-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              variants={listVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-1 flex-col items-end justify-center">
                <ul className="flex w-full flex-col items-end gap-10">
                  {menuItems.map((item) => (
                    <motion.li key={item.label} variants={itemVariants} className="w-full">
                      <button
                        type="button"
                        className="group flex w-full justify-end"
                        onClick={() => goTo(item.target)}
                      >
                        <span className={linkClassName}>
                          {item.spaced}
                          <span className="absolute -bottom-1 right-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="mt-auto w-full border-t border-white/10 pt-8 text-right"
                variants={itemVariants}
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Get in touch
                </p>
                <a
                  href={`mailto:${footerContent.email}`}
                  className="mt-3 inline-block text-[15px] tracking-wide text-white/75 transition-colors hover:text-white"
                >
                  {footerContent.email}
                </a>
              </motion.div>
            </motion.nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export function NavSidebar({ isOpen, onClose, onOpenContact }: NavSidebarProps) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileMenu isOpen={isOpen} onClose={onClose} onOpenContact={onOpenContact} />
  ) : (
    <DesktopSidebar isOpen={isOpen} onClose={onClose} />
  );
}

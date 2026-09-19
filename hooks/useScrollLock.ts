"use client";

import { useEffect } from "react";

/** Freezes native page scroll behind a full-screen overlay. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.style.overflow = previous;
      document.body.classList.remove("overflow-hidden");
    };
  }, [active]);
}

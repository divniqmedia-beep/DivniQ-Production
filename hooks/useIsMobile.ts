"use client";

import { useEffect, useState } from "react";

/** Mirrors the Tailwind `md` breakpoint — true below 768px. */
export const MOBILE_QUERY = "(max-width: 767px)";

/**
 * Breakpoint state for behaviour that CSS alone cannot express.
 * Defaults to false on the server to avoid hydration mismatch.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(mql.matches);

    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  return isMobile;
}

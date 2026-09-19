"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export type NavTarget =
  | { kind: "route"; href: string }
  | { kind: "hash"; id: string };

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Shared navigation for the overlay sidebar and niche links.
 * Hash targets scroll on `/`; from other routes, push `/` then scroll.
 */
export function useSiteNav(onNavigate?: () => void) {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (target: NavTarget) => {
      onNavigate?.();

      if (target.kind === "route") {
        router.push(target.href);
        return;
      }

      const { id } = target;
      if (pathname === "/") {
        requestAnimationFrame(() => scrollToId(id));
        return;
      }

      router.push(`/#${id}`);
      window.setTimeout(() => scrollToId(id), 180);
    },
    [onNavigate, pathname, router],
  );
}

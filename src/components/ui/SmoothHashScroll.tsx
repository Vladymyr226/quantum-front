"use client";

import { useEffect } from "react";

export function SmoothHashScroll() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as HTMLElement | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;
      if (link!.target && link!.target !== "_self") return;

      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;

      e.preventDefault();
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      history.pushState(null, "", href);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

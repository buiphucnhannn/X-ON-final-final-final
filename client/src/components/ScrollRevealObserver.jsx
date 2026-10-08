"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal Scroll Reveal Observer for X-ON (Ban Muong Xanh Architecture)
 * Scroll-driven 2-way bidirectional reveals: elements fade/slide in the moment
 * they cross the 50px viewport buffer, and reset only after fully exiting so
 * scrolling back up re-animates. A rAF-throttled scroll listener is the single
 * driver (guaranteed to fire on every browser) over a cached node list, so
 * reveal never depends on observer-callback timing.
 */
export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Drop bookkeeping attrs left by the previous observer revision (inert now).
    document.querySelectorAll("[data-reveal-observed]").forEach((el) => {
      el.removeAttribute("data-reveal-observed");
    });

    // Cached node list — refreshed on route change / DOM mutations only,
    // so per-frame scroll work is just rect reads over live elements.
    let targets = [];
    const refreshTargets = () => {
      targets = Array.from(document.querySelectorAll("[data-reveal]"));
    };
    refreshTargets();

    const revealOne = (el) => {
      if (el.classList.contains("is-revealed")) return;
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
      el.classList.add("is-revealed");
    };

    const checkElements = () => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const triggerOffset = 50;
      for (let i = 0; i < targets.length; i++) {
        const el = targets[i];
        // Skip detached nodes (stale cache between refreshes)
        if (!el.isConnected) continue;
        const rect = el.getBoundingClientRect();
        const inView =
          rect.top < windowHeight - triggerOffset &&
          rect.bottom > triggerOffset;
        if (inView) {
          revealOne(el);
        } else if (rect.top > windowHeight || rect.bottom < 0) {
          // Fully outside -> reset so it re-animates on re-entry (2-way)
          if (el.classList.contains("is-revealed")) {
            el.classList.remove("is-revealed");
            el.style.transitionDelay = "";
          }
        }
      }
    };

    // Immediate passes for above-the-fold / route-change content
    checkElements();
    const t1 = setTimeout(() => { refreshTargets(); checkElements(); }, 60);
    const t2 = setTimeout(() => { refreshTargets(); checkElements(); }, 250);
    const t3 = setTimeout(() => { refreshTargets(); checkElements(); }, 800);

    // Single rAF-throttled driver for scroll + resize (passive => no jank)
    let ticking = false;
    const scheduleCheck = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        checkElements();
        ticking = false;
      });
    };
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck, { passive: true });

    // Refresh the cached list when dynamic content mounts (shop filters, etc.),
    // debounced through rAF so rapid DOM churn stays cheap.
    let pending = false;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(() => {
        pending = false;
        refreshTargets();
        checkElements();
      });
    });
    if (document.body) {
      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      mo.disconnect();
      targets = [];
    };
  }, [pathname]);

  return null;
}

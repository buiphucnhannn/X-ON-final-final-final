"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal Scroll Reveal Observer for X-ON (Inspired by Ban Muong Xanh Architecture)
 * Observes all [data-reveal] elements across all pages.
 * Automatically adds 'is-revealed' when entering viewport and removes it when exiting,
 * ensuring animations re-trigger smoothly whether scrolling up or down (true 2-way bidirectional).
 *
 * Hardware-accelerated passive scroll & resize listener guarantees 100% consistent behavior
 * across Microsoft Edge, Google Chrome, Safari, Firefox, iOS, and Android.
 */
export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const checkElements = () => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      // Trigger offset: 50px buffer into viewport ensures immediate, responsive reveal
      const triggerOffset = 50;

      const elements = document.querySelectorAll("[data-reveal]");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Check if element is inside visible viewport range
        const inView =
          rect.top < windowHeight - triggerOffset && rect.bottom > triggerOffset;

        if (inView) {
          if (!el.classList.contains("is-revealed")) {
            const delay = el.getAttribute("data-reveal-delay");
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add("is-revealed");
          }
        } else {
          // Reset when element leaves the screen so it re-animates both scrolling up and down
          if (rect.top > windowHeight || rect.bottom < 0) {
            el.classList.remove("is-revealed");
          }
        }
      });
    };

    // Run immediately on route change / mount, and on subsequent frames for dynamic content
    checkElements();
    const t1 = setTimeout(checkElements, 60);
    const t2 = setTimeout(checkElements, 250);
    const t3 = setTimeout(checkElements, 700);

    // Fluid 60/120fps requestAnimationFrame scroll listener
    let ticking = false;
    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkElements();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // MutationObserver to automatically detect dynamically rendered items (e.g. shop filter results)
    const observer = new MutationObserver(() => {
      onScrollOrResize();
    });
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

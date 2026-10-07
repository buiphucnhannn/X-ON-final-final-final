'use client';

/**
 * Smoothly scrolls to a page section with a slow, graceful ease,
 * offset for the fixed header, without leaving a #hash in the URL.
 * Works on desktop and mobile.
 */
const DURATION = 1100;
const HEADER_OFFSET = 96;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function scrollToSection(id) {
  if (typeof window === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;

  const startY = window.scrollY;
  const targetY = Math.max(
    0,
    el.getBoundingClientRect().top + startY - HEADER_OFFSET
  );
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const doc = document.documentElement;
  const prevBehavior = doc.style.scrollBehavior;
  doc.style.scrollBehavior = 'auto';

  let raf = 0;
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
    cancelAnimationFrame(raf);
    window.removeEventListener('wheel', cancel, { passive: true });
    window.removeEventListener('touchmove', cancel, { passive: true });
  };
  window.addEventListener('wheel', cancel, { passive: true });
  window.addEventListener('touchmove', cancel, { passive: true });

  const start = performance.now();
  const step = (now) => {
    if (cancelled) {
      doc.style.scrollBehavior = prevBehavior;
      return;
    }
    const t = Math.min(1, (now - start) / DURATION);
    window.scrollTo(0, startY + distance * easeInOutCubic(t));
    if (t < 1) {
      raf = requestAnimationFrame(step);
    } else {
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchmove', cancel);
      doc.style.scrollBehavior = prevBehavior;
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };
  raf = requestAnimationFrame(step);
}

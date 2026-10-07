'use client';

import { useEffect, useRef } from 'react';

/**
 * Universal Scroll Reveal Component (Ban Muong Xanh Architecture)
 * Pairs seamlessly with ScrollRevealObserver for 100% 2-way bidirectional
 * hardware-accelerated animations across Chrome, Edge, Safari, Firefox.
 * Variants: up | down | left | right | zoom | zoomout | blur | flip | fade | tilt
 */
export default function Reveal({
  variant = 'up',
  delay = 0,
  duration = 850,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fast initial check on mount to guarantee elements in initial viewport display smoothly
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 50 && rect.bottom > 50) {
      if (delay) el.style.transitionDelay = `${delay}ms`;
      if (duration && duration !== 850)
        el.style.transitionDuration = `${duration}ms`;
      el.classList.add('is-revealed');
    }
  }, [delay, duration]);

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-reveal-delay={delay ? delay : undefined}
      style={
        duration && duration !== 850
          ? { transitionDuration: `${duration}ms` }
          : undefined
      }
      className={`w-full max-w-full overflow-x-clip ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal wrapper: content animates in when scrolled into view,
 * and replays when scrolling back (works on load + both directions).
 * Variants: up | down | left | right | zoom | zoomout | blur | flip | fade | tilt
 */
const HIDDEN = {
  up: 'opacity-0 translate-y-8',
  down: 'opacity-0 -translate-y-8',
  left: 'opacity-0 translate-y-6 sm:translate-y-0 sm:-translate-x-10',
  right: 'opacity-0 translate-y-6 sm:translate-y-0 sm:translate-x-10',
  zoom: 'opacity-0 scale-95',
  zoomout: 'opacity-0 scale-95 sm:scale-105',
  blur: 'opacity-0 blur-sm scale-[0.98]',
  flip: 'opacity-0 [transform:perspective(900px)_rotateX(10deg)_translateY(20px)]',
  fade: 'opacity-0',
  tilt: 'opacity-0 translate-y-6 sm:[transform:perspective(1000px)_rotateZ(1.5deg)_translateY(24px)]',
};

const VISIBLE =
  'opacity-100 translate-x-0 translate-y-0 scale-100 blur-none [transform:none]';

export default function Reveal({
  variant = 'up',
  delay = 0,
  duration = 900,
  className = '',
  children,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      className={`w-full max-w-full overflow-x-clip transition-all ease-out ${visible ? VISIBLE : HIDDEN[variant] || HIDDEN.up} ${className}`}
    >
      {children}
    </div>
  );
}

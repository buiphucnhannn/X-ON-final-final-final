'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Reveal from './ui/Reveal';

const COLS = [
  {
    title: 'Shop',
    links: [
      ['/shop?type=handmade', 'Handmade Press-On Nails'],
      ['/shop?type=essentials', 'Nail Essentials'],
      ['/shop?type=bestseller', 'Best Sellers'],
      ['/bundle-and-save', 'Bundle & Save'],
    ],
  },
  {
    title: 'Discover',
    links: [
      ['/about', 'About X-On'],
      ['/gallery-product', 'Gallery — Now Selling'],
      ['/gallery-coming-soon', 'Gallery — Coming Soon'],
      ['/blog', 'Blog'],
    ],
  },
  {
    title: 'Client Care',
    links: [
      ['/sizing-chart', 'Sizing Chart'],
      ['/wholesale-signup', 'Wholesale Signup'],
      ['/contact-us', 'Contact Us'],
      ['/my-account', 'My Account'],
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#1F171A] text-white/80">
      <Reveal variant="up">
        <div className="container-x pt-12 sm:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-white/10">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center group cursor-pointer"
              aria-label="X-On Home"
            >
              <img
                src="/images/logo.png"
                alt="X-On logo"
                className="h-10 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 logo-prominent-dark"
              />
            </Link>
            <p className="mt-4 text-xs sm:text-sm font-light leading-relaxed max-w-sm text-pretty text-white/80">
              Handmade press-on nails & carefully selected nail essentials. Press On. Slay On. Repeat.
            </p>
            <div className="mt-5 flex gap-2">
              {['IG', 'TT', 'FB', 'YT'].map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-label={s}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-[10px] tracking-widest hover:bg-white hover:text-[#1F171A] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="col-span-1 md:col-span-1 lg:col-span-2">
              <h4 className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#F2D0D8] font-semibold">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-light">
                {c.links.map(([h, l]) => (
                  <li key={h}>
                    <Link href={h} className="hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#F2D0D8] font-semibold">Visit</h4>
            <address className="mt-4 not-italic text-xs sm:text-sm font-light space-y-2">
              <p>3168 Bill Beck Blvd</p>
              <p>Kissimmee, FL 34744</p>
              <a href="tel:6892128888" className="block text-white font-medium pt-1 font-mono">
                689-212-8888
              </a>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-wide text-white/50">
          <p>© 2026 X-On. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
        </div>
      </Reveal>
    </footer>
  );
}
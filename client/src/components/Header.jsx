'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  {
    href: '/shop',
    label: 'Shop',
    children: [
      { href: '/shop?type=handmade', label: 'Handmade Press-On Nails', note: '1-of-1 artisan sets' },
      { href: '/shop?type=essentials', label: 'Nail Essentials', note: 'Pro glue, remover & tools' },
      { href: '/shop?type=bestseller', label: 'Best Sellers', note: 'Most loved by patrons' },
      { href: '/bundle-and-save', label: 'Bundle & Save', note: 'Up to 35% off' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/wholesale-signup', label: 'Wholesale' },
  { href: '/sizing-chart', label: 'Sizing Chart' },
  {
    href: '/gallery-product',
    label: 'Gallery',
    children: [
      { href: '/gallery-product', label: 'Now Selling', note: 'Lookbook & shop links' },
      { href: '/gallery-coming-soon', label: 'Coming Soon', note: 'Seasonal previews' },
    ],
  },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
];

export default function Header({ cartCount = 0, onOpenCart }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const bodyOriginal = document.body.style.overflow;
    const htmlOriginal = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = bodyOriginal;
      document.documentElement.style.overflow = htmlOriginal;
      window.removeEventListener('keydown', handleKey);
    };
  }, [mobileOpen]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href.split('?')[0]));

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none w-full max-w-full overflow-x-clip">
      {/* Slim announcement line */}
      <div
        className={`pointer-events-auto overflow-hidden transition-all duration-300 bg-[#1F171A] text-white/85 ${
          scrolled ? 'max-h-0' : 'max-h-10'
        }`}
      >
        <div className="container-x flex items-center justify-center gap-4 py-2 text-[9px] tracking-[0.14em] sm:text-[10px] sm:tracking-[0.24em] uppercase text-center">
          <span>Complimentary express shipping over $65</span>
          <span className="hidden md:inline text-[#F2D0D8]">✦ Press On. Slay On. Repeat. ✦</span>
          <a href="tel:6892128888" className="hidden lg:inline hover:text-white">689-212-8888</a>
        </div>
      </div>

      {/* Floating capsule navigation bar */}
      <div className={`container-x transition-all duration-300 ${scrolled ? 'pt-2.5' : 'pt-4'}`}>
        <div
          className={`pointer-events-auto rounded-full flex items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 transition-all duration-500 ${
            scrolled
              ? 'bg-[#FFF5F7]/85 backdrop-blur-2xl border border-[#ECCFD7] text-[#1F171A] shadow-lg shadow-[#8F3349]/8 py-2'
              : 'bg-black/25 backdrop-blur-md border border-white/15 text-white shadow-md py-2.5 hover:bg-black/35'
          }`}
        >
          {/* Official Transparent Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="relative flex items-center shrink-0 group pl-1 py-0.5 cursor-pointer"
            aria-label="X-On Home"
          >
            {!scrolled && (
              <div className="absolute inset-0 bg-white/20 blur-sm rounded-full pointer-events-none scale-110 -z-10" />
            )}
            <img
              src="/images/logo.png"
              alt="X-On logo"
              className={`h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 ${
                scrolled ? 'logo-prominent-light' : 'logo-prominent-dark'
              }`}
            />
          </Link>

          {/* Desktop nav pills */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2.5">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3.5 2xl:px-4 py-1.5 text-[11px] 2xl:text-xs tracking-[0.14em] uppercase font-medium rounded-full transition-all ${
                    isActive(item.href)
                      ? 'bg-[#8F3349] text-white shadow-sm font-semibold'
                      : scrolled
                      ? 'text-[#4A353C] hover:text-[#8F3349] hover:bg-[#FCE4E8]/70'
                      : 'text-white/85 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {item.label}
                  {item.children && <span className="text-[8px] opacity-70">▾</span>}
                </Link>

                {item.children && openMenu === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72">
                    <div
                      className={`backdrop-blur-2xl shadow-2xl p-2 rounded-2xl animate-fadeIn ${
                        scrolled
                          ? 'bg-white/95 text-[#1F171A] border border-[#ECD6DC]'
                          : 'bg-[#1F171A]/95 text-white border border-white/15'
                      }`}
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className={`flex items-center justify-between px-4 py-2.5 rounded-xl group/item transition-colors ${
                            scrolled
                              ? 'hover:bg-[#FFF0F3]'
                              : 'hover:bg-white/10'
                          }`}
                        >
                          <span>
                            <span
                              className={`block text-[11px] tracking-[0.14em] uppercase font-medium ${
                                scrolled
                                  ? 'text-[#1F171A] group-hover/item:text-[#8F3349]'
                                  : 'text-white group-hover/item:text-[#F2D0D8]'
                              }`}
                            >
                              {c.label}
                            </span>
                            <span
                              className={`block text-[10px] mt-0.5 ${
                                scrolled ? 'text-[#7D666E]' : 'text-white/60'
                              }`}
                            >
                              {c.note}
                            </span>
                          </span>
                          <span
                            className={`opacity-0 group-hover/item:opacity-100 transition-opacity ${
                              scrolled ? 'text-[#8F3349]' : 'text-[#F2D0D8]'
                            }`}
                          >
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 pr-1">
            <Link
              href="/my-account"
              className={`hidden md:inline-flex px-3 py-1.5 text-[11px] tracking-[0.16em] uppercase font-medium rounded-full transition-all ${
                scrolled
                  ? 'text-[#4A353C] hover:text-[#8F3349] hover:bg-[#FCE4E8]/60'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Login
            </Link>
            <button
              onClick={onOpenCart}
              className="bg-[#8F3349] hover:bg-[#A33B53] text-white rounded-full pl-3.5 pr-1.5 py-1.5 min-h-[38px] text-xs font-semibold shadow-md flex items-center gap-2 cursor-pointer transition-all shrink-0"
              aria-label="Open shopping bag"
            >
              <span>Bag ({cartCount})</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#8F3349] flex items-center justify-center font-bold text-xs shadow-xs">→</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                scrolled
                  ? 'bg-[#FCE4E8] text-[#8F3349] hover:bg-[#F8D2DB]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeWidth="1.6" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="1.6" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <>
            {/* Backdrop click to dismiss */}
            <div
              onClick={() => setMobileOpen(false)}
              className="pointer-events-auto fixed inset-0 bg-black/60 backdrop-blur-xs z-[-1] cursor-pointer"
            />
            <div
              className={`pointer-events-auto xl:hidden backdrop-blur-xl mt-2 p-4 animate-fadeIn max-h-[calc(100dvh-150px)] overflow-y-auto rounded-none shadow-2xl ${
                scrolled
                  ? 'bg-white/95 text-[#1F171A] border border-[#ECD6DC]'
                  : 'bg-[#1F171A]/95 text-white border border-white/10'
              }`}
            >
            {/* Home link for mobile users */}
            <Link
              href="/"
              onClick={(e) => {
                setMobileOpen(false);
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`block py-2.5 text-[11px] tracking-[0.18em] uppercase ${
                scrolled ? 'border-b border-[#F0D5DC] text-[#3B292F] hover:text-[#8F3349]' : 'border-b border-white/10 text-white/90'
              } ${pathname === '/' ? (scrolled ? 'text-[#8F3349] font-bold' : 'text-[#F2D0D8] font-bold') : ''}`}
            >
              Home
            </Link>
            {NAV.flatMap((i) => [i, ...(i.children || []).map((c) => ({ ...c, sub: true }))]).map((i) => (
              <Link
                key={i.label + i.href}
                href={i.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 text-[11px] tracking-[0.18em] uppercase ${
                  scrolled ? 'border-b border-[#F0D5DC] text-[#3B292F] hover:text-[#8F3349]' : 'border-b border-white/10 text-white/90'
                } ${i.sub ? 'pl-5 opacity-70' : ''}`}
              >
                {i.label}
              </Link>
            ))}
            <Link
              href="/my-account"
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-[11px] tracking-[0.18em] uppercase ${
                scrolled ? 'text-[#8F3349] font-bold' : 'text-white'
              }`}
            >
              Login / Register
            </Link>
          </div>
          </>
        )}
      </div>
    </header>
  );
}

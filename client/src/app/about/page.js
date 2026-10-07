'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import SectionAccent from '../../components/ui/SectionAccent';

export default function AboutPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      <Header
        cartCount={cartItems.reduce((acc, it) => acc + it.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* Full-bleed Bellaire-style PageHero */}
        <PageHero
          eyebrow="The Brand Philosophy"
          title="Modern Nail Artistry, <em>Effortless Beauty</em>"
          intro="X-On was born from a singular conviction: high-fashion salon nail craft should be instant, damage-free, and accessible without compromising on couture luxury."
          image="/images/hero_about.jpg"
        >
          <a href="/shop" className="btn btn-light">
            Shop Catalog <span className="btn-arrow">→</span>
          </a>
          <a href="/wholesale-signup" className="btn btn-glass">
            Wholesale Inquiries <span className="btn-arrow">→</span>
          </a>
        </PageHero>

        {/* Brand Story & Mission */}
        <Reveal variant="left">
        <section className="py-10 sm:py-14">
          <div className="max-w-[1720px] mx-auto px-4 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#9E3F55] font-bold">
                  Our Origins • Kissimmee, FL
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F171A] font-normal leading-tight text-balance">
                  Press On. Slay On. Repeat.
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-pretty text-justify">
                  <p>
                    Created for nail enthusiasts and nail salon professionals alike, X-On curates handmade press-on nails and premium nail essentials engineered with quality, style, and performance at the forefront.
                  </p>
                  <p>
                    Traditional acrylics and salon appointments demand hours under UV lamps, repetitive chemical exposure, and persistent nail bed damage. We engineered an editorial alternative: hand-painted, salon-grade gel nail artistry paired with body-heat activated Cold Gel Grip-X adhesion.
                  </p>
                  <p>
                    Every silhouette is individually shaped, hand-buffed, and finished with triple-layer UV resin gloss by master nail artisans at our Florida studio.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="/shop"
                    className="px-8 py-3.5 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-sm"
                  >
                    Explore Catalog
                  </a>
                  <a
                    href="/wholesale-signup"
                    className="px-8 py-3.5 bg-white border border-[#EBD5DB] hover:border-[#8F3349] text-[#1F171A] text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none"
                  >
                    Wholesale Inquiries
                  </a>
                </div>
              </div>

              {/* Studio Visual Grid */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="border border-[#EBD5DB] aspect-[3/4] overflow-hidden bg-[#FAF2F4]">
                  <img
                    src="/images/IMG_7098.JPG"
                    alt="X-ON Craftsmanship"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="border border-[#EBD5DB] aspect-[3/4] overflow-hidden bg-[#FAF2F4] mt-8">
                  <img
                    src="/images/IMG_7105.JPG"
                    alt="X-ON Nail Essentials"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 3 Core Pillars: Quality, Style, Performance */}
        <Reveal variant="up">
        <section className="py-10 sm:py-14">
          <div className="max-w-[1720px] mx-auto px-4 sm:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8F3349] font-bold">
                The X-On Triad
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
                Quality, Style & Performance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-[#EBD5DB] p-8 sm:p-10 space-y-4 rounded-none shadow-sm">
                <span className="text-2xl text-[#8F3349]">01</span>
                <h3 className="font-serif text-2xl text-[#1F171A]">Handmade Salon Craft</h3>
                <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-justify">
                  No factory-printed plastic. Every set is hand-layered with professional gel polishes, genuine Swarovski crystals, and chrome pigments by artisan nail technicians.
                </p>
              </div>

              <div className="bg-white border border-[#EBD5DB] p-8 sm:p-10 space-y-4 rounded-none shadow-sm">
                <span className="text-2xl text-[#8F3349]">02</span>
                <h3 className="font-serif text-2xl text-[#1F171A]">Cold Gel Grip-X Retention</h3>
                <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-justify">
                  Engineered with medical-grade biocompatible adhesive that activates with natural body heat, locking securely for 21+ days without requiring harsh UV curing lamps.
                </p>
              </div>

              <div className="bg-white border border-[#EBD5DB] p-8 sm:p-10 space-y-4 rounded-none shadow-sm">
                <span className="text-2xl text-[#8F3349]">03</span>
                <h3 className="font-serif text-2xl text-[#1F171A]">Zero-Damage Removal</h3>
                <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-justify">
                  Paired with our botanical Magic Remover serum, sets dissolve cleanly in 3 minutes without acetone soaking, preserving your natural nail keratin and health.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* Visit the Showroom - Crystal-Clear Luminous Atelier Experience */}
        <Reveal variant="up">
          <section className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[560px] flex items-center justify-center my-10 bg-[#FAF1F4]">
            {/* Crisp, Sharp, High-Definition Atelier Background (Không bị phủ mờ trắng, giữ độ trong trẻo và nét) */}
            <div className="absolute inset-0">
              <img
                src="/images/showroom_bright_luminous.jpg"
                alt="X-ON Flagship Atelier & Showroom Kissimmee Florida"
                className="w-full h-full object-cover object-center select-none"
              />
            </div>

            {/* Subtle Edge Transitions Only (Chỉ làm mờ 2 mép biên hẹp để hòa nền, KHÔNG phủ mờ ảnh) */}
            <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-gradient-to-b from-[#FAF1F4] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-[#FAF1F4] to-transparent pointer-events-none z-10" />

            {/* Focused Editorial Luxury Card (Giữ chữ sắc nét, dễ đọc trên nền ảnh thực tế) */}
            <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-10 py-8 sm:py-12 bg-white/92 backdrop-blur-md border border-[#EBD5DB] shadow-[0_12px_40px_rgba(0,0,0,0.08)] text-center space-y-5 rounded-none m-2 sm:m-6">
              <span className="block text-[10px] md:text-xs tracking-[0.32em] uppercase text-[#8F3349] font-semibold">
                ✦ Florida Studio & Flagship Showroom ✦
              </span>

              <h2 className="display text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
                Visit The <em className="italic text-[#8F3349] font-serif">Showroom</em>
              </h2>

              <p className="text-xs sm:text-sm text-[#4E3941] font-light max-w-lg mx-auto text-pretty leading-relaxed">
                Step into our private Kissimmee atelier to experience couture handmade silhouettes in person, get professionally sized by master artisans, and explore our full collection.
              </p>

              {/* Studio Key Coordinates */}
              <div className="py-2.5 px-4 bg-[#FAF1F4]/80 border border-[#EBD5DB] text-xs text-[#2E1F24] flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="text-[#8F3349]">📍</span> 3168 Bill Beck Blvd, Kissimmee, FL 34744
                </span>
                <span className="hidden sm:inline text-[#D9B8C2]">|</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="text-[#8F3349]">📞</span> 689-212-8888
                </span>
                <span className="hidden md:inline text-[#D9B8C2]">|</span>
                <span className="hidden md:flex items-center gap-1.5 font-light text-[#665258]">
                  <span>🕒</span> Mon – Sat: 9:30 AM – 6:30 PM
                </span>
              </div>

              {/* Luxury CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href="/contact-us"
                  className="px-8 py-3.5 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-md flex items-center gap-2 cursor-pointer"
                >
                  Schedule a Studio Visit <span>→</span>
                </a>
                <a
                  href="https://maps.google.com/?q=3168+Bill+Beck+Blvd,+Kissimmee,+FL+34744"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 bg-white hover:bg-[#FAF1F4] border border-[#D9B8C2] hover:border-[#8F3349] text-[#1F171A] text-xs tracking-[0.2em] uppercase font-semibold transition-all rounded-none shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  Get Directions <span>↗</span>
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer onOpenSizing={() => setIsSizingOpen(true)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
      <SizingModal isOpen={isSizingOpen} onClose={() => setIsSizingOpen(false)} />
    </div>
  );
}

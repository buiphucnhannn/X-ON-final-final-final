'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import { scrollToSection } from '../../lib/scroll';

export default function GalleryComingSoonPage() {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [selectedTeaser, setSelectedTeaser] = useState(null);
  const [teaserReserved, setTeaserReserved] = useState(false);

  useEffect(() => {
    if (!selectedTeaser) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedTeaser(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTeaser]);

  const teasers = [
    {
      id: 'drop-1',
      title: 'Spring Renaissance: Pastel Baroque',
      releaseDate: 'Dropping March 2026',
      description: 'Hand-sculpted 3D floral bas-relief, gilded gold leaf, and soft lavender opal tones inspired by classic European architecture.',
      fullDescription: 'An editorial tribute to Florentine artistry. Each nail tip is individually sculpted with miniature high-relief porcelain flowers, micro-pearl inlays, and 24K gilded gold foil accents under a crystal-clear diamond topcoat.',
      image: '/images/luxury_handmade_nails.jpg',
      badge: 'Limited Run • 150 Sets',
      silhouette: 'Tapered Coffin & Almond',
      craftTime: '4.5 Hours per Set',
    },
    {
      id: 'drop-2',
      title: 'Liquid Mercury: Mirror Chrome Capsule',
      releaseDate: 'Dropping April 2026',
      description: 'Ultra-reflective molten silver chrome with architectural drip bevels on long stiletto and sculpted ballerina silhouettes.',
      fullDescription: 'High-gloss futuristic metalwork engineered with Japanese mirror pigment suspensions. Features organic 3D chrome drips that appear liquid under studio photography lights.',
      image: '/images/curated_bundle_box.jpg',
      badge: 'Editorial Runway',
      silhouette: 'Stiletto & Ballerina',
      craftTime: '3.8 Hours per Set',
    },
    {
      id: 'drop-3',
      title: 'Bridal Edition: Silk Pearl Veil',
      releaseDate: 'Dropping May 2026',
      description: 'Airbrushed micro-French gradients, freshwater pearl clusters, and delicate crystal dew drops designed for wedding ceremonies.',
      fullDescription: 'Designed in collaboration with Florida couture bridal stylists. Soft translucent nude bases airbrushed with ethereal micro-pearl gradients and hand-anchored Swarovski crystal clusters.',
      image: '/images/IMG_7101.JPG',
      badge: 'Couture Bridal',
      silhouette: 'Soft Oval & Petite Almond',
      craftTime: '5.0 Hours per Set',
    },
  ];

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (waitlistEmail) setSubmitted(true);
  };

  const handleTeaserReserve = (e) => {
    e.preventDefault();
    setTeaserReserved(true);
    setTimeout(() => {
      setTeaserReserved(false);
      setSelectedTeaser(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      <Header
        cartCount={0}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* Full-bleed Bellaire-style PageHero */}
        <PageHero
          eyebrow="Upcoming Drops & Exclusive Previews"
          title="Coming Soon <em>Collections</em>"
          intro="Get an exclusive backstage glimpse into forthcoming handmade drops currently in development at our Kissimmee studio. Limited private allocation."
          image="/images/hero_gallery_coming_soon.jpg"
        >
          <a href="/gallery-product" className="btn btn-glass">
            ← Now Selling Lookbook
          </a>
          <button type="button" onClick={() => scrollToSection('waitlist-section')} className="btn btn-light">
            Join VIP Waitlist <span className="btn-arrow">↓</span>
          </button>
        </PageHero>

        <div className="container-x pt-12 pb-8 sm:pb-10">

        {/* Teaser Cards */}
        <Reveal variant="up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {teasers.map((t) => (
            <div
              key={t.id}
              className="group bg-white border border-[#EBD5DB] hover:border-[#8F3349] transition-all duration-300 rounded-none shadow-sm hover:shadow-lg flex flex-col"
            >
              {/* Image Preview with Click Trigger */}
              <div
                className="relative aspect-[4/5] overflow-hidden bg-[#FAF2F4] cursor-pointer"
                onClick={() => setSelectedTeaser(t)}
              >
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/85 text-white px-3 py-1 text-[9px] tracking-widest uppercase font-bold rounded-none shadow-sm">
                  {t.badge}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#FFF0F3] border border-[#F2D0D8] text-[#8F3349] px-3 py-1 text-[10px] tracking-widest uppercase font-bold font-mono">
                  {t.releaseDate}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="px-5 py-2.5 bg-white text-[#1F171A] border border-[#C8A97E]/60 text-[10px] tracking-[0.2em] uppercase font-bold shadow-xl hover:bg-[#8F3349] hover:text-white transition-all">
                    ✦ Preview Concept
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedTeaser(t)}
                    className="font-serif text-2xl text-[#1F171A] hover:text-[#8F3349] transition-colors cursor-pointer leading-snug"
                  >
                    {t.title}
                  </h3>
                  <p className="text-xs text-[#665258] font-light leading-relaxed mt-2">
                    {t.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0D5DC] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedTeaser(t)}
                    className="flex-1 py-2 px-3 bg-[#FFF8FA] border border-[#E8CCD3] hover:border-[#8F3349] hover:bg-white text-[#8F3349] text-[10px] tracking-widest uppercase font-bold transition-all rounded-none cursor-pointer text-center"
                  >
                    👁 Preview Drop
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTeaser(t)}
                    className="flex-1 py-2 px-3 bg-[#8F3349] hover:bg-[#732638] text-white text-[10px] tracking-widest uppercase font-bold transition-all rounded-none cursor-pointer text-center shadow-xs"
                  >
                    Reserve Spot →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
        </div>

        <section id="waitlist-section" className="relative w-full overflow-hidden bg-[#160A0F] text-white py-10 sm:py-12">
          {/* Full-bleed Luxury Backdrop */}
          <img
            src="/images/newsletter-luxury-backdrop.svg"
            alt="X-On Waitlist Atmosphere"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14080D]/70 via-transparent to-[#14080D]/70 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-5 sm:h-6 bg-gradient-to-b from-[#FAF1F4] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-5 sm:h-6 bg-gradient-to-b from-transparent to-[#1F171A] pointer-events-none z-10" />

          <Reveal variant="blur">
          <div className="relative z-20 max-w-2xl mx-auto px-6 text-center space-y-4">
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C8A97E] font-bold block">
              ✦ Priority Access ✦
            </span>
            <h2 className="display display-light text-3xl sm:text-5xl text-white font-normal tracking-tight">
              Join the Collector Waitlist
            </h2>
            <p className="text-xs sm:text-sm text-white/85 font-light max-w-xl mx-auto leading-relaxed">
              Receive 1-hour early access before public release. Most limited edition drops sell out within 24 hours.
            </p>

            {submitted ? (
              <div className="glass p-6 border border-[#C8A97E]/40 max-w-md mx-auto shadow-2xl animate-fadeIn">
                <span className="text-xl text-[#C8A97E] mb-1 block">✦</span>
                <p className="text-xs text-white font-medium uppercase tracking-wider">
                  You are on the VIP Early Access Waitlist!
                </p>
                <p className="text-[11px] text-white/75 mt-1">We will notify you prior to drop day.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-2 pt-2 shadow-xl max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your VIP email..."
                  className="flex-1 bg-white text-[#1F171A] px-4 py-3.5 text-xs placeholder-[#8A727A] focus:outline-none focus:ring-2 focus:ring-[#C8A97E] rounded-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#8F3349] hover:bg-[#A83952] text-white text-xs uppercase tracking-[0.2em] font-bold transition-all rounded-none cursor-pointer border border-[#C8A97E]/30"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
          </Reveal>
        </section>
      </main>

      <Footer onOpenSizing={() => setIsSizingOpen(true)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={[]}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
      <SizingModal isOpen={isSizingOpen} onClose={() => setIsSizingOpen(false)} />

      {/* Interactive Coming Soon Teaser Concept Modal */}
      {selectedTeaser && (
        <div
          onClick={() => setSelectedTeaser(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label="Backstage Concept Preview"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white border border-[#EBD5DB] shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] rounded-none text-[#1F171A] cursor-default overflow-hidden"
          >
            {/* Sticky Header Bar — guaranteed 100% accessible close button */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-8 sm:py-3.5 border-b border-[#F0D5DC] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src="/images/logo.png"
                  alt="X-On logo"
                  className="h-6 sm:h-7 w-auto object-contain logo-prominent-light shrink-0"
                />
                <span className="w-px h-3.5 bg-[#EBD5DB]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-[#8F3349] uppercase font-bold truncate">
                  Concept Preview
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTeaser(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF2F4] hover:bg-[#8F3349] text-[#7A636A] hover:text-white border border-[#EBD5DB] text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer rounded-none shadow-xs shrink-0"
                aria-label="Close Preview"
              >
                <span>Close</span>
                <span className="text-sm font-bold leading-none">✕</span>
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="overflow-y-auto p-4 sm:p-8 overscroll-contain flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start md:items-center">
                {/* Full-Color High-Res Image Preview */}
                <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full max-h-[260px] sm:max-h-none bg-[#FAF2F4] overflow-hidden border border-[#EBD5DB]">
                  <img
                    src={selectedTeaser.image}
                    alt={selectedTeaser.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1 font-mono font-bold shadow-sm">
                    {selectedTeaser.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#FFF0F3] border border-[#F2D0D8] text-[#8F3349] px-3 py-1 text-[10px] tracking-widest uppercase font-bold font-mono">
                    {selectedTeaser.releaseDate}
                  </div>
                </div>

                {/* Design Specifications & Reservation Form */}
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.28em] text-[#9E3F55] uppercase font-bold block">
                    ✦ Backstage Concept Preview ✦
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl text-[#1F171A] font-normal leading-tight">
                    {selectedTeaser.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5E4B52] font-light leading-relaxed">
                    {selectedTeaser.fullDescription}
                  </p>

                  <div className="py-3 border-y border-[#F0D5DC] space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#8A7479]">Target Silhouettes:</span>
                      <strong className="text-[#1F171A]">{selectedTeaser.silhouette}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A7479]">Artisan Benchmark:</span>
                      <strong className="text-[#8F3349] font-mono">{selectedTeaser.craftTime}</strong>
                    </div>
                  </div>

                  {teaserReserved ? (
                    <div className="p-4 bg-[#FFF0F3] border border-[#8F3349] text-[#8F3349] text-xs font-bold uppercase tracking-wider text-center animate-fadeIn">
                      ✓ Private Allocation Reserved! You are first in line for this drop.
                    </div>
                  ) : (
                    <form onSubmit={handleTeaserReserve} className="space-y-3 pt-2">
                      <label className="text-[10px] uppercase tracking-wider text-[#554047] font-bold block">
                        Request Priority Allocation Alert:
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="email"
                          required
                          placeholder="Enter your VIP email..."
                          className="flex-1 bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 bg-[#8F3349] hover:bg-[#732638] text-white text-xs uppercase tracking-widest font-bold transition-all rounded-none cursor-pointer whitespace-nowrap"
                        >
                          Reserve Allocation
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

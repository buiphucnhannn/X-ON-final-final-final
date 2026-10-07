'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import SectionAccent from '../../components/ui/SectionAccent';
import { scrollToSection } from '../../lib/scroll';

export default function BundleAndSavePage() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const bundles = [
    {
      id: 'bundle-salon-starter',
      name: 'The Salon Starter Vault',
      subtitle: '2 Handmade Sets + Cold Gel Glue Kit + Magic Remover',
      discount: 'SAVE 25%',
      originalPrice: 84.0,
      salePrice: 63.0,
      image: '/images/curated_bundle_box.jpg',
      items: [
        '1x Handmade Press-On Set (Aura Quartz or Pearl Chrome)',
        '1x Handmade Press-On Set (French Glaze or Noir Sparkle)',
        '1x Cold Gel Glue (15ml Body-Heat Retention)',
        '1x Botanical Magic Remover Serum (10ml)',
        'Complete Salon Prep Tool Kit & Buffer',
      ],
    },
    {
      id: 'bundle-couture-trio',
      name: 'Haute Couture Trio',
      subtitle: '3 Handcrafted Luxury Statement Sets',
      discount: 'SAVE 30%',
      originalPrice: 96.0,
      salePrice: 67.2,
      image: '/images/luxury_handmade_nails.jpg',
      items: [
        '3x Couture Handmade Press-On Sets of Your Choice',
        '3x Adhesive Tab Application Sheets (48 tabs each)',
        'Dual-End Cuticle Pusher & Glass File',
        'Complimentary Express VIP Shipping',
      ],
    },
    {
      id: 'bundle-essentials-master',
      name: 'Pro-Hold Grip-X Master Kit',
      subtitle: 'Complete 30-Day Retention & Removal System',
      discount: 'SAVE 20%',
      originalPrice: 42.0,
      salePrice: 33.6,
      image: '/images/nail_essentials_kit.jpg',
      items: [
        '1x Cold Gel Glue (15ml Dual-Nozzle Precision)',
        '1x Botanical Magic Remover (15ml Soakless Lift)',
        '2x Dehydrating Alcohol Prep Pad Multi-Packs',
        '1x Precision Cuticle Oil Serum with Vitamin E',
      ],
    },
    {
      id: 'bundle-vip-curator',
      name: 'The Editorial Collector Box',
      subtitle: '5 Couture Sets + Complete Pro Tool Case',
      discount: 'SAVE 35%',
      originalPrice: 175.0,
      salePrice: 113.75,
      image: '/images/curated_bundle_box.jpg',
      items: [
        '5x Artisan-Crafted Press-On Nail Sets',
        '1x Cold Gel Glue & Magic Remover Master Kit',
        '1x Luxury Leatherette Nail Portfolio Case',
        'Free Size Exchange Fit Guarantee',
      ],
    },
  ];

  const handleAddBundle = (bundle) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: bundle.id,
        name: bundle.name,
        selectedSize: 'Standard Curated Set',
        shape: 'Curated Bundle',
        price: bundle.salePrice,
        quantity: 1,
        image: bundle.image,
      },
    ]);
    setToastMessage(`Added ${bundle.name} to your bag`);
    setIsCartOpen(true);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      {toastMessage && (
        <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 bg-white border-2 border-[#8F3349] text-[#1F171A] px-5 py-3 shadow-2xl flex items-center justify-center sm:justify-start gap-3 text-xs tracking-wider uppercase font-bold rounded-none">
          <span className="text-[#8F3349]">✦</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <Header
        cartCount={cartItems.reduce((acc, it) => acc + it.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* Full-bleed Bellaire-style PageHero */}
        <PageHero
          eyebrow="Curated Bundles & Exclusive Savings"
          title="Bundle & Save <em>Up to 35%</em>"
          intro="Maximize value with curated pairings. Combine handmade statement sets with patented Cold Gel Grip-X essentials and complete salon-prep suites."
          image="/images/hero_bundle_and_save.jpg"
        >
          <button type="button" onClick={() => scrollToSection('bundles-list')} className="btn btn-light">
            View Bundles <span className="btn-arrow">↓</span>
          </button>
          <button onClick={() => setIsSizingOpen(true)} className="btn btn-glass">
            Sizing Guide (mm) <span className="btn-arrow">→</span>
          </button>
        </PageHero>

        <div id="bundles-list" className="container-x py-12">

        {/* Bundle Grid (2x2 on large screens, sharp non-rounded cards) */}
        <Reveal variant="up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-white border border-[#EBD5DB] hover:border-[#8F3349] p-5 sm:p-10 flex flex-col justify-between transition-all duration-300 rounded-none shadow-sm hover:shadow-md relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#8F3349] text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-none shadow-sm">
                {bundle.discount}
              </div>

              <div className="space-y-6">
                <div className="pr-16 sm:pr-0">
                  <span className="text-[10px] tracking-widest uppercase text-[#9E3F55] font-bold">
                    Curated Collection
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1F171A] mt-1">
                    {bundle.name}
                  </h2>
                  <p className="text-xs text-[#665258] font-light mt-1">{bundle.subtitle}</p>
                </div>

                {/* Price Display */}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pb-4 border-b border-[#F0D5DC]">
                  <span className="font-serif text-3xl font-medium text-[#8F3349]">
                    ${bundle.salePrice.toFixed(2)}
                  </span>
                  <span className="text-sm line-through text-[#99878E] font-light">
                    ${bundle.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-[11px] text-[#2E7D32] font-semibold uppercase tracking-wider">
                    You Save ${(bundle.originalPrice - bundle.salePrice).toFixed(2)}
                  </span>
                </div>

                {/* Bundle Inclusions */}
                <div className="space-y-2.5">
                  <p className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">
                    Includes Everything You Need:
                  </p>
                  <ul className="space-y-2">
                    {bundle.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#554047]">
                        <span className="text-[#8F3349] font-bold">✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#F0D5DC]">
                <button
                  onClick={() => handleAddBundle(bundle)}
                  className="w-full py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-sm cursor-pointer"
                >
                  Add Bundle to Bag — ${bundle.salePrice.toFixed(2)}
                </button>
              </div>
            </div>
          ))}
        </div>
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" className="my-8" />

        {/* Value Comparison Banner */}
        <Reveal variant="fade">
        <section className="bg-white/80 border border-[#EBD5DB] p-5 sm:p-12 text-center rounded-none space-y-4 shadow-sm">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1F171A] text-balance">
            The X-On 100% Fit & Retention Guarantee
          </h3>
          <p className="text-xs sm:text-sm text-[#665258] max-w-2xl mx-auto leading-relaxed text-pretty">
            All bundles include our complimentary replacement guarantee. If any single nail doesn’t fit your natural nail bed precisely, we will ship individual replacement sizes free of charge.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => setIsSizingOpen(true)}
              className="px-6 py-3 bg-white border border-[#8F3349] text-[#8F3349] hover:bg-[#8F3349] hover:text-white text-xs uppercase tracking-widest font-bold transition-all rounded-none cursor-pointer"
            >
              View Sizing Chart & Guide
            </button>
          </div>
        </section>
        </Reveal>
        </div>
      </main>

      <Footer onOpenSizing={() => setIsSizingOpen(true)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={(id, size, q) =>
          setCartItems((prev) =>
            q <= 0
              ? prev.filter((it) => it.id !== id)
              : prev.map((it) => (it.id === id ? { ...it, quantity: q } : it))
          )
        }
        onRemoveItem={(id) => setCartItems((prev) => prev.filter((it) => it.id !== id))}
      />
      <SizingModal isOpen={isSizingOpen} onClose={() => setIsSizingOpen(false)} />
    </div>
  );
}

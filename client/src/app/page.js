'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Welcome from '../components/home/Welcome';
import CategoryTiles from '../components/home/CategoryTiles';
import ProductShowcase from '../components/home/ProductShowcase';
import InnovationVideos from '../components/InnovationVideos';
import HowItWorksSection from '../components/HowItWorksSection';
import ReviewsSection from '../components/ReviewsSection';
import AtelierIRL from '../components/AtelierIRL';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import QuickViewModal from '../components/QuickViewModal';
import SizingModal from '../components/SizingModal';
import SectionAccent from '../components/ui/SectionAccent';
import Reveal from '../components/ui/Reveal';

export default function Home() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'xon-cf-0961',
      name: 'CF-35-0961 • AURA QUARTZ',
      selectedSize: 'M',
      shape: 'Coffin',
      price: 28.0,
      quantity: 1,
      image: '/images/IMG_7098.JPG',
    },
    {
      id: 'xon-nail-essential-kit',
      name: 'COLD GEL GLUE & MAGIC REMOVER',
      selectedSize: 'Standard 15ml Kit',
      shape: 'Universal',
      price: 18.0,
      quantity: 1,
      image: '/images/IMG_7105.JPG',
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (productWithSelection) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === productWithSelection.id &&
          item.selectedSize === productWithSelection.selectedSize
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }

      return [
        ...prev,
        {
          id: productWithSelection.id,
          name: productWithSelection.name,
          selectedSize: productWithSelection.selectedSize || 'M',
          shape: productWithSelection.shape,
          price: productWithSelection.price,
          quantity: 1,
          image: productWithSelection.image,
        },
      ];
    });

    showToast(`Added ${productWithSelection.name} (Size ${productWithSelection.selectedSize || 'M'}) to bag`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id, size);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id && item.selectedSize === size) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-transparent text-[#1F171A] flex flex-col font-sans selection:bg-[#FCE4E8] selection:text-[#8F3349]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 bg-white border-2 border-[#8F3349] text-[#1F171A] px-5 py-3 shadow-2xl flex items-center justify-center sm:justify-start gap-3 text-xs tracking-wider uppercase font-bold rounded-none animate-fadeIn text-center sm:text-left">
          <span className="text-[#8F3349]">✦</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Bellaire-Style Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      {/* 
        HERO SECTION: Full-bleed Bellaire Travels Style
        Video background + centered luxury typography + pill CTA with circle arrow
      */}
      <Hero />

      {/* MAIN HOMEPAGE CONTENT: Bellaire Travels luxury aesthetic + Spec Baseline */}
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* 1. Welcome / Brand Story & Brand Origins */}
        <Reveal variant="left">
          <Welcome />
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 2. Destination Category Tiles (Bellaire style visual mosaic) */}
        <Reveal variant="right">
          <CategoryTiles />
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 3. Spec §4.1: Handmade Press-On Nails */}
        <Reveal variant="up">
          <ProductShowcase
            id="handmade-press-ons"
            eyebrow="Artisan Craft"
            title="Handmade <em>Press-On Nails</em>"
            intro="1-of-1 salon craft layered with professional Japanese gels, chrome pigments, and triple-sealed topcoat."
            filter={(p) => p.category === 'handmade-press-ons'}
            href="/shop?type=handmade"
            tone="cream"
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOpenSizing={() => setIsSizingOpen(true)}
          />
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 4. Innovation Video Showcase (4 Wide Cards matching Lalafolie reference) */}
        <Reveal variant="zoom">
          <div id="innovation-videos">
            <InnovationVideos />
          </div>
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 5. Spec §4.1: Nail Essentials */}
        <Reveal variant="blur">
          <ProductShowcase
            id="nail-essentials"
            eyebrow="Pro Retention & Care"
            title="Selected <em>Nail Essentials</em>"
            intro="Cold Gel Grip-X adhesives, soakless botanical magic removers, and salon prep kits for nail lovers and pros."
            filter={(p) => p.category === 'nail-essentials'}
            href="/shop?type=essentials"
            tone="white"
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOpenSizing={() => setIsSizingOpen(true)}
          />
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 6. Spec §4.1: Best Sellers */}
        <Reveal variant="flip">
          <ProductShowcase
            id="best-sellers"
            eyebrow="Most Coveted"
            title="X-On <em>Best Sellers</em>"
            intro="Our most celebrated statement silhouettes and customer-favorite retention systems."
            filter={(p) => p.isBestSeller}
            href="/shop?type=bestseller"
            tone="petal"
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOpenSizing={() => setIsSizingOpen(true)}
          />
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 7. The 3-Step Slay Routine (Application & Soakless Removal) */}
        <Reveal variant="down">
          <HowItWorksSection />
        </Reveal>

        {/* Minimalist Background Flourish */}
        <SectionAccent variant="center" />

        {/* 8. Frequently Asked Questions Accordion & Client Concierge CTA */}
        <Reveal variant="zoomout">
          <FaqSection />
        </Reveal>

        {/* 9. Spec §4.1: Our Reviews (Verified 5.0 Google Rating slider) */}
        <Reveal variant="fade">
          <ReviewsSection />
        </Reveal>

        {/* 10. Spec §4.1: Find Us (3168 Bill Beck Blvd, Kissimmee, FL 34744) */}
        <Reveal variant="tilt">
          <AtelierIRL />
        </Reveal>
      </main>

      {/* Footer */}
      <Footer onOpenSizing={() => setIsSizingOpen(true)} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      {/* Sizing & Measurement Modal */}
      <SizingModal
        isOpen={isSizingOpen}
        onClose={() => setIsSizingOpen(false)}
      />
    </div>
  );
}

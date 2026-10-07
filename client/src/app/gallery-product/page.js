'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import QuickViewModal from '../../components/QuickViewModal';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import { scrollToSection } from '../../lib/scroll';
import { PRODUCTS } from '../../data/products';

export default function GalleryProductPage() {
  const [selectedShape, setSelectedShape] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const ITEMS_PER_PAGE = 3;

  const galleryItems = [
    {
      id: 'gal-1',
      productId: 'xon-cf-0961',
      title: 'Aura Quartz on Almond',
      subtitle: 'Dimensional Aurora Chrome Shimmer',
      shape: 'Almond',
      length: 'Medium',
      sizes: 'XS • S • M • L',
      image: '/images/luxury_handmade_nails.jpg',
      price: '$28.00',
      priceNum: 28.0,
      tag: 'Handmade Couture',
      description: 'Crafted with Japanese salon gel and dimensional aurora chrome shimmer. Each tip is reinforced with Cold Gel Grip-X backing for up to 3+ weeks of zero-lift durability.',
      features: ['Handcrafted 1-of-1 Artistry', 'UV-Free Heat Activated Adhesion', 'Zero-Damage Botanical Removal'],
      availableSizes: ['XS', 'S', 'M', 'L'],
    },
    {
      id: 'gal-2',
      productId: 'xon-nail-essential-kit',
      title: 'Cold Gel Grip-X Retention Lab',
      subtitle: 'Universal Adhesive & Care Kit',
      shape: 'Universal',
      length: '15ml Kit',
      sizes: 'Standard 15ml Kit',
      image: '/images/nail_essentials_kit.jpg',
      price: '$18.00',
      priceNum: 18.0,
      tag: 'Pro Essential',
      description: 'Professional-grade heat-activated cold gel polymer adhesive engineered to bond without damaging natural nail keratin or requiring curing lamps.',
      features: ['Medical-Grade Biocompatible Bond', 'Waterproof & Dishwashing Resistant', 'Zero Thermal Heat Spikes'],
      availableSizes: ['Standard 15ml Kit'],
    },
    {
      id: 'gal-3',
      productId: 'bundle-salon-starter',
      title: 'The Editorial Collector Vault',
      subtitle: 'Curated 2 Sets + Complete Retention System',
      shape: 'Coffin',
      length: 'Long',
      sizes: 'XS • S • M • L',
      image: '/images/curated_bundle_box.jpg',
      price: '$68.00',
      priceNum: 68.0,
      tag: 'Signature Vault',
      link: '/bundle-and-save',
      description: 'Complete luxury vanity collector chest containing 2 bespoke handmade press-on sets, full Cold Gel Grip-X adhesive kit, botanical magic remover, and glass shaping file.',
      features: ['Includes 2 Full Handcrafted Sets', 'Complimentary Precision Sizing Replacement', 'Bespoke Velvet Presentation Box'],
      availableSizes: ['XS', 'S', 'M', 'L'],
    },
    {
      id: 'gal-4',
      productId: 'xon-nail-essential-kit',
      title: 'Magic Botanical Remover in Action',
      subtitle: 'Zero-Acetone Conditioning Serum',
      shape: 'Universal',
      length: '10ml Flask',
      sizes: 'Standard 15ml Kit',
      image: '/images/nail_essentials_kit.jpg',
      price: '$14.00',
      priceNum: 14.0,
      tag: 'Zero Damage',
      description: 'Botanical nutrient-infused dissolving serum that cleanly softens Cold Gel bonds in under 3 minutes without acetone dehydrating or peeling the nail plate.',
      features: ['Jojoba & Sweet Almond Infusion', '3-Minute Clean Dissolve', 'Preserves Press-On Reusability'],
      availableSizes: ['Standard 15ml Kit'],
    },
    {
      id: 'gal-5',
      productId: 'xon-ov-0255',
      title: 'Champagne Glaze Oval Silhouette',
      subtitle: 'High-Gloss Minimalist Nude Pearl',
      shape: 'Oval',
      length: 'Short',
      sizes: 'XS • S • M • L',
      image: '/images/IMG_7101.JPG',
      price: '$26.00',
      priceNum: 26.0,
      tag: 'Bridal Edition',
      description: 'Subtle luxury for the modern connoisseur. Delicate pearl chrome veil over translucent nude beige suited for boardroom to black-tie gala.',
      features: ['Natural Hand Contour', 'Ultra-Thin Flexible Cuticle Margin', 'Triple Gloss UV Armor Topcoat'],
      availableSizes: ['XS', 'S', 'M', 'L'],
    },
    {
      id: 'gal-6',
      productId: 'xon-ov-0127',
      title: 'Chrome Velvet Stiletto Editorial',
      subtitle: 'Runway Baroque Pearl Embellishment',
      shape: 'Stiletto',
      length: 'Long',
      sizes: 'XS • S • M • L',
      image: '/images/IMG_7106.JPG',
      price: '$34.00',
      priceNum: 34.0,
      tag: 'Runway Edition',
      description: 'Baroque-inspired hand-placed micro-pearls over a sheer iridescent base. Creates an unforgettable statement under evening candlelight.',
      features: ['Hand-Strung Micro Crystals', 'High-Impact Reinforced Core', 'Includes Full Artisan Prep Kit'],
      availableSizes: ['XS', 'S', 'M', 'L'],
    },
  ];

  const filtered = selectedShape === 'all'
    ? galleryItems
    : galleryItems.filter((it) => it.shape.toLowerCase() === selectedShape.toLowerCase());

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSelectShape = (sh) => {
    setSelectedShape(sh);
    setCurrentPage(1);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const openQuickView = (item) => {
    const matched = PRODUCTS.find((p) => p.id === item.productId);
    const prod = matched
      ? { ...matched, image: item.image, name: item.title, shape: item.shape }
      : {
          id: item.productId,
          name: item.title,
          subtitle: item.subtitle,
          shape: item.shape,
          length: item.length || 'Medium',
          price: item.priceNum,
          image: item.image,
          description: item.description,
          sizes: item.availableSizes || ['XS', 'S', 'M', 'L'],
          features: item.features,
        };
    setQuickViewProduct(prod);
  };

  const handleAddToCart = (productWithSelection) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (it) => it.id === productWithSelection.id && it.selectedSize === productWithSelection.selectedSize
      );
      if (existing) {
        return prev.map((it) =>
          it.id === productWithSelection.id && it.selectedSize === productWithSelection.selectedSize
            ? { ...it, quantity: it.quantity + 1 }
            : it
        );
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
    showToast(`Added ${productWithSelection.name} to bag`);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 bg-white border-2 border-[#8F3349] text-[#1F171A] px-5 py-3 shadow-2xl flex items-center justify-center sm:justify-start gap-3 text-xs tracking-wider uppercase font-bold rounded-none animate-fadeIn text-center sm:text-left">
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
          eyebrow="High-Fashion Lookbook • Now Selling"
          title="The Visual <em>Gallery</em>"
          intro="Witness X-On handmade creations captured in runway and editorial light. Explore wearable hand-sculpted art and seamless catalog pairings."
          image="/images/hero_gallery_product.jpg"
        >
          <a href="/gallery-product" className="btn btn-light">
            Now Selling Lookbook <span className="btn-arrow">✦</span>
          </a>
          <a href="/gallery-coming-soon" className="btn btn-glass">
            Coming Soon Drops <span className="btn-arrow">→</span>
          </a>
        </PageHero>

        <div id="gallery-grid" className="container-x py-12">

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['all', 'almond', 'coffin', 'oval', 'stiletto', 'universal'].map((sh) => (
            <button
              key={sh}
              onClick={() => handleSelectShape(sh)}
              className={`px-4 py-2 text-[11px] tracking-widest uppercase font-bold transition-all rounded-none cursor-pointer border ${
                selectedShape === sh
                  ? 'bg-[#8F3349] border-[#8F3349] text-white'
                  : 'bg-white border-[#EBD5DB] text-[#554047] hover:border-[#8F3349]'
              }`}
            >
              {sh === 'all' ? 'All Silhouettes' : sh}
            </button>
          ))}
        </div>

        {/* Visual Editorial Grid - 3 columns, sharp non-rounded edges */}
        <Reveal variant="zoom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openQuickView(item)}
              className="group bg-white border border-[#EBD5DB] hover:border-[#8F3349] transition-all duration-300 rounded-none shadow-sm hover:shadow-lg flex flex-col cursor-pointer"
            >
              {/* Image Container with Quick View Overlay */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF2F4] cursor-pointer" onClick={() => openQuickView(item)}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#EBD5DB] px-3 py-1 text-[9px] tracking-widest uppercase font-bold text-[#8F3349] rounded-none shadow-xs">
                  {item.tag}
                </div>

                {/* Hover Quick View Trigger Pill */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="px-5 py-2.5 bg-white text-[#1F171A] border border-[#C8A97E]/60 text-[10px] tracking-[0.2em] uppercase font-bold shadow-xl hover:bg-[#8F3349] hover:text-white hover:border-[#8F3349] transition-all">
                    ✦ Quick View Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  {item.link === '/bundle-and-save' ? (
                    <a
                      href={item.link}
                      onClick={(e) => e.stopPropagation()}
                      className="font-serif text-2xl text-[#1F171A] group-hover:text-[#8F3349] transition-colors block leading-snug"
                      title={`View bundle details for ${item.title}`}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span
                      className="font-serif text-2xl text-[#1F171A] group-hover:text-[#8F3349] transition-colors block leading-snug"
                      title={`Quick view ${item.title}`}
                    >
                      {item.title}
                    </span>
                  )}
                  <p className="text-[11px] text-[#7A636A] font-light mt-1 line-clamp-1">{item.subtitle}</p>
                  
                  <div className="flex items-center justify-between text-xs text-[#665258] mt-3 pt-2 border-t border-[#F5E6EA]">
                    <span>Shape: <strong className="text-[#1F171A] font-medium">{item.shape}</strong></span>
                    <span className="font-mono text-[#8F3349] font-bold text-sm">{item.price}</span>
                  </div>
                  <p className="text-[10px] text-[#99878E] font-mono mt-1">Available Sizes: {item.sizes}</p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openQuickView(item);
                    }}
                    className="w-full mt-3.5 py-2.5 bg-[#FFF0F3] hover:bg-[#8F3349] text-[#7A2A3E] hover:text-white text-[10px] tracking-[0.2em] uppercase font-bold border border-[#F2D0D8] hover:border-[#8F3349] transition-all rounded-none cursor-pointer"
                  >
                    Quick View Details ✦
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Reveal>

        {/* Editorial Pagination Component */}
        {totalPages > 1 && (
          <div className="pt-12 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ECD6DC]">
            <div className="text-xs text-[#7A636A]">
              Showing page <strong>{safeCurrentPage}</strong> of <strong>{totalPages}</strong> ({filtered.length} total looks)
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  if (safeCurrentPage > 1) {
                    setCurrentPage((p) => p - 1);
                    scrollToSection('gallery-grid');
                  }
                }}
                disabled={safeCurrentPage === 1}
                className="px-3.5 py-2 min-h-[44px] text-xs uppercase tracking-wider font-semibold border border-[#ECD6DC] bg-white text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349] disabled:opacity-40 disabled:pointer-events-none transition-all rounded-none cursor-pointer"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    scrollToSection('gallery-grid');
                  }}
                  className={`w-11 h-11 text-xs font-semibold transition-all border rounded-none cursor-pointer ${
                    safeCurrentPage === pageNum
                      ? 'bg-[#8F3349] border-[#8F3349] text-white shadow-sm'
                      : 'bg-white border-[#ECD6DC] text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349]'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => {
                  if (safeCurrentPage < totalPages) {
                    setCurrentPage((p) => p + 1);
                    scrollToSection('gallery-grid');
                  }
                }}
                disabled={safeCurrentPage === totalPages}
                className="px-3.5 py-2 min-h-[44px] text-xs uppercase tracking-wider font-semibold border border-[#ECD6DC] bg-white text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349] disabled:opacity-40 disabled:pointer-events-none transition-all rounded-none cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        )}
        </div>
      </main>

      <Footer onOpenSizing={() => setIsSizingOpen(true)} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={(id, size, q) =>
          setCartItems((prev) =>
            q <= 0
              ? prev.filter((it) => !(it.id === id && it.selectedSize === size))
              : prev.map((it) => (it.id === id && it.selectedSize === size ? { ...it, quantity: q } : it))
          )
        }
        onRemoveItem={(id, size) =>
          setCartItems((prev) => prev.filter((it) => !(it.id === id && it.selectedSize === size)))
        }
      />

      {/* Sizing Modal */}
      <SizingModal isOpen={isSizingOpen} onClose={() => setIsSizingOpen(false)} />

      {/* Quick View Product Detail Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizing={() => setIsSizingOpen(true)}
      />
    </div>
  );
}

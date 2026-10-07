'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';

export default function CollectionSection({ onAddToCart, onQuickView, onOpenSizing }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Catalog' },
    { id: 'handmade-press-ons', label: 'Handmade Press-On Nails' },
    { id: 'nail-essentials', label: 'Nail Essentials' },
    { id: 'best-sellers', label: 'Best Sellers' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all'
        ? true
        : activeCategory === 'best-sellers'
        ? item.isBestSeller
        : item.category === activeCategory;

    const matchesSearch =
      searchTerm.trim() === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shape.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="handmade-press-ons" className="bg-[#FDF8F9] py-14 text-[#1F171A]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#F0D5DC] pb-6 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#9E3F55] font-bold">
              X-On Official Catalog
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
              Handmade Nails & Nail Essentials
            </h2>
            <p className="text-xs sm:text-sm text-[#6E575F] font-light max-w-xl text-pretty">
              Curated for nail lovers and professionals alike. From statement-making handcrafted sets to everyday professional supplies.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Search shape, design, or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-[#E8CCD3] text-[#1F171A] text-xs px-4 py-3 placeholder-[#99878E] focus:outline-none focus:border-[#C4687D] transition-colors rounded-none shadow-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-[#1F171A]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Category Tabs (Sharp buttons matching spec) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-[10px] md:text-[11px] tracking-[0.22em] uppercase font-bold whitespace-nowrap transition-all duration-200 border rounded-none cursor-pointer ${
                activeCategory === cat.id
                  ? 'border-[#8F3349] bg-[#8F3349] text-white shadow-sm'
                  : 'border-[#ECD6DC] bg-white text-[#5C454D] hover:border-[#8F3349] hover:text-[#8F3349]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid - Wide 4 columns */}
        {filteredProducts.length === 0 ? (
          <div className="py-14 text-center border border-dashed border-[#E3B8C2] bg-[#FFF8FA]">
            <p className="font-serif text-2xl text-[#7A636A] mb-3">No creations found</p>
            <p className="text-xs text-[#99878E] tracking-wider uppercase">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="mt-6 px-6 py-2.5 bg-[#8F3349] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#732638] cursor-pointer rounded-none"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onOpenSizing={onOpenSizing}
              />
            ))}
          </div>
        )}

        {/* Anchors for Nail Essentials & Best Sellers */}
        <div id="nail-essentials" className="pt-8" />
        <div id="best-sellers" className="pt-2" />

        {/* View Full Shop CTA */}
        <div className="mt-14 text-center">
          <a
            href="/shop"
            className="inline-block px-10 py-4 bg-white border border-[#8F3349] text-[#8F3349] hover:bg-[#8F3349] hover:text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-sm cursor-pointer"
          >
            Explore Complete Catalog & Filters →
          </a>
        </div>
      </div>
    </section>
  );
}

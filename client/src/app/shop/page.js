'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import QuickViewModal from '../../components/QuickViewModal';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import { scrollToSection } from '../../lib/scroll';
import { PRODUCTS } from '../../data/products';

const ITEMS_PER_PAGE = 6;

function ShopCatalogContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');

  const [selectedShape, setSelectedShape] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(80);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const shapes = ['All', 'Almond', 'Coffin', 'Oval', 'Square', 'Stiletto'];
  const types = ['All', 'Handmade Press-On Nails', 'Nail Essentials', 'Best Sellers'];

  // Sync category filter with query parameter ?type=...
  useEffect(() => {
    if (typeParam === 'handmade') {
      setSelectedType('Handmade Press-On Nails');
    } else if (typeParam === 'essentials') {
      setSelectedType('Nail Essentials');
    } else if (typeParam === 'bestseller') {
      setSelectedType('Best Sellers');
    } else if (typeParam === 'all' || !typeParam) {
      setSelectedType('All');
    }
    setCurrentPage(1);
  }, [typeParam]);

  const handleSelectType = (tp) => {
    setSelectedType(tp);
    setCurrentPage(1);

    // Update URL query string smoothly
    const params = new URLSearchParams(window.location.search);
    if (tp === 'Handmade Press-On Nails') params.set('type', 'handmade');
    else if (tp === 'Nail Essentials') params.set('type', 'essentials');
    else if (tp === 'Best Sellers') params.set('type', 'bestseller');
    else params.delete('type');

    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.replaceState(null, '', newUrl);
  };

  const handleSelectShape = (shape) => {
    setSelectedShape(shape);
    setCurrentPage(1);
  };

  const handlePriceChange = (price) => {
    setMaxPrice(price);
    setCurrentPage(1);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedShape('All');
    setSelectedType('All');
    setMaxPrice(80);
    setSearchTerm('');
    setSortBy('featured');
    setCurrentPage(1);
    window.history.replaceState(null, '', window.location.pathname);
  };

  let filtered = PRODUCTS.filter((item) => {
    const matchesShape = selectedShape === 'All' || item.shape.toLowerCase() === selectedShape.toLowerCase();
    const matchesType =
      selectedType === 'All' ||
      (selectedType === 'Best Sellers' ? item.isBestSeller : item.productType === selectedType);
    const matchesPrice = item.price <= maxPrice;
    const matchesSearch =
      searchTerm.trim() === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shape.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesShape && matchesType && matchesPrice && matchesSearch;
  });

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (pageNum) => {
    setCurrentPage(pageNum);
    scrollToSection('catalog-grid');
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      <Header
        cartCount={cartItems.reduce((acc, it) => acc + it.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* Full-bleed Centered Editorial PageHero */}
        <PageHero
          eyebrow="The Full Collection Catalog"
          title="Handmade Sets & <em>Nail Essentials</em>"
          intro="Discover artisan handmade press-ons, salon-strength Cold Gel Grip-X adhesives, and botanical removal formulas. Handcrafted for a flawless 21-day slay."
          image="/images/hero_shop.jpg"
        >
          <button onClick={() => scrollToSection('catalog-grid')} className="btn btn-light">
            Explore All Creations <span className="btn-arrow">↓</span>
          </button>
          <button onClick={() => setIsSizingOpen(true)} className="btn btn-glass">
            Find Your Size (mm) <span className="btn-arrow">→</span>
          </button>
        </PageHero>

        {/* Quick Filter Horizontal Category Pills */}
        <div id="catalog-grid" className="border-b border-[#F0D5DC] bg-white sticky top-16 z-20 shadow-xs">
          <div className="container-x py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto sm:overflow-visible w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#8F3349] mr-2">Category:</span>
              {types.map((tp) => (
                <button
                  key={tp}
                  onClick={() => handleSelectType(tp)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase font-semibold transition-all rounded-full cursor-pointer shrink-0 ${
                    selectedType === tp
                      ? 'bg-[#8F3349] text-white shadow-sm'
                      : 'bg-[#FAF2F4] text-[#554047] hover:bg-[#F3E1E6]'
                  }`}
                >
                  {tp === 'All' ? 'All Pieces' : tp}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest uppercase text-[#7A636A]">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-[#FAF2F4] border border-[#ECD6DC] text-xs px-3 py-1.5 text-[#1F171A] rounded-none focus:outline-none focus:border-[#8F3349] cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container-x py-8 sm:py-10">
          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden mb-6">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="w-full py-3 px-4 bg-white border border-[#ECD6DC] text-xs uppercase tracking-wider font-bold flex items-center justify-between text-[#1F171A] hover:border-[#8F3349] transition-all cursor-pointer shadow-xs"
            >
              <span className="flex items-center gap-2">
                <span>🔍 Filter & Search</span>
                {(selectedShape !== 'All' || searchTerm || maxPrice < 80) && (
                  <span className="text-[10px] bg-[#FFF0F3] text-[#8F3349] border border-[#F2D0D8] px-2 py-0.5 font-mono font-bold">
                    Active
                  </span>
                )}
              </span>
              <span className="text-xs text-[#8F3349]">
                {mobileFilterOpen ? '▲ Hide Filters' : '▼ Show Filters'}
              </span>
            </button>
          </div>

          {/* Layout Grid: Left Sidebar Filters + Right Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Left Filter Sidebar */}
            <div
              className={`space-y-8 bg-white p-5 sm:p-6 border border-[#ECD6DC] rounded-none shadow-sm h-fit ${
                mobileFilterOpen ? 'block mb-6 lg:mb-0' : 'hidden lg:block'
              }`}
            >
              {/* Search */}
              <div className="space-y-2">
                <h3 className="text-xs tracking-wider uppercase text-[#1F171A] font-bold">Search Products</h3>
                <input
                  type="text"
                  placeholder="Search by name, SKU..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full bg-[#FAF2F4] border border-[#ECD6DC] text-xs p-2.5 text-[#1F171A] focus:outline-none focus:border-[#8F3349] rounded-none"
                />
              </div>

              {/* Price Filter */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#1F171A]">Filter By Price</span>
                  <span className="font-mono text-[#8F3349] font-bold">Up to ${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="2"
                  value={maxPrice}
                  onChange={(e) => handlePriceChange(Number(e.target.value))}
                  className="w-full accent-[#8F3349] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#887077]">
                  <span>$10</span>
                  <span>$80</span>
                </div>
              </div>

              {/* Shape Filter */}
              <div className="space-y-2">
                <h3 className="text-xs tracking-wider uppercase text-[#1F171A] font-bold">Shape Filters</h3>
                <div className="space-y-1">
                  {shapes.map((sh) => (
                    <button
                      key={sh}
                      onClick={() => handleSelectShape(sh)}
                      className={`block w-full text-left text-xs py-1.5 px-2.5 transition-colors cursor-pointer rounded-none ${
                        selectedShape === sh
                          ? 'bg-[#8F3349] text-white font-bold'
                          : 'text-[#665258] hover:bg-[#FAF2F4]'
                      }`}
                    >
                      {sh}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={handleResetFilters}
                className="w-full py-2.5 bg-[#FFF0F3] text-[#8F3349] hover:bg-[#8F3349] hover:text-white text-xs uppercase tracking-wider font-bold transition-colors border border-[#F2D0D8] rounded-none cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>

            {/* Right Product Grid */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex justify-between items-center text-xs text-[#7A636A]">
                <span>
                  Showing <strong>{filtered.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)}</strong> of <strong>{filtered.length}</strong> creations
                </span>
                <button
                  onClick={() => setIsSizingOpen(true)}
                  className="underline text-[#8F3349] font-semibold cursor-pointer hover:text-[#6F2436]"
                >
                  Sizing Chart Guide ✦
                </button>
              </div>

              {filtered.length === 0 ? (
                <div className="py-16 text-center border border-dashed border-[#E3B8C2] bg-white p-8">
                  <p className="font-serif text-2xl text-[#7A636A]">No products matched your criteria</p>
                  <p className="text-xs text-[#99878E] mt-2">Try expanding your price range or clearing filters.</p>
                </div>
              ) : (
                <>
                  <Reveal variant="up">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {paginatedProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                          onQuickView={(p) => setQuickViewProduct(p)}
                          onOpenSizing={() => setIsSizingOpen(true)}
                        />
                      ))}
                    </div>
                  </Reveal>

                  {/* Editorial Pagination Component */}
                  {totalPages > 1 && (
                    <div className="pt-10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ECD6DC]">
                      <div className="text-xs text-[#7A636A]">
                        Page <strong>{safeCurrentPage}</strong> of <strong>{totalPages}</strong>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => goToPage(safeCurrentPage - 1)}
                          disabled={safeCurrentPage === 1}
                          className="px-3.5 py-2 min-h-[44px] text-xs uppercase tracking-wider font-semibold border border-[#ECD6DC] bg-white text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349] disabled:opacity-40 disabled:pointer-events-none transition-all rounded-none cursor-pointer"
                        >
                          ← Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                          <button
                            key={pageNum}
                            onClick={() => goToPage(pageNum)}
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
                          onClick={() => goToPage(safeCurrentPage + 1)}
                          disabled={safeCurrentPage === totalPages}
                          className="px-3.5 py-2 min-h-[44px] text-xs uppercase tracking-wider font-semibold border border-[#ECD6DC] bg-white text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349] disabled:opacity-40 disabled:pointer-events-none transition-all rounded-none cursor-pointer"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

      </main>

      <Footer onOpenSizing={() => setIsSizingOpen(true)} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={(id, size, q) => {
          setCartItems((prev) => prev.map((it) => (it.id === id ? { ...it, quantity: q } : it)));
        }}
        onRemoveItem={(id) => setCartItems((prev) => prev.filter((it) => it.id !== id))}
      />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      <SizingModal
        isOpen={isSizingOpen}
        onClose={() => setIsSizingOpen(false)}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF1F4] flex items-center justify-center">Loading collections...</div>}>
      <ShopCatalogContent />
    </Suspense>
  );
}

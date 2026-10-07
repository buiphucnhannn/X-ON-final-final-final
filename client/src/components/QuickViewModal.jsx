'use client';

import { useState, useEffect } from 'react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart, onOpenSizing }) {
  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[1] || product.sizes[0]);
    }
  }, [product]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const NAIL_FIT_SIZES = ['XS', 'S', 'M', 'L'];
  const hasNailFit =
    Array.isArray(product.sizes) &&
    product.sizes.length > 0 &&
    product.sizes.every((s) => NAIL_FIT_SIZES.includes(s));
  const badgeLabel =
    product.shape === product.length ? product.shape : `${product.shape} • ${product.length}`;
  const eyebrowLabel = product.productType
    ? `X-On ${product.productType}`
    : hasNailFit
      ? 'Handmade Press-On Nails'
      : 'Nail Essentials';

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedSize,
    });
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn cursor-pointer"
      role="dialog"
      aria-modal="true"
      aria-label="Product Quick View"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white border border-[#EBD5DB] shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] rounded-none text-[#1F171A] cursor-default overflow-hidden"
      >
        {/* Sticky Header Bar — guaranteed 100% accessible close button from any scroll point */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-8 sm:py-3.5 border-b border-[#F0D5DC] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src="/images/logo.png"
              alt="X-On logo"
              className="h-6 sm:h-7 w-auto object-contain logo-prominent-light shrink-0"
            />
            <span className="w-px h-3.5 bg-[#EBD5DB]" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-[#8F3349] uppercase font-bold truncate">
              {eyebrowLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF2F4] hover:bg-[#8F3349] text-[#7A636A] hover:text-white border border-[#EBD5DB] text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer rounded-none shadow-xs shrink-0"
            aria-label="Close Quick View"
          >
            <span>Close</span>
            <span className="text-sm font-bold leading-none">✕</span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-4 sm:p-8 overscroll-contain flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start md:items-center">
            {/* Image — compact aspect ratio on mobile so content isn't buried */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full max-h-[260px] sm:max-h-none bg-[#FAF2F4] overflow-hidden border border-[#EBD5DB]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-[#EBD5DB] text-[#8F3349] text-[9px] tracking-[0.2em] uppercase px-3 py-1 font-mono font-bold shadow-sm">
                {badgeLabel}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#1F171A] font-medium leading-tight text-balance">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#5E4B52] font-light leading-relaxed text-pretty mt-2">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 border-y border-[#F0D5DC]">
                <span className="text-2xl sm:text-3xl font-mono text-[#8F3349] font-bold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-[#99878E] line-through font-mono">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-[10px] tracking-widest text-[#2A7B4C] font-bold uppercase ml-auto">
                  ✓ Ready to Ship
                </span>
              </div>

              {/* Size selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-[#705B63] tracking-[0.15em] uppercase font-medium">
                    <span>{hasNailFit ? 'Select Nail Fit:' : 'Select Kit Option:'}</span>
                    {hasNailFit && (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onOpenSizing();
                        }}
                        className="underline hover:text-[#8F3349] cursor-pointer"
                      >
                        View Sizing Guide
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3.5 py-2 min-h-[38px] text-xs font-mono border transition-all rounded-none cursor-pointer ${
                          selectedSize === sz
                            ? 'border-[#8F3349] bg-[#8F3349] text-white font-bold'
                            : 'border-[#ECD6DC] bg-[#FFF8FA] text-[#5C454D] hover:border-[#8F3349]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features checkmarks */}
              {product.features && (
                <div className="pt-1 space-y-1">
                  {product.features.slice(0, 3).map((feat, i) => (
                    <p key={i} className="text-xs text-[#523F45] flex items-center gap-2">
                      <span className="text-[#8F3349]">✦</span>
                      <span>{feat}</span>
                    </p>
                  ))}
                </div>
              )}

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAdd}
                className="w-full mt-4 py-3.5 sm:py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.2em] uppercase font-bold transition-all rounded-none cursor-pointer shadow-md whitespace-nowrap"
              >
                {hasNailFit ? `Add to Bag • Size ${selectedSize}` : `Add to Bag • ${selectedSize}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

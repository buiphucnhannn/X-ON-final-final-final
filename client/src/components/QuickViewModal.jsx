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
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

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
      ? 'X-On Handmade Nail Set'
      : 'X-On Nail Essential';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white border border-[#EBD5DB] shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto rounded-none text-[#1F171A] cursor-default"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-[#7A636A] hover:text-[#1F171A] p-2 cursor-pointer"
          aria-label="Close Quick View"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative aspect-square w-full bg-[#FAF2F4] overflow-hidden border border-[#EBD5DB]">
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
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <img
                src="/images/logo.png"
                alt="X-On logo"
                className="h-7 w-auto object-contain logo-prominent-light shrink-0"
              />
              <span className="w-px h-5 bg-[#EBD5DB]" aria-hidden="true" />
              <span className="text-[10px] tracking-[0.28em] text-[#9E3F55] uppercase font-bold">
                {eyebrowLabel}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F171A] font-medium leading-tight text-balance">
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#5E4B52] font-light leading-relaxed text-pretty">
              {product.description}
            </p>

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
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs font-mono border transition-all rounded-none cursor-pointer ${
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
                    {feat}
                  </p>
                ))}
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="w-full mt-5 py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.2em] uppercase font-bold transition-all rounded-none cursor-pointer shadow-md whitespace-nowrap"
            >
              {hasNailFit ? `Add to Bag • Size ${selectedSize}` : `Add to Bag • ${selectedSize}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

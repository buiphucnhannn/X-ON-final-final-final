'use client';

import { useState } from 'react';

export default function ProductCard({ product, onAddToCart, onQuickView, onOpenSizing }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[1] || product.sizes[0] : 'M');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart({
      ...product,
      selectedSize,
    });
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-white border border-[#ECD6DC] hover:border-[#C4687D] transition-all duration-300 flex flex-col justify-between cursor-pointer rounded-none shadow-sm hover:shadow-md"
    >
      {/* Image & Badges Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#FAF2F4]">
        {/* Main Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="bg-[#1F171A] text-white text-[9px] tracking-[0.2em] uppercase font-bold px-2 py-0.5 rounded-none shadow-sm">
              BEST SELLER
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#FFF0F3] text-[#8F3349] border border-[#F2D0D8] text-[9px] tracking-[0.2em] uppercase font-bold px-2 py-0.5 rounded-none shadow-sm">
              NEW RELEASE
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="bg-[#8F3349] text-white text-[9px] tracking-[0.18em] uppercase font-bold px-2 py-0.5 rounded-none">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-[#E8CCD3] hover:border-[#C4687D] transition-all rounded-none shadow-sm ${
            isWishlisted ? 'text-[#8F3349]' : 'text-[#5C454D] hover:text-[#8F3349]'
          }`}
          title="Save to Wishlist"
          aria-label="Wishlist toggle"
        >
          <svg className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="square"
              strokeWidth="1.5"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>

        {/* Shape Indicator */}
        <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-sm border border-[#ECD6DC] text-[#4A383F] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-none font-medium">
          {product.shape} • {product.length}
        </div>

        {/* Quick View Hover Overlay Button */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex justify-center">
          <span className="text-[10px] tracking-[0.25em] text-white uppercase font-semibold">
            Quick View ✦
          </span>
        </div>
      </div>

      {/* Meta Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.25em] text-[#9E3F55] uppercase font-bold">
              X-On
            </span>
            <div className="flex items-center gap-1 text-[10px] text-[#A66C24]">
              <span>★</span>
              <span className="text-[#4A383F] font-mono text-[9px] font-bold">{product.rating.toFixed(1)}</span>
            </div>
          </div>

          <h3 className="font-serif text-base sm:text-lg text-[#1F171A] font-medium group-hover:text-[#8F3349] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          <p className="text-[11px] text-[#705B63] line-clamp-1 font-light">
            {product.subtitle}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-sm sm:text-base font-semibold text-[#1F171A] font-mono">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#9E8B92] line-through font-mono">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Size Selection Pill List */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="pt-3.5 space-y-2 border-t border-[#F2DEE3] mt-3">
            <div className="flex items-center justify-between text-[9px] text-[#705B63] tracking-[0.15em] uppercase font-medium">
              <span>Select Size:</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenSizing();
                }}
                className="underline hover:text-[#8F3349] cursor-pointer"
              >
                Chart
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(sz);
                  }}
                  className={`px-2.5 py-2 min-h-[36px] text-[10px] tracking-wider font-mono border transition-all rounded-none cursor-pointer ${
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

        {/* Add to Bag Button */}
        <button
          onClick={handleAdd}
          className="w-full mt-4 py-2.5 bg-[#FFF0F3] hover:bg-[#8F3349] text-[#7A2A3E] hover:text-white text-[10px] tracking-[0.25em] uppercase font-bold border border-[#F2D0D8] hover:border-[#8F3349] transition-all duration-200 rounded-none cursor-pointer text-center whitespace-nowrap"
        >
          Add to Bag • ${product.price.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * promoDiscount;
  const freeShippingThreshold = 65.0;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'XON10') {
      setPromoDiscount(0.1);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "XON10" for 10% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-lg bg-white border-l border-[#F0D5DC] shadow-2xl flex flex-col text-[#1F171A]">
          {/* Header */}
          <div className="p-6 border-b border-[#F0D5DC] flex items-center justify-between bg-[#FFF7F9]">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="X-On logo"
                className="h-8 sm:h-9 w-auto object-contain logo-prominent-light"
              />
              <div className="border-l border-[#ECD6DC] pl-3">
                <span className="text-[9px] tracking-[0.25em] text-[#8F3349] uppercase font-bold block">
                  Selection
                </span>
                <h2 className="font-serif text-xl sm:text-2xl text-[#1F171A] font-medium leading-none mt-0.5">Shopping Bag</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#7A636A] hover:text-[#1F171A] p-2 text-xl cursor-pointer"
              aria-label="Close bag"
            >
              ✕
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-[#FFF0F3] p-4 border-b border-[#F2D0D8] text-xs">
            {amountToFreeShipping > 0 ? (
              <p className="text-[#5C454D] mb-2 font-light">
                Add <span className="text-[#8F3349] font-mono font-bold">${amountToFreeShipping.toFixed(2)}</span> more for <strong className="text-[#8F3349]">Complimentary Express Shipping</strong>
              </p>
            ) : (
              <p className="text-[#8F3349] font-bold mb-2">
                ✓ You qualified for Complimentary Express Shipping!
              </p>
            )}
            <div className="w-full bg-[#ECD4DA] h-1.5 overflow-hidden">
              <div
                className="bg-[#8F3349] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-14 text-center space-y-3">
                <svg className="w-12 h-12 stroke-[#A38A92] mx-auto" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="font-serif text-xl text-[#7A636A]">Your bag is currently empty</p>
                <p className="text-xs text-[#9E8B92] max-w-xs mx-auto">
                  Explore our handcrafted collections and discover runway-ready nails in minutes.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-[#8F3349] text-white text-xs uppercase tracking-widest font-bold rounded-none hover:bg-[#732638] cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${idx}`}
                  className="flex gap-4 p-3.5 bg-[#FFF9FA] border border-[#ECD6DC]"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border border-[#E8CCD3] bg-white flex-shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm text-[#1F171A] font-semibold line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedSize)}
                          className="text-[#99878E] hover:text-[#8F3349] text-xs p-1 cursor-pointer"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-[10px] text-[#7A636A] font-mono mt-0.5">
                        Size: <span className="font-bold text-[#1F171A]">{item.selectedSize}</span> • Shape: {item.shape}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-[#ECD6DC] bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="px-3 py-1.5 min-h-[36px] min-w-[36px] text-xs text-[#7A636A] hover:text-[#1F171A] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="px-3 py-1.5 min-h-[36px] min-w-[36px] text-xs text-[#7A636A] hover:text-[#1F171A] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-mono text-sm text-[#8F3349] font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#F0D5DC] bg-[#FFF7F9] space-y-4">
              {/* Promo Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (Try XON10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-white border border-[#ECD6DC] px-3 py-2 text-xs uppercase font-mono text-[#1F171A] placeholder-[#9E8B92] focus:outline-none focus:border-[#8F3349] rounded-none shadow-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8F3349] text-white text-[10px] uppercase tracking-wider rounded-none font-bold hover:bg-[#732638] cursor-pointer shadow-sm"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <div className="text-[11px] text-[#8F3349] font-semibold flex justify-between">
                  <span>Promo Code Applied (10% OFF):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              {/* Totals */}
              <div className="space-y-1.5 text-xs text-[#6B555D]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-[#1F171A] font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping:</span>
                  <span className="font-mono text-[#1F171A] font-semibold">
                    {subtotal >= freeShippingThreshold ? 'FREE' : '$5.99'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif text-[#1F171A] pt-2 border-t border-[#ECD6DC]">
                  <span className="font-bold">Total:</span>
                  <span className="font-mono font-bold text-[#8F3349]">
                    ${(finalTotal + (subtotal >= freeShippingThreshold ? 0 : 5.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => alert('Proceeding to Secure Checkout. Thank you for choosing X-On!')}
                className="w-full py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all shadow-md rounded-none text-center cursor-pointer"
              >
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] text-[#887077] uppercase tracking-wider pt-1">
                <span>🔒 256-Bit SSL Encrypted</span>
                <span>•</span>
                <span>30-Day Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

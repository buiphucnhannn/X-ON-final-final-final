'use client';

import { useState } from 'react';

export default function VipClub() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && consent) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#160A0F] text-white py-20 sm:py-24">
      {/* Full-bleed Luxury Editorial Atmospheric Backdrop */}
      <img
        src="/images/newsletter-luxury-backdrop.svg"
        alt="X-On VIP Atmosphere"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Ambient Lighting Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14080D]/70 via-transparent to-[#14080D]/70 pointer-events-none" />

      {/* Top Ombre Melt from page content above */}
      <div className="absolute inset-x-0 top-0 h-5 sm:h-6 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-10" />

      {/* Bottom Ombre Melt into global footer below */}
      <div className="absolute inset-x-0 bottom-0 h-5 sm:h-6 bg-gradient-to-b from-transparent to-[#1F171A] pointer-events-none z-10" />

      <div className="relative z-20 max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-5">
        <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C8A97E] font-bold block">
          ✦ X-On Newsletter & Updates ✦
        </span>
        <h2 className="display display-light text-3xl sm:text-5xl text-white font-normal tracking-tight text-balance">
          Stay Connected with X-On
        </h2>
        <p className="text-xs sm:text-sm text-white/85 font-light max-w-xl mx-auto leading-relaxed text-pretty drop-shadow-sm">
          Sign up to be the first to know about exclusive designs, seasonal collection drops, professional nail essential launches, and VIP promotions.
        </p>

        {submitted ? (
          <div className="glass p-8 border border-[#C8A97E]/40 max-w-md mx-auto shadow-2xl animate-fadeIn">
            <span className="text-2xl text-[#C8A97E] mb-2 block">✦</span>
            <h3 className="font-serif text-2xl text-white">Welcome to the X-On Circle</h3>
            <p className="text-xs text-white/80 mt-2 leading-relaxed">
              Thank you for subscribing. Use code <strong className="text-[#ECC68F] font-mono font-bold">XON10</strong> on your first order for 10% off.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row gap-2 shadow-xl">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-[#1F171A] px-4 py-3.5 text-xs placeholder-[#8A727A] focus:outline-none focus:ring-2 focus:ring-[#C8A97E] rounded-none"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full sm:w-44 bg-white text-[#1F171A] px-4 py-3.5 text-xs placeholder-[#8A727A] focus:outline-none focus:ring-2 focus:ring-[#C8A97E] rounded-none font-mono"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#8F3349] hover:bg-[#A83952] text-white text-xs uppercase tracking-[0.2em] font-bold transition-all rounded-none whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg border border-[#C8A97E]/30"
              >
                Subscribe
              </button>
            </div>

            {/* Consent checkbox */}
            <div className="flex items-start justify-center gap-2 text-left pt-2">
              <input
                type="checkbox"
                id="consent-check"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 accent-[#8F3349] cursor-pointer"
              />
              <label htmlFor="consent-check" className="text-[10px] text-white/70 font-light max-w-md cursor-pointer">
                By submitting this form, you agree to receive promotional updates from X-On. View our{' '}
                <a href="/terms" className="text-[#ECC68F] underline hover:text-white">Terms</a> &{' '}
                <a href="/privacy" className="text-[#ECC68F] underline hover:text-white">Privacy Policy</a>. Unsubscribe at any time.
              </label>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { REVIEWS } from '../data/products';

export default function ReviewsSection() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  const go = (d) => setI((i + d + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="relative overflow-hidden bg-[#140C0F] text-white py-10 sm:py-14">
      {/* Soft Luxury Slim Ombre Melt from Canvas into Noir */}
      <div className="absolute inset-x-0 top-0 h-5 sm:h-6 bg-gradient-to-b from-[#FAF1F4] to-transparent pointer-events-none z-10" />

      {/* High-End Luxury Editorial Ambient Backdrop */}
      <img
        src="/images/reviews-luxury-backdrop.svg"
        alt="X-On reviews luxury atmosphere"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#140C0F]/60 via-transparent to-[#140C0F]/50 pointer-events-none" />

      <div className="relative container-x grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-4">
          <span className="eyebrow eyebrow-light">Our Reviews</span>
          <h2 className="display display-light text-4xl sm:text-5xl lg:text-6xl mt-5">
            Loved by nail lovers <em>& professionals</em>
          </h2>
          <div className="mt-10 flex items-center gap-5">
            <div className="font-serif text-5xl sm:text-7xl leading-none">5.0</div>
            <div>
              <div className="text-[#E9C27A] tracking-[0.2em]">★★★★★</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-white/60 mt-1">Verified Google rating</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="glass p-5 sm:p-10 lg:p-12 min-h-[340px] sm:min-h-[320px] flex flex-col justify-between">
            <div className="flex items-center justify-between shrink-0">
              <div className="text-[#E9C27A] tracking-[0.2em] text-sm">{'★'.repeat(r.rating)}</div>
              <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-mono">
                {r.source || 'Verified Google Review'}
              </span>
            </div>

            <div key={r.id} className="animate-fadeIn flex-1 flex items-center my-4">
              <p className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] leading-snug italic font-light text-pretty">
                “{r.text}”
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 sm:gap-6 shrink-0">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#8F3349] flex items-center justify-center font-serif text-xl text-white font-medium shrink-0">
                  {r.name?.[0]}
                </span>
                <div>
                  <div className="text-sm font-semibold tracking-wide text-white">{r.name}</div>
                  <div className="text-[11px] text-white/60">{r.location}</div>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="w-11 h-11 border border-white/30 hover:bg-white hover:text-[#1F171A] transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Previous review"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="w-11 h-11 bg-white text-[#1F171A] hover:bg-[#FCE4E8] transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Next review"
                >
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            {REVIEWS.map((x, idx) => (
              <button
                key={x.id}
                type="button"
                onClick={() => setI(idx)}
                className={`h-[5px] transition-all cursor-pointer px-1 py-2 ${idx === i ? 'w-12 bg-white' : 'w-8 bg-white/30 hover:bg-white/60'}`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { SHAPES_GUIDE } from '../data/products';

export default function ShapeGuideSection({ onOpenSizing }) {
  return (
    <section className="bg-[#FAF2F4] py-16 text-[#1F171A] border-b border-[#F0D5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#9E3F55] font-semibold">
            Signature Silhouette Anatomy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
            Curate Your Silhouette
          </h2>
          <p className="text-xs sm:text-sm text-[#6B555D] font-light leading-relaxed text-pretty">
            Every X-On tip is engineered with an ultra-thin cuticle contour that transitions into a reinforced architectural apex.
          </p>
        </div>

        {/* 5 Sharp Silhouette Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SHAPES_GUIDE.map((shape, i) => (
            <div
              key={i}
              className="bg-white border border-[#EBD5DB] hover:border-[#8F3349] p-6 flex flex-col justify-between transition-all duration-300 rounded-none group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-[#8F3349] font-bold">0{i + 1}</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1F171A] group-hover:text-[#8F3349] transition-colors">
                  {shape.name}
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#887077] font-semibold">
                  {shape.tagline}
                </p>
                <p className="text-xs text-[#5E4B52] font-light leading-relaxed pt-1">
                  {shape.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F5E2E6] mt-6">
                <p className="text-[9px] uppercase tracking-wider text-[#887077]">Best For:</p>
                <p className="text-[11px] text-[#8F3349] font-semibold mt-0.5">{shape.recommended}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Fit Guide Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenSizing}
            className="px-8 py-4 bg-white border border-[#8F3349] text-[#8F3349] hover:bg-[#8F3349] hover:text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none cursor-pointer shadow-sm"
          >
            Launch Interactive Sizing Chart ✦
          </button>
        </div>
      </div>
    </section>
  );
}

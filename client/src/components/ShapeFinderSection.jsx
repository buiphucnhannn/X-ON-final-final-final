'use client';

import { useState } from 'react';

export default function ShapeFinderSection() {
  const shapes = [
    {
      name: 'Coffin / Ballerina',
      slug: 'coffin',
      image: '/images/IMG_7098.JPG',
      length: 'Medium (24mm) • Long (28mm)',
      vibe: 'Dramatic, elongating & editorial',
      tag: 'Most Iconic',
    },
    {
      name: 'Almond',
      slug: 'almond',
      image: '/images/IMG_7098.JPG',
      length: 'Short (18mm) • Medium (22mm)',
      vibe: 'Universally flattering & timeless',
      tag: 'Everyday Chic',
    },
    {
      name: 'Stiletto',
      slug: 'stiletto',
      image: '/images/IMG_7105.JPG',
      length: 'Long (30mm) • XL (35mm)',
      vibe: 'Fierce, razor-sharp & runway statement',
      tag: 'High Fashion',
    },
    {
      name: 'Oval',
      slug: 'oval',
      image: '/images/IMG_7098.JPG',
      length: 'Short (16mm) • Medium (20mm)',
      vibe: 'Soft curves matching natural cuticle line',
      tag: 'Bridal Classic',
    },
    {
      name: 'Square',
      slug: 'square',
      image: '/images/IMG_7105.JPG',
      length: 'Short (15mm) • Medium (19mm)',
      vibe: 'Crisp 90-degree European geometric finish',
      tag: 'Minimalist Clean',
    },
    {
      name: 'Round',
      slug: 'round',
      image: '/images/IMG_7098.JPG',
      length: 'Short (14mm) • Medium (18mm)',
      vibe: 'Ultra-durable, typing ease & subtle glamour',
      tag: 'Workplace Ready',
    },
  ];

  return (
    <section className="bg-white py-16 border-b border-[#F0D5DC] text-[#1F171A]">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#F0D5DC] pb-6 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#9E3F55] font-bold">
              Architectural Silhouettes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
              Find Your Signature Shape
            </h2>
            <p className="text-xs sm:text-sm text-[#665258] font-light max-w-xl text-pretty">
              Every nail silhouette alters finger length and aesthetic presence. Explore our 6 signature shapes crafted to millimeter accuracy.
            </p>
          </div>

          <a
            href="/sizing-chart"
            className="text-xs tracking-widest uppercase font-bold text-[#8F3349] hover:underline"
          >
            Explore Full Sizing Guide →
          </a>
        </div>

        {/* 6 Shape Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shapes.map((s, idx) => (
            <div
              key={idx}
              className="group bg-[#FAF2F4] border border-[#EBD5DB] hover:border-[#8F3349] p-6 rounded-none transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest uppercase bg-[#FFF0F3] border border-[#F2D0D8] text-[#8F3349] px-2.5 py-1 font-bold">
                    {s.tag}
                  </span>
                  <span className="text-xs font-mono text-[#7A636A] font-medium">{s.length}</span>
                </div>

                <div className="aspect-[4/3] overflow-hidden bg-white border border-[#EBD5DB]">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#1F171A] group-hover:text-[#8F3349] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs text-[#665258] font-light mt-1">{s.vibe}</p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#EBD5DB]">
                <a
                  href={`/shop?shape=${s.slug}`}
                  className="inline-block w-full text-center py-2.5 bg-white border border-[#8F3349] text-[#8F3349] hover:bg-[#8F3349] hover:text-white text-[11px] tracking-widest uppercase font-bold transition-all rounded-none"
                >
                  Shop {s.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

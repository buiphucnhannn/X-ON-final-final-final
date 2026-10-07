'use client';

import Link from 'next/link';

export default function Welcome() {
  return (
    <section id="welcome" className="section bg-petal-pattern py-10 sm:py-14">
      <div className="container-x grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <span className="eyebrow">About X-On</span>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl mt-5 text-balance">
            Where modern nail artistry meets <em>effortless beauty.</em>
          </h2>
          <p className="mt-6 text-[#5E4B52] font-light leading-relaxed text-justify text-xs sm:text-sm">
            Created for nail lovers and professionals alike, X-On curates handmade press-on nails and professional essentials engineered for quality, style, and lasting performance — delivering an effortless, high-end salon finish in minutes.
          </p>

          <div className="mt-10 grid grid-cols-3 border-y border-[#EED9DE]">
            {[
              ['100%', 'Handmade sets'],
              ['6', 'Signature shapes'],
              ['5x', 'Reusable wear'],
            ].map(([n, l], i) => (
              <div key={l} className={`py-4 sm:py-6 ${i ? 'pl-3 sm:pl-6 border-l border-[#EED9DE]' : ''}`}>
                <div className="font-serif text-2xl sm:text-4xl text-[#8F3349] font-medium">{n}</div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-[#8A7479] mt-1">{l}</div>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn btn-outline mt-10">
            Our Story <span className="btn-arrow">→</span>
          </Link>
        </div>

        {/* Editorial collage */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 sm:h-[560px]">
          <div className="col-span-12 sm:col-span-7 sm:row-span-2 overflow-hidden group shadow-sm border border-[#EED9DE] relative aspect-square sm:aspect-auto">
            <img
              src="/images/luxury_handmade_nails.jpg"
              alt="Handmade luxury press-on nails"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#EED9DE] px-3 py-1 text-[9px] tracking-widest uppercase font-bold text-[#8F3349]">
              1-of-1 Handmade Craft
            </div>
          </div>

          <div className="col-span-6 sm:col-span-5 h-[240px] sm:h-[272px] overflow-hidden group shadow-sm border border-[#EED9DE]">
            <img
              src="/images/nail_essentials_kit.jpg"
              alt="Cold Gel Grip-X Essentials"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Luminous Warm Editorial Creed Card (Đổi màu nền sáng quý phái, không bị tối đen) */}
          <div className="col-span-6 sm:col-span-5 h-[240px] sm:h-[272px] bg-gradient-to-br from-[#FFF9FA] via-[#FCEDF0] to-[#F8DEE4] text-[#1F171A] p-4 sm:p-7 flex flex-col justify-between border border-[#E8CAD1] shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[9px] tracking-[0.28em] uppercase text-[#8F3349] font-bold">The X-On Creed</span>
                <div className="w-8 h-[1.5px] bg-[#C8A97E] mt-1" />
              </div>
              <img
                src="/images/logo.png"
                alt="X-On logo"
                className="h-8 sm:h-9 w-auto object-contain logo-prominent-light transition-transform hover:scale-105"
              />
            </div>
            <p className="font-serif text-lg sm:text-2xl leading-snug italic text-[#8F3349] font-normal">
              “Press On. Slay On. Repeat.”
            </p>
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#7A5B64] pt-2 border-t border-[#ECCCD4]">
              <span>Kissimmee, Florida</span>
              <span className="text-[#C8A97E]">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
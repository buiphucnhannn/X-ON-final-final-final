'use client';

export default function AtelierIRL() {
  return (
    <section id="find-us" className="relative w-full overflow-hidden min-h-[520px] lg:min-h-[580px] flex items-center bg-[#22131A]">
      {/* Seamless Ambient Top Blend from Reviews Section */}
      <div className="absolute inset-x-0 top-0 h-5 sm:h-6 bg-gradient-to-b from-[#140C0F] to-transparent pointer-events-none z-10" />

      {/* High-End Luminous Studio Backdrop (Sáng hơn, loại bỏ lớp đen u tối) */}
      <div className="absolute inset-0 bg-[#22131A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_80%_at_50%_50%,_#FFFFFF_0%,_#FDF2F5_35%,_#E5C5CD_65%,_#22131A_95%)]" />

      {/* Perfectly Scaled, Ultra-Sharp Centered Logo Artwork (Scale vừa vặn không bị cắt xén, siêu nét) */}
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 pointer-events-none select-none">
        <img
          src="/images/logo.png"
          alt="X-ON Flagship Studio Kissimmee"
          className="w-full h-full max-h-[520px] object-contain object-center scale-90 sm:scale-95 drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* Balanced Soft Vignette for High-Contrast Typography (Crisp text on mobile & desktop) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 via-42% to-black/30 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 lg:bg-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

      {/* Slim Luxury Ambient Bottom Blend into VIP Club */}
      <div className="absolute inset-x-0 bottom-0 h-5 sm:h-6 bg-gradient-to-b from-transparent to-[#160A0F]/80 pointer-events-none z-10" />

      {/* Aligned Inner Content within Grid Container */}
      <div className="container-x relative z-10 w-full py-10 sm:py-14 grid lg:grid-cols-2 gap-10 sm:gap-14 items-center text-white">
        <div>
          <span className="eyebrow eyebrow-light">Find Us</span>
          <h2 className="display display-light text-4xl sm:text-5xl lg:text-6xl mt-5 text-balance">
            Visit X-On in <em>Kissimmee, Florida</em>
          </h2>
          <p className="mt-6 max-w-md text-white/95 font-light leading-relaxed text-pretty drop-shadow-sm text-left sm:text-justify">
            Try sizes in person, explore the full collection, and pick up professional nail
            essentials at our studio.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=3168+Bill+Beck+Blvd,+Kissimmee,+FL+34744"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light shadow-lg cursor-pointer"
            >
              Get Directions <span className="btn-arrow">→</span>
            </a>
            <a href="tel:6892128888" className="btn btn-glass cursor-pointer">
              Call 689-212-8888 <span className="btn-arrow">☎</span>
            </a>
          </div>
        </div>

        <div className="lg:justify-self-end self-center glass p-6 sm:p-10 w-full max-w-md rounded-none shadow-2xl">
          {[
            ['Address', '3168 Bill Beck Blvd', 'Kissimmee, FL 34744'],
            ['Phone', '689-212-8888', 'Retail & wholesale line'],
            ['Hours', 'Monday – Saturday', '9:30 AM – 6:30 PM'],
          ].map(([k, a, b]) => (
            <div key={k} className="py-4 border-b border-white/15 last:border-0">
              <div className="text-[10px] tracking-[0.24em] uppercase text-[#F2D0D8] font-semibold">{k}</div>
              <div className="font-serif text-xl sm:text-2xl mt-1 text-white">{a}</div>
              <div className="text-xs text-white/70 mt-0.5">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

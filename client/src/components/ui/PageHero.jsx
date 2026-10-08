'use client';

/** Dark full-bleed banner for every inner page (keeps the glass header legible). */
export default function PageHero({ eyebrow, title, intro, image = '/images/luxury_handmade_nails.jpg', children }) {
  return (
    <section className="relative min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] h-auto w-full max-w-full flex items-center justify-center overflow-clip bg-[#1F171A] text-white py-16 sm:py-20 isolate">
      {/* Background Visual - Synchronized 16:9 framing, locked to uniform height */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
      />

      {/* Cinematic Dual Gradient + Radial Spotlight Scrim for 100% Intrinsic Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#140C0F]/95 via-black/60 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/65 via-black/25 to-transparent pointer-events-none" />

      {/* Centered Editorial Content */}
      <div className="relative z-10 container-x pt-20 sm:pt-24 pb-6 sm:pb-8 w-full flex flex-col items-center justify-center text-center my-auto">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center animate-rise">
          {eyebrow && (
            <span className="eyebrow eyebrow-light text-[#FCE4E8] tracking-[0.2em] sm:tracking-[0.32em] font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mb-1">
              {eyebrow}
            </span>
          )}
          <h1
            className="display display-light text-2xl sm:text-5xl lg:text-6xl mt-2 sm:mt-3 font-normal text-balance text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] drop-shadow-[0_6px_32px_rgba(0,0,0,0.9)]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {intro && (
            <p className="mt-5 max-w-2xl text-xs sm:text-sm md:text-base text-white/95 font-light leading-relaxed text-pretty drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              {intro}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

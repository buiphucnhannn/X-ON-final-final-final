'use client';

import { useState, useRef, useEffect } from 'react';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) v.pause();
    else v.play();
    setPlaying(!playing);
  };

  return (
    <section className="relative h-[100dvh] max-h-[920px] min-h-[540px] w-full overflow-hidden bg-[#1F171A] text-white flex flex-col justify-between pt-28 sm:pt-32 pb-4 sm:pb-6">
      {/* Cinematic Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/1K34PRO8E_DMCL0D.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/85" />

      {/* Main Centered Editorial Typography (Shifted upwards to fit 1 screen harmoniously) */}
      <div className="relative z-10 container-x flex flex-col items-center justify-center text-center my-auto -translate-y-2 sm:-translate-y-4 md:-translate-y-6">
        {/* Welcome To + Luminous Transparent Logo (Không cần badge bao bọc, phát sáng nổi bật trên nền) */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-4 md:gap-5 animate-rise mb-2">
          <div className="flex items-center gap-2 text-[#F2D0D8]">
            <span className="text-xs sm:text-sm text-[#FCE4E8] drop-shadow-[0_0_6px_rgba(252,228,232,0.8)]">◆</span>
            <span className="text-xs sm:text-sm md:text-base tracking-[0.28em] sm:tracking-[0.32em] uppercase font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Welcome to
            </span>
          </div>

          <div className="relative inline-flex items-center justify-center">
            {/* Lớp hào quang ánh sáng mềm tự nhiên phía sau logo (không viền, không box/badge) */}
            <div
              className="absolute inset-0 -inset-x-5 -inset-y-2 bg-gradient-to-r from-white/25 via-[#FCE4E8]/35 to-white/25 blur-lg rounded-full pointer-events-none -z-10"
              aria-hidden="true"
            />

            <img
              src="/images/logo.png"
              alt="X-On"
              className="h-11 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        <h1 className="display display-light text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] leading-[1.08] mt-2 sm:mt-3 max-w-4xl animate-rise delay-1 text-balance">
          Press On Beyond Polish, <em>Slay the Extraordinary</em>
        </h1>
        <p className="mt-3 sm:mt-4 max-w-2xl text-[13px] sm:text-sm md:text-base text-white/90 font-light leading-relaxed animate-rise delay-2 text-balance drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Handmade press-on nails and carefully selected nail essentials — designed with quality, style, and performance in mind for nail lovers and professionals alike.
        </p>
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 animate-rise delay-3">
          <a href="/shop" className="btn btn-light shadow-lg py-3 px-6 sm:px-8 text-xs sm:text-sm">
            Shop Press-On Nails <span className="btn-arrow">→</span>
          </a>
          <a href="/shop?type=essentials" className="btn btn-glass py-3 px-6 sm:px-8 text-xs sm:text-sm">
            Nail Essentials <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>

      {/* Soft Luxury Slim Ombre Melt into Welcome Section Canvas */}
      <div className="absolute inset-x-0 bottom-0 h-6 sm:h-8 bg-gradient-to-b from-transparent to-[#FAF1F4] pointer-events-none z-10" />

      {/* Bottom bar: controls */}
      <div className="relative z-20 w-full pt-2">
        <div className="container-x flex items-center justify-between gap-4">
          <button
            onClick={toggle}
            className="glass w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Toggle video"
          >
            {playing ? '❚❚' : '▶'}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('welcome')}
            className="w-10 h-10 sm:w-10 sm:h-10 bg-white text-[#1F171A] flex items-center justify-center hover:bg-[#FCE4E8] transition-colors shadow-sm cursor-pointer"
            aria-label="Scroll down"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
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
    <section className="relative h-[100dvh] max-h-[960px] min-h-[560px] w-full overflow-hidden bg-[#1F171A] text-white flex flex-col justify-between pt-16 sm:pt-20 md:pt-24 pb-3 sm:pb-4">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />

      {/* Main Centered Editorial Typography (Perfect 1-screen fit with spacious breathing room) */}
      <div className="relative z-10 container-x flex flex-col items-center justify-center text-center my-auto py-2 sm:py-3">
        {/* Welcome To + Luminous Heroic Logo */}
        <div className="flex flex-col items-center justify-center animate-rise mb-3 sm:mb-4 md:mb-5">
          <div className="flex items-center gap-2 text-[#F2D0D8] mb-2 sm:mb-2.5">
            <span className="text-[9px] sm:text-[10px] text-[#FCE4E8] drop-shadow-[0_0_6px_rgba(252,228,232,0.8)]">◆</span>
            <span className="text-[10px] sm:text-xs tracking-[0.32em] sm:tracking-[0.36em] uppercase font-semibold text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Welcome to
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#FCE4E8] drop-shadow-[0_0_6px_rgba(252,228,232,0.8)]">◆</span>
          </div>

          <div className="relative inline-flex items-center justify-center">
            {/* Lớp hào quang ánh sáng mềm tự nhiên phía sau logo */}
            <div
              className="absolute inset-0 -inset-x-10 sm:-inset-x-14 -inset-y-6 sm:-inset-y-8 bg-gradient-to-r from-white/20 via-[#FCE4E8]/35 to-white/20 blur-xl rounded-full pointer-events-none -z-10"
              aria-hidden="true"
            />

            <img
              src="/images/logo.png"
              alt="X-On"
              className="h-24 sm:h-30 md:h-36 lg:h-44 xl:h-48 w-auto object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_0_16px_rgba(255,255,255,0.75)] drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        <h1 className="display display-light text-xl sm:text-2xl md:text-3xl lg:text-[2.35rem] xl:text-[2.6rem] leading-[1.14] mt-1 sm:mt-1.5 max-w-3xl animate-rise delay-1 text-balance">
          Press On Beyond Polish, <em>Slay the Extraordinary</em>
        </h1>
        <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-[13px] md:text-sm text-white/90 font-light leading-relaxed animate-rise delay-2 text-balance drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Handmade press-on nails and carefully selected nail essentials — designed with quality, style, and performance in mind for nail lovers and professionals alike.
        </p>
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 animate-rise delay-3">
          <Link href="/shop" className="btn btn-light shadow-lg py-2.5 px-6 sm:py-3 sm:px-7 text-xs sm:text-sm">
            Shop Press-On Nails <span className="btn-arrow">→</span>
          </Link>
          <Link href="/shop?type=essentials" className="btn btn-glass py-2.5 px-6 sm:py-3 sm:px-7 text-xs sm:text-sm">
            Nail Essentials <span className="btn-arrow">→</span>
          </Link>
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

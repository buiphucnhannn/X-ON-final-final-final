'use client';

/**
 * High-End Editorial Minimalist Section Accent
 * Provides a beautifully balanced, centered floral insignia with feathery gradient trails,
 * champagne gold micro-sparkles, and a delicate radial halo to seamlessly connect sections together.
 */
export default function SectionAccent({ variant = 'center', className = '' }) {
  return (
    <div
      className={`relative w-full py-2 sm:py-3 pointer-events-none select-none flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Symmetrical Centered Ornaments (transparent — inherits page background) */}
      <div className="relative flex items-center justify-center gap-2.5 sm:gap-4 lg:gap-5 opacity-90">
        {/* Left feather line tapering outward */}
        <div className="w-16 sm:w-32 lg:w-44 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-[#8F3349]/45" />

        {/* Left champagne micro-sparkle */}
        <span className="text-[8px] sm:text-[10px] text-[#C8A97E] opacity-75">✦</span>

        {/* Center 4-Petal Artisan Blossom with Halo */}
        <div className="relative flex items-center justify-center">
          <svg
            width="34"
            height="34"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 drop-shadow-[0_2px_6px_rgba(143,51,73,0.12)]"
          >
            {/* Delicate Outer Ring */}
            <circle cx="18" cy="18" r="14.5" stroke="#C8A97E" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
            
            {/* 4 Petals */}
            <g transform="translate(18, 18)">
              <path d="M 0 0 C -4.5 -7, -5.5 -13, 0 -16 C 5.5 -13, 4.5 -7, 0 0 Z" fill="#E09BA8" fillOpacity="0.32" stroke="#C87888" strokeWidth="0.75" strokeOpacity="0.45" />
              <path d="M 0 0 C -4.5 7, -5.5 13, 0 16 C 5.5 13, 4.5 7, 0 0 Z" fill="#E09BA8" fillOpacity="0.32" stroke="#C87888" strokeWidth="0.75" strokeOpacity="0.45" />
              <path d="M 0 0 C -7 -4.5, -13 -5.5, -16 0 C -13 5.5, -7 4.5, 0 0 Z" fill="#E09BA8" fillOpacity="0.32" stroke="#C87888" strokeWidth="0.75" strokeOpacity="0.45" />
              <path d="M 0 0 C 7 -4.5, 13 -5.5, 16 0 C 13 5.5, 7 4.5, 0 0 Z" fill="#E09BA8" fillOpacity="0.32" stroke="#C87888" strokeWidth="0.75" strokeOpacity="0.45" />
              {/* Core Gem */}
              <circle cx="0" cy="0" r="2.4" fill="#B3586B" fillOpacity="0.5" />
              <circle cx="0" cy="0" r="1.2" fill="#C8A97E" />
            </g>
          </svg>
        </div>

        {/* Right champagne micro-sparkle */}
        <span className="text-[8px] sm:text-[10px] text-[#C8A97E] opacity-75">✦</span>

        {/* Right feather line tapering outward */}
        <div className="w-16 sm:w-32 lg:w-44 h-[1px] bg-gradient-to-l from-transparent via-[#C8A97E]/30 to-[#8F3349]/45" />
      </div>
    </div>
  );
}

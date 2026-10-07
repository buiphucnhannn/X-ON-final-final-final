'use client';

/**
 * 100% Anatomically Accurate Nail Shape Silhouette Vector Diagram
 * Renders precision apex architecture, cuticle curve, and specific tip contours
 * for Coffin, Almond, Stiletto, Oval, Square, and Round.
 */
export default function NailShapeIllustration({ shapeId = 'almond', className = 'w-32 h-44' }) {
  // Shape-specific SVG path definitions (viewBox 0 0 100 120)
  const getShapePath = (id) => {
    switch (id) {
      case 'coffin':
        // Coffin / Ballerina: Tapered sidewalls ending in crisp flat horizontal tip
        return {
          path: 'M 26 95 C 26 112, 74 112, 74 95 L 67 28 L 33 28 Z',
          tipType: 'Flat Architectural Edge',
          apexY: 48,
          tipY: 28,
        };
      case 'almond':
        // Almond: Softly tapered sidewalls curving to a refined feminine peak
        return {
          path: 'M 26 95 C 26 112, 74 112, 74 95 L 73 55 C 71 35, 58 20, 50 20 C 42 20, 29 35, 27 55 Z',
          tipType: 'Curved Almond Apex',
          apexY: 46,
          tipY: 20,
        };
      case 'stiletto':
        // Stiletto: Razor-sharp dramatic taper ending in an acute pointed spike
        return {
          path: 'M 26 95 C 26 112, 74 112, 74 95 L 72 60 L 50 14 L 28 60 Z',
          tipType: 'Razor Sharp Stiletto Point',
          apexY: 50,
          tipY: 14,
        };
      case 'oval':
        // Oval: Parallel sidewalls softly rounding into an elongated semi-circle
        return {
          path: 'M 26 95 C 26 112, 74 112, 74 95 L 74 48 C 74 24, 26 24, 26 48 Z',
          tipType: 'Symmetrical Curved Arch',
          apexY: 52,
          tipY: 24,
        };
      case 'square':
        // Square: Crisp parallel sidewalls with 90° corners and flat top
        return {
          path: 'M 26 95 C 26 112, 74 112, 74 95 L 74 32 L 26 32 Z',
          tipType: '90° Parallel Geometric Edge',
          apexY: 56,
          tipY: 32,
        };
      case 'round':
      default:
        // Round: Natural fingertip contour curve with maximum typing durability
        return {
          path: 'M 26 95 C 26 112, 74 112, 74 95 L 74 58 C 74 40, 26 40, 26 58 Z',
          tipType: 'Natural Fingertip Contour',
          apexY: 62,
          tipY: 40,
        };
    }
  };

  const current = getShapePath(shapeId);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Luxury Rose & Opal Gradient Fill */}
          <linearGradient id={`nailGrad-${shapeId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2F5" />
            <stop offset="45%" stopColor="#FCE0E6" />
            <stop offset="100%" stopColor="#F5CAD4" />
          </linearGradient>

          {/* 3D Gloss Sheen Reflection */}
          <linearGradient id={`sheenGrad-${shapeId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Fine Millimeter Blueprint Grid Behind Nail */}
        <line x1="14" y1="20" x2="14" y2="105" stroke="#E6C8D0" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
        <line x1="86" y1="20" x2="86" y2="105" stroke="#E6C8D0" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
        <line x1="10" y1={current.tipY} x2="90" y2={current.tipY} stroke="#D49AA7" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.7" />
        <line x1="10" y1="105" x2="90" y2="105" stroke="#D49AA7" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.7" />

        {/* Main Sculpted Nail Body */}
        <path
          d={current.path}
          fill={`url(#nailGrad-${shapeId})`}
          stroke="#8F3349"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* 3D Longitudinal Highlight Sheen */}
        <path
          d="M 32 95 C 32 104, 46 104, 46 95 L 42 34 L 34 34 Z"
          fill={`url(#sheenGrad-${shapeId})`}
          opacity="0.8"
        />

        {/* Anatomical Cuticle Arc Guide Line */}
        <path
          d="M 28 94 C 28 107, 72 107, 72 94"
          stroke="#8F3349"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.45"
        />

        {/* Apex Reinforcement Curve */}
        <ellipse
          cx="50"
          cy={current.apexY}
          rx="12"
          ry="3.5"
          fill="none"
          stroke="#C8A97E"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          opacity="0.8"
        />

        {/* Apex Diamond Sparkle Accent */}
        <circle cx="50" cy={current.apexY} r="1.5" fill="#8F3349" />

        {/* Tip Dimension Indicator Dot */}
        <circle cx="50" cy={current.tipY} r="2" fill="#8F3349" />
      </svg>

      {/* Subtle Apex Floating Label */}
      <div className="absolute bottom-1 inset-x-0 text-center">
        <span className="text-[9px] font-mono tracking-wider uppercase text-[#8F3349] font-bold bg-white/90 px-1.5 py-0.5 border border-[#ECD6DC] shadow-xs">
          Apex C-Curve
        </span>
      </div>
    </div>
  );
}

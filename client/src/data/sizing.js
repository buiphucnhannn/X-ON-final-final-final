/**
 * Single source of truth for X-On sizing content.
 * Shared by the Sizing Chart page and the Sizing Guide popup (SizingModal)
 * so millimeter standards, shape anatomy, and measuring steps stay in sync.
 */

export const CONCIERGE_PHONE = '689-212-8888';

export const BETWEEN_NOTE =
  '* Between sizes? We always recommend sizing UP: our press-on sidewalls can be gently filed with our glass file for a millimeter-perfect contour.';

export const SIZES = [
  {
    id: 'XS',
    badge: null,
    thumb: '14 mm',
    index: '10 mm',
    middle: '11 mm',
    ring: '10 mm',
    pinky: '8 mm',
    shortNote: 'Petite nail beds',
    recommended: 'Petite nail beds, slender hands',
  },
  {
    id: 'S',
    badge: null,
    thumb: '15 mm',
    index: '11 mm',
    middle: '12 mm',
    ring: '11 mm',
    pinky: '9 mm',
    shortNote: 'Slender fingers',
    recommended: 'Small to medium nail beds',
  },
  {
    id: 'M',
    badge: 'Most Popular',
    thumb: '16 mm',
    index: '12 mm',
    middle: '13 mm',
    ring: '12 mm',
    pinky: '10 mm',
    shortNote: 'Fits 75% of women',
    recommended: 'Standard average hand proportions',
  },
  {
    id: 'L',
    badge: null,
    thumb: '17 mm',
    index: '13 mm',
    middle: '14 mm',
    ring: '13 mm',
    pinky: '11 mm',
    shortNote: 'Wider / elongated beds',
    recommended: 'Wider nail beds, flatter nail plate curvature',
  },
];

/** Display label for a size, e.g. "M (Most Popular)" or "XS". */
export function sizeLabel(size) {
  return size.badge ? `${size.id} (${size.badge})` : size.id;
}

export const STEPS = [
  {
    n: '01',
    title: 'Place Tape Across Nail',
    text: 'Place a piece of clear Scotch tape horizontally across the widest section of your natural nail bed, pressing firmly into both side walls.',
  },
  {
    n: '02',
    title: 'Mark Both Sidewalls',
    text: 'Using a fine-tip pen or marker, place a clean vertical line on the tape precisely where your nail meets the skin on both left and right sides.',
  },
  {
    n: '03',
    title: 'Measure with Ruler (mm)',
    text: 'Peel the tape off, lay it flat on a millimeter ruler, and count the millimeter ticks between your marks. Record for all 5 fingers.',
  },
];

export const SHAPES = [
  {
    id: 'coffin',
    name: 'Coffin / Ballerina',
    tagline: 'Bold Geometric Glamour',
    description:
      'Tapered edges squared off at the tip. Slenderizes fingers and provides dramatic haute couture presence with architectural lines.',
    lengths: 'Medium (24mm) • Long (28mm) • XL (32mm)',
    profile: 'Tapered sidewalls ending in crisp flat horizontal edge. High stress-point apex arch.',
    bestFor: 'Nail lovers seeking maximum visual impact, finger elongation, and editorial glamour.',
    image: '/images/IMG_7099.JPG',
    exampleSet: 'Aura Quartz Coffin Set',
  },
  {
    id: 'almond',
    name: 'Almond',
    tagline: 'Universally Flattering',
    description:
      'Softly tapered sides ending in a curved, feminine peak. Replicates the gentle proportions of an almond seed and elongates shorter nail beds.',
    lengths: 'Short (18mm) • Medium (22mm) • Long (26mm)',
    profile: 'Smooth converging sidewalls with softly rounded tip apex. Balanced daily C-curve.',
    bestFor: 'Everyday elegance, typing comfort, and elongating short to medium nail beds.',
    image: '/images/IMG_7100.JPG',
    exampleSet: 'Velvet Rose Almond Set',
  },
  {
    id: 'stiletto',
    name: 'Stiletto',
    tagline: 'Fierce Runway Drama',
    description:
      'Extravagant dramatic taper ending in an ultra-sharp acute claw point. Statement high-fashion craft for fearless glamour.',
    lengths: 'Long (30mm) • Extra Long (35mm)',
    profile: 'Direct straight-line convergence into a razor tip point. Triple-layer apex reinforcement.',
    bestFor: 'Editorial photo shoots, red carpet appearances, and couture nail collectors.',
    image: '/images/IMG_7104.JPG',
    exampleSet: 'Baroque Pearl Stiletto Set',
  },
  {
    id: 'oval',
    name: 'Oval',
    tagline: 'Classic Parisian Chic',
    description:
      'Classic gently curved semi-circle edge mirroring the natural cuticle curve. Clean, balanced, and timeless understated luxury.',
    lengths: 'Short (16mm) • Medium (20mm)',
    profile: 'Parallel sidewall transition into a symmetrical rounded dome. Natural flex arch.',
    bestFor: 'Active lifestyles, office environments, and understated luxury manicures.',
    image: '/images/IMG_7103.JPG',
    exampleSet: 'Sculpted Floral Oval Set',
  },
  {
    id: 'square',
    name: 'Square',
    tagline: 'Sharp Modern Edge',
    description:
      'Clean 90-degree straight horizontal top edge with crisp 90-degree sidewall corners. A European runway favorite for structured hands.',
    lengths: 'Short (15mm) • Medium (19mm)',
    profile: 'Uniform parallel sidewalls with sharp right-angle corners and planar top edge.',
    bestFor: 'Wide nail beds and minimalist European French manicure aesthetics.',
    image: '/images/IMG_7102.JPG',
    exampleSet: 'French Minimalist Square Set',
  },
  {
    id: 'round',
    name: 'Round',
    tagline: 'Natural Typing Ease',
    description:
      'Contoured curved edge following natural fingertip contour. Provides maximum daily durability and keyboard typing ease.',
    lengths: 'Short (14mm) • Medium (18mm)',
    profile: 'Follows natural pad curve with rounded free edge corners for zero snagging.',
    bestFor: 'Natural nail transitions, healthcare or keyboard professionals, and casual wear.',
    image: '/images/IMG_7106.JPG',
    exampleSet: 'Glazed Donut Round Set',
  },
];

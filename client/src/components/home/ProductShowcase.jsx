'use client';

import ProductCard from '../ProductCard';
import { PRODUCTS } from '../../data/products';

/**
 * Generic product rail for the 3 Home sections required by the spec:
 * Handmade Press-On Nails · Nail Essentials · Best Sellers.
 */
export default function ProductShowcase({
  id,
  eyebrow,
  title,
  intro,
  filter,
  href,
  tone = 'cream',
  onAddToCart,
  onQuickView,
  onOpenSizing,
}) {
  const items = PRODUCTS.filter(filter).slice(0, 4);
  const bg = 'bg-petal-pattern';

  return (
    <section id={id} className={`section ${bg}`}>
      <div className="container-x">
        <div className="mb-10 sm:mb-12">
          {eyebrow && <span className="eyebrow mb-2.5 block">{eyebrow}</span>}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <h2
              className="display text-3xl sm:text-5xl lg:text-6xl text-[#1F171A] text-balance leading-none"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <a
              href={href}
              className="btn btn-outline whitespace-nowrap shrink-0 self-start md:self-center"
            >
              Shop all <span className="btn-arrow">→</span>
            </a>
          </div>
          {intro && <p className="mt-3.5 text-[#5E4B52] font-light leading-relaxed text-pretty max-w-2xl text-[13px] sm:text-sm">{intro}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onOpenSizing={onOpenSizing}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

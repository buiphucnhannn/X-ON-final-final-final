'use client';

import Link from 'next/link';

const TILES = [
  { title: 'Handmade Press-On Nails', note: 'Artisan sets, 1-of-1 craft', href: '/shop?type=handmade', img: '/images/luxury_handmade_nails.jpg', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Nail Essentials', note: 'Glue, remover & pro tools', href: '/shop?type=essentials', img: '/images/nail_essentials_kit.jpg', span: '' },
  { title: 'Bundle & Save', note: 'Up to 35% off', href: '/bundle-and-save', img: '/images/curated_bundle_box.jpg', span: '' },
  { title: 'Sizing Chart', note: 'Find your perfect fit', href: '/sizing-chart', img: '/images/IMG_7101.JPG', span: '' },
  { title: 'Gallery', note: 'Now selling lookbook', href: '/gallery-product', img: '/images/IMG_7106.JPG', span: '' },
];

export default function CategoryTiles() {
  return (
    <section className="section bg-petal-pattern py-10 sm:py-14">
      <div className="container-x">
        <div className="mb-10 sm:mb-12">
          <span className="eyebrow mb-2.5 block">Explore Collections</span>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <h2 className="display text-3xl sm:text-5xl lg:text-6xl text-[#1F171A] text-balance leading-none">
              Curated for every <em>signature look</em>
            </h2>
            <Link href="/shop" className="btn btn-outline whitespace-nowrap self-start md:self-center shrink-0">
              View all <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[680px]">
          {TILES.map((t) => (
            <Link key={t.title} href={t.href} className={`group relative overflow-hidden min-h-[240px] sm:min-h-[300px] ${t.span}`}>
              <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-white/70">{t.note}</span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl mt-1">{t.title}</h3>
                </div>
                <span className="w-10 h-10 shrink-0 bg-white text-[#1F171A] flex items-center justify-center group-hover:bg-[#8F3349] group-hover:text-white transition-colors">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

export default function CommunityWall() {
  const posts = [
    {
      handle: '@valerie.couture',
      set: 'CF-35-0961 • AURA QUARTZ',
      image: '/images/IMG_7098.JPG',
      likes: '2.4k',
      caption: 'Day 18 of wearing my X-On press-ons and not a single lift. People think I spent $180 at a luxury salon.',
    },
    {
      handle: '@sophia.styles',
      set: 'OV-35-0103 • PEARL CHROME',
      image: '/images/IMG_7105.JPG',
      likes: '4.1k',
      caption: 'Cold Gel Grip-X is pure magic. 10 minutes to apply, zero UV lamps, and my natural nail beds are completely intact.',
    },
    {
      handle: '@mia.runway',
      set: 'ST-40-0882 • NOIR VELVET',
      image: '/images/IMG_7098.JPG',
      likes: '1.9k',
      caption: 'The stiletto shape is razor sharp perfection. Wore them through Paris Fashion Week without a scratch.',
    },
    {
      handle: '@claire.bridal',
      set: 'OV-35-0255 • CHAMPAGNE GLAZE',
      image: '/images/IMG_7105.JPG',
      likes: '3.6k',
      caption: 'Wore these for my wedding ceremony and honeymoon in Italy. Waterproof, luxurious, and so easy to pack.',
    },
  ];

  return (
    <section className="bg-[#FAF2F4] py-16 border-b border-[#F0D5DC] text-[#1F171A]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8F3349] font-bold">
            Social Lookbook • #XONSlay
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
            Loved by Patrons Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-pretty">
            Tag @xon_presson on Instagram or TikTok with #XONSlay to be featured on our official community wall.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EBD5DB] hover:border-[#8F3349] overflow-hidden rounded-none shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-[#FAF2F4]">
                <img
                  src={p.image}
                  alt={p.set}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[9px] tracking-widest uppercase font-mono px-2.5 py-1">
                  {p.handle}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#8F3349] text-[10px] font-bold px-2 py-0.5">
                  ♥ {p.likes}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-bold text-[#8F3349] block">
                    {p.set}
                  </span>
                  <p className="text-xs text-[#554047] font-light leading-relaxed mt-1.5 italic text-justify">
                    "{p.caption}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0D5DC] flex justify-between items-center text-[10px]">
                  <span className="text-[#7A636A]">Verified Patron</span>
                  <a href="/shop" className="text-[#8F3349] font-bold uppercase tracking-wider hover:underline">
                    Shop Look →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

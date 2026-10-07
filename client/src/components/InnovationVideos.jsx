'use client';

export default function InnovationVideos() {
  const videoCards = [
    {
      title: 'BIG SALE',
      subtitle: 'Limited-Time Seasonal Drops',
      videoSrc: '/videos/1K34PRO84_DMCL0D.mp4',
      badge: 'Up to 30% Off',
      link: '/bundle-and-save',
    },
    {
      title: 'COLD GEL GLUE',
      subtitle: 'Patented Body-Heat Grip-X Technology',
      videoSrc: '/videos/1K34PRO8E_DMCL0D.mp4',
      badge: 'Zero UV Lamp',
      link: '/shop?type=essentials',
    },
    {
      title: 'PRO-HOLD GLUE & MAGIC REMOVER KIT',
      subtitle: 'Complete 15-Minute Salon Application Kit',
      videoSrc: '/videos/1K34PRO8K_DMCL0D.mp4',
      badge: 'Master Kit',
      link: '/shop?type=essentials',
    },
    {
      title: 'HOW TO REMOVE',
      subtitle: '3-Minute Damage-Free Botanical Lift',
      videoSrc: '/videos/1K34PRO84_DMCL0D.mp4',
      badge: '100% Soakless',
      link: '/sizing-chart',
    },
  ];

  return (
    <section className="bg-petal-pattern py-10 sm:py-14 text-[#1F171A] overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <span className="eyebrow block">✦ Salon Innovation & Rituals ✦</span>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-[#1F171A] leading-tight">
            Artistry in <em>Motion</em>
          </h2>
          <p className="text-xs sm:text-sm text-[#5E4B52] font-light max-w-xl mx-auto leading-relaxed text-pretty">
            Witness our patented body-heat Cold Gel application, professional salon retention kits, and damage-free botanical soakless removal in action.
          </p>
        </div>

        {/* 4 Wide Rectangular Video Cards matching Lalafolie structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videoCards.map((card, idx) => (
            <a
              key={idx}
              href={card.link}
              className="group relative bg-black aspect-[16/10] sm:aspect-[3/4] overflow-hidden rounded-none shadow-sm hover:shadow-lg transition-all duration-300 block"
            >
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              >
                <source src={card.videoSrc} type="video/mp4" />
              </video>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 pointer-events-none group-hover:from-black/70 transition-colors" />

              {/* Badge Top Left */}
              <div className="absolute top-4 left-4 z-10 bg-[#FFF0F3]/95 border border-[#F2D0D8] text-[#8F3349] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-none shadow-sm">
                {card.badge}
              </div>

              {/* Card Headline Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-white space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-normal group-hover:text-[#FCE4E8] transition-colors uppercase tracking-wide text-balance">
                  {card.title}
                </h3>
                <p className="text-[11px] text-white/80 font-light line-clamp-1">
                  {card.subtitle}
                </p>
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#FCE4E8] font-bold pt-1 group-hover:translate-x-1 transition-transform">
                  Explore Now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

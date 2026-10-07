'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Prep & Dehydrate',
      subtitle: 'Clean natural oils in 60 seconds',
      description: 'Gently push cuticles back with the wooden wand, lightly buff the natural shine, and wipe each nail with the isopropyl prep wipe.',
      badge: 'Zero Drill Buffing',
    },
    {
      num: '02',
      title: 'Apply Cold Gel Grip-X',
      subtitle: 'Patented body-heat polymeric lock',
      description: 'Place a droplet of Cold Gel Glue or adhesive tab at the center of your nail bed. No UV curing lamp required.',
      badge: 'Zero UV Curing',
    },
    {
      num: '03',
      title: 'Press & Slay',
      subtitle: 'Locks firmly for 21+ days of wear',
      description: 'Align the press-on at a 45° angle from cuticle line and press firmly for 20 seconds. Body heat completes the retention bond in 15 minutes.',
      badge: '100% Waterproof',
    },
  ];

  return (
    <section className="bg-petal-pattern py-10 sm:py-14 text-[#1F171A]">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8F3349] font-bold">
            Effortless Precision
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight">
            The 3-Step Slay Routine
          </h2>
          <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed">
            Salon-grade couture manicures in under 15 minutes from the comfort of home.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-white border border-[#EBD5DB] hover:border-[#8F3349] p-8 sm:p-10 rounded-none shadow-sm transition-all duration-300 space-y-5 relative group"
            >
              <div className="flex items-center justify-between border-b border-[#F0D5DC] pb-4">
                <span className="font-serif text-4xl text-[#8F3349] font-bold">
                  {st.num}
                </span>
                <span className="bg-[#FAF2F4] text-[#8F3349] text-[9px] tracking-widest uppercase font-bold px-3 py-1">
                  {st.badge}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#1F171A] group-hover:text-[#8F3349] transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-[#9E3F55] font-semibold mt-1">
                  {st.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-justify">
                {st.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video / Removal Note */}
        <div className="border border-[#EBD5DB] bg-white p-8 max-w-4xl mx-auto text-center space-y-3 shadow-sm">
          <span className="text-[10px] tracking-widest uppercase text-[#8F3349] font-bold">
            Ready to Switch Looks?
          </span>
          <h3 className="font-serif text-2xl text-[#1F171A]">
            Soakless 3-Minute Botanical Removal
          </h3>
          <p className="text-xs sm:text-sm text-[#665258] max-w-2xl mx-auto leading-relaxed">
            Apply 2 droplets of our citrus Botanical Magic Remover to sidewalls. Wait 3 minutes, then gently lift without peeling or acetone damage. Your handmade sets remain reusable up to 5 times.
          </p>
          <div className="pt-2">
            <a
              href="/sizing-chart"
              className="text-xs tracking-widest uppercase font-bold text-[#8F3349] hover:underline"
            >
              Learn More in Sizing & Care Guide →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

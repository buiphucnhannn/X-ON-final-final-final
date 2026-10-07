'use client';

export default function ComparisonSection() {
  const rows = [
    {
      feature: 'Cost per Manicure',
      salon: '$120+ (every 3 weeks + tip)',
      xon: '$28 (reusable up to 5x)',
      winner: 'xon',
    },
    {
      feature: 'Application Time',
      salon: '2 to 3 hours trapped in salon chair',
      xon: '10 to 15 minutes at home',
      winner: 'xon',
    },
    {
      feature: 'Natural Nail Health',
      salon: 'Severe drill buffing & thinning',
      xon: '100% natural keratin preserved',
      winner: 'xon',
    },
    {
      feature: 'UV / LED Radiation',
      salon: 'Repeated high-risk UV curing lamps',
      xon: 'Zero UV — Body-heat activated Grip-X',
      winner: 'xon',
    },
    {
      feature: 'Removal Process',
      salon: '30-minute harsh acetone soak & scrape',
      xon: '3-minute botanical Magic Remover lift',
      winner: 'xon',
    },
    {
      feature: 'Fit & Customization',
      salon: 'Variable technician skill & rush',
      xon: 'Artisan-crafted with 100% Fit Guarantee',
      winner: 'xon',
    },
  ];

  return (
    <section className="bg-white py-16 border-b border-[#F0D5DC] text-[#1F171A]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8F3349] font-bold">
            The Manicure Revolution
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
            Traditional Salons vs. X-On
          </h2>
          <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-pretty">
            Discover why modern nail connoisseurs and salon professionals are switching from abrasive acrylic appointments to X-On handmade press-ons.
          </p>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="sm:hidden text-center text-[10px] text-[#8F3349] font-mono tracking-wider mb-2">
          ← Swipe horizontally to compare →
        </div>

        {/* Comparison Table / Matrix */}
        <div className="overflow-x-auto bg-[#FAF2F4] border border-[#EBD5DB] shadow-md rounded-none">
          <table className="w-full min-w-[620px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#EBD5DB] text-[10px] sm:text-xs tracking-widest uppercase">
                <th className="py-5 px-6 font-bold text-[#554047] w-1/3">Key Consideration</th>
                <th className="py-5 px-6 font-bold text-[#7A636A] bg-black/5 w-1/3">
                  Traditional Acrylic Salon
                </th>
                <th className="py-5 px-6 font-bold text-white bg-[#8F3349] w-1/3 text-center">
                  ✦ X-On Handmade Press-Ons ✦
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBD5DB] text-[#332227]">
              {rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-white/60 transition-colors">
                  <td className="py-4.5 px-6 font-semibold text-[#1F171A]">
                    {r.feature}
                  </td>
                  <td className="py-4.5 px-6 bg-black/[0.02] text-[#7A636A]">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>{r.salon}</span>
                    </div>
                  </td>
                  <td className="py-4.5 px-6 bg-[#FFF0F3] font-medium text-[#8F3349]">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[#8F3349] font-bold">✓</span>
                      <span>{r.xon}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Bar Under Table */}
        <div className="mt-12 text-center">
          <a
            href="/shop"
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-md cursor-pointer"
          >
            <span>Upgrade Your Nails to X-On</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

export default function PressBar() {
  const pressQuotes = [
    {
      source: 'VOGUE',
      quote: '“The future of salon-free manicures has arrived with X-On.”',
    },
    {
      source: "HARPER'S BAZAAR",
      quote: '“Haute couture runway aesthetics in a 10-minute application.”',
    },
    {
      source: 'ELLE',
      quote: '“Cold Gel Grip-X is the biocompatible retention miracle nail beds needed.”',
    },
    {
      source: 'ALLURE',
      quote: '“Zero UV radiation, 21+ days of retention. A true game changer.”',
    },
  ];

  return (
    <section id="press-bar" className="bg-[#FAF2F4] border-b border-[#F0D5DC] py-12 text-[#1F171A]">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold">
            As Featured & Acclaimed In
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pressQuotes.map((p, idx) => (
            <div
              key={idx}
              className="bg-white/80 border border-[#EBD5DB] p-6 rounded-none text-center space-y-2 hover:border-[#8F3349] transition-all duration-300 shadow-sm"
            >
              <h3 className="font-serif text-lg tracking-[0.25em] text-[#1F171A] uppercase font-bold">
                {p.source}
              </h3>
              <p className="text-xs text-[#6B555D] font-light italic leading-relaxed">
                {p.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

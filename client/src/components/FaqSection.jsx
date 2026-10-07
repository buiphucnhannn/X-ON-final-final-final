'use client';

import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How long do X-On press-on nails stay on?',
      a: 'When applied using our patented Cold Gel Grip-X adhesive system, X-On handmade sets reliably retain for 21+ days without lifting. For weekend or temporary wear (3–5 days), our salon-grade adhesive tabs can be used instead for rapid switching.',
    },
    {
      q: 'Can I shower, wash dishes, and swim with them?',
      a: 'Yes, 100%. Cold Gel Grip-X forms a moisture-resistant elastomeric polymeric barrier once body heat activates the bond (approximately 15 minutes after application). Hot showers, swimming, and daily dishwashing will not compromise retention.',
    },
    {
      q: 'What if a nail size doesn’t fit my finger?',
      a: 'We stand firmly behind our 100% Fit Guarantee. If any individual nail from your standard XS, S, M, or L set does not fit your natural nail sidewall, notify our Kissimmee studio within 14 days of receipt and we will dispatch individual replacement nail sizes free of charge.',
    },
    {
      q: 'Are X-On press-on nails reusable?',
      a: 'Yes! Unlike machine-printed plastic tips, X-On sets are hand-sculpted with salon UV gel polish and multi-layer protective resin. When removed using our Botanical Magic Remover, the nail tip remains completely intact and can be reworn up to 5 times.',
    },
    {
      q: 'How does Cold Gel Grip-X differ from traditional nail glue?',
      a: 'Traditional nail glues use brittle cyanoacrylate which causes micro-cracking and dehydrates nail keratin. Cold Gel Grip-X is a biocompatible, heat-activated polymeric gel that maintains micro-flexibility with your hand movement and requires zero UV curing lamps.',
    },
    {
      q: 'Where do orders ship from and how long does delivery take?',
      a: 'All orders are handcrafted and packaged directly from our Florida logistics center at 3168 Bill Beck Blvd, Kissimmee, FL 34744. Domestic orders dispatch in 24–48 hours, and express shipping is complimentary on all orders over $65.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-petal-pattern py-10 sm:py-14 text-[#1F171A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8F3349] font-bold">
            Client Knowledge Base
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A] font-normal tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-pretty">
            Everything you need to know about bespoke sizing, Cold Gel retention, and zero-damage removal.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#ECD6DC] bg-white hover:border-[#8F3349]/40 transition-colors rounded-none shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1F171A] font-medium">
                    {f.q}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white border border-[#EBD5DB] text-[#8F3349] flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#554047] font-light leading-relaxed text-left sm:text-justify border-t border-[#EBD5DB] pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-14 text-center text-xs text-[#6B555D]">
          <span>Still have questions regarding your order? </span>
          <a href="/contact-us" className="text-[#8F3349] font-bold uppercase tracking-wider underline cursor-pointer">
            Contact Concierge directly at 689-212-8888 →
          </a>
        </div>
      </div>
    </section>
  );
}

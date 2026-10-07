'use client';

import { useState } from 'react';
import { scrollToSection } from '../lib/scroll';

export default function TechnologyFeature() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Diamond Buff & Cleanse',
      time: '60 Seconds',
      description:
        'Gently buff natural nail plate with our fine-grit diamond cushion buffer to remove surface oils. Wipe with our antiseptic primer wipe.',
      tip: 'Creates a microscopic gripping texture without thinning your natural keratin plate.',
    },
    {
      step: '02',
      title: 'Cold Gel Micro-Dotting',
      time: '30 Seconds',
      description:
        'Apply one pea-sized droplet of patented Cold Gel Glue directly to the inner apex of the X-On tip. Zero toxic acrylates, zero noxious fumes.',
      tip: 'The formula responds to natural finger temperature to begin cross-linking immediately.',
    },
    {
      step: '03',
      title: '45-Degree Angle Lock',
      time: '15 Seconds Per Nail',
      description:
        'Slide the tip under your cuticle at 45 degrees, then press down firmly for 15 seconds. Excess air escapes, forming an unbreakable vacuum seal.',
      tip: 'Achieves instant water resistance. You can wash your hands or type immediately.',
    },
    {
      step: '04',
      title: 'Damage-Free Magic Removal',
      time: '3 Minutes',
      description:
        'Apply 2 drops of our botanical Magic Remover along the cuticle seam. Wait 3 minutes, then gently lift with the precision wooden cuticle wand.',
      tip: '100% soakless. Jojoba and sweet almond oils leave your natural nails nourished and healthy.',
    },
  ];

  const comparisons = [
    {
      feature: 'Natural Keratin Damage',
      traditional: 'Severe (electric file grinding & acetone)',
      xon: '0% Damage (Botanical oil release)',
    },
    {
      feature: 'UV / LED Radiation',
      traditional: 'Required (accelerates skin aging)',
      xon: 'Zero UV (Body-temperature bond)',
    },
    {
      feature: 'Salon Chair Time',
      traditional: '90 - 120 Minutes',
      xon: '10 - 15 Minutes at Home',
    },
    {
      feature: 'Reusability',
      traditional: '0% (Ground off & discarded)',
      xon: '100% Reusable up to 5+ times',
    },
    {
      feature: 'Wear Duration',
      traditional: '2 - 3 Weeks (costly fill-ins)',
      xon: '21+ Days with zero lifting',
    },
  ];

  return (
    <section id="cold-gel-tech" className="bg-petal-pattern py-16 text-[#1F171A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#9E3F55] font-semibold">
            Biomedical Innovation & Nail Health
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F171A] font-normal tracking-tight">
            The Cold Gel Revolution
          </h2>
          <p className="text-xs sm:text-sm text-[#6B555D] font-light leading-relaxed text-pretty">
            Traditional acrylics demanded a painful compromise: gorgeous aesthetics at the expense of wrecked natural nails.
            X-On delivers salon beauty with 100% nail bed preservation.
          </p>
        </div>

        {/* Comparison Grid (Sharp Editorial Table in bright palette) */}
        <div className="mb-12 bg-white border border-[#EBD5DB] p-4 sm:p-10 rounded-none shadow-sm">
          <div className="flex items-center justify-between border-b border-[#F2DEE3] pb-5 mb-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1F171A]">The Truth In Comparison</h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F3349] font-bold">Standard Salon vs X-On</span>
          </div>

          <div className="sm:hidden text-center text-[10px] text-[#8F3349] font-mono tracking-wider mb-2">
            ← Swipe horizontally to view full metrics →
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#F2DEE3] text-[10px] tracking-[0.2em] uppercase text-[#887077]">
                  <th className="py-4 font-semibold">Dimension</th>
                  <th className="py-4 font-normal text-[#99878E]">Traditional Acrylic / Gel</th>
                  <th className="py-4 font-bold text-[#8F3349]">X-On Grip-X Cold Gel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F8EBF0]">
                {comparisons.map((c, idx) => (
                  <tr key={idx} className="hover:bg-[#FFF5F8] transition-colors">
                    <td className="py-4 font-semibold text-[#1F171A]">{c.feature}</td>
                    <td className="py-4 text-[#99878E] line-through decoration-[#B89FA6]">{c.traditional}</td>
                    <td className="py-4 text-[#8F3349] font-semibold">
                      <span className="inline-flex items-center gap-2">
                        <span>✓</span>
                        {c.xon}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-Step Interactive Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Step Tabs */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] tracking-[0.25em] text-[#9E3F55] uppercase font-bold">
              The 4-Step Master Routine
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1F171A] font-normal mb-6">
              Salon Precision in Your Hands
            </h3>

            <div className="space-y-3">
              {steps.map((st, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`p-5 border transition-all cursor-pointer rounded-none shadow-sm ${
                    activeStep === i
                      ? 'border-[#8F3349] bg-[#FFF0F3]'
                      : 'border-[#ECD6DC] bg-white hover:border-[#8F3349]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold ${activeStep === i ? 'text-[#8F3349]' : 'text-[#887077]'}`}>
                        {st.step}
                      </span>
                      <h4 className="font-serif text-lg text-[#1F171A] font-medium">{st.title}</h4>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-mono text-[#887077]">{st.time}</span>
                  </div>
                  <p className="text-xs text-[#6B555D] font-light leading-relaxed pl-7">{st.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-6 bg-white border border-[#EBD5DB] p-8 sm:p-12 relative rounded-none flex flex-col justify-between min-h-[460px] shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold">
                  STEP {steps[activeStep].step} DETAIL
                </span>
                <span className="px-3 py-1 bg-[#FFF0F3] border border-[#F2D0D8] text-[10px] font-mono text-[#8F3349] font-bold">
                  {steps[activeStep].time}
                </span>
              </div>

              <h4 className="font-serif text-3xl text-[#1F171A] text-balance">{steps[activeStep].title}</h4>
              <p className="text-sm text-[#5C454D] font-light leading-relaxed text-pretty">{steps[activeStep].description}</p>

              <div className="p-4 bg-[#FFF0F3] border-l-2 border-[#8F3349] mt-6">
                <p className="text-xs text-[#8F3349] font-bold tracking-wide mb-1">PRO APPLICATION TIP</p>
                <p className="text-xs text-[#523F45] font-light leading-relaxed">{steps[activeStep].tip}</p>
              </div>
            </div>

            {/* Complete Kit CTA */}
            <div className="pt-8 border-t border-[#F2DEE3] flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div className="text-center sm:text-left">
                <p className="text-xs text-[#1F171A] font-semibold">Included in every X-On order</p>
                <p className="text-[11px] text-[#7A636A]">Full prep buffer, alcohol pads & precision wand</p>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('handmade-press-ons')}
                className="px-6 py-2.5 bg-[#8F3349] text-white hover:bg-[#732638] text-[10px] tracking-[0.2em] uppercase font-bold transition-all rounded-none cursor-pointer"
              >
                Get The Master Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

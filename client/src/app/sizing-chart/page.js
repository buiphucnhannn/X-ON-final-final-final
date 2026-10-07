'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import NailShapeIllustration from '../../components/NailShapeIllustration';
import SectionAccent from '../../components/ui/SectionAccent';
import { scrollToSection } from '../../lib/scroll';
import { SIZES, SHAPES, STEPS, BETWEEN_NOTE } from '../../data/sizing';

export default function SizingChartPage() {
  const [selectedShape, setSelectedShape] = useState('coffin');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      <Header
        cartCount={0}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* Full-bleed Bellaire-style PageHero */}
        <PageHero
          eyebrow="Precision Sizing Standards"
          title="Sizing Chart & <em>Silhouette Guide</em>"
          intro="Every handmade X-On nail set is shaped to exact millimeter standards. Follow our 3-step measuring tutorial to find your bespoke fit with our 100% Fit Guarantee."
          image="/images/hero_sizing_chart.jpg"
        >
          <button type="button" onClick={() => scrollToSection('measure-guide')} className="btn btn-light">
            How to Measure <span className="btn-arrow">↓</span>
          </button>
          <button type="button" onClick={() => scrollToSection('size-table')} className="btn btn-glass">
            View Millimeter Table <span className="btn-arrow">↓</span>
          </button>
        </PageHero>

        {/* 3-Step Measurement Tutorial */}
        <Reveal variant="up">
        <section id="measure-guide" className="py-10 sm:py-14">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold">
                How to Measure at Home
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F171A]">
                Find Your Size in 3 Minutes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STEPS.map((step, idx) => (
                <div key={step.n} className="bg-white border border-[#EBD5DB] p-8 space-y-4 rounded-none shadow-sm">
                  <div className="w-10 h-10 bg-[#FAF2F4] border border-[#EBD5DB] flex items-center justify-center font-serif text-lg font-bold text-[#8F3349]">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-xl text-[#1F171A]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </Reveal>

        {/* Minimalist Background Flourish & Seamless Harmonious Melt */}
        <SectionAccent variant="center" />

        {/* Standard Size Table (XS / S / M / L) */}
        <Reveal variant="left">
        <section id="size-table" className="py-10 sm:py-14">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold">
                Millimeter Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F171A]">
                X-On Size Chart Table
              </h2>
            </div>

            <div className="overflow-x-auto bg-white border border-[#EBD5DB] shadow-sm">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF2F4] border-b border-[#EBD5DB] text-[10px] tracking-widest uppercase text-[#554047]">
                    <th className="py-3 sm:py-4 px-3 sm:px-6 font-bold whitespace-nowrap">Size</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 font-bold whitespace-nowrap">Thumb</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 font-bold whitespace-nowrap">Index</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 font-bold whitespace-nowrap">Middle</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 font-bold whitespace-nowrap">Ring</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 font-bold whitespace-nowrap">Pinky</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 font-bold whitespace-nowrap">Recommended For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0D5DC] text-[#443036]">
                  {SIZES.map((s) => (
                    <tr key={s.id} className={`hover:bg-[#FFF9FA]${s.id === 'M' ? ' bg-[#FAF2F4]/40 font-semibold' : ''}`}>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold font-serif text-base text-[#8F3349] whitespace-nowrap">
                        {s.id}{' '}
                        {s.badge && (
                          <span className="text-[9px] uppercase tracking-wider text-[#9E3F55] font-sans">
                            ({s.badge})
                          </span>
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-mono whitespace-nowrap">{s.thumb}</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-mono whitespace-nowrap">{s.index}</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-mono whitespace-nowrap">{s.middle}</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-mono whitespace-nowrap">{s.ring}</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-mono whitespace-nowrap">{s.pinky}</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 min-w-[180px]">{s.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-[#7A636A] italic">
              {BETWEEN_NOTE}
            </p>
          </div>
        </section>
        </Reveal>

        {/* Minimalist Background Flourish & Seamless Harmonious Melt */}
        <SectionAccent variant="center" />

        {/* Silhouette Anatomy Guide */}
        <Reveal variant="right">
        <section className="py-10 sm:py-14">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold">
                Silhouettes & Profiles
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F171A]">
                Nail Shape Anatomy
              </h2>
            </div>

            {/* Shape Selector Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {SHAPES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedShape(s.id)}
                  className={`px-5 py-2.5 text-xs tracking-widest uppercase font-bold transition-all rounded-none cursor-pointer border ${
                    selectedShape === s.id
                      ? 'bg-[#8F3349] border-[#8F3349] text-white shadow-sm'
                      : 'bg-white border-[#EBD5DB] text-[#554047] hover:border-[#8F3349]'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Selected Shape Detail Showcase Card */}
            {(() => {
              const active = SHAPES.find((s) => s.id === selectedShape) || SHAPES[0];
              return (
                <div className="bg-white border border-[#EBD5DB] p-6 sm:p-10 lg:p-12 w-full shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column: Dual Visual Illustrations (Anatomy Blueprint + Real Handcrafted Photo) */}
                    <div className="lg:col-span-5 space-y-4">
                      {/* 1. Precision Anatomical Vector Silhouette */}
                      <div className="bg-[#FFF8FA] border border-[#ECD6DC] p-5 text-center shadow-xs">
                        <div className="flex items-center justify-between mb-3 border-b border-[#F2DDE3] pb-2">
                          <span className="text-[9px] tracking-widest uppercase font-bold text-[#8F3349]">
                            Blueprint Anatomy
                          </span>
                          <span className="text-[9px] font-mono text-[#8A7479]">100% Contour Scale</span>
                        </div>
                        <NailShapeIllustration shapeId={active.id} className="w-36 h-48 sm:w-40 sm:h-52 mx-auto" />
                        <div className="mt-3 pt-2 border-t border-[#F2DDE3] text-[10px] text-[#8F3349] font-medium">
                          ✦ {active.tagline}
                        </div>
                      </div>

                      {/* 2. Real-Life Handcrafted Studio Set Preview */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] border border-[#ECD6DC] overflow-hidden group shadow-xs">
                        <img
                          src={active.image}
                          alt={active.exampleSet}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                          <div className="text-white">
                            <span className="text-[9px] tracking-[0.2em] uppercase text-white/75 font-mono block">
                              Studio Creation Example
                            </span>
                            <h4 className="font-serif text-base sm:text-lg text-white font-medium leading-tight mt-0.5">
                              {active.exampleSet}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Architectural Profile & Sizing Guidance */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0D5DC] pb-4">
                        <div>
                          <span className="text-[10px] tracking-[0.25em] uppercase text-[#8F3349] font-bold block">
                            Signature Silhouette
                          </span>
                          <h3 className="font-serif text-3xl sm:text-4xl text-[#1F171A] mt-0.5">
                            {active.name}
                          </h3>
                        </div>
                        <span className="text-[10px] tracking-widest uppercase bg-[#FFF0F3] border border-[#F2D0D8] text-[#8F3349] font-bold px-3 py-1">
                          X-On Standard
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#554047] font-light leading-relaxed">
                        {active.description}
                      </p>

                      {/* Specifications Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                        <div className="p-3.5 bg-[#FAF2F4] border border-[#ECD6DC] space-y-1">
                          <span className="text-[9px] tracking-widest uppercase text-[#8F3349] font-bold block">
                            Available Lengths
                          </span>
                          <p className="text-xs font-mono text-[#1F171A] font-semibold">{active.lengths}</p>
                        </div>
                        <div className="p-3.5 bg-[#FAF2F4] border border-[#ECD6DC] space-y-1">
                          <span className="text-[9px] tracking-widest uppercase text-[#8F3349] font-bold block">
                            Apex & Free-Edge Arch
                          </span>
                          <p className="text-xs text-[#554047] leading-snug">{active.profile}</p>
                        </div>
                      </div>

                      <div className="p-3.5 bg-[#FFFBFD] border border-[#ECD6DC] space-y-1">
                        <span className="text-[9px] tracking-widest uppercase text-[#8F3349] font-bold block">
                          Stylist Recommendation & Best Suited For
                        </span>
                        <p className="text-xs text-[#554047] leading-relaxed">{active.bestFor}</p>
                      </div>

                      <div className="pt-4 border-t border-[#F0D5DC] flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs text-[#7A636A] font-mono">
                          100% Fit Guarantee Included
                        </span>
                        <a
                          href={`/shop?shape=${active.id}`}
                          className="btn btn-outline"
                        >
                          Shop {active.name} Sets <span className="btn-arrow">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
        </Reveal>
      </main>

      <Footer onOpenSizing={() => setIsSizingOpen(true)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={[]}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
      <SizingModal isOpen={isSizingOpen} onClose={() => setIsSizingOpen(false)} />
    </div>
  );
}

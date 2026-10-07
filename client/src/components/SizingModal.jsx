'use client';

import { useState, useEffect } from 'react';
import NailShapeIllustration from './NailShapeIllustration';
import { SIZES, SHAPES, STEPS, BETWEEN_NOTE, CONCIERGE_PHONE, sizeLabel } from '../data/sizing';

export default function SizingModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('fingers'); // 'fingers' | 'shapes'
  const [selectedSizeId, setSelectedSizeId] = useState('M');
  const [selectedShapeId, setSelectedShapeId] = useState('coffin');

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentSize = SIZES.find((s) => s.id === selectedSizeId) || SIZES[2];
  const currentShape = SHAPES.find((s) => s.id === selectedShapeId) || SHAPES[0];

  // 5 Anatomical fingers definition
  const fingerList = [
    {
      id: 'thumb',
      name: 'Thumb',
      vietName: 'Ngón Cái',
      width: currentSize.thumb,
      svgWidth: 44,
      svgHeight: 58,
      nailPath: 'M 6 52 C 6 60, 38 60, 38 52 L 36 14 C 36 6, 8 6, 8 14 Z',
      caliperY: 34,
      caliperX1: 4,
      caliperX2: 40,
    },
    {
      id: 'index',
      name: 'Index',
      vietName: 'Ngón Trỏ',
      width: currentSize.index,
      svgWidth: 36,
      svgHeight: 64,
      nailPath: 'M 5 58 C 5 66, 31 66, 31 58 L 30 18 C 30 7, 6 7, 6 18 Z',
      caliperY: 38,
      caliperX1: 3,
      caliperX2: 33,
    },
    {
      id: 'middle',
      name: 'Middle',
      vietName: 'Ngón Giữa',
      width: currentSize.middle,
      svgWidth: 38,
      svgHeight: 68,
      nailPath: 'M 5 62 C 5 70, 33 70, 33 62 L 32 18 C 32 6, 6 6, 6 18 Z',
      caliperY: 40,
      caliperX1: 3,
      caliperX2: 35,
    },
    {
      id: 'ring',
      name: 'Ring',
      vietName: 'Ngón Áp Út',
      width: currentSize.ring,
      svgWidth: 36,
      svgHeight: 64,
      nailPath: 'M 5 58 C 5 66, 31 66, 31 58 L 30 18 C 30 7, 6 7, 6 18 Z',
      caliperY: 38,
      caliperX1: 3,
      caliperX2: 33,
    },
    {
      id: 'pinky',
      name: 'Pinky',
      vietName: 'Ngón Út',
      width: currentSize.pinky,
      svgWidth: 30,
      svgHeight: 52,
      nailPath: 'M 4 46 C 4 54, 26 54, 26 46 L 25 15 C 25 6, 5 6, 5 15 Z',
      caliperY: 30,
      caliperX1: 2,
      caliperX2: 28,
    },
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-sm animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white border border-[#EBD5DB] shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto rounded-none text-[#1F171A] cursor-default"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-xl text-[#7A636A] hover:text-[#8F3349] p-2 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#F0D5DC] pb-5 mb-6 flex items-start gap-4">
          <img
            src="/images/logo.png"
            alt="X-On logo"
            className="h-9 sm:h-11 w-auto object-contain shrink-0 mt-1 logo-prominent-light"
          />
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold block">
              X-On Precision Fit & Silhouette Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F171A] font-medium mt-1 text-balance">
              Nail Sizing & Shape Anatomy
            </h2>
            <p className="text-xs text-[#6B555D] font-light mt-1.5 max-w-lg text-pretty">
              Measure your bespoke millimeters and explore our 6 signature salon silhouettes for an undetectable, tailor-made finish.
            </p>
          </div>
        </div>

        {/* Top Segmented Navigation Tabs */}
        <div className="flex border-b border-[#ECD6DC] mb-7 gap-2 sm:gap-6 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('fingers')}
            className={`pb-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer border-b-2 -mb-[1px] flex items-center gap-2 shrink-0 whitespace-nowrap ${
              activeTab === 'fingers'
                ? 'border-[#8F3349] text-[#8F3349]'
                : 'border-transparent text-[#7A636A] hover:text-[#1F171A]'
            }`}
          >
            <span>✋</span>
            <span>5-Finger Width Guide (mm)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('shapes')}
            className={`pb-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer border-b-2 -mb-[1px] flex items-center gap-2 shrink-0 whitespace-nowrap ${
              activeTab === 'shapes'
                ? 'border-[#8F3349] text-[#8F3349]'
                : 'border-transparent text-[#7A636A] hover:text-[#1F171A]'
            }`}
          >
            <span>💅</span>
            <span>Nail Shape Anatomy</span>
          </button>
        </div>

        {/* TAB 1: 5-FINGER MEASUREMENT & WIDTH BLUEPRINT */}
        {activeTab === 'fingers' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Visual 5-Finger Anatomical Showcase */}
            <div className="bg-gradient-to-b from-[#FFF7F9] to-[#FDF0F3] border border-[#ECD6DC] p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-[#8F3349] uppercase font-bold">
                    Interactive Hand Blueprint
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1F171A] mt-0.5">
                    Select Your Size to Preview Finger Widths
                  </h3>
                </div>

                {/* Size Selector Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {SIZES.map((sz) => {
                    const isSelected = selectedSizeId === sz.id;
                    return (
                      <button
                        key={sz.id}
                        type="button"
                        onClick={() => setSelectedSizeId(sz.id)}
                        className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-none cursor-pointer ${
                          isSelected
                            ? 'bg-[#8F3349] text-white shadow-sm ring-2 ring-[#8F3349]/30'
                            : 'bg-white border border-[#ECD6DC] text-[#4A383F] hover:bg-[#FFF2F5]'
                        }`}
                      >
                        {sizeLabel(sz)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5 Finger Cards Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 pt-2 pb-1">
                {fingerList.map((finger) => (
                  <div
                    key={finger.id}
                    className="bg-white/90 backdrop-blur-sm border border-[#EBD5DC] p-2 sm:p-3 flex flex-col items-center justify-between text-center shadow-xs transition-transform hover:-translate-y-1"
                  >
                    <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#7A636A] font-semibold">
                      {finger.name}
                    </span>

                    {/* SVG Finger & Nail Silhouette */}
                    <div className="my-2 sm:my-3 flex items-center justify-center h-20 sm:h-24 w-full">
                      <svg
                        width={finger.svgWidth}
                        height={finger.svgHeight}
                        viewBox={`0 0 ${finger.svgWidth} ${finger.svgHeight}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-xs"
                      >
                        <defs>
                          <linearGradient id={`fingerGrad-${finger.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFF2F5" />
                            <stop offset="50%" stopColor="#FCE0E6" />
                            <stop offset="100%" stopColor="#F3BAC6" />
                          </linearGradient>
                        </defs>

                        {/* Nail Apex Silhouette */}
                        <path
                          d={finger.nailPath}
                          fill={`url(#fingerGrad-${finger.id})`}
                          stroke="#8F3349"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />

                        {/* Cuticle Arc Line */}
                        <path
                          d={`M ${finger.svgWidth * 0.2} ${finger.svgHeight - 10} C ${finger.svgWidth * 0.2} ${finger.svgHeight}, ${finger.svgWidth * 0.8} ${finger.svgHeight}, ${finger.svgWidth * 0.8} ${finger.svgHeight - 10}`}
                          stroke="#8F3349"
                          strokeWidth="0.8"
                          strokeDasharray="2 2"
                          opacity="0.4"
                        />

                        {/* Apex Width Caliper Guideline */}
                        <line
                          x1={finger.caliperX1}
                          y1={finger.caliperY}
                          x2={finger.caliperX2}
                          y2={finger.caliperY}
                          stroke="#C8A97E"
                          strokeWidth="1.2"
                          strokeDasharray="2 1.5"
                        />
                        <circle cx={finger.caliperX1} cy={finger.caliperY} r="1.5" fill="#8F3349" />
                        <circle cx={finger.caliperX2} cy={finger.caliperY} r="1.5" fill="#8F3349" />
                      </svg>
                    </div>

                    {/* Width Badge */}
                    <div className="bg-[#FFF0F3] border border-[#F2D0D8] px-1.5 sm:px-2.5 py-1 w-full text-center">
                      <span className="font-mono text-[11px] sm:text-xs font-bold text-[#8F3349] block">
                        {finger.width}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-[#6B555D]">
                <span>Currently viewing size: <strong className="text-[#8F3349] font-mono font-bold">{sizeLabel(currentSize)}</strong> ({currentSize.shortNote}) • Recommended for {currentSize.recommended.toLowerCase()}</span>
                <span className="text-[#C8A97E] hidden sm:inline">✦ Caliper lines indicate widest natural nail apex</span>
              </div>
            </div>

            {/* 3 Step Measurement Protocol */}
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-[#1F171A] mb-3">
                How to Measure Your Sidewalls at Home
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {STEPS.map((step) => (
                  <div key={step.n} className="p-4 bg-[#FFF8FA] border border-[#ECD6DC]">
                    <span className="text-xs font-mono text-[#8F3349] font-bold">STEP {step.n}</span>
                    <h5 className="font-serif text-base text-[#1F171A] mt-1 mb-1 font-medium">{step.title}</h5>
                    <p className="text-xs text-[#6B555D] font-light leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Chart Table */}
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-[#1F171A] mb-3">
                Standard Width Comparison Chart (mm)
              </h4>
              <div className="overflow-x-auto border border-[#ECD6DC]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#FFF0F3] border-b border-[#F2D0D8] text-[10px] uppercase tracking-wider text-[#8F3349] font-bold">
                    <tr>
                      <th className="p-3">Size Code</th>
                      <th className="p-3">Thumb</th>
                      <th className="p-3">Index</th>
                      <th className="p-3">Middle</th>
                      <th className="p-3">Ring</th>
                      <th className="p-3">Pinky</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F8EBF0]">
                    {SIZES.map((row) => {
                      const isHighlighted = selectedSizeId === row.id;
                      return (
                        <tr
                          key={row.id}
                          onClick={() => setSelectedSizeId(row.id)}
                          className={`transition-colors cursor-pointer ${
                            isHighlighted ? 'bg-[#FFF0F3] font-bold' : 'hover:bg-[#FFF8FA]'
                          }`}
                        >
                          <td className="p-3 font-bold text-[#8F3349] flex items-center gap-2">
                            {isHighlighted && <span className="text-[#8F3349]">●</span>}
                            {sizeLabel(row)}
                          </td>
                          <td className="p-3 text-[#4A383F]">{row.thumb}</td>
                          <td className="p-3 text-[#4A383F]">{row.index}</td>
                          <td className="p-3 text-[#4A383F]">{row.middle}</td>
                          <td className="p-3 text-[#4A383F]">{row.ring}</td>
                          <td className="p-3 text-[#4A383F]">{row.pinky}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-[#887077] font-light italic mt-2.5">
                {BETWEEN_NOTE}
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: 6 SIGNATURE NAIL SHAPE SILHOUETTES */}
        {activeTab === 'shapes' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Shape Selection Bar */}
            <div className="flex flex-wrap gap-2 pb-2">
              {SHAPES.map((shape) => {
                const isSelected = selectedShapeId === shape.id;
                return (
                  <button
                    key={shape.id}
                    type="button"
                    onClick={() => setSelectedShapeId(shape.id)}
                    className={`px-3 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all rounded-none cursor-pointer ${
                      isSelected
                        ? 'bg-[#8F3349] text-white shadow-sm'
                        : 'bg-[#FFF5F7] border border-[#ECD6DC] text-[#4A383F] hover:bg-[#FDE8ED]'
                    }`}
                  >
                    {shape.name}
                  </button>
                );
              })}
            </div>

            {/* Silhouette Detail Blueprint Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#FFF9FA] border border-[#ECD6DC] p-5 sm:p-7">
              {/* Left Blueprint Diagram */}
              <div className="md:col-span-5 bg-white border border-[#EBD5DC] p-6 flex flex-col items-center justify-between text-center shadow-xs">
                <div className="w-full flex items-center justify-between text-[9px] tracking-widest text-[#8F3349] uppercase font-mono pb-2 border-b border-[#F5E6EA]">
                  <span>BLUEPRINT ANATOMY</span>
                  <span>100% CONTOUR SCALE</span>
                </div>

                <div className="py-4">
                  <NailShapeIllustration shapeId={currentShape.id} className="w-32 h-44" />
                </div>

                <div className="pt-2 border-t border-[#F5E6EA] w-full text-center">
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8F3349]">
                    ✦ {currentShape.tagline}
                  </span>
                </div>
              </div>

              {/* Right Silhouette Specifications */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[9px] tracking-[0.28em] text-[#8F3349] uppercase font-bold">
                    Signature Silhouette
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1F171A] font-medium mt-1">
                    {currentShape.name}
                  </h3>
                  <p className="text-xs text-[#5E4B52] font-light leading-relaxed mt-2 text-pretty">
                    {currentShape.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-white border border-[#ECD6DC]">
                    <span className="text-[9px] tracking-wider uppercase text-[#8F3349] font-bold block mb-1">
                      Available Lengths
                    </span>
                    <span className="text-xs text-[#1F171A] font-medium block">
                      {currentShape.lengths}
                    </span>
                  </div>
                  <div className="p-3 bg-white border border-[#ECD6DC]">
                    <span className="text-[9px] tracking-wider uppercase text-[#8F3349] font-bold block mb-1">
                      Apex & Free-Edge Arch
                    </span>
                    <span className="text-xs text-[#1F171A] font-medium block">
                      {currentShape.profile}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-[#ECD6DC]">
                  <span className="text-[9px] tracking-wider uppercase text-[#8F3349] font-bold block mb-1">
                    Stylist Recommendation & Best Suited For
                  </span>
                  <p className="text-xs text-[#5E4B52] font-light leading-relaxed text-pretty">
                    {currentShape.bestFor}
                  </p>
                </div>

                {/* Real Hand Look Preview Thumbnail */}
                <div className="flex items-center gap-3 pt-1 border-t border-[#ECD6DC]">
                  <img
                    src={currentShape.image}
                    alt={currentShape.exampleSet}
                    className="w-12 h-12 object-cover border border-[#EBD5DC] shrink-0"
                  />
                  <div className="text-xs text-[#6B555D]">
                    <span className="font-semibold text-[#1F171A] block">{currentShape.exampleSet}</span>
                    <span>Hand-sculpted in Kissimmee studio with multi-layer gel resin.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 mt-8 border-t border-[#F0D5DC]">
          <span className="text-xs text-[#7A636A] font-light">
            Need bespoke advice? Call studio concierge: <strong className="text-[#8F3349] font-mono">{CONCIERGE_PHONE}</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-[#8F3349] hover:bg-[#732638] text-white text-xs uppercase tracking-[0.2em] font-bold transition-colors rounded-none cursor-pointer shadow-sm"
          >
            I Got My Size, Return to Shop
          </button>
        </div>
      </div>
    </div>
  );
}

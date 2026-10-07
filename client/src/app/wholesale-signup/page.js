'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import { scrollToSection } from '../../lib/scroll';

export default function WholesaleSignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    businessAddress: '',
    phone: '',
    tier: 'starter',
    taxId: '',
    password: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          eyebrow="B2B Salon & Retail Partner Network"
          title="Wholesale & Pro <em>Nail Artistry</em>"
          intro="Partner with X-On to supply your nail salon, beauty boutique, or bridal studio with handmade press-on collections and patented Cold Gel Grip-X essentials at preferential trade margins."
          image="/images/hero_wholesale_b2b.jpg"
        >
          <button type="button" onClick={() => scrollToSection('register-form')} className="btn btn-light">
            Apply for Wholesale <span className="btn-arrow">↓</span>
          </button>
          <a href="tel:6892128888" className="btn btn-glass">
            Call Direct: 689-212-8888 <span className="btn-arrow">☎</span>
          </a>
        </PageHero>

        {/* Benefits & Registration Form */}
        <section id="register-form" className="py-12">
          <div className="max-w-[1720px] mx-auto px-4 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column: Perks & Contact */}
              <Reveal variant="left" className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold">
                    Partner Benefits
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1F171A] mt-2 mb-4 text-balance">
                    Why Partner With X-On?
                  </h2>
                  <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-pretty text-justify">
                    Elevate your salon revenue with high-margin luxury press-on sets and instant retail add-ons that keep clients coming back.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border border-[#EBD5DB] bg-white p-6 rounded-none space-y-2 shadow-sm">
                    <h3 className="font-serif text-lg text-[#1F171A] font-medium">Up to 50% Wholesale Margin</h3>
                    <p className="text-xs text-[#665258] font-light">
                      Tiered pricing structure with exceptional margins on both handmade nail collections and Cold Gel Glue supply kits.
                    </p>
                  </div>

                  <div className="border border-[#EBD5DB] bg-white p-6 rounded-none space-y-2 shadow-sm">
                    <h3 className="font-serif text-lg text-[#1F171A] font-medium">Display & Merchandising Collateral</h3>
                    <p className="text-xs text-[#665258] font-light">
                      Receive luxury acrylic counter displays, sample sizing rings, and editorial lookbooks with your opening order.
                    </p>
                  </div>

                  <div className="border border-[#EBD5DB] bg-white p-6 rounded-none space-y-2 shadow-sm">
                    <h3 className="font-serif text-lg text-[#1F171A] font-medium">Priority Dispatch & Concierge</h3>
                    <p className="text-xs text-[#665258] font-light">
                      Dedicated B2B account concierge with expedited fulfillment from our Kissimmee, Florida logistics hub.
                    </p>
                  </div>
                </div>

                {/* Direct B2B Contact Info */}
                <div className="border-t border-[#F0D5DC] pt-6 space-y-2">
                  <p className="text-xs text-[#665258]">Prefer to speak with our Wholesale Director directly?</p>
                  <p className="font-mono text-sm font-semibold text-[#8F3349]">Direct Line: 689-212-8888</p>
                  <p className="text-xs text-[#705B63]">Flagship Studio: 3168 Bill Beck Blvd, Kissimmee, FL 34744</p>
                </div>
              </Reveal>

              {/* Right Column: B2B Registration Form */}
              <Reveal variant="right" className="lg:col-span-7 bg-white border border-[#EBD5DB] p-5 sm:p-12 shadow-sm">
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <span className="text-4xl text-[#8F3349]">✦</span>
                    <h3 className="font-serif text-3xl text-[#1F171A]">Application Received</h3>
                    <p className="text-sm text-[#665258] max-w-md mx-auto text-pretty">
                      Thank you for applying to the X-On Wholesale Partner Network. Our B2B concierge will review your business credentials and contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-8 py-3 bg-[#8F3349] text-white text-xs tracking-widest uppercase font-bold rounded-none cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl text-[#1F171A]">Wholesale Partner Application</h3>
                      <p className="text-xs text-[#7A636A] mt-1">Please provide verified salon or business tax documentation.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Business Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                          placeholder="jane@beautysalon.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Business / Salon Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                          placeholder="Luxe Nail Studio"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                          placeholder="689-000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Business Physical Address *</label>
                      <input
                        type="text"
                        required
                        value={formData.businessAddress}
                        onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                        className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                        placeholder="Street, City, State, Zip Code"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Membership Tier *</label>
                        <select
                          value={formData.tier}
                          onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                          className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                        >
                          <option value="starter">Starter Salon Tier (20–50 Sets / mo)</option>
                          <option value="boutique">Elite Boutique Tier (50–150 Sets / mo)</option>
                          <option value="distributor">Regional Distributor Tier (200+ Sets / mo)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Resale Tax ID / License #</label>
                        <input
                          type="text"
                          value={formData.taxId}
                          onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                          className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                          placeholder="TX-12345678"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Additional Notes / Brand Inquiry</label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                        placeholder="Tell us about your salon clientele and preferred nail silhouettes..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-md cursor-pointer"
                    >
                      Submit Wholesale Application
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </section>
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

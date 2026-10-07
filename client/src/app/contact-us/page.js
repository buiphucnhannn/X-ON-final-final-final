'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import { scrollToSection } from '../../lib/scroll';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    inquiryType: 'general',
    message: '',
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
          eyebrow="Client Concierge & Support"
          title="Contact & <em>Client Concierge</em>"
          intro="Have questions regarding bespoke millimeter sizing, order delivery, or salon partnerships? Our dedicated Florida team is here for you."
          image="/images/showroom_bright_light.jpg"
        >
          <a href="tel:6892128888" className="btn btn-light">
            Call Concierge: 689-212-8888 <span className="btn-arrow">↗</span>
          </a>
          <button type="button" onClick={() => scrollToSection('inquiry-form')} className="btn btn-glass">
            Send Inquiry <span className="btn-arrow">↓</span>
          </button>
        </PageHero>

        {/* Contact Info & Inquiry Form */}
        <section id="inquiry-form" className="py-12">
          <div className="container-x">
            {/* Unified Top Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F3349] font-bold">
                Concierge Channels
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1F171A]">
                Get in Touch
              </h2>
              <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed">
                Our team provides one-on-one styling consultations and support from our flagship Kissimmee studio.
              </p>
            </div>

            {/* Equal-Height 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Direct Info Card */}
              <Reveal variant="left" className="lg:col-span-5 bg-white border border-[#EBD5DB] p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="border-b border-[#F0D5DC] pb-4">
                    <span className="text-[10px] tracking-widest uppercase text-[#8F3349] font-bold block">
                      Direct Channels
                    </span>
                    <h3 className="font-serif text-2xl text-[#1F171A] mt-1">
                      Studio & Concierge
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-[#FFF8FA] border border-[#ECD6DC] space-y-1">
                      <span className="text-[9px] tracking-widest uppercase text-[#9E3F55] font-bold block">
                        Flagship Studio Address
                      </span>
                      <p className="text-sm font-semibold text-[#1F171A]">3168 Bill Beck Blvd</p>
                      <p className="text-xs text-[#705B63]">Kissimmee, FL 34744, United States</p>
                    </div>

                    <div className="p-4 bg-[#FFF8FA] border border-[#ECD6DC] space-y-1">
                      <span className="text-[9px] tracking-widest uppercase text-[#9E3F55] font-bold block">
                        Direct Telephone & Wholesale Line
                      </span>
                      <p className="text-sm font-mono font-bold text-[#8F3349]">689-212-8888</p>
                      <p className="text-xs text-[#705B63]">Monday – Saturday: 9:00 AM – 7:00 PM EST</p>
                    </div>

                    <div className="p-4 bg-[#FFF8FA] border border-[#ECD6DC] space-y-1">
                      <span className="text-[9px] tracking-widest uppercase text-[#9E3F55] font-bold block">
                        Email Concierge
                      </span>
                      <p className="text-sm font-medium text-[#1F171A]">concierge@x-on.com</p>
                      <p className="text-xs text-[#705B63]">Order support: support@x-on.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border border-[#ECD6DC] bg-[#FAF2F4] p-5 space-y-1.5">
                  <span className="text-[10px] tracking-widest uppercase text-[#8F3349] font-bold block">
                    ✦ 100% Fit Guarantee
                  </span>
                  <p className="text-xs text-[#665258] leading-relaxed">
                    Received your set and need a single replacement nail in a different size? Contact us within 14 days of delivery for complimentary replacement sizing.
                  </p>
                </div>
              </Reveal>

              {/* Right Column: Contact Inquiry Form Card */}
              <Reveal variant="right" className="lg:col-span-7 bg-white border border-[#EBD5DB] p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full">
                {submitted ? (
                  <div className="py-10 text-center space-y-4 my-auto">
                    <span className="text-4xl text-[#8F3349]">✦</span>
                    <h3 className="font-serif text-3xl text-[#1F171A]">Message Sent</h3>
                    <p className="text-sm text-[#665258] max-w-md mx-auto">
                      Thank you for contacting the X-On Concierge. A member of our team will respond to your inquiry within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-8 py-3 bg-[#8F3349] text-white text-xs tracking-widest uppercase font-bold rounded-none cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 flex flex-col justify-between h-full">
                    <div className="border-b border-[#F0D5DC] pb-4">
                      <span className="text-[10px] tracking-widest uppercase text-[#8F3349] font-bold block">
                        Online Dispatch
                      </span>
                      <h3 className="font-serif text-2xl text-[#1F171A] mt-1">
                        Send an Inquiry
                      </h3>
                      <p className="text-xs text-[#7A636A] mt-0.5">Fill out the details below and we will get back to you promptly.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#FFFBFD] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                            placeholder="Sarah Jenkins"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#FFFBFD] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                            placeholder="sarah@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#FFFBFD] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                            placeholder="689-000-0000"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Order Number (optional)</label>
                          <input
                            type="text"
                            value={formData.orderNumber}
                            onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                            className="w-full bg-[#FFFBFD] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                            placeholder="XON-10842"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Inquiry Subject *</label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-[#FFFBFD] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                        >
                          <option value="general">General Inquiries & Information</option>
                          <option value="sizing">Bespoke Sizing & Fit Consultation</option>
                          <option value="order">Order Status & Tracking</option>
                          <option value="wholesale">Salon Wholesale / B2B Partnership</option>
                          <option value="press">Press & Editorial Loan Requests</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">Your Message *</label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-[#FFFBFD] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349] leading-relaxed"
                          placeholder="Please describe how we can assist you..."
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-md cursor-pointer"
                      >
                        Send Message to Concierge →
                      </button>
                    </div>
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

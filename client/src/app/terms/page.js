'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      <Header cartCount={0} onOpenCart={() => {}} onOpenSizing={() => {}} />

      <main className="flex-1 w-full">
        <PageHero
          eyebrow="Legal & Brand Standards"
          title="Terms of <em>Service</em>"
          intro="Please review our terms of craft, custom millimeter sizing, fit guarantee policy, and domestic shipping guidelines."
          image="/images/hero_legal.jpg"
        />

        <Reveal variant="fade">
        <div className="container-x py-12 max-w-4xl">

        <div className="prose max-w-none text-xs sm:text-sm text-[#443036] space-y-6 leading-relaxed font-light">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1F171A] font-medium">1. Handcrafted Standards & Sizing Accuracy</h2>
            <p>
              All X-On handmade press-on sets are individually hand-crafted by artisan nail technicians. Subtle artistic variations in marble swirls, gemstone placements, and micro-gradients are natural hallmarks of 1-of-1 handmade luxury craft and are not defects.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1F171A] font-medium">2. Complimentary 100% Fit Guarantee</h2>
            <p>
              If any individual nail in your standard XS, S, M, or L set does not fit your natural nail sidewalls, contact our Kissimmee studio within 14 days of receipt. We will ship individual replacement nail sizes free of charge.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1F171A] font-medium">3. Shipping & Delivery Terms</h2>
            <p>
              Complimentary express shipping applies to all qualifying domestic orders over $65. Orders are fulfilled directly from our Florida logistics center located at 3168 Bill Beck Blvd, Kissimmee, FL 34744.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1F171A] font-medium">4. Contact & Legal Jurisdiction</h2>
            <p>
              For any legal or formal customer inquiries, please contact our concierge team at 689-212-8888 or legal@x-on.com.
            </p>
          </section>
        </div>
        </div>
        </Reveal>
      </main>

      <Footer onOpenSizing={() => {}} />
    </div>
  );
}

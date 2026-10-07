'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      <Header cartCount={0} onOpenCart={() => {}} onOpenSizing={() => {}} />

      <main className="flex-1 w-full">
        <PageHero
          eyebrow="Data Protection & Privacy"
          title="Privacy & Security <em>Policy</em>"
          intro="How X-On securely handles personal details, checkout information, and VIP membership subscriptions."
          image="/images/hero_legal.jpg"
        />

        <Reveal variant="fade">
        <div className="container-x py-12 max-w-4xl">

        <div className="prose max-w-none text-xs sm:text-sm text-[#443036] space-y-6 leading-relaxed font-light">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1F171A] font-medium">1. Client Data Safeguards</h2>
            <p>
              X-On values your privacy. We collect only necessary information required to fulfill orders, facilitate wholesale accounts, and manage sizing consultations. All transaction data is processed using 256-bit SSL encryption.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1F171A] font-medium">2. VIP Club Communications</h2>
            <p>
              Subscribers to the X-On VIP Club receive email communications regarding limited-edition drop schedules, master classes, and wholesale promotions. You may unsubscribe at any time via the link in each dispatch.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1F171A] font-medium">3. Contacting our Privacy Officer</h2>
            <p>
              Direct questions regarding your personal data to privacy@x-on.com or telephone our concierge at 689-212-8888. Address: 3168 Bill Beck Blvd, Kissimmee, FL 34744.
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

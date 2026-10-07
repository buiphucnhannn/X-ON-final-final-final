'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register' | 'forgot'
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [forgotEmail, setForgotEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setStatusMsg(`Signed in as ${loginEmail}. Welcome to X-On.`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setStatusMsg(`Account created for ${regEmail}. Welcome to X-On VIP membership.`);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setStatusMsg(`Password reset link dispatched to ${forgotEmail}.`);
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
          eyebrow="Client Authentication & Portal"
          title="VIP Member <em>Portal</em>"
          intro="Access your saved sizing profiles, track active orders, and view private pre-launch drops for collectors."
          image="/images/hero_my_account.jpg"
        />

        <Reveal variant="up">
        <div className="container-x py-12">

        {/* Tab Selector */}
        <div className="max-w-md mx-auto mb-8 flex border border-[#EBD5DB] bg-white rounded-none">
          <button
            onClick={() => { setActiveTab('login'); setStatusMsg(null); }}
            className={`flex-1 py-3 text-xs tracking-widest uppercase font-bold transition-all rounded-none cursor-pointer ${
              activeTab === 'login' ? 'bg-[#8F3349] text-white' : 'text-[#665258] hover:text-[#1F171A]'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setActiveTab('register'); setStatusMsg(null); }}
            className={`flex-1 py-3 text-xs tracking-widest uppercase font-bold transition-all rounded-none cursor-pointer ${
              activeTab === 'register' ? 'bg-[#8F3349] text-white' : 'text-[#665258] hover:text-[#1F171A]'
            }`}
          >
            Register
          </button>
        </div>

        {/* Status Message */}
        {statusMsg && (
          <div className="max-w-md mx-auto mb-6 p-4 bg-[#FFF0F3] border border-[#8F3349] text-xs text-[#8F3349] font-bold uppercase tracking-wider text-center">
            {statusMsg}
          </div>
        )}

        {/* Form Container */}
        <div className="max-w-md mx-auto bg-white border border-[#EBD5DB] p-5 sm:p-10 shadow-sm rounded-none">
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">
                    Password *
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTab('forgot')}
                    className="text-[10px] text-[#8F3349] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-md cursor-pointer"
              >
                Sign In to Account
              </button>
            </form>
          )}

          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  placeholder="Create password"
                  className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-md cursor-pointer"
              >
                Create VIP Account
              </button>
            </form>
          )}

          {activeTab === 'forgot' && (
            <form onSubmit={handleForgot} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-widest uppercase font-bold text-[#554047]">
                  Account Email *
                </label>
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#FAF2F4] border border-[#EBD5DB] text-xs px-4 py-3 rounded-none focus:outline-none focus:border-[#8F3349]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#8F3349] hover:bg-[#732638] text-white text-xs tracking-[0.25em] uppercase font-bold transition-all rounded-none shadow-md cursor-pointer"
              >
                Send Recovery Link
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="text-xs text-[#665258] hover:text-[#8F3349] cursor-pointer"
                >
                  ← Back to Sign In
                </button>
              </div>
            </form>
          )}
        </div>
        </div>
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

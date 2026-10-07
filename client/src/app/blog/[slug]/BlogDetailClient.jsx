'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CartDrawer from '../../../components/CartDrawer';
import SizingModal from '../../../components/SizingModal';
import Reveal from '../../../components/ui/Reveal';
import { scrollToSection } from '../../../lib/scroll';
import { BLOG_POSTS } from '../../../data/blog';

const INITIAL_COMMENTS = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Verified Studio Tech • Miami, FL',
    date: 'February 15, 2026',
    rating: 5,
    avatar: 'ER',
    comment:
      'Switching my bridal clients to the Cold Gel Grip-X system cut our application time in half. No UV curing lamp meant zero thermal heat spikes for sensitive cuticles, and my clients reported zero lifting through two weeks of beach honeymoons!',
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'VIP Member & Collector',
    date: 'February 13, 2026',
    rating: 5,
    avatar: 'SC',
    comment:
      'The Botanical Magic Remover is truly a game changer. I was skeptical about "soakless" removal, but two droplets at the sidewalls and the nails lifted effortlessly in 3 minutes without peeling my natural keratin plate. Never going back to harsh acetone!',
  },
  {
    id: 3,
    name: 'Camille Laurent',
    role: 'Editorial Nail Stylist',
    date: 'February 10, 2026',
    rating: 5,
    avatar: 'CL',
    comment:
      'Fascinating chemistry breakdown. The micro-flexibility of the elastomeric polymer is evident when typing all day. Rigid glue used to pop off on day 4, but X-On stays locked down seamless.',
  },
];

export default function BlogDetailClient({ slug }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  // Comments state
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', rating: 5 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: formData.name.trim(),
      role: 'Verified Reader',
      date: 'Just now',
      rating: formData.rating,
      avatar: formData.name.trim().slice(0, 2).toUpperCase(),
      comment: formData.comment.trim(),
    };

    setComments([newComment, ...comments]);
    setFormData({ name: '', email: '', comment: '', rating: 5 });
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#1F171A] flex flex-col font-sans">
      <Header
        cartCount={0}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
      />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-xs tracking-widest uppercase text-[#8F3349] font-bold hover:underline inline-flex items-center gap-1.5"
          >
            <span>←</span> Back to All Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 border-b border-[#F0D5DC] pb-8 mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-block border border-[#F2D0D8] bg-[#FFF0F3] px-4 py-1 text-[#8F3349] text-[10px] tracking-widest uppercase font-bold rounded-none">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F171A] leading-tight font-normal text-balance">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#7A636A] font-mono pt-2">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="border border-[#EBD5DB] aspect-[16/9] overflow-hidden mb-12 bg-[#FAF2F4] rounded-none shadow-sm">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Editorial */}
        <Reveal variant="fade">
          <article className="prose max-w-none text-[#3D2C32] space-y-6 text-sm sm:text-base leading-relaxed font-light text-left sm:text-justify">
          <p className="text-lg font-serif italic text-[#8F3349] border-l-2 border-[#8F3349] pl-6 py-2 bg-[#FFF7F9]">
            {post.excerpt}
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#1F171A] pt-4 font-normal">
            1. Precision Formulation vs Conventional Superglues
          </h2>
          <p>
            For decades, commercial false nails relied on standard industrial cyanoacrylate—a brittle adhesive that cures rigidly against the natural nail bed. The result is familiar to anyone who has frequented budget salons: micro-fractures in the nail keratin, painful peeling upon accidental trauma, and severe dehydration of the nail plate.
          </p>
          <p>
            At X-On, our Kissimmee, Florida chemical research lab pioneered the <strong>Cold Gel Grip-X</strong> system. Rather than creating a brittle crystalline lattice, Cold Gel employs elastomeric polymers that maintain micro-flexibility. As your natural hands move and flex, the bond moves with you.
          </p>

          <div className="bg-[#FAF2F4] border border-[#EBD5DB] p-6 sm:p-8 rounded-none my-8 space-y-2">
            <h3 className="font-serif text-xl text-[#1F171A] font-medium">Pro Technician Recommendation</h3>
            <p className="text-xs sm:text-sm text-[#665258]">
              "Always dehydrate the natural nail bed with our alcohol prep pads prior to applying Cold Gel. Removing surface sebum is 80% of achieving the full 21+ day retention cycle." — Marcus Reed, Lead Nail Tech Educator.
            </p>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#1F171A] pt-4 font-normal">
            2. The Heat-Activated Seal Mechanism
          </h2>
          <p>
            Cold Gel Grip-X requires zero UV or LED curing lamps. Instead, natural skin temperature (typically 33°C to 36°C at the nail matrix) accelerates the polymeric linking process over the first 15 minutes of wear. This eliminates all thermal spikes and UV damage to sensitive cuticle cells.
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#1F171A] pt-4 font-normal">
            3. Botanical Magic Remover: The Clean Exit
          </h2>
          <p>
            When you are ready to transition your look, traditional acetone baths strip away natural oils and weaken the nail structure. X-On’s botanical Magic Remover uses citrus-derived bio-solvents to dissolve the flexible Grip-X bond in under 3 minutes, leaving your natural nail plate pristine, hydrated, and ready for your next set.
          </p>
        </article>
        </Reveal>

        {/* Article Tags */}
        <div className="mt-12 pt-6 border-t border-[#F0D5DC] flex flex-wrap items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase font-bold text-[#8F3349] mr-2">Tags:</span>
          {['#ColdGelGripX', '#PressOnScience', '#ZeroUV', '#NailKeratin', '#XOnAtelier'].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 bg-white border border-[#EBD5DB] text-[#6E565F] hover:border-[#8F3349] hover:text-[#8F3349] transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-8 border border-[#EBD5DB] shadow-sm">
          <div>
            <h3 className="font-serif text-2xl text-[#1F171A]">Experience Cold Gel Grip-X Today</h3>
            <p className="text-xs text-[#665258] mt-1">Get the complete kit with Cold Gel Glue and Botanical Magic Remover.</p>
          </div>
          <a
            href="/shop?category=nail-essentials"
            className="btn btn-outline whitespace-nowrap"
          >
            Shop Pro Essentials <span className="btn-arrow">→</span>
          </a>
        </div>

        {/* 
          ==========================================================
          SPEC §4.1 / §11: COMMENT & DISCUSSION SECTION
          ==========================================================
        */}
        <Reveal variant="up">
          <section id="discussion" className="mt-10 pt-8 border-t border-[#F0D5DC]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#8F3349] font-bold block">
                Artisan Community
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F171A] mt-1 font-normal">
                Discussion & Reviews ({comments.length})
              </h2>
            </div>
            <button
              onClick={() => scrollToSection('comment-form')}
              className="text-xs tracking-widest uppercase font-bold text-[#8F3349] hover:underline"
            >
              Leave a Comment ↓
            </button>
          </div>

          {/* List of Comments */}
          <div className="space-y-6 mb-12">
            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-[#EBD5DB] p-4 sm:p-8 shadow-xs rounded-none transition-all hover:border-[#C4687D]"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FAF0F3] border border-[#ECD6DC] text-[#8F3349] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                      {c.avatar}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-[#1F171A] font-medium leading-none">
                        {c.name}
                      </h4>
                      <span className="text-[10px] tracking-wider uppercase text-[#8F3349] font-bold block mt-1">
                        {c.role}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-500 text-xs tracking-wider">
                      {'★'.repeat(c.rating)}
                    </div>
                    <span className="text-[10px] text-[#8A7479] font-mono block mt-0.5">
                      {c.date}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4A353C] font-light leading-relaxed text-left sm:text-justify">
                  {c.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Comment Submission Form */}
          <div
            id="comment-form"
            className="bg-white border border-[#EBD5DB] p-4 sm:p-10 shadow-sm rounded-none"
          >
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#8F3349] font-bold block">
                Join The Discussion
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F171A] mt-1">
                Leave a Comment or Question
              </h3>
              <p className="text-xs text-[#7A636A] mt-1 font-light">
                Your email address will remain confidential. Professional nail tips and technique discussions are welcomed.
              </p>
            </div>

            {formSubmitted && (
              <div className="mb-6 p-4 bg-[#FFF5F7] border border-[#8F3349] text-[#8F3349] text-xs font-medium animate-fadeIn">
                ✦ Thank you! Your comment has been posted to the discussion thread.
              </div>
            )}

            <form onSubmit={handleSubmitComment} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase font-bold text-[#553E45] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vanessa Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFFBFD] border border-[#ECD6DC] px-4 py-3 text-xs text-[#1F171A] focus:outline-none focus:border-[#8F3349] rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase font-bold text-[#553E45] mb-2">
                    Email Address (Private) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vanessa@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FFFBFD] border border-[#ECD6DC] px-4 py-3 text-xs text-[#1F171A] focus:outline-none focus:border-[#8F3349] rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase font-bold text-[#553E45] mb-2">
                  Rating / Experience
                </label>
                <div className="flex gap-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className={`px-3 py-1 text-xs border cursor-pointer transition-colors ${
                        formData.rating === star
                          ? 'border-[#8F3349] bg-[#FFF0F3] text-[#8F3349] font-bold'
                          : 'border-[#ECD6DC] text-[#7A636A] hover:border-[#8F3349]'
                      }`}
                    >
                      {'★'.repeat(star)} ({star} Star{star > 1 ? 's' : ''})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase font-bold text-[#553E45] mb-2">
                  Your Comment *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share your application technique, wear time, or questions for our educators..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full bg-[#FFFBFD] border border-[#ECD6DC] px-4 py-3 text-xs text-[#1F171A] focus:outline-none focus:border-[#8F3349] rounded-none leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn btn-outline"
                >
                  Post Comment <span className="btn-arrow">→</span>
                </button>
              </div>
            </form>
          </div>
        </section>
        </Reveal>

        {/* 
          ==========================================================
          RELATED ARTICLES SECTION
          ==========================================================
        */}
        <section className="mt-12 pt-8 border-t border-[#F0D5DC]">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#8F3349] font-bold block">
                Further Reading
              </span>
              <h2 className="font-serif text-3xl text-[#1F171A] mt-1 font-normal">
                Related Editorial Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs tracking-widest uppercase font-bold text-[#8F3349] hover:underline"
            >
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-white border border-[#EBD5DB] hover:border-[#8F3349] transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#FAF2F4]">
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-[#8F3349]">
                      {rp.category}
                    </span>
                    <h3 className="font-serif text-xl text-[#1F171A] group-hover:text-[#8F3349] transition-colors leading-snug mt-1">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-[#6E565F] font-light line-clamp-2 mt-2 leading-relaxed">
                      {rp.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#F2DEE4] flex items-center justify-between text-[10px] text-[#8A7479] font-mono">
                    <span>{rp.readTime}</span>
                    <span className="font-bold text-[#8F3349] group-hover:translate-x-1 transition-transform">Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
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

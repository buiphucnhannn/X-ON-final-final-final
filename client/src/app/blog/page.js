'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import SizingModal from '../../components/SizingModal';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import { scrollToSection } from '../../lib/scroll';
import { BLOG_POSTS } from '../../data/blog';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  const categories = ['all', 'Technology & Care', 'Styling Editorial', 'Tutorials', 'Trends & Culture'];
  const POSTS_PER_PAGE = 2;

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
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
          eyebrow="The X-On Journal • Editorial & Guides"
          title="Nail Artistry & <em>Editorial</em>"
          intro="Expert insights, salon-grade tutorials, and aesthetic trend reports from our master technicians and chemical formulation lab in Kissimmee, Florida."
          image="/images/hero_blog.jpg"
        >
          <button onClick={() => scrollToSection('articles-grid')} className="btn btn-light">
            Read Latest Dispatches <span className="btn-arrow">↓</span>
          </button>
        </PageHero>

        <div id="articles-grid" className="container-x py-12">

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelectCategory(cat)}
              className={`px-5 py-2.5 text-xs tracking-widest uppercase font-bold transition-all rounded-none cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#8F3349] border-[#8F3349] text-white shadow-sm'
                  : 'bg-white border-[#EBD5DB] text-[#554047] hover:border-[#8F3349]'
              }`}
            >
              {cat === 'all' ? 'All Articles' : cat}
            </button>
          ))}
        </div>

        {/* Blog Grid - 2 columns, sharp non-rounded cards */}
        <Reveal variant="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {paginatedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#EBD5DB] hover:border-[#8F3349] transition-all duration-300 rounded-none shadow-sm hover:shadow-md flex flex-col group"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#FAF2F4]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 border border-[#EBD5DB] px-3 py-1 text-[9px] tracking-widest uppercase font-bold text-[#8F3349] rounded-none">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#99878E] font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1F171A] group-hover:text-[#8F3349] transition-colors leading-snug">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#665258] font-light leading-relaxed text-justify">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#F0D5DC] flex items-center justify-between">
                    <span className="text-[11px] text-[#7A636A] italic">By {post.author}</span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-xs tracking-widest uppercase font-bold text-[#8F3349] hover:underline"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Editorial Pagination Component */}
        {totalPages > 1 && (
          <div className="pt-12 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ECD6DC]">
            <div className="text-xs text-[#7A636A]">
              Showing page <strong>{safeCurrentPage}</strong> of <strong>{totalPages}</strong> ({filteredPosts.length} total articles)
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  if (safeCurrentPage > 1) {
                    setCurrentPage((p) => p - 1);
                    scrollToSection('articles-grid');
                  }
                }}
                disabled={safeCurrentPage === 1}
                className="px-3.5 py-2 min-h-[44px] text-xs uppercase tracking-wider font-semibold border border-[#ECD6DC] bg-white text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349] disabled:opacity-40 disabled:pointer-events-none transition-all rounded-none cursor-pointer"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    scrollToSection('articles-grid');
                  }}
                  className={`w-11 h-11 text-xs font-semibold transition-all border rounded-none cursor-pointer ${
                    safeCurrentPage === pageNum
                      ? 'bg-[#8F3349] border-[#8F3349] text-white shadow-sm'
                      : 'bg-white border-[#ECD6DC] text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349]'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => {
                  if (safeCurrentPage < totalPages) {
                    setCurrentPage((p) => p + 1);
                    scrollToSection('articles-grid');
                  }
                }}
                disabled={safeCurrentPage === totalPages}
                className="px-3.5 py-2 min-h-[44px] text-xs uppercase tracking-wider font-semibold border border-[#ECD6DC] bg-white text-[#1F171A] hover:bg-[#FFF0F3] hover:border-[#8F3349] disabled:opacity-40 disabled:pointer-events-none transition-all rounded-none cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        )}
        </div>
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

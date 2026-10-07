import { Suspense } from 'react';
import BlogDetailClient from './BlogDetailClient';
import { BLOG_POSTS } from '../../../data/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

async function BlogContent({ params }) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}

export default function Page({ params }) {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs tracking-widest uppercase text-[#8F3349] font-mono">Loading X-On Article...</div>}>
      <BlogContent params={params} />
    </Suspense>
  );
}

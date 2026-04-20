import { getAllPosts, getAllCategories } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10 md:mb-16 max-w-2xl">
          <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">✦ All Articles</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
            The Full Archive
          </h1>
          <p className="text-white/40 text-base sm:text-lg leading-relaxed">
            {posts.length} articles spanning design, development, and everything in between.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          <span className="px-4 py-1.5 sm:px-5 sm:py-2 bg-amber-400 text-black text-xs sm:text-sm font-bold rounded-full">
            All ({posts.length})
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 sm:px-5 sm:py-2 bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 text-xs sm:text-sm font-medium rounded-full cursor-pointer transition-all duration-150"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-amber-400/30 via-white/5 to-transparent mb-8 md:mb-12" />

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16 md:py-24">
            <p className="text-white/30 text-lg md:text-xl mb-4">No articles yet</p>
            <p className="text-white/20 text-sm">
              Add <code className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">.md</code> files to{' '}
              <code className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">content/posts/</code> to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

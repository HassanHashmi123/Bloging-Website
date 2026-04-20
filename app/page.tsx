import Link from 'next/link';
import { getAllPosts, getFeaturedPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { ArrowRight, Sparkles, BookOpen, Zap } from 'lucide-react';

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const recentPosts = allPosts.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Background blobs — max 100vw so they never cause horizontal scroll */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[90vw] max-h-[700px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium mb-6 md:mb-8">
            <Sparkles size={14} />
            <span>Ideas worth sharing</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 md:mb-8">
            Where{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Ideas</span>
            <br />Come Alive
          </h1>

          <p className="text-white/50 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 font-light">
            Deep dives into design, development, and the ideas shaping tomorrow's digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/blog" className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-xl transition-colors duration-150 hover:shadow-lg hover:shadow-amber-400/20">
              Browse Articles
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold rounded-xl transition-colors duration-150">
              About this Blog
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-12 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/5">
            {[
              { icon: BookOpen, value: `${allPosts.length}+`, label: 'Articles' },
              { icon: Zap, value: 'Weekly', label: 'Updates' },
              { icon: Sparkles, value: '100%', label: 'Original' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Icon size={14} className="text-amber-400" />
                  <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
                </div>
                <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      {featuredPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">✦ Featured</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">Editor's Picks</h2>
            </div>
            <Link href="/blog" className="flex items-center gap-1.5 text-white/40 hover:text-amber-400 text-sm transition-colors group">
              View all <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-150" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {featuredPosts.slice(0, 3).map((post) => (<PostCard key={post.slug} post={post} />))}
          </div>
        </section>
      )}

      {/* ── Recent ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-16 md:pb-24">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">✦ Latest</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">Recent Articles</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {recentPosts.map((post) => (<PostCard key={post.slug} post={post} />))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="relative bg-gradient-to-br from-amber-400/10 to-orange-500/5 border border-amber-400/20 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 text-center overflow-hidden">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Never Miss a Story</h3>
          <p className="text-white/50 mb-6 md:mb-8 max-w-md mx-auto text-sm sm:text-base">
            Subscribe to get the latest articles and insights delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-colors text-sm"
            />
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-xl transition-colors duration-150 whitespace-nowrap text-sm">
              Subscribe Free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

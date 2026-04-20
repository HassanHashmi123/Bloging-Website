import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | InkSpace`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Image */}
      <div className="relative pt-20">
        {post.image && (
          <div className="relative h-[50vh] max-h-[500px] overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-[#0a0a0f]/20" />
          </div>
        )}

        <div className={`max-w-3xl mx-auto px-6 ${post.image ? '-mt-32 relative z-10' : 'pt-16'}`}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-amber-400 text-sm mb-8 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to articles
          </Link>

          <div className="mb-6">
            <span className="px-4 py-1.5 bg-amber-400/10 text-amber-400 text-xs font-bold rounded-full uppercase tracking-widest border border-amber-400/20">
              {post.category}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            {post.title}
          </h1>

          <p className="text-white/50 text-xl leading-relaxed mb-8 font-light">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white/80 text-sm font-semibold">{post.author}</p>
                <p className="text-white/30 text-xs">Author</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-sm">
              <Calendar size={13} />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-sm">
              <Clock size={13} />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 mb-10">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 text-white/40 text-xs rounded-full">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-white prose-headings:font-bold
          prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
          prose-p:text-white/65 prose-p:leading-relaxed prose-p:text-[17px]
          prose-strong:text-white
          prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300
          prose-blockquote:border-l-amber-400 prose-blockquote:bg-amber-400/5 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:text-white/60 prose-blockquote:not-italic
          prose-code:text-amber-400 prose-code:bg-amber-400/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#111118] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:p-6
          prose-img:rounded-2xl prose-img:border prose-img:border-white/10
          prose-hr:border-white/10
          prose-li:text-white/65">
          <MDXRemote source={post.content} />
        </div>

        {/* Author Card */}
        <div className="mt-16 p-8 bg-[#111118] border border-white/5 rounded-2xl">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-xl flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Written by</p>
              <h3 className="text-white font-semibold text-lg">{post.author}</h3>
              <p className="text-white/40 text-sm mt-1 leading-relaxed">
                A passionate writer covering topics at the intersection of design, technology, and culture.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24 border-t border-white/5 pt-16">
          <h3 className="font-serif text-3xl font-bold text-white mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

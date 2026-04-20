import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Post } from '@/lib/posts';

export default function PostCard({ post }: { post: Post; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-[#111118] border border-white/8 rounded-2xl overflow-hidden transition-all duration-150 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1">

        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9] shrink-0">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-orange-600/10" />
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-[#111118] via-[#111118]/20 to-transparent" />

          {/* Category badge */}
          <span className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-black text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
            {post.category}
          </span>

          {/* Reading time */}
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white/80 text-xs font-medium rounded-full border border-white/10">
            <Clock size={10} />
            {post.readingTime}
          </span>
        </div>

        {/* Content — flex-1 so it fills remaining height equally */}
        <div className="flex flex-col flex-1 p-5">

          {/* Title */}
          <h2 className="font-serif text-lg font-bold text-white leading-snug mb-2 group-hover:text-amber-400 transition-colors duration-150 line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt — flex-1 pushes footer to bottom */}
          <p className="text-white/45 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
            {post.excerpt}
          </p>

          {/* Divider */}
          <div className="h-px bg-white/5 mb-4" />

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black text-xs font-black shrink-0 shadow-md shadow-amber-500/20">
                {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="text-white text-xs font-semibold leading-tight">{post.author}</p>
                <p className="text-white/35 text-xs leading-tight">
                  {format(new Date(post.date), 'MMM d, yyyy')}
                </p>
              </div>
            </div>

            {/* Read CTA */}
            <span className="flex items-center gap-1 text-amber-400 text-xs font-semibold group-hover:gap-2 transition-all duration-150">
              Read
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

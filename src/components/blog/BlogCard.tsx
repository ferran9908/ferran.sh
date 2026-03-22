import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/types/blog';
import { CalendarDays, Clock, ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = formatDistance(new Date(post.date), new Date(), {
    addSuffix: true,
  });

  return (
    <Card
      className={`group transition-all duration-300 ${featured ? 'border-primary/40' : ''}`}
      data-slot="card"
    >
      <Link href={`/writing/${post.slug}`} className="block p-6">
        <article>
          {/* Meta row */}
          <div
            className="flex items-center gap-4 text-[0.65rem] text-muted-foreground mb-4 tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-3 w-3 text-primary/50" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <span className="text-border">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-primary/50" />
              <span>{post.readTime}</span>
            </div>
            {featured && (
              <>
                <span className="text-border">·</span>
                <span
                  className="text-[var(--magenta)]"
                  style={{ textShadow: '0 0 6px oklch(0.72 0.28 330 / 0.5)' }}
                >
                  featured
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3
              className="text-base font-bold tracking-wider uppercase group-hover:text-primary transition-colors leading-snug"
              style={{ fontFamily: 'var(--font-orbitron), monospace' }}
            >
              {post.title}
            </h3>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

          {/* Description */}
          <p
            className="text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            {post.description}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[0.6rem]">
                  #{tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant="outline" className="text-[0.6rem]">
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Bottom scan line on hover */}
          <div
            className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
            style={{
              background: 'linear-gradient(90deg, var(--cyan), var(--magenta))',
              boxShadow: '0 0 4px var(--cyan)',
            }}
          />
        </article>
      </Link>
    </Card>
  );
}

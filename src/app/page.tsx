import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/BlogCard';
import { getRecentPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/config';
import { ArrowRight, Github, Linkedin, Twitter, ChevronRight } from 'lucide-react';

export default async function HomePage() {
  const recentPosts = await getRecentPosts(3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div
          className="relative space-y-8 rounded-none border px-8 py-10 overflow-hidden"
          style={{
            borderColor: 'oklch(0.82 0.18 190 / 0.25)',
            background: 'oklch(0.07 0.015 240 / 0.7)',
            boxShadow: '0 0 0 1px oklch(0.82 0.18 190 / 0.06), 0 0 40px oklch(0.82 0.18 190 / 0.05), inset 0 0 40px oklch(0.82 0.18 190 / 0.02)',
          }}
        >
          {/* Corner decorations */}
          <span
            className="absolute top-0 left-0 w-6 h-6 border-t border-l"
            style={{ borderColor: 'var(--cyan)', boxShadow: '-2px -2px 8px oklch(0.82 0.18 190 / 0.2)' }}
          />
          <span
            className="absolute top-0 right-0 w-6 h-6 border-t border-r"
            style={{ borderColor: 'var(--cyan)', boxShadow: '2px -2px 8px oklch(0.82 0.18 190 / 0.2)' }}
          />
          <span
            className="absolute bottom-0 left-0 w-6 h-6 border-b border-l"
            style={{ borderColor: 'var(--magenta)', boxShadow: '-2px 2px 8px oklch(0.72 0.28 330 / 0.2)' }}
          />
          <span
            className="absolute bottom-0 right-0 w-6 h-6 border-b border-r"
            style={{ borderColor: 'var(--magenta)', boxShadow: '2px 2px 8px oklch(0.72 0.28 330 / 0.2)' }}
          />

          {/* System label */}
          <div
            className="flex items-center gap-2 text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/40"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--green)', boxShadow: '0 0 4px var(--green)' }}
            />
            <span>INIT_PROFILE_v2.4.1</span>
            <span className="flex-1 h-px" style={{ background: 'oklch(0.82 0.18 190 / 0.15)' }} />
          </div>

          {/* Name & role */}
          <div className="space-y-4">
            <h1
              className="text-3xl md:text-5xl font-black tracking-widest uppercase leading-tight"
              style={{ fontFamily: 'var(--font-orbitron), monospace' }}
            >
              <span style={{ color: 'var(--cyan)', textShadow: '0 0 20px oklch(0.82 0.18 190 / 0.4)' }}>
                {siteConfig.author.name}
              </span>
            </h1>

            <div
              className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              <ChevronRight className="h-3.5 w-3.5 text-primary/60" />
              <span className="tracking-wider uppercase">{siteConfig.author.role}</span>
              <span className="text-border">@</span>
              <span
                className="tracking-wider uppercase"
                style={{ color: 'var(--magenta)', textShadow: '0 0 8px oklch(0.72 0.28 330 / 0.4)' }}
              >
                {siteConfig.author.company}
              </span>
            </div>

            <p
              className="text-sm text-muted-foreground max-w-xl leading-loose"
              style={{ fontFamily: 'var(--font-geist-mono), monospace', lineHeight: '1.8' }}
            >
              {siteConfig.author.bio}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-none tracking-widest uppercase text-xs"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              <Link href="/writing">
                <ChevronRight className="mr-1 h-3.5 w-3.5" />
                read writing
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none tracking-widest uppercase text-xs"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              <Link href="/about">about me</Link>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-1">
            <span
              className="text-[0.55rem] tracking-widest uppercase text-muted-foreground/30 mr-3"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              LINKS
            </span>
            {[
              { href: siteConfig.links.twitter,  Icon: Twitter,  label: 'Twitter' },
              { href: siteConfig.links.github,   Icon: Github,   label: 'GitHub' },
              { href: siteConfig.links.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-8 w-8 items-center justify-center border border-border/40 text-muted-foreground/50 transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_8px_oklch(0.82_0.18_190_/_0.3)]"
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span
                className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/40"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                {'//'}
              </span>
              <h2
                className="text-lg font-bold tracking-widest uppercase"
                style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  color: 'var(--foreground)',
                  textShadow: '0 0 12px oklch(0.82 0.18 190 / 0.15)',
                }}
              >
                recent writing
              </h2>
            </div>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-none tracking-widest uppercase text-[0.65rem] text-muted-foreground hover:text-primary"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              <Link href="/writing">
                view all
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured={post.featured} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

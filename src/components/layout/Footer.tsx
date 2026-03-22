import Link from 'next/link';
import { Twitter, Github, Linkedin, Rss } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* System readout line */}
        <div
          className="flex items-center gap-3 mb-6 text-[0.6rem] tracking-widest uppercase text-muted-foreground/40"
          style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
        >
          <span className="inline-block h-px flex-1 bg-border/40" />
          <span>SYS_{currentYear}_EOF</span>
          <span className="inline-block h-px flex-1 bg-border/40" />
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left: copyright + links */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <p
              className="text-xs text-muted-foreground/50 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              © {currentYear}{' '}
              <span className="text-primary/70">{siteConfig.author.name}</span>
            </p>
            <div
              className="flex items-center gap-2 text-[0.65rem] text-muted-foreground/40 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              <Link
                href="/writing"
                className="hover:text-primary transition-colors"
              >
                /writing
              </Link>
              <span className="text-border">·</span>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                /about
              </Link>
              <span className="text-border">·</span>
              <Link
                href="/now"
                className="hover:text-primary transition-colors"
              >
                /now
              </Link>
              <span className="text-border">·</span>
              <Link
                href="/api/rss.xml"
                className="hover:text-primary transition-colors"
              >
                /rss
              </Link>
            </div>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-3">
            {[
              { href: siteConfig.links.twitter,  Icon: Twitter,  label: 'Twitter' },
              { href: siteConfig.links.github,   Icon: Github,   label: 'GitHub' },
              { href: siteConfig.links.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: '/api/rss.xml',             Icon: Rss,      label: 'RSS Feed' },
            ].map(({ href, Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="group flex h-8 w-8 items-center justify-center border border-border/40 text-muted-foreground/40 transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_8px_oklch(0.82_0.18_190_/_0.3)]"
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

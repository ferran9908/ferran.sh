import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/BlogCard';
import { NewsletterForm } from '@/components/shared/NewsletterForm';
import { getRecentPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/config';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default async function HomePage() {
  const recentPosts = await getRecentPosts(3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="space-y-6 rounded-2xl border border-primary/40 bg-black/30 px-8 py-10 shadow-[0_0_40px_rgba(124,58,237,0.25)]">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {siteConfig.author.name}, <span className="font-mono text-md ">{siteConfig.author.role}</span> at {siteConfig.author.company}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl arcade-subtitle">
              {siteConfig.author.bio}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/writing">
                read my writing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">learn more about me</Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">recent writing</h2>
            <Button asChild variant="ghost">
              <Link href="/writing">
                view all posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured={post.featured} />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      {/* <section>
        <NewsletterForm />
      </section> */}
    </div>
  );
}
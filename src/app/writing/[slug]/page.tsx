import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { getPostBySlug, getAllPosts, getPostSlugs } from '@/lib/blog';
import { parseMDX } from '@/lib/mdx';
import { siteConfig } from '@/lib/config';
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.author.name],
      images: post.image ? [post.image] : [siteConfig.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [siteConfig.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const content = await parseMDX(post.content);
  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      <ReadingProgress />
      <article className="space-y-8">
        <header className="space-y-6">
          <div className="space-y-4">
            <Link 
              href="/writing" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 mr-1" />
              Back to all posts
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  <Link href={`/writing?tag=${tag}`}>
                    {tag}
                  </Link>
                </Badge>
              ))}
            </div>
          )}
        </header>

        <Separator />

        <div className="flex gap-8">
          <div className="min-w-0 flex-1">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {content}
            </div>
          </div>
          
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-20 space-y-6">
              <TableOfContents content={post.content} />
              <ShareButtons 
                title={post.title} 
                url={`${siteConfig.url}/writing/${post.slug}`}
              />
            </div>
          </aside>
        </div>

        <Separator className="my-12" />

        <ShareButtons 
          title={post.title} 
          url={`${siteConfig.url}/writing/${post.slug}`}
          className="lg:hidden"
        />

        <nav className="flex items-center justify-between pt-8">
          {previousPost ? (
            <Link href={`/writing/${previousPost.slug}`} className="group flex-1">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground flex items-center">
                  <ArrowLeft className="h-3.5 w-3.5 mr-1" />
                  Previous
                </p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {previousPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {nextPost ? (
            <Link href={`/writing/${nextPost.slug}`} className="group flex-1 text-right">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground flex items-center justify-end">
                  Next
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {nextPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </>
  );
}
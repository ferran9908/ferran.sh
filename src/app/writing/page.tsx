import { Metadata } from 'next';
import { BlogCard } from '@/components/blog/BlogCard';
import { TagFilter } from '@/components/blog/TagFilter';
import { SearchBar } from '@/components/blog/SearchBar';
import { getAllPosts, getAllTags } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Technical articles about architecture, scaling, and engineering leadership.',
};

interface WritingPageProps {
  searchParams: {
    tag?: string;
    search?: string;
  };
}

export default async function WritingPage({ searchParams }: WritingPageProps) {
  const allPosts = await getAllPosts();
  const allTags = getAllTags(allPosts);
  
  // Filter posts based on search params
  let filteredPosts = allPosts;
  
  if (searchParams.tag) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags.map(t => t.toLowerCase()).includes(searchParams.tag!.toLowerCase())
    );
  }
  
  if (searchParams.search) {
    const searchTerm = searchParams.search.toLowerCase();
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Writing</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on software architecture, scaling systems, and leading engineering teams.
        </p>
      </div>

      <div className="space-y-4">
        <SearchBar />
        {allTags.length > 0 && (
          <TagFilter tags={allTags} selectedTag={searchParams.tag} />
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No posts found. Try adjusting your filters or check back later for new content.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} featured={post.featured} />
          ))}
        </div>
      )}
      
      <div className="pt-8 text-center text-sm text-muted-foreground">
        {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
      </div>
    </div>
  );
}
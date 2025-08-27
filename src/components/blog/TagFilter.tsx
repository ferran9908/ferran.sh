'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface TagFilterProps {
  tags: string[];
  selectedTag?: string;
}

export function TagFilter({ tags, selectedTag }: TagFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const createQueryString = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }
    return params.toString();
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-muted-foreground">Filter by tag:</span>
      
      {selectedTag && (
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="h-7 px-2 font-normal"
        >
          <Link href={`${pathname}?${createQueryString(null)}`}>
            <X className="h-3 w-3 mr-1" />
            Clear filter
          </Link>
        </Button>
      )}
      
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTag === tag ? 'default' : 'outline'}
          className="cursor-pointer hover:bg-primary/10"
          asChild
        >
          <Link 
            href={`${pathname}?${createQueryString(selectedTag === tag ? null : tag)}`}
          >
            {tag}
          </Link>
        </Badge>
      ))}
    </div>
  );
}
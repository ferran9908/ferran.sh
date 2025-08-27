# ferran.sh - Personal CTO Blog Site

## Project Overview
Personal blog and portfolio site for Ferran, built with Next.js 14, shadcn/ui, and MDX.

## Key Features
- MDX blog system with syntax highlighting
- Dark mode support
- RSS feed generation
- Sitemap generation
- SEO optimized
- Responsive design
- Performance optimized (target: Lighthouse 95+)

## Project Structure
```
src/
├── app/                     # Next.js app router pages
│   ├── writing/            # Blog pages
│   ├── about/              # About page
│   ├── projects/           # Projects showcase
│   ├── now/                # Current activities
│   └── api/rss.xml/        # RSS feed
├── components/             # React components
│   ├── blog/              # Blog-specific components
│   ├── layout/            # Header, Footer, etc.
│   └── shared/            # Reusable components
├── lib/                    # Utilities and helpers
└── types/                  # TypeScript types
content/
├── posts/                  # Blog posts (MDX files)
└── projects/               # Project data
```

## Content Management
Blog posts are stored as MDX files in `content/posts/` with frontmatter:
```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Post description"
tags: ["tag1", "tag2"]
featured: true/false
---
```

## Commands
```bash
# Development
bun dev

# Build
bun build

# Start production server
bun start

# Lint
bun lint

# Type check
bun type-check
```

## Important Configuration

### Site Config
Location: `src/lib/config.ts`
- Update author information
- Update social links
- Update site URL

### Colors
- Primary color: #0066cc (blue)
- Configured in `src/app/globals.css`

### Fonts
- Body: Inter
- Code: JetBrains Mono

## Performance Targets
- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Cumulative Layout Shift: < 0.1

## SEO Features
- Open Graph meta tags
- Twitter cards
- Sitemap generation
- RSS feed
- Structured data

## Adding New Content

### Blog Post
1. Create MDX file in `content/posts/`
2. Add frontmatter
3. Write content with markdown/MDX
4. Post will automatically appear on site

### Project
Update the projects array in `src/app/projects/page.tsx`

## Deployment
The site is optimized for deployment on Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Deploy (auto-builds on push)

## Future Enhancements
- [ ] Newsletter integration (ConvertKit/Mailchimp)
- [ ] Comments system (Giscus/Disqus)
- [ ] Analytics (Plausible/Vercel Analytics)
- [ ] Search functionality
- [ ] Related posts
- [ ] Post views counter
- [ ] Social share images generation

## Dependencies
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- MDX
- next-themes (dark mode)
- date-fns
- lucide-react (icons)
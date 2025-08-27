export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  image?: string;
}

export interface Author {
  name: string;
  role: string;
  company: string;
  bio: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}
export type Blog = {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  coverUrl?: string;
  tags: string[];
  publishedAt: string;
};
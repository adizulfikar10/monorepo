import type { Blog } from '../types/blog';

const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'Memulai Monorepo dengan Nx untuk Blog Multi-Tenant',
    author: 'Adi Z',
    excerpt:
      'Panduan praktis menyusun monorepo Nx dengan Next.js, Emotion, dan arsitektur atomic.',
    coverUrl: 'https://picsum.photos/seed/nx/800/400',
    tags: ['nx', 'nextjs', 'emotion', 'architecture'],
    publishedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Hook useDeviceType: Deteksi Breakpoint Responsif',
    author: 'Sena',
    excerpt:
      'Cara membuat hook sederhana untuk mendeteksi ukuran layar dan device type.',
    coverUrl: 'https://picsum.photos/seed/hooks/800/400',
    tags: ['react', 'hooks', 'responsive'],
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export async function listBlogs(): Promise<Blog[]> {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_BLOGS;
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  await new Promise((r) => setTimeout(r, 200));
  return MOCK_BLOGS.find((b) => b.id === id);
}
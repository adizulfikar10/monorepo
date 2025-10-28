/** @jsxImportSource react */
import BlogIndex from '../templates/BlogIndex.client';
import { listBlogs, type Blog } from '@monorepo/services';

export default async function Page() {
  const blogs: Blog[] = await listBlogs();
  return <BlogIndex blogs={blogs} />;
}

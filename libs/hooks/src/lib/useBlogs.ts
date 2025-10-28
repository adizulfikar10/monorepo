import { useEffect, useState } from 'react';
import type { Blog } from '@monorepo/services';
import { listBlogs } from '@monorepo/services';

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    listBlogs()
      .then((data) => {
        if (!active) return;
        setBlogs(data);
        setLoading(false);
      })
      .catch((e) => {
        if (!active) return;
        setError(e?.message ?? 'Failed to fetch blogs');
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { blogs, loading, error };
}
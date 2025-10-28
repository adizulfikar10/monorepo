'use client';

import { useDeviceType } from '@monorepo/hooks';
import { BlogPageTemplate } from '@monorepo/ui-components';
import type { Blog } from '@monorepo/services';
import { useEffect, useState } from 'react';

export default function BlogIndex({ blogs }: { blogs: Blog[] }) {
  const device = useDeviceType();

  const [clientText, setClientText] = useState('');

  useEffect(() => {
    setClientText('Sport');
  }, []);

  return (
    <BlogPageTemplate
      title={`Category ${clientText}`}
      subtitle={`Device: ${device}`}
      items={blogs.map((b: Blog) => ({
        title: b.title,
        excerpt: b.excerpt,
        author: b.author,
      }))}
    />
  );
}

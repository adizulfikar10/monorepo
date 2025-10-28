# blog-web

Next.js app consuming `@monorepo/ui-components` with Atomic Design templates.

## Blog Index Template Usage

The `BlogIndex.client.tsx` component now uses `BlogPageTemplate`:

```tsx
import { BlogPageTemplate } from '@monorepo/ui-components';

export default function BlogIndex({ blogs }) {
  const items = blogs.map(b => ({ title: b.title, excerpt: b.excerpt, author: b.author }));
  return (
    <BlogPageTemplate
      title={`Category Sport`}
      subtitle={`Device: Mobile`}
      items={items}
    />
  );
}
```

`BlogPageTemplate` composes `Heading`, `Text`, and `BlogList`, and applies global theme tokens.

## Run Dev Server

```bash
nx serve blog-web
```

App runs at `http://localhost:4200/`.
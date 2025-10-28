# ui-components

Reusable UI component library following Atomic Design.

## Exports

- Atoms: `Button`, `Text`, `Heading`, `Card`, `Input`
- Molecules: `BlogCard`
- Organisms: `BlogList`
- Templates: `BlogPageTemplate`

All exports are available from `@monorepo/ui-components`.

## BlogPageTemplate

High-level page template that composes `Heading`, `Text`, and `BlogList`.

Props:

- `title: string`
- `subtitle?: string`
- `items: Array<{ title: string; excerpt: string; author: string }>`

Usage:

```tsx
import { BlogPageTemplate } from '@monorepo/ui-components';

export function Example({ items }: { items: Array<{ title: string; excerpt: string; author: string }> }) {
  return (
    <BlogPageTemplate
      title="Category Sport"
      subtitle="Device: Mobile"
      items={items}
    />
  );
}
```

## Development

- Run unit tests: `nx test ui-components`

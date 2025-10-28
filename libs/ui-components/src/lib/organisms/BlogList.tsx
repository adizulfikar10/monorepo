import type { Blog } from '@monorepo/services';
import { BlogCard } from '../molecules/BlogCard';
import { Grid } from '../atoms/Grid';
import { useTheme } from '@emotion/react';
import type { Theme } from '@monorepo/tokens';

export function BlogList({
  items,
}: {
  items: Array<Pick<Blog, 'title' | 'excerpt' | 'author'>>;
}) {
  const theme = useTheme() as Theme;
  return (
    <Grid gapKey={theme.semantic.blogList.gap} columns={3}>
      {items.map((b, i) => (
        <BlogCard key={i} {...b} />
      ))}
    </Grid>
  );
}

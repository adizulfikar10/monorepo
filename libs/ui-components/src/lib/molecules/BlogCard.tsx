import { useTheme } from '@emotion/react';
import type { Theme } from '@monorepo/tokens';
import { Card } from '../atoms/Card';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export function BlogCard({
  title,
  excerpt,
  author,
}: {
  title: string;
  excerpt: string;
  author: string;
}) {
  const theme = useTheme() as Theme;
  return (
    <Card>
      <Heading
        colorKey={theme.semantic.blogCard.title.color}
        sizeKey={theme.semantic.blogCard.title.size}
        weightKey={theme.semantic.blogCard.title.weight}
      >
        {title}
      </Heading>
      <Text
        colorKey={theme.semantic.blogCard.excerpt.color}
        sizeKey={theme.semantic.blogCard.excerpt.size}
        weightKey={theme.semantic.blogCard.excerpt.weight}
      >
        {excerpt}
      </Text>
      <Text
        colorKey={theme.semantic.blogCard.author.color}
        sizeKey={theme.semantic.blogCard.author.size}
        weightKey={theme.semantic.blogCard.author.weight}
      >
        By {author}
      </Text>
      <Button
        style={{ marginTop: theme.globals.spacing[theme.semantic.blogCard.marginTopButton] }}
        variant="secondary"
      >
        Read more
      </Button>
    </Card>
  );
}
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import type { Theme } from '@monorepo/tokens';
import type { Blog } from '@monorepo/services';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { BlogList } from '../organisms/BlogList';

const PageContainer = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => (theme as Theme).globals.spacing.lg}px;
  background: ${({ theme }) => (theme as Theme).globals.color.background};
  color: ${({ theme }) => (theme as Theme).globals.color.text};
`;

export function BlogPageTemplate({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: Array<Pick<Blog, 'title' | 'excerpt' | 'author'>>;
}) {
  const theme = useTheme() as Theme;
  return (
    <PageContainer>
      <Heading>{title}</Heading>
      {subtitle ? (
        <Text style={{ color: theme.globals.color.mutedText }}>{subtitle}</Text>
      ) : null}
      <BlogList items={items} />
    </PageContainer>
  );
}
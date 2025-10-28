'use client';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useDeviceType } from '@monorepo/hooks';
import { BlogList, Heading, Text } from '@monorepo/ui-components';
import type { Blog } from '@monorepo/services';
import { useEffect, useState } from 'react';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => (theme as any).globals.spacing.lg}px;
  background: ${({ theme }) => (theme as any).globals.color.background};
  color: ${({ theme }) => (theme as any).globals.color.text};
`;

export default function BlogIndex({ blogs }: { blogs: Blog[] }) {
  const device = useDeviceType();
  const theme = useTheme() as any;

  const [clientText, setClientText] = useState('');

  useEffect(() => {
    setClientText('Client');
  }, []);

  return (
    <PageContainer>
      <Heading>Blog {clientText}</Heading>
      <Text style={{ color: theme.globals.color.mutedText }}>
        Device: {device}
      </Text>
      <BlogList
        items={blogs.map((b: Blog) => ({
          title: b.title,
          excerpt: b.excerpt,
          author: b.author,
        }))}
      />
    </PageContainer>
  );
}

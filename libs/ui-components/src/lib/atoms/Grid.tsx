import styled from '@emotion/styled';
import type { Theme } from '@monorepo/tokens';

type SpacingKey = keyof Theme['globals']['spacing'];

export const Grid = styled.div<{
  gapKey?: SpacingKey;
  columns?: number;
}>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns ?? 3}, 1fr)`};
  gap: ${({ theme, gapKey }) => {
    const t = theme as Theme;
    const key = gapKey ?? 'md';
    return t.globals.spacing[key];
  }};
`;
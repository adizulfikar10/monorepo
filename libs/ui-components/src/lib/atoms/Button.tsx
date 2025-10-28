import styled from '@emotion/styled';
import type { Theme } from '@monorepo/tokens';

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: ${({ theme }) => (theme as Theme).globals.spacing.sm}px
    ${({ theme }) => (theme as Theme).globals.spacing.md}px;
  border-radius: ${({ theme, variant }) =>
    (theme as Theme).globals.radius[
      (theme as Theme).semantic.button[(variant ?? 'primary')].radius
    ]}px;
  border: 1px solid
    ${({ theme, variant }) =>
      (theme as Theme).globals.color[
        (theme as Theme).semantic.button[(variant ?? 'primary')].border
      ]};
  color: ${({ theme, variant }) =>
    (theme as Theme).globals.color[
      (theme as Theme).semantic.button[(variant ?? 'primary')].text
    ]};
  background: ${({ theme, variant }) =>
    (theme as Theme).globals.color[
      (theme as Theme).semantic.button[(variant ?? 'primary')].bg
    ]};
  box-shadow: ${({ theme, variant }) =>
    (theme as Theme).globals.shadow[
      (theme as Theme).semantic.button[(variant ?? 'primary')].shadow
    ]};
  cursor: pointer;
`;
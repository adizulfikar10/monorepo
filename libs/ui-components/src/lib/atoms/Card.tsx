import styled from '@emotion/styled';
import type { Theme } from '@monorepo/tokens';

export const Card = styled.article`
  background: ${({ theme }) =>
    (theme as Theme).globals.color[(theme as Theme).semantic.card.bg]};
  border: 1px solid
    ${({ theme }) =>
      (theme as Theme).globals.color[(theme as Theme).semantic.card.border]};
  color: ${({ theme }) =>
    (theme as Theme).globals.color[(theme as Theme).semantic.card.text]};
  border-radius: ${({ theme }) =>
    (theme as Theme).globals.radius[(theme as Theme).semantic.card.radius]}px;
  padding: ${({ theme }) =>
    (theme as Theme).globals.spacing[(theme as Theme).semantic.card.padding]}px;
  box-shadow: ${({ theme }) =>
    (theme as Theme).globals.shadow[(theme as Theme).semantic.card.shadow]};
`;
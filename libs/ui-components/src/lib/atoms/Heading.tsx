import styled from '@emotion/styled';
import type { Theme } from '@monorepo/tokens';

type ColorKey = keyof Theme['globals']['color'];
type SizeKey = keyof Theme['globals']['typography']['size'];
type WeightKey = keyof Theme['globals']['typography']['weight'];

export const Heading = styled.h2<{
  colorKey?: ColorKey;
  sizeKey?: SizeKey;
  weightKey?: WeightKey;
}>`
  margin: 0;
  color: ${({ theme, colorKey }) => {
    const t = theme as Theme;
    const key = colorKey ?? t.semantic.heading.text;
    return t.globals.color[key];
  }};
  font-family: ${({ theme }) => (theme as Theme).globals.typography.fontFamily};
  font-size: ${({ theme, sizeKey }) => {
    const t = theme as Theme;
    const key = sizeKey ?? 'lg';
    return t.globals.typography.size[key];
  }}px;
  font-weight: ${({ theme, weightKey }) => {
    const t = theme as Theme;
    const key = weightKey ?? 'bold';
    return t.globals.typography.weight[key];
  }};
`;
import styled from '@emotion/styled';
import type { Theme } from '@monorepo/tokens';

type ColorKey = keyof Theme['globals']['color'];
type RadiusKey = keyof Theme['globals']['radius'];
type SpacingKey = keyof Theme['globals']['spacing'];
type SizeKey = keyof Theme['globals']['typography']['size'];

export const Input = styled.input<{
  bgKey?: ColorKey;
  textKey?: ColorKey;
  borderKey?: ColorKey;
  radiusKey?: RadiusKey;
  paddingKey?: SpacingKey;
  sizeKey?: SizeKey;
}>`
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => (theme as Theme).globals.typography.fontFamily};
  font-size: ${({ theme, sizeKey }) => {
    const t = theme as Theme;
    const key = sizeKey ?? 'md';
    return t.globals.typography.size[key];
  }}px;
  color: ${({ theme, textKey }) => {
    const t = theme as Theme;
    const key = textKey ?? t.globals.color.text;
    return t.globals.color[key as ColorKey];
  }};
  background: ${({ theme, bgKey }) => {
    const t = theme as Theme;
    const key = bgKey ?? 'surface';
    return t.globals.color[key];
  }};
  border: 1px solid
    ${({ theme, borderKey }) => {
      const t = theme as Theme;
      const key = borderKey ?? 'border';
      return t.globals.color[key];
    }};
  border-radius: ${({ theme, radiusKey }) => {
    const t = theme as Theme;
    const key = radiusKey ?? 'sm';
    return t.globals.radius[key];
  }}px;
  padding: ${({ theme, paddingKey }) => {
    const t = theme as Theme;
    const key = paddingKey ?? 'sm';
    return t.globals.spacing[key];
  }}px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => (theme as Theme).globals.color.primary};
    box-shadow: 0 0 0 3px
      ${({ theme }) => (theme as Theme).globals.color.accent}33;
  }
`;

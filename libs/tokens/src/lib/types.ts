export type GlobalTokens = {
  spacing: { xs: number; sm: number; md: number; lg: number; xl: number };
  radius: { sm: number; md: number; lg: number };
  typography: {
    fontFamily: string;
    size: { sm: number; md: number; lg: number; xl: number };
    weight: { regular: number; medium: number; bold: number };
  };
  color: {
    background: string;
    surface: string;
    text: string;
    mutedText: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
  };
  shadow: { sm: string; md: string; lg: string };
};

// Keys that semantic tokens can reference from global tokens
export type GlobalColorKey = keyof GlobalTokens['color'];
export type GlobalRadiusKey = keyof GlobalTokens['radius'];
export type GlobalShadowKey = keyof GlobalTokens['shadow'];
export type GlobalSpacingKey = keyof GlobalTokens['spacing'];
export type GlobalTypographySizeKey = keyof GlobalTokens['typography']['size'];
export type GlobalTypographyWeightKey = keyof GlobalTokens['typography']['weight'];

export type ComponentButtonTokens = {
  bg: GlobalColorKey;
  text: GlobalColorKey;
  border: GlobalColorKey;
  radius: GlobalRadiusKey;
  shadow: GlobalShadowKey;
  padding?: GlobalSpacingKey;
  margin?: GlobalSpacingKey;
};

export type ComponentCardTokens = {
  bg: GlobalColorKey;
  text: GlobalColorKey;
  border: GlobalColorKey;
  radius: GlobalRadiusKey;
  shadow: GlobalShadowKey;
  padding: GlobalSpacingKey;
};

export type ComponentHeadingTokens = {
  text: GlobalColorKey;
};

export type ComponentTextTokens = {
  text: GlobalColorKey;
};

export type ComponentBlogCardTokens = {
  title: {
    color: GlobalColorKey;
    size: GlobalTypographySizeKey;
    weight: GlobalTypographyWeightKey;
  };
  excerpt: {
    color: GlobalColorKey;
    size: GlobalTypographySizeKey;
    weight: GlobalTypographyWeightKey;
  };
  author: {
    color: GlobalColorKey;
    size: GlobalTypographySizeKey;
    weight: GlobalTypographyWeightKey;
  };
  marginTopButton: GlobalSpacingKey;
};

export type ComponentBlogListTokens = {
  gap: GlobalSpacingKey;
};

export type SemanticTokens = {
  button: {
    primary: ComponentButtonTokens;
    secondary: ComponentButtonTokens;
  };
  card: ComponentCardTokens;
  heading: ComponentHeadingTokens;
  text: ComponentTextTokens;
  blogCard: ComponentBlogCardTokens;
  blogList: ComponentBlogListTokens;
};

export type Theme = {
  name: string;
  globals: GlobalTokens;
  semantic: SemanticTokens;
};

export type TenantName = 'tenant-a' | 'tenant-b';
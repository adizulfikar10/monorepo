import { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { TenantName, Theme } from '@monorepo/tokens';
import { getThemeByTenant } from '@monorepo/tokens';

export type ThemeProviderProps = PropsWithChildren<{
  tenant: TenantName;
}>;

export const ThemeProvider = ({ tenant, children }: ThemeProviderProps) => {
  const theme: Theme = getThemeByTenant(tenant);
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;

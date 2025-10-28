import type { TenantName, Theme } from './types';
import { tenantATheme } from './themes/tenant-a';
import { tenantBTheme } from './themes/tenant-b';

export const getThemeByTenant = (tenant: TenantName): Theme =>
  tenant === 'tenant-a' ? tenantATheme : tenantBTheme;
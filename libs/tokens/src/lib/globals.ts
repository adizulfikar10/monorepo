import type { GlobalTokens } from './types';

export const baseGlobals: GlobalTokens = {
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  radius: { sm: 4, md: 8, lg: 16 },
  typography: {
    fontFamily:
      'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    size: { sm: 12, md: 14, lg: 18, xl: 24 },
    weight: { regular: 400, medium: 500, bold: 700 },
  },
  // Default global colors (will be overridden per tenant)
  color: {
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#0f172a',
    mutedText: '#475569',
    primary: '#2563eb',
    secondary: '#10b981',
    accent: '#ef4444',
    border: '#e2e8f0',
  },
  // Default global shadows (can be set to 'none' per tenant)
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.06)',
    md: '0 4px 8px rgba(0,0,0,0.08)',
    lg: '0 10px 20px rgba(0,0,0,0.1)',
  },
};
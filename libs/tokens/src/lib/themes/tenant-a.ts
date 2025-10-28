import type { Theme } from '../types';
import { baseGlobals } from '../globals';

export const tenantATheme: Theme = {
  name: 'tenant-a',
  globals: {
    ...baseGlobals,
    color: {
      background: '#0f172a',
      surface: '#111827',
      text: '#e5e7eb',
      mutedText: '#9ca3af',
      primary: '#60a5fa',
      secondary: '#34d399',
      accent: '#f59e0b',
      border: '#1f2937',
    },
    shadow: {
      sm: '0 1px 2px rgba(0,0,0,0.2)',
      md: '0 4px 8px rgba(0,0,0,0.25)',
      lg: '0 10px 20px rgba(0,0,0,0.3)',
    },
  },
  semantic: {
    button: {
      primary: {
        bg: 'primary',
        text: 'text',
        border: 'border',
        radius: 'md',
        shadow: 'sm',
      },
      secondary: {
        bg: 'secondary',
        text: 'text',
        border: 'border',
        radius: 'md',
        shadow: 'sm',
      },
    },
    card: {
      bg: 'surface',
      text: 'text',
      border: 'border',
      radius: 'md',
      shadow: 'md',
      padding: 'md',
    },
    heading: {
      text: 'text',
    },
    text: {
      text: 'text',
    },
    blogCard: {
      title: { color: 'text', size: 'lg', weight: 'bold' },
      excerpt: { color: 'text', size: 'md', weight: 'regular' },
      author: { color: 'mutedText', size: 'sm', weight: 'medium' },
      marginTopButton: 'sm',
    },
    blogList: {
      gap: 'md',
    },
  },
};
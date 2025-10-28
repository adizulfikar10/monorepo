import type { Theme } from '../types';
import { baseGlobals } from '../globals';

export const tenantBTheme: Theme = {
  name: 'tenant-b',
  globals: {
    ...baseGlobals,
    // Theme B: override radius to no radius
    radius: { sm: 0, md: 0, lg: 0 },
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
    // Theme B: no shadow across the board
    shadow: {
      sm: 'none',
      md: 'none',
      lg: 'none',
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
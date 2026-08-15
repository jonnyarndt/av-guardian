import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:       '#0a0e1a',
          darker:     '#060810',
          blue:       '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-dark':  '#1d4ed8',
          surface:    '#111827',
          card:       '#1e293b',
          border:     '#1e3050',
          muted:      '#64748b',
          text:       '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

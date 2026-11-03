import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ui)', 'Figtree', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        darkBg: '#0b0d0e',
        darkSurface: '#1a1b1c',
        darkElevated: '#232326',
        darkSubtle: '#151515',
        borderDefault: '#333333',
        borderHover: '#666666',
        borderSubtle: 'rgba(255, 255, 255, 0.08)',
        statusGreen: '#02ff67',
        statusGreenBg: '#091d11',
        statusRole: '#4ade80',
        accentAmber: '#f59e0b',
        accentBlue: '#3b82f6',
      },
      maxWidth: {
        container: '720px',
      },
    },
  },
  plugins: [],
};

export default config;

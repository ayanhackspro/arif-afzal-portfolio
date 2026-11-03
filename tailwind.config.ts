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
        serif: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#FAF9F5',
          alt: '#F3F2EC',
          subtle: '#EAE8DE',
          muted: '#D8D5C8',
        },
        ink: {
          DEFAULT: '#141413',
          secondary: '#3E3D38',
          muted: '#6F6E66',
          faint: '#9E9C91',
        },
        forest: {
          DEFAULT: '#284E3A',
          hover: '#1F3F2E',
          soft: '#EAF2EC',
          border: '#C2D7C8',
          dark: '#5AA37C',
          darkSoft: '#16281E',
        },
        night: {
          DEFAULT: '#111211',
          card: '#171917',
          surface: '#1F211F',
          border: '#292B28',
          text: '#F2F1EC',
          secondary: '#B5B4AC',
          muted: '#76756E',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:     '#0a0f1e',
          card:   '#141b2d',
          violet: '#7c3aed',
          cyan:   '#06b6d4',
          amber:  '#f59e0b',
          green:  '#10b981',
        },
      },
    },
  },
};

export default config;

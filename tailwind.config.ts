import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'bright-blue': '#0548ff',
        'electric-violet': '#8514f5',
        'french-violet': '#8001c6',
        'vivid-pink': '#f637e3',
        'hot-red': '#f11653',
        'orange-red': '#fa2c05',
        'gray-900': '#151417',
        'gray-700': '#413e46',
        'gray-400': '#a39fa9',
      },
    },
  },
  plugins: [],
};

export default config;

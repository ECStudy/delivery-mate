import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#F3F3F3',
        'gray-200': '#DDDDDD',
        'gray-300': '#C6C6C6',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      minHeight: {
        screen: 'calc(100vh - 72px)',
      },
      screens: {
        desktop: '1048px',
      },
    },
  },
  plugins: [],
};
export default config;

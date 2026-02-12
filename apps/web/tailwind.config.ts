import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true, // căn giữa container
        padding: '1rem', // thêm padding 2 bên
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1450px', // max container 1450px
        },
      },
      inset: {
        'shadow-md': 'inset 0 2px 3px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        card: '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08);',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
        roboto: 'var(--font-roboto)',
        notosansjp: 'var(--font-notosansjp)',
        satoshi: 'var(--font-satoshi)',
        inter: 'var(--font-inter)',
      },
      colors: {
        'black-primary': '#1C2125',
      },
    },
  },
  plugins: [],
};
export default config;

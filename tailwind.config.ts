import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        'yellow': {
          '50': '#fffbeb',
          '100': '#fff2c6',
          '200': '#fee589',
          '300': '#fed14b',
          '400': '#fdb813',
          '500': '#f79b09',
          '600': '#db7404',
          '700': '#b65007',
          '800': '#933e0d',
          '900': '#79330e',
          '950': '#461902',
        },

      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

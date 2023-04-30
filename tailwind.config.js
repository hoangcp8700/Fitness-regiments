/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

const screens = {
  xxs: '320px',
  xs: '576px',
  sm: '768px',
  md: '991px',
  lg: '1200px',
  xl: '1440px',
};

export default {
  content: ['./src/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/containers/**/*.{ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', ...fontFamily.sans],
        austin: ['Austin', ...fontFamily.sans],
      },
      screens,
      backgroundImage: {
        'loading-ball': "url('src/assets/icons/ic_loading_ball.svg')",
        skeleton:
          'linear-gradient(90deg,rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%,  rgba(190, 190, 190, 0.2) 63%)',
      },
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, addVariant }) => {
      // registering new static utility styles
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      });

      addUtilities({
        '.svg-white': {
          filter: 'brightness(0) invert(1)',
        },
      });

      // registering custom variants
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('before-after', ['&:before', '&:after']);
      addVariant('not-last', '&:not(:last-child)');
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-disabled', '&:not(:disabled)');
    }),
  ],
};

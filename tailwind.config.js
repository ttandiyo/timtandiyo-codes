/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '660px',
      },
      colors: {
        gray: '#758F81',
        darkgray: '#3b4741',
        cream: '#fff9f4',
        green1: 'oklch(85% 0.27 155)',
        rose: 'hsl(334, 95%, 57%)',
        tomato: '#F95738',
        blue1: '#00A8E8',
      },
      typography: (theme) => ({
        neutral: {
          css: { a: { '&:hover': { color: theme('colors.green1') } } },
        },
      }),
      fontFamily: {
        mono: [
          'Iosevka',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      animation: {
        blink: 'blinkKeyframe 1s steps(2, jump-none) 5',
        slide1: 'alternate slideBg1 57s ease-out infinite',
        slide2: 'alternate slideBg2 47s ease-out infinite',
        slide3: 'alternate slideBg3 41s ease-out infinite',
      },
      keyframes: {
        blinkKeyframe: {
          from: { visibility: 'hidden' },
          to: { visibility: 'visible' },
        },
        slideBg1: {
          from: {
            transform: 'rotateZ(37deg) rotateX(0deg) translateX(-250px)',
          },
          to: {
            transform: 'translateX(250px) rotateZ(72deg) rotateX(25deg)',
          },
        },
        slideBg2: {
          from: {
            transform: 'rotateZ(30deg) rotateY(-20deg) translateX(-250px) translateY(-250px)',
          },
          to: {
            transform: 'translateX(250px) translateY(250px) rotateZ(61deg) rotateY(0deg)',
          },
        },
        slideBg3: {
          from: {
            transform: 'rotateZ(45deg) rotateX(-10deg) translateX(250px) translateY(250px)',
          },
          to: {
            transform: 'translateX(-250px) translateY(-250px) rotateZ(85deg) rotateX(-25deg)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

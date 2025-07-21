import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      boxShadow: {
        'angled-left-down': '-4px 4px 0px 0px rgba(0, 0, 0, 0.75)',
        'hero-shadow': '-22px 22px 0px 0px rgba(0, 0, 0, 0.75)',
      },
      typography: ({
        theme
      }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            p: {
              marginTop: '1em',
              marginBottom: '1em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h1: {
              color: theme('colors.black'),
            },
            h2: {
              color: theme('colors.black'),
            },
            h3: {
              color: theme('colors.black'),
            },
            h4: {
              color: theme('colors.black'),
            },
            strong: {
              color: theme('colors.black'),
            },
            blockquote: {
              color: theme('colors.gray.600'),
              borderLeftColor: theme('colors.gray.400'),
            },
            code: {
              color: theme('colors.black'),
              backgroundColor: theme('colors.gray.50'),
            },
            pre: {
              backgroundColor: theme('colors.gray.50'),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.500'),
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700'),
            },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.700'),
            },
            pre: {
              backgroundColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config

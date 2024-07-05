const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    borderRadius: {
      none: '0',
      xs: '5px',
      sm: '9px',
      full: '100%',
    },
    colors: {
      primary: {
        light: '#D8EAF1',
        semi: '#8EC3E4',
        medium: '#27526D',
        dark: '#223C4C',
        bright: '#39A4E8',
      },
      grey: {
        extraLight: '#F7F8F8',
        light: '#EAEBEC',
        medium: '#B2B8BC',
        dark: '#2D3235',
      },
      white: '#FFF',
      black: '#000',
      transparent: 'transparent',
    },
    fontSize: {
      xs: '10px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '43px',
    },
    extend: {
      fontFamily: {
        sans: ['Manrope-regular', ...defaultTheme.fontFamily.sans],
        'sans-medium': ['Manrope-medium', ...defaultTheme.fontFamily.sans],
        'sans-semi': ['Manrope-semibold', ...defaultTheme.fontFamily.sans],
        'sans-bold': ['Manrope-bold', ...defaultTheme.fontFamily.sans],
        'sans-extrabold': [
          'Manrope-extrabold',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      gridTemplateColumns: {
        shelf: 'repeat(auto-fill, 152px)',
        'shelf-lg': 'repeat(auto-fill, 215px)',
      },
      dropShadow: {
        sm: '0 5px 11px rgba(0, 0, 0, 0.15)',
      },
    },
    screens: {
      lg: '1200px',
      xl: '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Manrope-regular',
          src: 'url(/src/assets/fonts/Manrope-Regular.ttf)',
        },
      })
    }),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Manrope-medium',
          src: 'url(/src/assets/fonts/Manrope-Medium.ttf)',
        },
      })
    }),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Manrope-semibold',
          src: 'url(/src/assets/fonts/Manrope-SemiBold.ttf)',
        },
      })
    }),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Manrope-bold',
          src: 'url(/src/assets/fonts/Manrope-Bold.ttf)',
        },
      })
    }),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Manrope-extrabold',
          src: 'url(/src/assets/fonts/Manrope-ExtraBold.ttf)',
        },
      })
    }),
  ],
}

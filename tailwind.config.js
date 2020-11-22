/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          900: '#11002D',
          800: '#210056',
          700: '#330079',
          600: '#450098',
          default: '#570CB1',
          500: '#7530C7',
          400: '#925CDA',
          300: '#B18AE9',
          200: '#CFB8F4',
          100: '#EEE6FC'
        },
        accent: {
          900: '#331D00',
          800: '#663A00',
          700: '#995600',
          600: '#CC7307',
          500: '#FE8F1A',
          default: '#FFA438',
          400: '#FFB85C',
          300: '#FFCC8A',
          200: '#FFE0B8',
          100: '#FFF4E'
        }
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      },
      letterSpacing: {
        tightest: '-.075em'
      }
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      outline: '0 0 0 3px rgba(0, 86, 87,0.5)'
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}

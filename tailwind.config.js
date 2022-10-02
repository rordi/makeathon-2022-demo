/**
 * config override for tailwindcss, see:
 *  - https://tailwindcss.nuxtjs.org/tailwind/config
 *  - https://tailwindcss.com/docs/configuration
 */
module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        semafours: '#599191'
      }
    },
    fontSize: {
      // [font-size, line-height]
      xs: ['14px', '19px'],
      sm: ['15px', '24px'],
      base: ['16px', '26px'],
      lg: ['20px', '30px'],
      xl: ['22px', '34px'],
      '2xl': ['30px', '40px']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

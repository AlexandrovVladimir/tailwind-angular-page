module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'purple-10': 'rgb(221, 214, 254)',
      'purple-11': 'rgb(221, 214, 254)',
      'purple-12': 'rgb(196, 181, 253)',
      'purple-13': 'rgb(167, 139, 250)',
      'purple-14': 'rgb(139, 92, 246)',
    }),
    backgroundImage: theme => ({
      'main-photo': "url('/assets/img/img.jpeg')",
    }),
    maxHeight: {
      '500': '500px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
};

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media1328': '1328px',
        'media1100': '1100px',
        'media860': '860px',
        'media630px': '630px',
        'media530px': '530px',
      },
      backgroundImages: {
        'testimonials-section': 'url("/images/miguel-bg-img.png")'
      },
      
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    })
  ],
}


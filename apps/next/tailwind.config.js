const { theme } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
],  
 presets: [require("nativewind/preset")],
  important: 'html',
  theme: {
    ...theme
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
  variants: {
    scrollbar: ['rounded'],
  }
};
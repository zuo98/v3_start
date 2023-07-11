/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './index.html',
    './src/components/**/*.{js,vue,html}',
    './src/views/**/*.{js,vue,html}',
    './src/**/*.{js,vue,html}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

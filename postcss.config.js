const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'), 
    require('postcss-responsive-type')(),
    require('autoprefixer')
  ],
}

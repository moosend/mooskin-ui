module.exports = {
  plugins: {
    'postcss-import': {root: './'}, //enables imports in css files
    'postcss-css-variables': {}, //to enable use of variables for css files
    'postcss-cssnext': {},
    'cssnano': {zindex: false}
  }
}
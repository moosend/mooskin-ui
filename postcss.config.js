module.exports = {
  plugins: {
    'postcss-import': {root: './'}, //enables imports in css files
    'postcss-url':{},
    'postcss-cssnext': {},
    'cssnano': {zindex: false},
    'postcss-browser-reporter':{},
    'postcss-reporter':{},
  }
}
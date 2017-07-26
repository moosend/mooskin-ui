module.exports = {
  plugins: {
    'postcss-import': {root: './'}, //enables imports in css files
    'postcss-url':{},
    'postcss-cssnext': {},
    'postcss-browser-reporter':{},
    'postcss-custom-media': {},
    'cssnano': {zindex: false},
    'postcss-reporter':{},
    'postcss-css-variables': {} //to enable use of variables for css files
  }
}
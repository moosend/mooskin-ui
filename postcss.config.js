module.exports = {
  plugins: {
    'postcss-import': {root: './'}, //enables imports in css files
    'postcss-url':{},
    'postcss-cssnext': {},
    // 'postcss-custom-media': {},
    'cssnano': {zindex: false},
    'postcss-browser-reporter':{},
    'postcss-reporter':{},
    // 'postcss-css-variables': {} //to enable use of variables for css files
  }
}
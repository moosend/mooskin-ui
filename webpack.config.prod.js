var config = require('./webpack.config.common'),
  TypedocWebpackPlugin = require('typedoc-webpack-plugin');

config.plugins.push(
    new TypedocWebpackPlugin({
      out: './docs',
      jsx: 'react',
      module: 'es6',
      target: 'es6',
      exclude: '**/*.spec.*',
      experimentalDecorators: true,
      excludeExternals: true
  }, './components'))

module.exports = config;

var config = require('./webpack.config.common'),
  TypedocWebpackPlugin = require('typedoc-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');


var distFolder = 'dist';
var extractCSS = new ExtractTextPlugin({fallback: "style-loader", filename: distFolder+"/[name]/style.css", allChunks: true});


config.module.rules.push(
      {
        test: /\.css$/,
        loader: extractCSS.extract([
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]',
              modules: true
            }
          },
          'postcss-loader'
        ])
      }
);

config.plugins.push(
    extractCSS,
    new TypedocWebpackPlugin({
      out: './docs',
      jsx: 'react',
      module: 'es6',
      target: 'es6',
      exclude: '**/*.spec.*',
      experimentalDecorators: true,
      excludeExternals: true
  }, './components'))

config.externals = [
  'react',
  'react-dom'
];

module.exports = config;

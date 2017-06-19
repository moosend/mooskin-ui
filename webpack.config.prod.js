var config = require('./webpack.config.common'),
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
    extractCSS
);

config.externals = [
  'react',
  'react-dom'
];

module.exports = config;

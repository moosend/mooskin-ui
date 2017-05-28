var fs = require('fs');
var gracefulFs = require('graceful-fs');

gracefulFs.gracefulify(fs);

var webpack = require('webpack'),
  path = require('path'),
  glob = require("glob"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

var distFolder = 'lib';

var extractCSS = new ExtractTextPlugin({fallback: "style-loader", filename: distFolder+"/[name]/style.css", allChunks: true});

var entries = glob.sync("./components/**/index.ts", {ignore: ['**/*.spec.{tsx,ts}']}).map(function(entry){
  var obj = {};
  var key = entry.split('/');
  key = key[key.length-2];

  obj[key] = entry;

  return obj;
}).reduce(function(acc, curr){

  for(var i in curr){
    acc[i] = curr[i];
  }

  return acc;
}, {});

entries['index'] = './components/index/index.ts'


module.exports = {
  entry: entries,
  output: {
    filename: './'+distFolder+'/[name]/index.js',
    library: 'mooskin',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      }, {
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
      },
      {
          test: /\.woff$|\.woff2$/,
          loader: "url-loader",
          options: {
              limit: 10000,
              name: '[path][name].[ext]',
              mimetype: 'application/font-woff'
          }
      },
      {
          test: /\.ttf$|\.eot$|\.svg$/,
          loader: "url-loader",
          options: {
              limit: 10000,
              name: '[path][name].[ext]'
          }
      },
      {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          options: {
              limit: 10000,
              name: '[path][name].[ext]',
              mimetype: 'image/png'
          }
      }
    ]
  },
  plugins: [
    extractCSS
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [
        path.resolve('./'),
        'node_modules'
    ]
  },
  externals: [
    'react',
    'react-dom'
  ]
  // devtool: 'inline-source-map',
 
};

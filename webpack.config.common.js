var fs = require('fs');
var gracefulFs = require('graceful-fs');

gracefulFs.gracefulify(fs);

var webpack = require('webpack'),
  path = require('path'),
  glob = require("glob"),
  CopyWebpackPlugin = require('copy-webpack-plugin');

var distFolder = 'lib';


var entries = glob.sync("./components/*/index.ts", {ignore: ['**/*.spec.tsx', '**/*.spec.ts']}).map(function(entry){ //gets the module paths in components containing index.ts and assigns them to an object
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
        use: [ 'babel-loader', 'ts-loader']
      },
      {
          test: /\.woff$|\.woff2$/,
          loader: "url-loader",
          options: {
              limit: 10000,
              //name: '[path][name].[ext]',
              mimetype: 'application/font-woff'
          }
      },
      {
          test: /\.ttf$|\.eot$|\.svg$/,
          loader: "url-loader",
          options: {
              limit: 10000,
             // name: '[path][name].[ext]'
          }
      },
      {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          options: {
              limit: 10000,
             // name: '[path][name].[ext]',
              mimetype: 'image/png'
          }
      }
    ]
  },
  plugins:[],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [
        path.resolve('./'),
        'node_modules'
    ]
  }
  // devtool: 'inline-source-map',
 
};

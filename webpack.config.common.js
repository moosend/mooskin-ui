var fs = require('fs');
var gracefulFs = require('graceful-fs');

gracefulFs.gracefulify(fs);

var webpack = require('webpack'),
    path = require("path");

module.exports = {

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },


  module: {
    rules: [
      
      {
          test: /\.woff$|\.woff2$/,
          loader: "url-loader",
          options: {
              limit: 650000,
              // outputPath: 'fonts/',
              name: '[path][name].[ext]',
              // mimetype: 'application/font-woff'
          }
      },
      {
          test: /\.ttf$|\.eot$|\.svg$/,
          loader: "url-loader",
          options: {
              limit: 650000,
              name: '[path][name].[ext]'
          }
      },
      {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          options: {
              limit: 650000,
              name: '[path][name].[ext]',
              mimetype: 'image/png'
          }
      }
    ]
  },
  plugins:[
    //new webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [
        path.resolve('./'),
        'node_modules'
    ]
  }
//   devtool: 'inline-source-map',
 
};

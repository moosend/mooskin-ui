var webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

var distFolder = 'lib';

var extractCSS = new ExtractTextPlugin({fallback: "style-loader", filename: distFolder+"/style.css", allChunks: true});

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './'+distFolder+'/index.js',
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
  // devtool: 'inline-source-map',
 
};

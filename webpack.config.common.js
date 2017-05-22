var webpack = require('webpack'),
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
      }
    ]
  },
  plugins: [
    extractCSS
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  // devtool: 'inline-source-map',
 
};

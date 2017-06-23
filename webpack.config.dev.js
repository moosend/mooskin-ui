
var config = require('./webpack.config.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var  ExtractTextPlugin = require('extract-text-webpack-plugin');

var distFolder = 'playground-dist';
var extractCSS = new ExtractTextPlugin({fallback: "style-loader", filename: distFolder+"/style.css", allChunks: true});


config.devServer = {
    contentBase: './'+distFolder,
    historyApiFallback: true
}

config.entry = './playground/playground.tsx';

config.output = {
    filename: './'+distFolder+'/playground.js'
},

config.plugins.push(
    extractCSS,
    new HtmlWebpackPlugin({
        inject: false,
        template: './index.html'
    })
);

config.module.rules.push(
    {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
    },
    {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: "source-map-loader"
    },
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


module.exports = config;
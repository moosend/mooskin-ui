
var config = require('./webpack.config.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var distFolder = 'playground-dist';
var extractCSS = new ExtractTextPlugin({fallback: "style-loader", filename: "style.css", allChunks: true});


config.devServer = {
    contentBase: './'+distFolder,
    historyApiFallback: true
};

config.entry = './playground/playground.tsx';

config.output = {
    path: __dirname + '/'+distFolder,
    publicPath: "",
    filename: 'playground.js'
};

config.plugins.push(
    new HtmlWebpackPlugin({
        template: './playground/index.html',
        favicon: './playground/favicon.ico'
    }),
    extractCSS
);


config.module.rules.push(
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [ 
            'babel-loader', 
            'ts-loader'
        ]
    },
    {
        test: /\.txt$|\.md$/,
        loader: "raw-loader"
    },
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
        exclude: /node_modules/,
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
        test: /\.css$/,
        include: /node_modules/,
        loader: extractCSS.extract([
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]',
              modules: true
            }
          },
          'postcss-loader'
        ])
    }
);


module.exports = config;
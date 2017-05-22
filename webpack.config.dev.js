
var config = require('./webpack.config.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var distFolder = 'dist';


config.devServer = {
    contentBase: './'+distFolder,
    historyApiFallback: true
}

config.entry = './src/playground/playground.tsx';

config.output = {
    filename: './'+distFolder+'/playground.js'
},

config.plugins.push(
    new HtmlWebpackPlugin({
        inject: false,
        template: './index.html'
    })
)



module.exports = config;
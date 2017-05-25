
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

config.module.rules.push({
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
})

config.modules.rules.push({
        enforce: 'pre',
        test: /\.tsx?$/,
        use: "source-map-loader"
});


module.exports = config;
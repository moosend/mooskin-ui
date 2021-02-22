var config = require('./webpack.config.common'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

var distFolder = 'lib';
var extractCSS = new MiniCssExtractPlugin({ fallback: 'style-loader', filename: '[name]/style.css', allChunks: true });

config.entry = './index/index.ts';

config.output = {
    path: __dirname + '/' + distFolder,
    filename: '[name]/index.js',
    library: 'mooskin',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
    publicPath: '../'
};

config.module.rules.push(
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            'babel-loader',
            {
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        declaration: true,
                        declarationDir: './' + distFolder
                    }
                }
            }
        ]
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    localIdentName: '[local]___[hash:base64:5]',
                    modules: true
                }
            },

            'postcss-loader'
        ]
    },
    {
        test: /\.css$/,
        exclude: /\*/,
        include: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    // importLoaders: 1,
                }
            }
            // 'postcss-loader'
        ]
    }
);

config.plugins.push(extractCSS);

config.externals = ['react', 'react-dom'];

module.exports = config;

const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonWebpackConfig = require('./webpack.config.common');

const distFolder = 'lib';

const prodWebPackConfig = merge(commonWebpackConfig, {
	entry: './components/index/index.ts',
	output: {
		path: path.resolve(__dirname, distFolder),
		filename: 'index/index.js',
		library: 'mooskin',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: 'this',
		publicPath: '../'
	},
	module: {
		rules: [
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
								declarationDir: path.resolve(__dirname, distFolder)
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
							modules: {
								localIdentName: '[local]___[hash:base64:5]'
							}
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'index/style.css', allChunks: true })
	],
	externals: ['react', 'react-dom']
});

module.exports = prodWebPackConfig;

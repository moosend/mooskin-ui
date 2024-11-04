const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonWebpackConfig = require('./webpack.config.common');

const distFolder = 'playground-dist';

const devWebpackConfig = merge(commonWebpackConfig, {
	devServer: {
		contentBase: './' + distFolder,
		historyApiFallback: true
	},

	entry: './playground/playground.tsx',

	output : {
		path: path.resolve(__dirname, distFolder),
		publicPath: '',
		filename: 'playground.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './playground/index.html',
			favicon: './playground/favicon.ico'
		}),
		new MiniCssExtractPlugin({
			fallback: 'style-loader',
			filename: 'style.css',
			allChunks: true
		})
	],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader']
			},
			{
				test: /\.txt$|\.md$/,
				loader: 'raw-loader'
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				enforce: 'pre',
				test: /\.tsx?$/,
				use: 'source-map-loader'
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
							importLoaders: 1
						}
					},
					'postcss-loader'
				]
			}
		]
	}
});

module.exports = devWebpackConfig;

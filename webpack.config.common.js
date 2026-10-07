var fs = require('fs');
// var gracefulFs = require('graceful-fs');

// gracefulFs.gracefulify(fs);

var webpack = require('webpack'),
	path = require('path');

module.exports = {
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
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
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.(png|jpg|gif)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 650000
					}
				},
				generator: {
					filename: '[path][name][ext]'
				}
			}
		]
	},
	plugins: [
		//new webpack.optimize.ModuleConcatenationPlugin()
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [path.resolve('./'), 'node_modules']
	}
	//   devtool: 'inline-source-map',
};

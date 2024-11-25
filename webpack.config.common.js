const path = require('path');

const commonWebpackConfig = {
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: false,
			cacheGroups: {
				defaultVendors: {
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
				test: /\.(woff|woff2|ttf|eot|svg|png|jpg|gif)$/,
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
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [path.resolve('./'), 'node_modules']
	}
};

module.exports = commonWebpackConfig;

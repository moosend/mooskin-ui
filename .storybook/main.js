const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../webpack.config.prod.js');

module.exports = {
	stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need

		// Return the altered config
		return { ...config, module: { ...config.module, rules: baseConfig.module.rules }, plugins: [...config.plugins, ...baseConfig.plugins] };
	},
};

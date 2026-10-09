/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-webpack5-compiler-babel', '@storybook/addon-links', '@storybook/addon-essentials'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	staticDirs: [{ from: '../assets', to: '/assets' }],
	typescript: {
		reactDocgen: false
	}
};

module.exports = config;

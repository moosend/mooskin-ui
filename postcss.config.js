module.exports = {
	plugins: {
		'postcss-import': { root: './' }, //enables imports in css files
		'postcss-url': {},
		'postcss-cssnext': {
			features: {
				customProperties: {
					warnings: false,
				},
			},
		},
		cssnano: { zindex: false },
		'postcss-flexbugs-fixes': {},
		'postcss-browser-reporter': {},
		'postcss-reporter': {},
	},
};

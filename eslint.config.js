const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const preferArrowPlugin = require('eslint-plugin-prefer-arrow');
const { parser: tsParser, configs: tsConfigs, plugin: tsPlugin } = require('typescript-eslint');

/**
 * typescript-eslint exposes `recommended` as an array of flat configs (base, eslint-recommended overrides, TS rules),
 * so their rules must be merged before being spread into a single rules object.
 */
const tsRecommendedRules = Object.assign({}, ...tsConfigs.recommended.map((config) => config.rules));

const typeAwareRules = {
	...reactPlugin.configs.recommended.rules,
	...tsRecommendedRules,
	...jsxA11yPlugin.flatConfigs.recommended.rules,
	...reactHooksPlugin.configs.recommended.rules,
	...prettierConfig.rules,
	'prettier/prettier': ['error', require('./.prettierrc.js')],
	eqeqeq: 'off',
	'no-script-url': 'off',
	'no-undef': 'off',
	'operator-assignment': 'off',
	'react/prop-types': 'off',
	'react/no-deprecated': 'off',
	'jsx-a11y/anchor-has-content': 'off',
	'jsx-a11y/anchor-is-valid': 'off',
	'jsx-a11y/no-static-element-interactions': 'off',
	'jsx-a11y/click-events-have-key-events': 'off',
	'jsx-a11y/no-autofocus': 'off',
	'@typescript-eslint/explicit-module-boundary-types': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-unused-vars': [
		'warn',
		{
			argsIgnorePattern: '^_',
			varsIgnorePattern: '^_',
			// className/style and other props are pulled out of ...props so they are not forwarded.
			ignoreRestSiblings: true,
		},
	],
	'@typescript-eslint/no-unused-expressions': 'warn',
	'@typescript-eslint/no-empty-object-type': 'warn',
	'@typescript-eslint/ban-ts-comment': 'warn',
	'@typescript-eslint/no-require-imports': 'warn',
	'@typescript-eslint/no-unnecessary-type-constraint': 'warn',
	'prefer-const': 'error',
	'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
	'arrow-body-style': ['error', 'as-needed'],
	'spaced-comment': [
		'error',
		'always',
		{
			line: {
				markers: ['/'],
			},
			block: {
				balanced: true,
			},
		},
	],
	'prefer-arrow/prefer-arrow-functions': [
		'error',
		{
			disallowPrototype: true,
			singleReturnOnly: false,
			classPropertiesAllowed: false,
		},
	],
	'no-unneeded-ternary': ['error', { defaultAssignment: false }],
	'logical-assignment-operators': 'off',
	'no-unsafe-optional-chaining': 'error',
	'prefer-template': 'error',
	'no-return-await': 'error',
	'prefer-destructuring': 'warn',
	'object-shorthand': ['error', 'always'],
	curly: ['error', 'all'],
	'@typescript-eslint/prefer-optional-chain': 'error',
	'@typescript-eslint/consistent-type-imports': 'error',
	'@typescript-eslint/no-unnecessary-type-assertion': 'error',
	// Interfaces, not types: Editor augments these props via declare module.
	'@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
	'@typescript-eslint/naming-convention': [
		'warn',
		{
			selector: 'typeLike',
			format: ['PascalCase'],
		},
		{
			selector: 'enumMember',
			format: ['PascalCase'],
		},
		{
			selector: 'function',
			format: ['camelCase', 'PascalCase'],
		},
		{
			selector: 'variable',
			modifiers: ['const'],
			types: ['boolean', 'string', 'number'],
			format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
		},
		{
			selector: 'variable',
			format: ['camelCase', 'PascalCase'],
			leadingUnderscore: 'allow',
		},
	],
	'no-restricted-globals': [
		'error',
		{
			name: 'isNaN',
			message: 'Use Number.isNaN instead to avoid unsafe type coercion.',
		},
		{
			name: 'isFinite',
			message: 'Use Number.isFinite instead to avoid unsafe type coercion.',
		},
		{
			name: 'parseInt',
			message: 'Use Number.parseInt for consistency and namespace hygiene.',
		},
		{
			name: 'parseFloat',
			message: 'Use Number.parseFloat for consistency and namespace hygiene.',
		},
	],
};

module.exports = [
	{
		files: ['components/**/*.{ts,tsx}', 'stories/**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2021,
			sourceType: 'module',
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'jsx-a11y': jsxA11yPlugin,
			'@typescript-eslint': tsPlugin,
			prettier: prettierPlugin,
			'prefer-arrow': preferArrowPlugin,
		},
		rules: typeAwareRules,
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		files: ['.storybook/**/*.{js,jsx}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2021,
			sourceType: 'module',
		},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'jsx-a11y': jsxA11yPlugin,
			'@typescript-eslint': tsPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			...reactPlugin.configs.recommended.rules,
			...jsxA11yPlugin.flatConfigs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			...prettierConfig.rules,
			'prettier/prettier': ['error', require('./.prettierrc.js')],
			'react/prop-types': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		ignores: ['lib/', 'node_modules/', 'coverage/', 'dist/', 'playground-dist/', 'assets/', 'storybook-static/'],
	},
];

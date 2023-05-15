module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		"react-hooks"
	],
	'rules': {
		'react/no-unknown-property': ['warn', { ignore: ['itemfilter'] }],
		'no-unused-vars': [
			'warn', { 
				'vars': 'all',
				'args': 'after-used', 
				'ignoreRestSiblings': false 
			}
		],
		'quotes': [
			'warn',
			'single'
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
};

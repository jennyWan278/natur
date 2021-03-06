module.exports = {
	plugins: [
		// "dynamic-import-webpack",
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-object-rest-spread',
		process.env.NODE_ENV === 'test' && '@babel/plugin-transform-modules-commonjs',
		// ['@babel/plugin-transform-runtime'],
		'@babel/plugin-proposal-function-bind',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
		// [
		// 	"import",
		// 	{
		// 		"libraryName": "antd",
		// 		"style": "css"
		// 	}
		// ]
	].filter(Boolean),
	presets: [
		[
			'@babel/preset-env',
			{
				// "targets": {
				// 	"ie": "10"
				// },
				// useBuiltIns: 'usage',
				modules: false,
				loose: true
			}
		],
		['@babel/preset-react'],
		['@babel/preset-typescript'],
	],
	ignore: [
		"./dist/rns.js",
	]
};

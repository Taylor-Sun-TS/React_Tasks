const path = require('path');  
const alias = require('./webpack.resolve.alias')

module.exports = { 
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/client/**/*.{js,jsx,mjs}'],
	coverageDirectory: '<rootDir>/jest/coverage',
	coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/client/index.jsx'],

	moduleNameMapper: alias,
	setupFiles: ['<rootDir>/jest/setup.js'],
	'transform': {
		'^.+\\.(js|jsx)$': 'babel-jest'
	},
	'moduleFileExtensions': [
		'js',
		'jsx'
	],   
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'
	]
}
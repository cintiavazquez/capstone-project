const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	resolver: `${__dirname}/jest-resolver.js`,
};

/* const { defaults } = require('jest-config');
module.exports = {
	...defaults,
	resolver: `${__dirname}/jest-resolver.js`,
}; */

module.exports = createJestConfig(customJestConfig);

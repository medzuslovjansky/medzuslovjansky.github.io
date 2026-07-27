module.exports = () => require('./src/plugins/jest-config').applyConfig({
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.mjs$': ['babel-jest', {
      configFile: false,
      plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
    }],
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/src/plugins/style-mock.js',
    '^@generated/registry$': '<rootDir>/src/plugins/registry-mock.js',
    '^@generated/routes$': '<rootDir>/src/plugins/routes-mock.js',
  },
});

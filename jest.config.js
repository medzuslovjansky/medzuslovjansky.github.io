module.exports = () => require('./src/plugins/jest-config').applyConfig({
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
});

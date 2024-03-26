const stripAnsi = require('strip-ansi');
/** @type {import('jest-allure2-reporter').ReporterOptions} */
const allureConfig = {
  resultsDir: 'allure-results',
  testCase: {
    // attachments: ({ value = [], testCase }) => {
    // },
  },
};

/** @type {import('jest').Config} */
module.exports = {
  reporters: [
    'default',
    ['jest-allure2-reporter', allureConfig],
  ],
  setupFilesAfterEnv: ['<rootDir>/setupAfterEnv.js'],
  testEnvironment: 'jest-allure2-reporter/environment-node',
  testEnvironmentOptions: {
    eventListeners: ['./attachScreenshots.js'],
  },
};

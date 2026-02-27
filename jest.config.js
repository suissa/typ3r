module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/cli.js', // exclude main CLI file since it's tested via exports
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '**/test/**/*.test.js',
    '**/__tests__/**/*.test.js',
  ],
};
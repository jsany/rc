const path = require('path');
const pkg = require('./package.json');
module.exports = {
  displayName: {
    name: pkg.name,
    color: 'blue',
  },
  roots: [path.resolve(__dirname, './src')],
  setupFiles: ['jsdom-worker'],
  setupFilesAfterEnv: [path.resolve(__dirname, './setupTests.ts')],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

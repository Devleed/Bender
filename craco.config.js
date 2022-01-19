const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')
const { ESLINT_MODES } = require('@craco/craco')
const { compilerOptions } = require('./tsconfig.path.json')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@nativeComponents': path.resolve(__dirname, 'src/native components'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@contracts': path.resolve(__dirname, 'src/contracts'),
      '@tests': path.resolve(__dirname, 'src/tests'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
  // babel: { plugins: ['transform-remove-console'] },
}

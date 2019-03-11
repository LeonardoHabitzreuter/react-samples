module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/configs/testsSetup.js',
  setupFiles: ['<rootDir>/configs/testsSetup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  moduleFileExtensions: [
    'js',
    'html'
  ],
  moduleNameMapper: {
    '\\.(css|less|styl)$': 'identity-obj-proxy'
  }
}

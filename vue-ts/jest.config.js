module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx)$'  : 'babel-jest',
    '^.+\\.(ts|tsx)$' : 'ts-jest',
    '^.+\\.(vue)$': 'vue-jest'
  },
  testRegex: '(\\.|/)(test|spec)\\.(vue|ts|tsx)?$',
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: [
    'vue',
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts?(x)'
  ],
  snapshotSerializers: [
    'jest-serializer-vue'
  ]
};

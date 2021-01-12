/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  },  
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  testMatch: [
    '**/test/**/*.test.ts',
    '**/test/**/*.spec.ts',
    '**/test/**/*.spec.tsx',
    '**/test/**/*.test.tsx'
  ],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
   "^.+\\.(css|scss)$": "identity-obj-proxy"
 }
}

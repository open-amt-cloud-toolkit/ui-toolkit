/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

const path = require("path"); //No ES6 in webpack config 
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "production",
  entry: {
    kvm: "./src/reactjs/components/KVM/UI.tsx",
    sol: './src/reactjs/components/SerialOverLAN/Sol.tsx',
    core: "./src/core/index.ts"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    library: '',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
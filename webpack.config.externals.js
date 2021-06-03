/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

const path = require("path"); //No ES6 in webpack config 
const nodeExternals = require('webpack-node-externals');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    kvm: "./src/reactjs/components/KVM/UI.tsx",
    sol: './src/reactjs/components/SerialOverLAN/Sol.tsx',
    core: "./src/core/index.ts"
  },
  //sourceMap in tsconfig which holds information about your original files when the code is minified
  //devtool deal with existing source maps
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    library: {
      name: 'ui-toolkit',
      type: 'umd'
    },
  },
  optimization: {
    concatenateModules: false
  },
  // externalsPresets: { node: true },
  externals: {
    "react": "react",
    "react-dom": "ReactDOM",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
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

/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
const path = require("path"); //No ES6 in webpack config
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    kvm: "./src/reactjs/components/KVM/index.tsx",
    sol: "./src/reactjs/components/SerialOverLAN/index.tsx"
  },
  devServer:{
    port: 9000
  },
  //sourceMap in tsconfig which holds information about your original files when the code is minified
  //devtool deal with existing source maps
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "kvm.htm",
      template: "./src/sample/sampleKVM.htm",
      inject: true,
      chunks: ["kvm"],
    }),
    new HtmlWebpackPlugin({
      filename: "sol.htm",
      template: "./src/sample/sampleSOL.htm",
      inject: true,
      chunks: ["sol"],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'API_KEY_RPS': JSON.stringify('APIKEYFORRPS123!'),
        'API_KEY_MPS': JSON.stringify('APIKEYFORMPS123!')
      }
    })
  ],
};

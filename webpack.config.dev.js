/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    kvm: "./src/reactjs/KVM/index.tsx",
    sol: "./src/reactjs/SerialOverLAN/index.tsx"
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
        use: ["ts-loader"],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      "react": "react",
    }),
    new HtmlWebpackPlugin({
      filename: "kvm.htm",
      template: "./src/reactjs/sample/sampleKVM.htm",
      inject: true,
      chunks: ["kvm"],
    }),
    new HtmlWebpackPlugin({
      filename: "sol.htm",
      template: "./src/reactjs/sample/sampleSOL.htm",
      inject: true,
      chunks: ["sol"],
    })
  ],
};

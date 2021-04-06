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
    auditlog: "./src/reactjs/components/AuditLog/index.tsx",
    kvm: "./src/reactjs/components/KVM/index.tsx",
    sol: "./src/reactjs/components/SerialOverLAN/index.tsx",
    device: "./src/reactjs/components/DeviceGrid/index.tsx",
    cira: "./src/reactjs/components/CIRAEditor/index.tsx",
    domain: "./src/reactjs/components/DomainEditor/index.tsx",
    network:"./src/reactjs/components/NetworkEditor/index.tsx"
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
      filename: "auditlog.htm",
      template: "./src/sample/sampleAuditLog.htm",
      inject: true,
      chunks: ["auditlog"],
    }),
    new HtmlWebpackPlugin({
      filename: "device.htm",
      template: "./src/sample/sampleDG.htm",
      inject: true,
      chunks: ["device"],
    }),
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
   new HtmlWebpackPlugin({
      filename: "cira.htm",
      template: "./src/sample/sampleCIRA.htm",
      inject: true,
      chunks: ["cira"],
    }), new HtmlWebpackPlugin({
      filename: "domain.htm",
      template: "./src/sample/sampleDomain.htm",
      inject: true,
      chunks: ["domain"],
    }),new HtmlWebpackPlugin({
      filename: "network.htm",
      template: "./src/sample/sampleNetworkConfig.htm",
      inject: true,
      chunks: ["network"],
    }), new webpack.DefinePlugin({
      'process.env': {
        'API_KEY_RPS': JSON.stringify('APIKEYFORRPS123!'),
        'API_KEY_MPS': JSON.stringify('APIKEYFORMPS123!')
      }
    })
  ],
};

/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

const path = require("path"); //No ES6 in webpack config 
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    auditlog: "./src/reactjs/components/AuditLog/index.tsx",
    kvm: "./src/reactjs/components/KVM/index.tsx",
    sol: './src/reactjs/components/SerialOverLAN/index.tsx',
    device: './src/reactjs/components/DeviceGrid/index.tsx',
    profile:'./src/reactjs/components/ProfileEditor/index.tsx',
    cira: './src/reactjs/components/CIRAEditor/index.tsx',
    domain: './src/reactjs/components/DomainEditor/index.tsx'
  },
  //sourceMap in tsconfig which holds information about your original files when the code is minified
  //devtool deal with existing source maps
  devtool: "inline-source-map",

  output: {
    filename: "[name].core.min.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'API_KEY_RPS': JSON.stringify('APIKEYFORRPS123!'),
        'API_KEY_MPS': JSON.stringify('APIKEYFORMPS123!')
      }
    })
  ]
};

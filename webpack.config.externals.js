/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

const path = require('path'); //No ES6 in webpack config 
const webpack = require('webpack');

coreConfig = {
  mode: 'production',
  entry: {
    core: {
      import: './src/core/index.ts',
      library: {
        name: 'ui-toolkit/core',
        type: 'umd'
      },
    }
  },
  output: {
    filename: '[name].bundle.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist/bundles'),
  },
  optimization: {
    concatenateModules: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
           configFile: "tsconfig.build.json"
          }
         },
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

reactConfig = {
  mode: 'production',
  entry: {
    kvm: {
      import:'./src/reactjs/KVM/UI.tsx',
      library: {
        name: 'ui-toolkit/reactjs/kvm',
        type: 'umd'
      },
    },
    sol: {
      import:'./src/reactjs/SerialOverLAN/Sol.tsx',
      library: {
        name: 'ui-toolkit/reactjs/sol',
        type: 'umd'
      },
    }    
  },
  resolve: {      
    alias: {          
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
    }  
  },  
  output: {
    filename: '[name].bundle.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist/reactjs/src'),
  },
  optimization: {
    concatenateModules: false
  },  
  externals: {
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    }  
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
         loader: 'ts-loader',
         options: {
          configFile: "tsconfig.build.json"
         }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
module.exports = [coreConfig, reactConfig]

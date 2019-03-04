const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(`${__dirname}/src/client`);

module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    // alias: {
    //   react: 'preact'
    // } 
  },
  output: {
    path: path.resolve(`${__dirname}/dist`),
    publicPath: '/',
    filename: 'bundle.js',
  },

};
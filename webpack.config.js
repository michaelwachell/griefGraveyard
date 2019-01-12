const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(`${__dirname}/src/client`);

module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(`${__dirname}/dist`),
    publicPath: '/',
    filename: 'bundle.js',
  },

};

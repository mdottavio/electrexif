'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ElectrExif = {
  entry: {
    electrExif: './src/index.js'
  },
  target: 'electron',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ElectrExif'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true,
              importLoaders: true,
              localIdentName: 'electrExif_[local]_[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
        use: 'url-loader'
      }
    ]
  }
};

module.exports = [ElectrExif];

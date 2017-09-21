var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './');
var APP_DIR = path.resolve(__dirname, 'src/client/store');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
    ]
},
devServer: {
     contentBase: './',
   }
};

module.exports = config ;

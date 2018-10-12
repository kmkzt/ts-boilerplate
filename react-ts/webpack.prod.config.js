const { join, resolve } = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: resolve('src', 'production.tsx'),
  devtool: false,

  output: {
    filename: 'index.min.js',
    path: resolve('lib'),
    library: "samplelibrary",
    libraryTarget: "umd"
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true
      })
    ]
  }
};

module.exports = config

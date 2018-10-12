const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: resolve('src', 'index.tsx'),
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    path: resolve('public')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('template.html'),
    })
  ],

  devServer: {
    contentBase: join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
};

module.exports = config

const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const config = {
  mode: 'development',
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: resolve('public')
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('template.html')
    }),
    new Dotenv({
      path: 'development.env',
      safe: false
    })
  ],
  devServer: {
    contentBase: join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
}

module.exports = config

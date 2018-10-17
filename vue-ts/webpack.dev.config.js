const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: resolve('src', 'index.ts'),
  output: {
    filename: '[name].bundle.js',
    path: resolve('public')
  },
  devtool: 'source-map',
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

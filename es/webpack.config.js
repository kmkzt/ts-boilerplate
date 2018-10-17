
const { resolve } = require('path')
const { smart } = require('webpack-merge');
const devMode = process.env.NODE_ENV === 'development'
const config = devMode ? require('./webpack.dev.config') : require('./webpack.prod.config');


const common = {
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // 変更前は 'env'
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      { test: /\.html$/, exclude: /node_modules/, use: "html-loader" }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
}

module.exports = smart(common, config);

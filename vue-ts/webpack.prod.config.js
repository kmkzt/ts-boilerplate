const { join, resolve } = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'production',
  entry: resolve('src', 'library.ts'),
  output: {
    filename: 'index.min.js',
    path: resolve('lib'),
    library: "samplelibrary-vuets",
    libraryTarget: "umd"
  },
  devtool: false,
  // 依存ライブラリの設定(使用先で必要なライブラリ)
  externals: {
    'vue': 'vue',
    'vue-class-component': 'vue-class-component',
    'vue-property-decorator': 'vue-property-decorator',
    'vue-router': 'vue-router',
    'vuex': 'vuex'
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

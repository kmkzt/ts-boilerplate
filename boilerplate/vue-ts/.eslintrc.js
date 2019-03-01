module.exports = {
  plugins: ['vue'],
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    // タグの最後の改行
    'vue/html-closing-bracket-newline': [2, { multiline: 'never' }],
    // 不要カッコ削除
    'no-extra-parens': 1,
    // 空白スペースは削除
    'no-multi-spaces': 2,
    // 不要空白行は削除
    'no-multiple-empty-lines': [2, { max: 1 }],
    // 関数の空白
    'func-call-spacing': [2, 'never'],
    // 無駄true/false禁止
    'no-unneeded-ternary': 2,
    // セミコロン
    semi: [2, 'never'],
    // クオート
    quotes: [2, 'single'],
    // var禁止
    'no-var': 2,
    // indent
    indent: [2, 2],
    'space-in-parens': [2, 'never'],
    // コンソール許可
    'no-console': 0,
    // カンマ前後のスペース
    'comma-spacing': 2,
    // 配列の空白
    'computed-property-spacing': 2,
    // キー
    'key-spacing': 2,
    // キーワード前後のスペース
    'keyword-spacing': 2
  }
}

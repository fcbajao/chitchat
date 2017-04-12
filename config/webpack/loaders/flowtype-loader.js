module.exports = {
  test: /\.js(\.erb)?$/,
  enforce: 'pre',
  exclude: /node_modules/,
  loader: 'flowtype-loader'
}

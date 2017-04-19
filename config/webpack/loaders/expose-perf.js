const { env } = require('../configuration.js')

if (env.NODE_ENV === 'development') {
  module.exports = {
    test: require.resolve('react-addons-perf'),
    use: [{
      loader: 'expose-loader',
      options: 'Perf'
    }]
  }
}

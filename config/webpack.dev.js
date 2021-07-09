const path = require('path')
const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const config = {
  mode: 'development',
  entry: [
    'react-refresh/runtime',
    'core-js/stable',
    'regenerator-runtime/runtime',
    path.join(__dirname, '../src/index.tsx')
  ],
  devtool: 'inline-source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  plugins: [new ReactRefreshWebpackPlugin({overlay: false})],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '5800',
    hot: true,
    open: true,
    proxy: [
      {
        context: ['/api/**'],
        pathRewrite: { '^/api': '' },
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
    ]
  }
}

module.exports = merge(common, config)

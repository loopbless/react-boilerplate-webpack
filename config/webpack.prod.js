const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  mode: 'production',
  entry: {
    polyfills: [
      'core-js/stable',
      'regenerator-runtime/runtime'
    ],
    main: [
      path.join(__dirname, '../src/index.tsx')
    ]
  },
  cache: false,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: './'
  },
  devtool: 'hidden-source-map',
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  },
  plugins: [new CleanWebpackPlugin()]
}

module.exports = merge(common, config)

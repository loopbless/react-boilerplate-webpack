const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar');

module.exports = {
  resolve: {
    alias: {
      '@/': path.resolve('../src/')
    },
    extensions: ['.ts', '.tsx', '.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        exclude: path.resolve(__dirname, '../src/assets/icons'),
        options: {
          name: 'assets/[name].[hash].[ext]'
        }
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, '../src/assets/icons'),
        use: ['svg-sprite-loader', 'svgo-loader']
      },
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       common: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'common',
  //         chunks: 'initial',
  //         priority: 2,
  //         minChunks: 2
  //       }
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new WebpackBar(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../public'),
          to: 'public/'
        }
      ]
    })
  ]
}

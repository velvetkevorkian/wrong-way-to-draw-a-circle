const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['wrong-way-to-draw-a-circle']),
    new HtmlWebpackPlugin({
      title: 'Chapter 4: The wrong way to draw a circle',
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'wrong-way-to-draw-a-circle')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}

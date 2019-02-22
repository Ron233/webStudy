const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {//设置多个入口文件
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins:[
    new CleanWebPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'管理输出1'
    })
  ],
  output:{//根据入口文件名动态生成输出文件名
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpaclPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/printMe.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist'
  },
  plugins:[
    new CleanWebpaclPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:"开发"
    })
  ],
  output: {
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
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
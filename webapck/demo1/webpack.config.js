const path = require('path');

module.exports = {
  // mode:'development',
  entry: './src/index.js',//入口文件
  output: {//输出
    filename:'bundle.js',//文件名
    path: path.resolve(__dirname, 'dist')//输出路径
  }
}
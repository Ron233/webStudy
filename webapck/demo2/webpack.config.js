const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{//在模块配置里引入加载器
    rules:[
      {
        test: /\.css$/,//正则匹配文件后缀
        use: [//匹配上面的正则使用的加载器
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|png|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
}
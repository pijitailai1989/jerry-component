const resolve = dir => {
  return path.join(__dirname, dir)
}
const path = require('path')

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('examples'))
    // 加入对jsx的解析(菜单组件用到了)
    config.module
      .rule(['js', 'jsx'])
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}
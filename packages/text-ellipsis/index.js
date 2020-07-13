// 导入组件，组件必须声明 name
import TextEllipsis from './src/index'
// 为组件提供 install 安装方法，供按需引入
TextEllipsis.install = function (Vue) {
  Vue.component(TextEllipsis.name, TextEllipsis)
}

// 默认导出组件
export default TextEllipsis

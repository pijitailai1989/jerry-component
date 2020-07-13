// 导入组件，组件必须声明 name
import MBackHeader from './src/index'

// 为组件提供 install 安装方法，供按需引入
MBackHeader.install = function (Vue) {
  Vue.component(MBackHeader.name, MBackHeader)
}
// 默认导出组件
export default MBackHeader

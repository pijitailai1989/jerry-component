// 导入组件，组件必须声明
import Comp from './src/index'

// 为组件提供 install 安装方法，供按需引入
Comp.install = function (Vue) {
  Vue.component(Comp.name, Comp)
}
// 默认导出组件
export default Comp

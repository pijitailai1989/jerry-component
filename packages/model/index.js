// 导入组件，组件必须声明 name
import Model from './src/model'

// 为组件提供 install 安装方法，供按需引入
Model.install = function (Vue) {
  Vue.component(Model.name, Model)
}
// 默认导出组件
export default Model

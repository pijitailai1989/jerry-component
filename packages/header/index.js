// 导入组件，组件必须声明 name
import Header from './src/header'

// 为组件提供 install 安装方法，供按需引入
Header.install = function (Vue) {
  Vue.component(Header.name, Header)
}
// 默认导出组件
export default Header

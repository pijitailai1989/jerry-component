import './theme-chalk/index.scss'
import headerComponent from './header/index.js'
import ButtonComponent from './button/index.js'
import ModelComponent from './model/index.js'
import AvatarComponent from './avatar/index.js'
import PaginationComponent from './pagination/index.js'
import TextEllipsisComponent from './text-ellipsis/index.js'
import MIcBackHeaderComponent from './m-back-header/index.js'
import Menu from './menu/index.js'
import MenuItem from './menu-item/index.js'
import Submenu from './submenu/index.js'
import Search from './search/index.js'

// 存储组件列表
const components = [
  headerComponent,
  ButtonComponent,
  AvatarComponent,
  ModelComponent,
  TextEllipsisComponent,
  MIcBackHeaderComponent,
  PaginationComponent,
  Menu,
  MenuItem,
  Submenu,
  Search
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  // 头部组件
  headerComponent,
  // 按钮组件
  ButtonComponent,
  // 弹框组件
  ModelComponent,
  // 上传头像
  AvatarComponent
}
